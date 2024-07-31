import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { tasks, visits, workflows } from "./fake_data.js";

const typeDefs = `#graphql

    type Visit {
        id: Int
        name: String
        workflows(limit: Int, after: String, completed: Boolean, running: Boolean, pending: Boolean, failed: Boolean): WorkflowConnection
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
        endCursor: String
        hasNextPage: Boolean
        continue: String
    }

    type Workflow {
        id: Int
        name: String
        tasks: [Task]
        status: String
    }

    type Task {
        id: Int
        workflow_id: Int
        name: String
        status: String
        parent_task: Int
    }

    type Query {
        visits: [Visit]
    }

`
const resolvers = {
    Query: {
        visits() {
            return visits;
        },
    },
    Visit: {
        workflows(parent, args) {
            let visitWorkflows = workflows.filter((workflow) => workflow.visit_id === parent.id);
            if (args.completed !== undefined || args.running !== undefined || args.pending !== undefined || args.failed !== undefined) {
                visitWorkflows = visitWorkflows.filter((workflow) => {
                    if (args.completed && workflow.status === 'completed') {
                        return true;
                    }
                    if (args.running && workflow.status === 'running') {
                        return true;
                    }
                    if (args.pending && workflow.status === 'pending') {
                        return true;
                    }
                    if (args.failed && workflow.status === 'failed') {
                        return true;
                    }
                    return false;
                });
            }

            let startIndex = 0;
            if (args.after) {
                const continueIndex = visitWorkflows.findIndex(workflow => workflow.id.toString() === args.after);
                if (continueIndex >= 0) {
                    startIndex = continueIndex + 1;
                }
            }

            const limit = args.limit === undefined ? 10 : args.limit;
            const paginatedWorkflows = visitWorkflows.slice(startIndex, startIndex + limit);

            const edges = paginatedWorkflows.map(workflow => ({
                cursor: workflow.id.toString(),
                node: workflow
            }));

            const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null;
            const hasNextPage = visitWorkflows.length > startIndex + limit;

            return {
                edges,
                pageInfo: {
                    endCursor,
                    hasNextPage,
                    continue: hasNextPage ? endCursor : null
                }
            };
        }
    },
    Workflow: {
        tasks(parent) {
            return tasks.filter((task) => task.workflow_id === parent.id);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`server ready at: ${url}`)
