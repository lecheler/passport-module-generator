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
    fontWeight: theme.typography.fontWeightRegular
  }
});

function Task(props) {
  const { classes } = props;

  const displayTask = () => {
    switch (props.taskContent.type) {
      case "stimulus":
        return <TaskStimulus {...props} />;
        break;
      case "flipgrid":
        return <TaskFlipgrid {...props} />;
        break;
      case "avenue":
        return <TaskAvenue {...props} />;
        break;
      case "avenue-existing":
        return <TaskAvenueExisting {...props} />;
      default:
        return <h1>Haaaalp</h1>;
    }
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Task: {props.taskIndex + 1} Type: {props.taskContent.type} Title:{" "}
          {props.taskContent.shortDirection}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{displayTask()}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Task.propTypes = {
  taskIndexs: PropTypes.element.isRequired
};

export default withStyles(styles)(Task);
