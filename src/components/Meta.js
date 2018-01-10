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

const styles = {
  heading: {},
  details: {
    display: "block"
  }
};

function Meta(props) {
  const { classes, content, metaUpdates } = props;

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Title: {content.title}
        </Typography>
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
