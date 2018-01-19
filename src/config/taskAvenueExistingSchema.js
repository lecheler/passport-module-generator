export const avenueExistingSchema = [
  // { label: "type", type: "string", default: "avenue" },
  {
    tag: "shortDirection",
    label: "Task Title",
    placeholder: "Enter the short directions for the task.",
    type: "string"
  },
  {
    tag: "avenueTaskID",
    label: "avenueTaskID",
    placeholder: "---",
    type: "string"
  },
  // update existing xml container to handle direction and short description.
  {
    tag: "direction",
    label: "Task Direction",
    placeholder: "Enter the long directions for the task.",
    type: "string"
  }
];
