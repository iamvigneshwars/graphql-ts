export const namespaces: string[] = ["namespace-1", "namespace-2"];

export const workflows = [
  {
    id: "1",
    namespace: "namespace-1",
    name: "Workflow 1",
    status: "completed",
  },
  {
    id: "2",
    namespace: "namespace-1",
    name: "Workflow 2",
    status: "running",
  },
  {
    id: "3",
    namespace: "namespace-1",
    name: "Workflow 3",
    status: "completed",
  },
  {
    id: "4",
    namespace: "namespace-1",
    name: "Workflow 4",
    status: "failed",
  },
  {
    id: "5",
    namespace: "namespace-1",
    name: "Workflow 5",
    status: "pending",
  },
  {
    id: "6",
    namespace: "namespace-1",
    name: "Workflow 6",
    status: "pending",
  },
  {
    id: "7",
    namespace: "namespace-1",
    name: "Workflow 7",
    status: "completed",
  },
  {
    id: "8",
    namespace: "namespace-1",
    name: "Workflow 8",
    status: "failed",
  },
  {
    id: "9",
    namespace: "namespace-1",
    name: "Workflow 9",
    status: "failed",
  },
  {
    id: "10",
    namespace: "namespace-1",
    name: "Workflow 10",
    status: "pending",
  },
  {
    id: "11",
    namespace: "namespace-1",
    name: "Workflow 11",
    status: "completed",
  },
  {
    id: "12",
    namespace: "namespace-1",
    name: "Workflow 12",
    status: "completed",
  },
  {
    id: "13",
    namespace: "namespace-1",
    name: "Workflow 13",
    status: "completed",
  },
  {
    id: "14",
    namespace: "namespace-1",
    name: "Workflow 14",
    status: "pending",
  },
  {
    id: "15",
    namespace: "namespace-1",
    name: "Workflow 15",
    status: "completed",
  },
  {
    id: "16",
    namespace: "namespace-1",
    name: "Workflow 16",
    status: "running",
  },
  {
    id: "17",
    namespace: "namespace-1",
    name: "Workflow 17",
    status: "pending",
  },
  {
    id: "18",
    namespace: "namespace-1",
    name: "Workflow 18",
    status: "pending",
  },
  {
    id: "19",
    namespace: "namespace-1",
    name: "Workflow 19",
    status: "completed",
  },
  {
    id: "20",
    namespace: "namespace-1",
    name: "Workflow 20",
    status: "completed",
  },
  {
    id: "30",
    namespace: "namespace-1",
    name: "Workflow 30",
    status: "completed",
  },
  {
    id: "31",
    namespace: "namespace-1",
    name: "Workflow 31",
    status: "running",
  },
  {
    id: "32",
    namespace: "namespace-1",
    name: "Workflow 32",
    status: "completed",
  },
  {
    id: "33",
    namespace: "namespace-1",
    name: "Workflow 33",
    status: "failed",
  },
  {
    id: "34",
    namespace: "namespace-1",
    name: "Workflow 34",
    status: "pending",
  },
  {
    id: "35",
    namespace: "namespace-1",
    name: "Workflow 35",
    status: "pending",
  },
  {
    id: "36",
    namespace: "namespace-1",
    name: "Workflow 36",
    status: "completed",
  },
  {
    id: "37",
    namespace: "namespace-1",
    name: "Workflow 37",
    status: "failed",
  },
  {
    id: "38",
    namespace: "namespace-1",
    name: "Workflow 38",
    status: "failed",
  },
  {
    id: "39",
    namespace: "namespace-1",
    name: "Workflow 39",
    status: "pending",
  },
  {
    id: "40",
    namespace: "namespace-1",
    name: "Workflow 40",
    status: "completed",
  },
  {
    id: "41",
    namespace: "namespace-1",
    name: "Workflow 41",
    status: "completed",
  },
  {
    id: "42",
    namespace: "namespace-1",
    name: "Workflow 42",
    status: "completed",
  },
  {
    id: "43",
    namespace: "namespace-1",
    name: "Workflow 43",
    status: "pending",
  },
  {
    id: "44",
    namespace: "namespace-1",
    name: "Workflow 44",
    status: "completed",
  },
  {
    id: "45",
    namespace: "namespace-1",
    name: "Workflow 45",
    status: "running",
  },
  {
    id: "46",
    namespace: "namespace-1",
    name: "Workflow 46",
    status: "pending",
  },
  {
    id: "47",
    namespace: "namespace-1",
    name: "Workflow 47",
    status: "pending",
  },
  {
    id: "48",
    namespace: "namespace-1",
    name: "Workflow 48",
    status: "completed",
  },
  {
    id: "49",
    namespace: "namespace-1",
    name: "Workflow 49",
    status: "completed",
  },
  {
    id: "21",
    namespace: "namespace-2",
    name: "Workflow 21",
    status: "failed",
  },
  {
    id: "22",
    namespace: "namespace-2",
    name: "Workflow 22",
    status: "completed",
  },
  {
    id: "23",
    namespace: "namespace-2",
    name: "Workflow 23",
    status: "failed",
  },
  {
    id: "24",
    namespace: "namespace-2",
    name: "Workflow 24",
    status: "completed",
  },
  {
    id: "25",
    namespace: "namespace-2",
    name: "Workflow 25",
    status: "failed",
  },
  {
    id: "26",
    namespace: "namespace-2",
    name: "Workflow 26",
    status: "completed",
  },
  {
    id: "27",
    namespace: "namespace-2",
    name: "Workflow 27",
    status: "failed",
  },
  {
    id: "28",
    namespace: "namespace-2",
    name: "Workflow 28",
    status: "completed",
  },
];

