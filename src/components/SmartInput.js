import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

function SmartInput(props) {
  // run check to see if this is a dropdown or input field.
  const checkInput = () => {
    return "ran input";
  };

  const { classes, label, type, handleChange } = props;

  return (
    <div>
      <InputField
        label={label}
        type={type}
        handleChange={handleChange}
        checkInput={checkInput}
      />
    </div>
  );
}

// componentName.propTypes = {

// };

export default SmartInput;
