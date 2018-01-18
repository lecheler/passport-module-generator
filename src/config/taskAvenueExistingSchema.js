export const avenueExistingSchema = [
  // { label: "type", type: "string", default: "avenue" },
  {
    tag: "avenueTaskID",
    label: "avenueTaskID",
    placeholder: "---",
    type: "string"
  },
  // update existing xml container to handle direction and short description.
  { tag: "direction", label: "direction", placeholder: "---", type: "string" },
  {
    tag: "shortDirection",
    label: "shortDirection",
    placeholder: "---",
    type: "string"
  }
];
