export const avenueSchema = [
  {
    tag: "shortDirection",
    label: "Task Title",
    placeholder: "Enter the short directions for the task.",
    type: "string"
  },
  {
    tag: "direction",
    label: "Task Direction",
    placeholder: "Enter the long directions for the task.",
    type: "string"
  },
  { tag: "name", label: "Name", type: "string", placeholder: "---" },
  {
    tag: "instructions",
    label: "Instructions",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "recordingTries",
    label: "Recording Tries",
    placeholder: "---",
    type: "number",
    max: 10
  },
  {
    tag: "recordTime",
    label: "Record Time",
    placeholder: "---",
    type: "time",
    interval: 30
  },
  { tag: "views", label: "Views", placeholder: "---", type: "number", max: 6 },
  {
    tag: "mediaTime",
    label: "Media Time",
    placeholder: "---",
    type: "time",
    interval: 1
  },
  {
    tag: "mediaWhileRecording",
    label: "Media While Recording",
    placeholder: "---",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  {
    tag: "allowMobile",
    label: "Allow Mobile",
    placeholder: "---",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  { tag: "unit", label: "Unit", placeholder: "---", type: "number", max: 999 },
  { tag: "level", label: "Level", placeholder: "---", type: "number", max: 999 }
];

export const sliderSchema = [
  {
    tag: "label",
    label: "Label",
    type: "string",
    default: "",
    placeholder: "---"
  },
  { tag: "max", label: "Max", type: "string", default: "", placeholder: "---" }
];

export const assetSchema = [
  {
    tag: "type",
    label: "Type",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "extension",
    label: "Extension",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "file",
    label: "File",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "title",
    label: "Title",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "text",
    label: "Text",
    placeholder: "---",
    type: "string",
    default: ""
  }
];
