export const avenueSchema = [
  { tag: "name", label: "name", type: "string", placeholder: "---" },
  {
    tag: "instructions",
    label: "instructions",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "recordingTries",
    label: "recordingTries",
    placeholder: "---",
    type: "number",
    max: 10
  },
  {
    tag: "recordTime",
    label: "recordTime",
    placeholder: "---",
    type: "time",
    interval: 30
  },
  { tag: "views", label: "views", placeholder: "---", type: "number", max: 6 },
  {
    tag: "mediaTime",
    label: "mediaTime",
    placeholder: "---",
    type: "time",
    interval: 1
  },
  {
    tag: "mediaWhileRecording",
    label: "mediaWhileRecording",
    placeholder: "---",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  {
    tag: "allowMobile",
    label: "allowMobile",
    placeholder: "---",
    type: "dropdown",
    options: [{ value: 1, display: "Yes" }, { value: 0, display: "No" }]
  },
  { tag: "unit", label: "unit", placeholder: "---", type: "number", max: 999 },
  { tag: "level", label: "level", placeholder: "---", type: "number", max: 999 }
];

export const sliderSchema = [
  {
    tag: "label",
    label: "label",
    type: "string",
    default: "",
    placeholder: "---"
  },
  { tag: "max", label: "max", type: "string", default: "", placeholder: "---" }
];

export const assetSchema = [
  {
    tag: "type",
    label: "type",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "extension",
    label: "extension",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "file",
    label: "file",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "title",
    label: "title",
    placeholder: "---",
    type: "string",
    default: ""
  },
  {
    tag: "text",
    label: "text",
    placeholder: "---",
    type: "string",
    default: ""
  }
];
