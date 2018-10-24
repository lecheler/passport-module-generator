// run check to see if file name has.jpg or .jpeg extension, then remove .jpg or .jpeg
export const validateImageFileName = imageString => {
  console.log("imagestring", imageString);
  var string = imageString;
  var re = /(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|jpeg))(?:\?([^#]*))?(?:#(.*))?/g;
  if (re.test(string)) {
    console.log("String is Valid");
    return true;
  } else {
    console.log("String is inValid");
    return false;
  }
};

export const metaSchema = [
  {
    tag: "title",
    label: "Title",
    placeholder: "Title",
    type: "string"
  },
  {
    tag: "direction",
    label: "Direction",
    placeholder: "Direction",
    type: "string"
  },
  {
    tag: "languageID",
    label: "Program",
    placeholder: "Program",
    type: "dropdown",
    options: [
      { value: 3, display: "Chinese: Zhēn Bàng! 1st Edition" },
      { value: 155, display: "Chinese: Zhēn Bàng! 2nd Edition" },
      { value: 288, display: "Economics: New Ways of Thinking 2nd Edition" },
      { value: 4, display: "French: T`es branché? 1st Edition" },
      { value: 290, display: "French: T`es branché? 2nd Edition" },
      { value: 2, display: "German: Deutsch Aktuell 6th Edition" },
      { value: 133, display: "German: Deutsch Aktuell 7th Edition" },
      { value: 291, display: "Italian: Amici d'Italia" },
      { value: 170, display: "Mirrors and Windows ©2016" },
      { value: 169, display: "Mirrors and Windows ©2016: Common Core" },
      { value: 315, display: "Mirrors and Windows ©2020" },
      { value: 313, display: "Mirrors and Windows ©2020: Common Core" },
      { value: 311, display: "Mirrors and Windows ©2020: Texas" },
      { value: 1, display: "Spanish: ¡Aventura!" },
      { value: 55, display: "Spanish: ¡Qué chévere! 1st Edition" }
    ]
  },
  {
    tag: "level",
    label: "Level",
    placeholder: "Program Level",
    type: "string"
  },
  {
    tag: "igURL",
    label: "Integration Guide URL",
    placeholder: "Integration Guide URL",
    type: "string"
  },
  {
    tag: "sgURL",
    label: "Student Guide URL",
    placeholder: "Student Guide URL",
    type: "string"
  },
  {
    label: "Image (hint: file must end in .jpg)",
    tag: "image",
    placeholder: "Copy/paste the file name of the module cover image",
    type: "string"
  }
];
