import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import TaskAvenueExisting from "./TaskAvenueExisting";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    margin: "0px 10px"
  },
  logo: {
    maxHeight: 20
  }
});

function Task(props) {
  const { classes, taskUtils, taskContent, catIndex, taskIndex } = props;

  const displayTask = () => {
    switch (props.taskContent.type) {
      case "stimulus":
        return (
          <TaskStimulus
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
      case "flipgrid":
        return (
          <TaskFlipgrid
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
      case "avenue":
        return (
          <TaskAvenue
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
      case "avenue-existing":
        return (
          <TaskAvenueExisting
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
      default:
        return <h1>Haaaalp</h1>;
    }
  };

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Task: {props.taskIndex + 1}{" "}
        </Typography>
        <img
          src={`${props.taskContent.type}.svg`}
          className={classes.logo}
          alt="task icon"
        />
        <Typography className={classes.heading}>
          {props.taskContent.shortDirection ? (
            `Short Direction: ${props.taskContent.shortDirection}`
          ) : props.taskContent.name ? (
            `Name: ${props.taskContent.name}`
          ) : props.taskContent.avenueTaskId ? (
            `Task ID: ${props.taskContent.avenueTaskId}`
          ) : (
            "---"
          )}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{displayTask()}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Task.propTypes = {
  classes: PropTypes.number.isRequired,
  taskUtils: PropTypes.object.isRequired,
  taskContent: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(Task);
