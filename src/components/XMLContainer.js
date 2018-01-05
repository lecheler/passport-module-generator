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

const formatScoring = scoringArray => {
  const formattedScoringArray = scoringArray.map(score => {
    let { max, label } = score;
    return { score: [{ _attr: { max: max } }, label] };
  });
  return formattedScoringArray;
};

function XMLContainer(props) {
  let formattedCategories = props.content.categories.map(category => {
    let formattedCategories = formatScoring(category.scoring);

    let formattedCategory = {
      category: [
        { _attr: { order: category.order + 1 } },
        { title: category.title },
        { scoring: formattedCategories },
        { tasks: category.tasks }
      ]
    };
    return formattedCategory;
  });

  let contentToFormat = [
    {
      modules: [
        {
          module: [
            { _attr: { languageID: props.content.languageID } },
            { _attr: { level: props.content.level } },
            { title: props.content.title },
            { direction: props.content.direction },
            { banner: "" },
            { image: "" },
            { igUrl: "" },
            { sgUrl: "" },
            {
              categories: formattedCategories
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
