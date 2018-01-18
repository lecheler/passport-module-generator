import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import InputString from "./InputString";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import AddRepeater from "./AddRepeater";
import Repeater from "./Repeater";
import Divider from "material-ui/Divider";
import { flipGridSchema, resourceSchema } from "../config/taskFlipGridSchema";

const styles = theme => ({
  root: {},
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid lightgray",
    borderRadius: "5px",
    padding: "0px 10px"
  },
  button: {
    margin: theme.spacing.unit
  }
});

function TaskFlipgrid(props) {
  const { taskIndex, catIndex, taskUtils, taskContent, classes } = props;

  const handleUpdate = input => {
    let updateObject = {};
    updateObject[input.tag] = input.value;
    taskUtils.update(catIndex, taskIndex, updateObject);
  };

  const handleDelete = () => {
    taskUtils.delete(catIndex, taskIndex);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <h5>C{catIndex + 1}</h5>
        <h5>Task {taskIndex + 1}: Flipgrid</h5>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </div>

      {flipGridSchema.map((item, index) => {
        return (
          <InputString
            tag={item.tag}
            label={item.label}
            placeholder={item.placeholder}
            value={taskContent[item.label]}
            handleChange={handleUpdate}
            key={index}
          />
        );
      })}

      <Divider />
      <h5>Task {taskIndex + 1} Resources</h5>

      {taskContent.resources.map((resource, repeaterIndex) => {
        return (
          <Repeater
            taskUtils={taskUtils}
            catIndex={catIndex}
            taskIndex={taskIndex}
            repeaterIndex={repeaterIndex}
            repeaterSchema={resourceSchema}
            repeaterType="resources"
            value={resource}
            key={repeaterIndex}
          />
        );
      })}

      <AddRepeater
        taskUtils={taskUtils}
        catIndex={catIndex}
        taskIndex={taskIndex}
        repeaterType="resources"
        name="Resource"
      />
    </div>
  );
}

TaskFlipgrid.propTypes = {
  classes: PropTypes.number.isRequired,
  taskUtils: PropTypes.object.isRequired,
  taskContent: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(TaskFlipgrid);
