export const flipGridSchema = [
  {
    tag: "shortDirection",
    label: "Task Title",
    placeholder: "Enter the short directions for the task.",
    type: "string"
  },
  {
    tag: "question",
    label: "Flipgrid Question",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "direction",
    label: "Task Direction",
    placeholder: "Enter the long directions for the task.",
    type: "string"
  }
];

export const resourceSchema = [
  { tag: "url", label: "url", placeholder: "---", type: "string", default: "" },
  {
    tag: "label",
    label: "label",
    placeholder: "---",
    type: "string",
    default: ""
  }
];
