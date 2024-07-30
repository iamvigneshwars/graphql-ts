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
        name: "Workflow 1",
        status: "completed",
    },
    {
        id: 2,
        visit_id: 1,
        name: "Workflow 2",
        status: "running",
    },
    {
        id: 3,
        visit_id: 1,
        name: "Workflow 3",
        status: "completed",
    },
    {
        id: 4,
        visit_id: 1,
        name: "Workflow 4",
        status: "failed",
    },
    {
        id: 5,
        visit_id: 1,
        name: "Workflow 5",
        status: "pending",
    },
    {
        id: 6,
        visit_id: 1,
        name: "Workflow 6",
        status: "pending",
    },
    {
        id: 7,
        visit_id: 1,
        name: "Workflow 7",
        status: "completed",
    },
    {
        id: 8,
        visit_id: 1,
        name: "Workflow 8",
        status: "failed",
    },
    {
        id: 9,
        visit_id: 1,
        name: "Workflow 9",
        status: "failed",
    },
    {
        id: 10,
        visit_id: 1,
        name: "Workflow 10",
        status: "pending",
    },
    {
        id: 11,
        visit_id: 1,
        name: "Workflow 11",
        status: "completed",
    },
    {
        id: 12,
        visit_id: 1,
        name: "Workflow 12",
        status: "completed",
    },
    {
        id: 13,
        visit_id: 1,
        name: "Workflow 13",
        status: "completed",
    },
    {
        id: 14,
        visit_id: 1,
        name: "Workflow 14",
        status: "pending",
    },
    {
        id: 15,
        visit_id: 1,
        name: "Workflow 15",
        status: "completed",
    },
    {
        id: 16,
        visit_id: 1,
        name: "Workflow 16",
        status: "running",
    },
    {
        id: 17,
        visit_id: 1,
        name: "Workflow 17",
        status: "pending",
    },
    {
        id: 18,
        visit_id: 1,
        name: "Workflow 18",
        status: "pending",
    },
    {
        id: 19,
        visit_id: 1,
        name: "Workflow 19",
        status: "completed",
    },
    {
        id: 20,
        visit_id: 1,
        name: "Workflow 20",
        status: "completed",
    },
    {
        id: 21,
        visit_id: 2,
        name: "Workflow 21",
        status: "failed",
    },
    {
        id: 22,
        visit_id: 2,
        name: "Workflow 22",
        status: "completed",
    },
    {
        id: 23,
        visit_id: 2,
        name: "Workflow 23",
        status: "failed",
    },
    {
        id: 24,
        visit_id: 2,
        name: "Workflow 24",
        status: "completed",
    },
    {
        id: 25,
        visit_id: 2,
        name: "Workflow 25",
        status: "failed",
    },
    {
        id: 26,
        visit_id: 2,
        name: "Workflow 26",
        status: "completed",
    },
    {
        id: 27,
        visit_id: 2,
        name: "Workflow 27",
        status: "failed",
    },
    {
        id: 28,
        visit_id: 2,
        name: "Workflow 28",
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
        name: "task-2 DKJFOIEJFOIJEOFIJIKJLSKDMFODSJFLKSDJFLKSD",
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