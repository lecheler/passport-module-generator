export const avenueExistingSchema = [
  // { label: "type", type: "string", default: "avenue" },
  {
    tag: "shortDirection",
    label: "shortDirection",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "avenueTaskID",
    label: "avenueTaskID",
    placeholder: "---",
    type: "string"
  },
  // update existing xml container to handle direction and short description.
  { tag: "direction", label: "direction", placeholder: "---", type: "string" }
];
