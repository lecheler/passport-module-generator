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
  let { content } = props;
  let xmlContent = XML(content);
  let title = props.content[0].modules[0].module[0].title;
  const downloadXMLFile = () => fileDownload(xmlContent, `${title}.xml`);
  return (
    <div className="xmlContainer">
      <pre>{beautify(xmlContent)}</pre>
      <button onClick={downloadXMLFile}>Download XML File</button>
    </div>
  );
}

export default XMLContainer;
