import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import SmartInput from "./SmartInput";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import Repeater from "./Repeater";
import AddRepeater from "./AddRepeater";
import Divider from "material-ui/Divider";
import {
  avenueSchema,
  assetSchema,
  sliderSchema
} from "../config/taskAvenueSchema";

const styles = theme => ({
  root: { width: "100%" },
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

function TaskAvenue(props) {
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
        <h5>Task {taskIndex + 1}: Avenue</h5>

        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      {avenueSchema.map((item, index) => {
        return (
          <SmartInput
            tag={item.tag}
            label={item.label}
            placeholder={item.placeholder}
            value={taskContent[item.label]}
            handleChange={handleUpdate}
            type={item.type}
            key={index}
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
