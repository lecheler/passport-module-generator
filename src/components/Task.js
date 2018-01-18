import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
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
        break;
      case "flipgrid":
        return (
          <TaskFlipgrid
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
        break;
      case "avenue":
        return (
          <TaskAvenue
            taskUtils={taskUtils}
            taskContent={taskContent}
            catIndex={catIndex}
            taskIndex={taskIndex}
          />
        );
        break;
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
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Task: {props.taskIndex + 1}{" "}
        </Typography>
        <img src={`${props.taskContent.type}.svg`} className={classes.logo} />
        <Typography className={classes.heading}>
          {props.taskContent.shortDirection ? (
            `Short Direction: ${props.taskContent.shortDirection}`
          ) : props.taskContent.name ? (
            `Name: ${props.taskContent.name}`
          ) : props.taskContent.taskId ? (
            `Task ID: ${props.taskContent.taskId}`
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
  taskIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(Task);
