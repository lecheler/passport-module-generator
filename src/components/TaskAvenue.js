import React from "react";
import { withStyles } from "material-ui/styles";
import InputFieldTwo from "./InputFieldTwo";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import InputDropdown from "./InputDropdown";
import Repeater from "./Repeater";
import AddRepeater from "./AddRepeater";
import Divider from "material-ui/Divider";

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
  { label: "name", type: "string" },
  { label: "instructions", type: "string" },
  { label: "recordingTries", type: "number", max: 10 },
  { label: "recordTime", type: "time", interval: 30 },
  { label: "views", type: "number", max: 6 },
  { label: "mediaTime", type: "time", interval: 1 },
  { label: "mediaWhileRecording", type: "bool" },
  { label: "allowMobile", type: "bool" },
  { label: "unit", type: "number", max: 999 },
  { label: "level", type: "number", max: 999 }
];

const repeaterArray = [
  { label: "label", type: "string", default: "" },
  { label: "max", type: "string", default: "" }
];

function TaskAvenue(props) {
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
        <h5>Task {taskIndex + 1}: Avenue</h5>
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

      <Divider />
      <h5>SLIDERS</h5>

      {taskContent.sliders.map((slider, repeaterIndex) => {
        return (
          <Repeater
            tasks={tasks}
            catIndex={catIndex}
            taskIndex={taskIndex}
            repeaterIndex={repeaterIndex}
            repeaterArray={repeaterArray}
            type="sliders"
            value={slider}
          />
        );
      })}

      {taskContent.sliders.length < 4 ? (
        <AddRepeater
          tasks={tasks}
          catIndex={catIndex}
          taskIndex={taskIndex}
          type="sliders"
          name="Slider"
        />
      ) : null}

      <Divider />
      <h5>ASSETS</h5>
      {taskContent.assets.map((asset, repeaterIndex) => {
        return (
          <Repeater
            tasks={tasks}
            catIndex={catIndex}
            taskIndex={taskIndex}
            repeaterIndex={repeaterIndex}
            repeaterArray={repeaterArray}
            type="assets"
            value={asset}
          />
        );
      })}

      {taskContent.assets.length < 1 ? (
        <AddRepeater
          tasks={tasks}
          catIndex={catIndex}
          taskIndex={taskIndex}
          type="assets"
          name="Asset"
        />
      ) : null}
    </div>
  );
}

export default withStyles(styles)(TaskAvenue);
