import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import InputString from "./InputString";
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
    border: "2px solid lightgray",
    borderRadius: "5px",
    padding: "0px 10px"
  },
  button: {
    margin: theme.spacing.unit
  },
  logo: {
    maxHeight: 20
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

const sliderSchema = [
  { label: "label", type: "string", default: "" },
  { label: "max", type: "string", default: "" }
];

const assetSchema = [
  { label: "type", type: "string", default: "" },
  { label: "extension", type: "string", default: "" },
  { label: "file", type: "string", default: "" },
  { label: "title", type: "string", default: "" },
  { label: "text", type: "string", default: "" }
];

function TaskAvenue(props) {
  const { taskIndex, catIndex, taskUtils, taskContent, classes } = props;

  const handleUpdate = input => {
    let updateObject = {};
    updateObject[input.label] = input.value;
    taskUtils.update(catIndex, taskIndex, updateObject);
  };

  const handleDelete = () => {
    taskUtils.delete(catIndex, taskIndex);
  };

  return (
    <div className={classes.root}>
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
          <InputString
            label={item.label}
            handleChange={handleUpdate}
            placeholder={item.label}
            value={taskContent.label}
            key={index}
            value={taskContent[item.label]}
          />
        );
      })}

      <Divider />
      <h5>Task {taskIndex + 1} Sliders</h5>

      {taskContent.sliders.map((slider, repeaterIndex) => {
        return (
          <Repeater
            taskUtils={taskUtils}
            catIndex={catIndex}
            taskIndex={taskIndex}
            repeaterIndex={repeaterIndex}
            repeaterSchema={sliderSchema}
            key={repeaterIndex}
            repeaterType="sliders"
            value={slider}
          />
        );
      })}

      {taskContent.sliders.length < 4 ? (
        <AddRepeater
          taskUtils={taskUtils}
          catIndex={catIndex}
          taskIndex={taskIndex}
          repeaterType="sliders"
          name="Slider"
        />
      ) : null}

      <Divider />
      <h5>Task {taskIndex + 1} Assets</h5>
      {taskContent.assets.map((asset, repeaterIndex) => {
        return (
          <Repeater
            taskUtils={taskUtils}
            catIndex={catIndex}
            taskIndex={taskIndex}
            repeaterIndex={repeaterIndex}
            repeaterSchema={assetSchema}
            repeaterType="assets"
            value={asset}
          />
        );
      })}

      {taskContent.assets.length < 1 ? (
        <AddRepeater
          taskUtils={taskUtils}
          catIndex={catIndex}
          taskIndex={taskIndex}
          repeaterType="assets"
          name="Asset"
        />
      ) : null}
    </div>
  );
}

TaskAvenue.propTypes = {
  classes: PropTypes.number.isRequired,
  taskUtils: PropTypes.object.isRequired,
  taskContent: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(TaskAvenue);
