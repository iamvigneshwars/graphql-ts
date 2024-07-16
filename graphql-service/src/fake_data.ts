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
        status: "completed",
    },
    {
        id: 2,
        visit_id: 1,
        status: "running",
    },
    {
        id: 3,
        visit_id: 1,
        status: "pending",
    },
    {
        id: 4,
        visit_id: 2,
        status: "failed",
    },
    {
        id: 5,
        visit_id: 2,
        status: "completed",
    },
]

export const tasks = [
    {
        workflow_id: 1,
        name: "task-1",
        status: "completed"
    },
    {
        workflow_id: 1,
        name: "task-2",
        status: "completed"
    },
    {
        workflow_id: 1,
        name: "task-3",
        status: "pending"
    },
    {
        workflow_id: 1,
        name: "task-4",
        status: "running"
    },
    {
        workflow_id: 2,
        name: "task-5",
        status: "pending"
    },
    {
        workflow_id: 2,
        name: "task-6",
        status: "pending"
    },
    {
        workflow_id: 2,
        name: "task-7",
        status: "completed"
    },
    {
        workflow_id: 3,
        name: "task-8",
        status: "completed"
    },
    {
        workflow_id: 3,
        name: "task-9",
        status: "completed"
    },
    {
        workflow_id: 4,
        name: "task-10",
        status: "running"
    },
    {
        workflow_id: 4,
        name: "task-11",
        status: "running"
    },
    {
        workflow_id: 4,
        name: "task-12",
        status: "running"
    },
    {
        workflow_id: 5,
        name: "task-13",
        status: "completed"
    },
]