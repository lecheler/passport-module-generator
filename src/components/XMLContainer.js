import React from "react";
import XML from "xml";
import beautify from "xml-beautifier";
import fileDownload from "js-file-download";

// var example4 = [
//   {
//     toys: [
//       { _attr: { decade: "80s", locale: "US" } },
//       { toy: "Transformers" },
//       { toy: "GI Joe" },
//       { toy: "He-man" }
//     ]
//   }
// ];

// var xmlString = XML(example4, true);

// console.log(xmlString);

function XMLContainer(props) {
  console.log(props);
  let contentToFormat = [
    {
      modules: [
        {
          module: [
            { _attr: { languageID: props.content.language_ID } },
            { _attr: { level: props.content.level } },
            { title: props.content.title },
            { direction: props.content.direction },
            { banner: "" },
            { image: "" },
            { igUrl: "" },
            { sgUrl: "" },
            {
              categories: props.content.categories
            }
          ]
        }
      ]
    }
  ];

  let xmlContent = XML(contentToFormat);
  let title = props.title;

  const downloadXMLFile = () => fileDownload(xmlContent, `${title}.xml`);
  return (
    <div className="xmlContainer">
      <pre>{beautify(xmlContent)}</pre>
      <button onClick={downloadXMLFile}>Download XML File</button>
    </div>
  );
}

export default XMLContainer;
