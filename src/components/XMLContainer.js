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

const formatTasks = tasksArray => {
  const formattedTasksArray = tasksArray.map(task => {
    switch (task.type) {
      case "stimulus":
        return {};
        break;
      case "flipgrid":
        return {};
        break;
      case "avenue":
        return {};
        break;
      default:
        return {};
    }
  });
  return formattedTasksArray;
};

function XMLContainer(props) {
  let formattedCategories = props.content.categories.map(category => {
    let formattedScores = formatScoring(category.scoring);
    let formattedTasks = formatTasks(category.tasks);

    let formattedCategory = {
      category: [
        { _attr: { order: category.order + 1 } },
        { title: category.title },
        { scoring: formattedScores },
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
