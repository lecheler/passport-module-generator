// Used for setting default state values when creating a new task

export const DefaultTasks = {
  flipGrid: {
    type: "flipgrid",
    shortDirection: "",
    direction: "",
    question: "",
    resources: []
  },
  stimulus: {
    type: "stimulus",
    shortDirection: "",
    direction: "",
    responseType: "",
    resources: []
  },
  avenue: {
    type: "avenue",
    shortDirection: "",
    direction: "",
    name: "",
    instructions: "",
    recordingTries: "",
    recordTime: "",
    views: "",
    mediaTime: "",
    mediaWhileRecording: "",
    allowMobile: "",
    level: "",
    unit: "",
    sliders: [],
    assets: []
  },
  avenueExisting: {
    type: "avenue-existing",
    shortDirection: "",
    direction: "",
    avenueTaskID: ""
  }
};
