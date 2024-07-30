export const visits = [
    {
        id: 1,
        name: "visit-1"
    },
    {
        id: 2,
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
        id: 1,
        workflow_id: 1,
        name: "task-1",
        status: "completed",
    },
    {
        id: 2,
        parent_task: 1,
        workflow_id: 1,
        name: "task-2",
        status: "completed"
    },
    {
        id: 3,
        parent_task: 1,
        workflow_id: 1,
        name: "task-3",
        status: "pending"
    },
    {
        id: 4,
        workflow_id: 1,
        name: "task-4",
        status: "running"
    },
    {
        id: 5,
        workflow_id: 2,
        name: "task-5",
        status: "pending"
    },
    {
        id: 20,
        parent_task: 3,
        workflow_id: 1,
        name: "task-20",
        status: "running"
    },
    {
        id: 30,
        parent_task: 20,
        workflow_id: 1,
        name: "task-30",
        status: "running"
    },
    {
        id: 21,
        parent_task: 3,
        workflow_id: 1,
        name: "task-21",
        status: "pending"
    },
    {
        id: 6,
        workflow_id: 2,
        name: "task-6",
        status: "pending"
    },
    {
        id: 7,
        workflow_id: 2,
        name: "task-7",
        status: "completed"
    },
    {
        id: 8,
        workflow_id: 3,
        name: "task-8",
        status: "completed"
    },
    {
        id: 9,
        workflow_id: 3,
        name: "task-9",
        status: "completed"
    },
    {
        id: 10,
        workflow_id: 4,
        name: "task-10",
        status: "running"
    },
    {
        id: 11,
        workflow_id: 4,
        name: "task-11",
        status: "running"
    },
    {
        id: 12,
        workflow_id: 4,
        name: "task-12",
        status: "running"
    },
    {
        id: 13,
        workflow_id: 5,
        name: "task-13",
        status: "completed"
    },
]