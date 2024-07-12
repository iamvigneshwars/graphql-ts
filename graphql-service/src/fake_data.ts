export const visits = [
    {
        id:  1, 
        name: "visit-1"
    },
    {
        id:  2, 
        name: "visit-2"
    },
]

export const workflows = [
    {
        id: 1,
        visit_id: 1,
    },
    {
        id: 2,
        visit_id: 1,
    },
    {
        id: 3,
        visit_id: 1,
    },
    {
        id: 4,
        visit_id: 2,
    },
    {
        id: 5,
        visit_id: 2,
    },
]

export const tasks = [
    {
        workflow_id: 1,
        status: "completed"
    },
    {
        workflow_id: 1,
        status: "completed"
    },
    {
        workflow_id: 1,
        status: "pending"
    },
    {
        workflow_id: 1,
        status: "running"
    },
    {
        workflow_id: 2,
        status: "pending"
    },
    {
        workflow_id: 2,
        status: "pending"
    },
    {
        workflow_id: 2,
        status: "completed"
    },
    {
        workflow_id: 3,
        status: "completed"
    },
    {
        workflow_id: 3,
        status: "completed"
    },
    {
        workflow_id: 4,
        status: "running"
    },
    {
        workflow_id: 4,
        status: "running"
    },
    {
        workflow_id: 4,
        status: "running"
    },
    {
        workflow_id: 5,
        status: "completed"
    },
]