import React from "react";
import PropTypes from "prop-types";
import XML from "xml";
import beautify from "xml-beautifier";
import fileDownload from "js-file-download";
import XMLDownload from "./XMLDownload";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {},

  button: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

const formatScoring = scoringArray => {
  const formattedScoringArray = scoringArray.map(score => {
    let { max, label } = score;
    return { score: [{ _attr: { max: max } }, label] };
  });
  return formattedScoringArray;
};

const formatResources = resourcesArray => {
  const formattedResources = [
    { _attr: { type: "http" } },
    ...resourcesArray.map(resource => {
      return {
        resource: [{ _attr: { url: resource.url } }, resource.label]
      };
    })
  ];
  return formattedResources;
};

const formatTasks = tasksArray => {
  const formattedTasksArray = tasksArray.map(task => {
    let formattedResources = [];
    switch (task.type) {
      case "stimulus":
        formattedResources = formatResources(task.resources);
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
      // break;
      case "flipgrid":
        formattedResources = formatResources(task.resources);
        return {
          task: [
            { _attr: { type: task.type } },
            { direction: task.direction },
            { question: task.question },
            {
              resources: formattedResources
            }
          ]
        };
      // break;
      case "avenue":
        const formattedSliders = [
          ...task.sliders.map(slider => {
            return {
              slider: [{ _attr: { max: slider.max } }, slider.label]
            };
          })
        ];

        return {
          task: [
            { _attr: { type: task.type } },
            { name: task.name },
            { instructions: task.instructions },
            { recordingTries: task.recordingTries },
            { recordTime: task.recordTime },
            { views: task.views },
            { mediaTime: task.mediaTime },
            { mediaWhileRecording: task.mediaWhileRecording },
            { allowMobile: task.allowMobile },
            {
              sliders: formattedSliders
            }
          ]
        };
      // break;
      case "avenue-existing":
        return {
          task: [{ _attr: { type: "avenue" } }, { taskId: task.taskId }]
        };
      // break;
      default:
        return {};
    }
  });
  return formattedTasksArray;
};

function XMLContainer(props) {
  let { classes, valid } = props;

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
            { image: props.content.image },
            { igUrl: props.content.igURL },
            { sgUrl: props.content.sgURL },
            {
              categories: formattedCategories
            }
          ]
        }
      ]
    }
  ];

  let xmlContent = XML(contentToFormat);
  let { title } = props.content;

  const downloadXMLFile = filename =>
    fileDownload(beautify(xmlContent), `${title}.xml`);

  return (
    <div className="xmlContainer">
      <XMLDownload handleDownload={downloadXMLFile} valid={valid} />
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Formatted XML Content
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <pre>{beautify(xmlContent)}</pre>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/*<button onClick={downloadXMLFile}>Download XML File</button>*/}
    </div>
  );
}

XMLContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  valid: PropTypes.object.isRequired
};

export default withStyles(styles)(XMLContainer);
