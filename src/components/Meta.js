import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import InputField from "./InputField";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Icon from "material-ui/Icon";
import CheckCircle from "material-ui-icons/CheckCircle";

const styles = {
  heading: { display: "flex", alignItems: "center" },
  details: {
    display: "block"
  }
};

const validateMetaContent = object => {
  let isValid = Object.keys(object).every(key => {
    return object[key] ? true : false;
  });
  return isValid ? "green" : "lightgray";
};

function Meta(props) {
  const { classes, content, metaUpdates } = props;
  const metaContent = {
    title: content.title,
    direction: content.direction,
    languageID: content.languageID,
    level: content.level,
    igURL: content.igURL,
    sgURL: content.sgURL,
    image: content.image
  };
  console.log(metaContent);

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.heading}>
          <Icon
            style={{ color: validateMetaContent(metaContent), marginRight: 20 }}
          >
            <CheckCircle />
          </Icon>
          <h2 className={classes.heading}>
            Title: {content.title ? content.title : "---"}
          </h2>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <InputField
          // verify type of input
          label={"Title"}
          placeholder="add title"
          handleChange={metaUpdates.updateTitle}
          //name={props.metaUpdates.content.title}
        />
        <InputField
          label={"Directions"}
          placeholder="add directions"
          handleChange={metaUpdates.updateDirection}
          //name={props.content.direction}
        />
        <InputField
          label={"Image"}
          placeholder="add Image file name"
          handleChange={metaUpdates.updateImage}
          //name={props.content.direction}
        />
        <InputField
          label={"Integration Guide URL"}
          placeholder="add Integration Guide URL"
          handleChange={metaUpdates.updateigURL}
        />
        <InputField
          label={"Scoring Guide URL"}
          placeholder="add Scoring Guide URL"
          handleChange={metaUpdates.updatesgURL}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(Meta);
