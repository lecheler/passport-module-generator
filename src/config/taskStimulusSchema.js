export const stimulusSchema = [
  {
    tag: "shortDirection",
    label: "Task Title",
    placeholder: "Enter the short directions for the task",
    type: "string"
  },
  {
    tag: "responseType",
    label: "Task Type",
    type: "dropdown",
    options: [
      { value: "text", display: "Text" },
      { value: "file", display: "File" },
      { value: "both", display: "Both" },
      { value: "none", display: "None" }
    ]
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
