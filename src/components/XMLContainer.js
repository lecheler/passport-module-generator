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
    console.log(task);
    switch (task.type) {
      case "stimulus":
        const formattedResources = [
          { _attr: { type: "HTTP" } },
          ...task.resources.map(resource => {
            return {
              resource: [{ _attr: { url: resource.url } }, resource.label]
            };
          })
        ];
        console.log(task.resources);
        return {
          task: [
            { _attr: { type: task.type } },
            { _attr: { responseType: task.responseType } },
            { direction: task.direction },
            { shortDirection: task.shortDirection },
            {
              resources: formattedResources
            }
          ]
        };
        return formattedResources;
        break;
      case "flipgrid":
        return {
          task: [
            { _attr: { type: task.type } },
            { direction: task.direction },
            { question: task.question }
          ]
        };
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
        { tasks: formattedTasks }
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
  let title = props.content.title;

  const downloadXMLFile = () => fileDownload(xmlContent, `${title}.xml`);
  return (
    <div className="xmlContainer">
      <pre>{beautify(xmlContent)}</pre>
      <button onClick={downloadXMLFile}>Download XML File</button>
    </div>
  );
}

export default XMLContainer;
