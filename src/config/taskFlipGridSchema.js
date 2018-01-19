export const flipGridSchema = [
  { tag: "question", label: "question", placeholder: "---", type: "string" },
  { tag: "direction", label: "direction", placeholder: "---", type: "string" },
  {
    tag: "shortDirection",
    label: "shortDirection",
    placeholder: "---",
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
