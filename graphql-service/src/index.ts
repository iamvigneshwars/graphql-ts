import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { tasks, visits, workflows } from "./fake_data.js";

const typeDefs = `#graphql

    type Visit {
        id: Int
        name: String
        workflows: [Workflow]
    }

    type Workflow {
        id: Int
        tasks: [Task]
    }

    type Task {
        workflow_id: Int
        name: String
        status: String
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
        workflows(parent) {
            return workflows.filter((workflow) => workflow.visit_id === parent.id)
        }
    },
    Workflow: {
        tasks(parent){
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