export const tasks = [
  {
    id: "29",
    workflow_id: "1",
    name: "task-1",
    status: "completed",
  },
  {
    id: "30",
    parent_task: "29",
    workflow_id: "1",
    name: "task-2 DKJFOIEJFOIJEOFIJIKJLSKDMFODSJFLKSDJFLKSD",
    status: "completed",
  },
  {
    id: "31",
    parent_task: "29",
    workflow_id: "1",
    name: "task-3",
    status: "pending",
  },
  {
    id: "32",
    workflow_id: "29",
    name: "task-4",
    status: "running",
  },
  {
    id: "33",
    workflow_id: "30",
    name: "task-5",
    status: "pending",
  },
  {
    id: "34",
    parent_task: "31",
    workflow_id: "1",
    name: "task-20",
    status: "running",
  },
  {
    id: "35",
    workflow_id: "1",
    name: "task-30",
    status: "running",
  },
  {
    id: "36",
    parent_task: "31",
    workflow_id: "1",
    name: "task-21",
    status: "pending",
  },
  {
    id: "37",
    workflow_id: "2",
    name: "task-6",
    status: "pending",
  },
  {
    id: "38",
    workflow_id: "2",
    name: "task-7",
    status: "completed",
  },
  {
    id: "39",
    workflow_id: "3",
    name: "task-8",
    status: "completed",
  },
  {
    id: "40",
    workflow_id: "3",
    name: "task-9",
    status: "completed",
  },
  {
    id: "41",
    workflow_id: "4",
    name: "task-10",
    status: "running",
  },
  {
    id: "42",
    workflow_id: "4",
    name: "task-11",
    status: "running",
  },
  {
    id: "43",
    workflow_id: "4",
    name: "task-12",
    status: "running",
  },
  {
    id: "44",
    workflow_id: "5",
    name: "task-13",
    status: "completed",
  },
];

export const workflow_templates = [
    {   
        name: "workflow-template-1",
        json_schema: {
            type: "object",
            properties: {
                parameter_1: {
                type: "string",
                minLength: 5,
                },
                parameter_2: {
                type: "string",
                minLength: 5,
                },
                parameter_3: {
                type: "string",
                minLength: 5,
                },
                parameter_4: {
                type: "string",
                minLength: 5,
                },
                parameter_5: {
                type: "integer",
                minValue: 3,
                },
            },
        },
        ui_schema: {
            type: "VerticalLayout",
            elements: [
                {
                type: "Control",
                scope: "#/properties/parameter_1",
                },
                {
                type: "Control",
                scope: "#/properties/parameter_2",
                },
                {
                type: "HorizontalLayout",
                elements: [
                    {
                    type: "Control",
                    scope: "#/properties/parameter_3",
                    },
                    {
                    type: "Control",
                    scope: "#/properties/parameter_4",
                    },
                    {
                    type: "Control",
                    scope: "#/properties/parameter_5",
                    },
                    ],
                },
            ],
        }
    },
    {
        name: "workflow-template-2",
        json_schema: {
            type: "object",
            properties: {
                parameter_1: {
                type: "string",
                minLength: 5,
                },
                parameter_2: {
                type: "string",
                minLength: 5,
                },
                parameter_3: {
                type: "string",
                minLength: 5,
                },
            },
        },
    }
]
