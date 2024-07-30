import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { tasks, visits, workflows } from "./fake_data.js";

const typeDefs = `#graphql

    type Visit {
        id: Int
        name: String
        workflows(completed: Boolean, running: Boolean, pending: Boolean, failed: Boolean): [Workflow]
    }

    type Workflow {
        id: Int
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
            return visits
        }
    },
    Visit: {
        workflows(parent: { id: number; }, args: { completed?: boolean; running?: boolean; pending?: boolean; failed?: boolean; }) {
            let visitWorkflows = workflows.filter((workflow) => workflow.visit_id === parent.id);
            
            if (!args.completed && !args.running && !args.pending && !args.failed) {
                return visitWorkflows;
            }

            return visitWorkflows.filter((workflow) => {
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
    },
    Workflow: {
        tasks(parent: { id: number; }) {
            return tasks.filter((task) => task.workflow_id === parent.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`server ready at: ${url}`)
