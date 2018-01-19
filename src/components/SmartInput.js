import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import InputDropdown from "./InputDropdown";
import InputString from "./InputString";

function SmartInput(props) {
  const { classes } = props;
  const { tag, label, placeholder, value, handleChange, type, options } = props;

  // run check to see if this is a dropdown or input field.
  const checkInput = () => {
    switch (type) {
      case "dropdown":
        return (
          <InputDropdown
            tag={tag}
            label={label}
            options={options}
            handleChange={handleChange}
          />
        );
        break;
      case "string":
        return (
          <InputString
            tag={tag}
            label={label}
            placeholder={placeholder}
            value={value}
            handleChange={handleChange}
          />
        );
        break;
      case "number":
        return (
          <InputString
            tag={tag}
            label={label}
            placeholder={placeholder}
            value={value}
            handleChange={handleChange}
          />
        );
        break;
      case "time":
        return (
          <InputString
            tag={tag}
            label={label}
            placeholder={placeholder}
            value={value}
            handleChange={handleChange}
          />
        );
        break;
    }
  };

  return <div>{checkInput()}</div>;
}

export default SmartInput;
