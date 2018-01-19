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
  { tag: "name", label: "Name", type: "string", placeholder: "Name" },
  {
    tag: "instructions",
    label: "Instructions",
    placeholder: "Instructions",
    type: "string"
  },
  {
    tag: "recordingTries",
    label: "Recording Tries",
    placeholder: "Recording Tries",
    type: "number",
    max: 10
  },
  {
    tag: "recordTime",
    label: "Record Time",
    placeholder: "Record Time",
    type: "time",
    interval: 30
  },
  {
    tag: "views",
    label: "Views",
    placeholder: "Views",
    type: "number",
    max: 6
  },
  {
    tag: "mediaTime",
    label: "Media Time",
    placeholder: "Media Time",
    type: "time",
    interval: 1
  },
  {
    tag: "mediaWhileRecording",
    label: "Media While Recording",
    placeholder: "Media While Recording",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  {
    tag: "allowMobile",
    label: "Allow Mobile",
    placeholder: "Allow Mobile",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  { tag: "unit", label: "Unit", placeholder: "Unit", type: "number", max: 999 },
  {
    tag: "level",
    label: "Level",
    placeholder: "Level",
    type: "number",
    max: 999
  }
];

export const sliderSchema = [
  {
    tag: "label",
    label: "Label",
    type: "string",
    default: "",
    placeholder: "Label"
  },
  { tag: "max", label: "Max", placeholder: "Max", type: "string", default: "" }
];

export const assetSchema = [
  {
    tag: "type",
    label: "Type",
    placeholder: "Type",
    type: "string",
    default: ""
  },
  {
    tag: "extension",
    label: "Extension",
    placeholder: "Extension",
    type: "string",
    default: ""
  },
  {
    tag: "file",
    label: "File",
    placeholder: "File",
    type: "string",
    default: ""
  },
  {
    tag: "title",
    label: "Title",
    placeholder: "Title",
    type: "string",
    default: ""
  },
  {
    tag: "text",
    label: "Text",
    placeholder: "Text",
    type: "string",
    default: ""
  }
];
