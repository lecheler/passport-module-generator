export const metaSchema = [
  {
    tag: "title",
    label: "Title",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "direction",
    label: "Direction",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "languageID",
    label: "Program",
    placeholder: "---",
    type: "dropdown",
    options: [
      { value: 3, display: "Chinese: Zhēn Bàng!" },
      { value: 155, display: "Chinese: Zhēn Bàng! 2nd Edition" },
      { value: 4, display: "French: T`es branché ?" },
      { value: 2, display: "German: Deutsch Aktuell 6th Edition" },
      { value: 133, display: "German: Deutsch Aktuell 7th Edition" },
      { value: 170, display: "Mirrors and Windows" },
      { value: 169, display: "Mirrors and Windows: CCSS" },
      { value: 1, display: "Spanish: ¡Aventura!" },
      { value: 55, display: "Spanish: ¡Qué chévere!" }
    ]
  },
  {
    tag: "level",
    label: "Level",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "igURL",
    label: "Integration Guide URL",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "sgURL",
    label: "Student Guide URL",
    placeholder: "---",
    type: "string"
  },
  {
    tag: "image",
    label: "Image",
    placeholder: "*.jpg or *.jpeg)",
    type: "string"
  }
];
