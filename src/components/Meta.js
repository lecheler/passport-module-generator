import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import InputField from "./InputField";

function Meta(props) {
  return (
    <div>
      <InputField
        label={"Title"}
        placeholder="add title"
        handleChange={props.metaUpdates.updateTitle}
        //name={props.metaUpdates.content.title}
      />
      <InputField
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
      />
    </div>
  );
}

export default Meta;
