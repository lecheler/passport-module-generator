const validateFileName = () => {
  // console.log("validateFileName is running");
  // var string = {".jpg"}
  // var re = new RegExp();
  // if (re.test(string)) {
  //   console.log("String is Valid");
  // } else {
  //   console.log("String is inValid");
  // }

  const regex = /(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|jpeg))(?:\?([^#]*))?(?:#(.*))?/g;
  const str = ".jpg";
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
    });
  }
};

export const metaSchema = [
  {
    tag: "title",
    label: "Title",
    type: "string"
  },
  {
    tag: "direction",
    label: "Direction",
    type: "string"
  },
  {
    tag: "languageID",
    label: "Program",
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
    type: "string"
  },
  {
    tag: "igURL",
    label: "Integration Guide URL",
    type: "string"
  },
  {
    tag: "sgURL",
    label: "Student Guide URL",
    type: "string"
  },
  {
    label: "Image (.jpg only)",
    tag: "image",
    type: "string",
    rule: validateFileName()
  }
];
