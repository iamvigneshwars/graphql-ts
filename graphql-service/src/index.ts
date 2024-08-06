import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { tasks, namespaces, workflows, workflow_templates } from "./fake_data.js";

const typeDefs = `#graphql

    scalar JSON

    type Workflow {
        id: String
        name: String
        tasks: [Task]
        status: String
    }

    type WorkflowConnection {
        edges: [WorkflowEdge]
        pageInfo: PageInfo
    }

    type WorkflowEdge {
        cursor: String
        node: Workflow
    }

    type PageInfo {
        continue: String
    }

    type Task {
        id: String
        workflow_id: Int
        name: String
        status: String
        parent_task: Int
    }

    type Template {
        json_schema: JSON
        ui_schema: JSON
    }

    type Query {
        namespaces: [String]
        workflows(limit: Int, continue: String, completed: Boolean, running: Boolean, pending: Boolean, failed: Boolean, namespace: String!): WorkflowConnection
        workflow_templates: [Template]
    }

`;
const resolvers = {
  Query: {
    workflows(_parent, args) {
      let visitWorkflows = workflows.filter(
        (workflow) => workflow.namespace === args.namespace
      );
      if (
        args.completed !== undefined ||
        args.running !== undefined ||
        args.pending !== undefined ||
        args.failed !== undefined
      ) {
        visitWorkflows = visitWorkflows.filter((workflow) => {
          if (args.completed && workflow.status === "completed") {
            return true;
          }
          if (args.running && workflow.status === "running") {
            return true;
          }
          if (args.pending && workflow.status === "pending") {
            return true;
          }
          if (args.failed && workflow.status === "failed") {
            return true;
          }
          return false;
        });
      }

      let startIndex = 0;
      if (args.continue) {
        const continueIndex = visitWorkflows.findIndex(
          (workflow) => workflow.id.toString() === args.continue
        );
        if (continueIndex >= 0) {
          startIndex = continueIndex + 1;
        }
      }

      const limit = args.limit === undefined ? 10 : args.limit;
      const paginatedWorkflows = visitWorkflows.slice(
        startIndex,
        startIndex + limit
      );

      const edges = paginatedWorkflows.map((workflow) => ({
        cursor: workflow.id.toString(),
        node: workflow,
      }));

      const endCursor =
        edges.length > 0 ? edges[edges.length - 1].cursor : null;
      const hasNextPage = visitWorkflows.length > startIndex + limit;

      return {
        edges,
        pageInfo: {
          continue: hasNextPage ? endCursor : null,
        },
      };
    },
    namespaces() {
      return namespaces;
    },
    workflow_templates(){
        return workflow_templates
    }
  },
  Workflow: {
    tasks(parent) {
      return tasks.filter((task) => task.workflow_id === parent.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server ready at: ${url}`);
