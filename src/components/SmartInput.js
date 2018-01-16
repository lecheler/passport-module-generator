import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

function SmartInput(props) {
  const updateSmartInput = input => {};
  const { classes, content, metaUpdates } = props;

  return (
    <div>
      <InputField
        label={"Title"}
        placeholder="add title"
        //handleChange={props.metaUpdates.updateTitle}
        handleChange={updateSmartInput}
      />
      {/* <InputField
        label={"Directions"}
        placeholder="add directions"
        handleChange={props.metaUpdates.updateDirection}
      />
      <InputField
        label={"Image"}
        placeholder="add Image file name"
        handleChange={props.metaUpdates.updateImage}
      />
      <InputField
        label={"Integration Guide URL"}
        placeholder="add Integration Guide URL"
        handleChange={props.metaUpdates.updateigURL}
      />
      <InputField
        label={"Scoring Guide URL"}
        placeholder="add Scoring Guide URL"
        handleChange={props.metaUpdates.updatesgURL}
      /> */}
    </div>
  );
}

// componentName.propTypes = {

// };

export default SmartInput;
