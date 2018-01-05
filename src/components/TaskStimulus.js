import React from "react";
import { withStyles } from "material-ui/styles";
import InputFieldTwo from "./InputFieldTwo";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import InputDropdown from "./InputDropdown";
import AddRepeater from "./AddRepeater";
const styles = theme => ({
  root: {},
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "lightGray",
    padding: 10
  },
  button: {
    margin: theme.spacing.unit
  }
});

const inputArray = [
  { label: "responseType", type: "string" },
  { label: "direction", type: "string" },
  { label: "shortDirection", type: "string" }
];

const resourceArray = [
  { label: "type", type: "string", default: "HTTP" },
  { label: "url", type: "string", default: "" },
  { label: "label", type: "string", default: "" }
];

function TaskStimulus(props) {
  const { taskIndex, catIndex, tasks, taskContent, classes } = props;

  const handleUpdate = input => {
    let updateObject = {};
    updateObject[input.label] = input.value;
    props.tasks.update(catIndex, taskIndex, updateObject);
  };

  const handleRepeaterUpdate = input => {
    let updateObject = {};
    updateObject[input.label] = input.value;
    props.tasks.updateRepeater(catIndex, taskIndex, input.rIndex, updateObject);
  };

  const handleDelete = () => {
    props.tasks.remove(catIndex, taskIndex);
  };

  return (
    <div>
      <div className={classes.flex}>
        <h5>Task {taskIndex + 1}: Stimulus</h5>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </div>

      {inputArray.map((item, index) => {
        return (
          <InputFieldTwo
            label={item.label}
            handleChange={handleUpdate}
            placeholder={item.label}
            value={taskContent.label}
            key={index}
          />
        );
      })}

      <h5>RESOURCES</h5>
      {taskContent.resources.map((resource, rIndex) => {
        return resourceArray.map((item, index) => {
          return (
            <InputFieldTwo
              label={item.label}
              handleChange={handleRepeaterUpdate}
              placeholder={item.label}
              value={resource[item.label]}
              key={index}
              rIndex={rIndex}
            />
          );
        });
      })}

      <AddRepeater
        tasks={tasks}
        catIndex={catIndex}
        taskIndex={taskIndex}
        type="resource"
      />
    </div>
  );
}

export default withStyles(styles)(TaskStimulus);
