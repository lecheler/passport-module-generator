import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import InputDropdown from "./InputDropdown";

function SmartInput(props) {
  const { classes } = props;
  const { label, handleChange, type, options } = props.metaItem;

  // run check to see if this is a dropdown or input field.
  const checkInput = () => {
    switch (type) {
      case "dropdown":
        return (
          <InputDropdown
            label="Program"
            options={options}
            handleChange={handleChange}
          />
        );
        break;
      case "string":
        return <InputField label={label} handleChange={handleChange} />;
        break;
      case "number":
        return <InputField label={label} handleChange={handleChange} />;
        break;
      // case "complexstring":
      //   return <InputField label={label} handleChange={handleChange} />;
      //   break;
    }
  };

  return <div>{checkInput()}</div>;
}

export default SmartInput;
