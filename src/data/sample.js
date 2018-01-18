const sample = [
  {
    modules: [
      {
        module: [
          { _attr: { languageID: "Language_ID" } },
          { _attr: { level: "Level" } },
          { title: "Module_Title" },
          { direction: "Module_Directions" },
          { banner: "" },
          { image: "" },
          { igUrl: "" },
          { sgUrl: "" },
          {
            categories: [
              {
                category: [
                  { _attr: { order: "INT" } },
                  { title: "my category title" },
                  {
                    scoring: [
                      {
                        score: [{ _attr: { max: "INT" } }, "STRING"]
                      }
                    ]
                  },
                  {
                    tasks: [
                      {
                        task: [
                          { _attr: { type: "stimulus" } },
                          { _attr: { responseType: "file, text, or both" } },
                          { direction: "STRING" },
                          { shortDirection: "STRING" },
                          {
                            resorces: [
                              { _attr: { type: "HTTP" } },
                              {
                                resource: [
                                  { _attr: { url: "STRING" } },
                                  "LABEL"
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        task: [
                          { _attr: { type: "flipgrid" } },
                          { direction: "STRING" },
                          { question: "STRING" }
                        ]
                      },
                      {
                        task: [
                          { _attr: { type: "avenue" } },
                          { name: "STRING" },
                          { instructions: "STRING" },
                          { recordingTries: "INT" },
                          { recordTime: "INT 30 sec intervals" },
                          { views: "1 - 5 and unlimited (6?)" },
                          { mediaTime: "INT seconds" },
                          { mediaWhileRecording: "0 or 1" },
                          { allowMobile: "0 or 1" },
                          {
                            sliders: [
                              {
                                slider: [
                                  { _attr: { max: "INT" } },
                                  "STRING Slider_Title"
                                ]
                              }
                            ]
                          },
                          {
                            assets: [
                              {
                                asset: [
                                  { _attr: { type: "Avenue_File_Type" } },
                                  {
                                    _attr: {
                                      extension: "Avenue_Asset_Extension"
                                    }
                                  },
                                  { file: "Avenue_File_Name" },
                                  { title: "Avenue_Title" },
                                  { text: "Avenue_Text" }
                                ]
                              }
                            ]
                          },
                          { level: "1-12 INT" },
                          { unit: "INT" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default sample;
