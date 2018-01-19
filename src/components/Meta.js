import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import InputField from "./InputField";
import InputDropdown from "./InputDropdown";

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import SmartInput from "./SmartInput";
import Icon from "material-ui/Icon";
import CheckCircle from "material-ui-icons/CheckCircle";

const styles = {
  heading: { display: "flex", alignItems: "center" },
  details: {
    display: "block"
  }
};

function Meta(props) {
  const { classes, content, metaUpdates } = props;
  const { valid } = props;

  // SmartInput iterates over array
  const metaContent = [
    {
      label: "Title",
      tag: "title",
      type: "string",
      handleChange: metaUpdates.updateTitle
    },
    {
      label: "Direction",
      tag: "direction",
      type: "string",
      handleChange: metaUpdates.updateDirection
    },
    {
      label: "Language ID",
      tag: "languageID",
      type: "dropdown",
      handleChange: metaUpdates.updateLanguageId,
      options: [
        { value: 3, display: "Chinese: Zhēn Bàng!" },
        { value: 155, display: "Chinese: Zhēn Bàng! 2nd Edition" },
        { value: 4, display: "French: T`es branché ?" },
        { value: 2, display: "German: Deutsch Aktuell 6th Edition" },
        { value: 133, display: "German: Deutsch Aktuell 7th Edition" },
        { value: 170, display: "Mirrors and Windows" },
        { value: 169, display: "Mirrors and Windows: CCSS" },
        { value: 1, display: "Spanish: ¡Aventura!" },
        { value: 55, display: "Spanish: ¡Qué chévere!" }
      ]
    },
    {
      label: "Level",
      tag: "level",
      type: "number",
      handleChange: metaUpdates.updateLevel
    },
    {
      label: "Integration Guide URL",
      tag: "igURL",
      type: "string",
      handleChange: metaUpdates.updateigURL
    },
    {
      label: "Student Guide URL",
      tag: "sgURL",
      type: "string",
      handleChange: metaUpdates.updatesgURL
    },
    {
      label: "Image (.jpg or .png)",
      tag: "image",
      type: "string",
      handleChange: metaUpdates.updateImage
    }
  ];

  const validateMetaContent = () => {
    return content.valid.meta ? "green" : "lightgray";
  };

  // //RegExp (?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\.(?:jpg|jpeg))(?:\?([^#]*))?(?:#(.*))?

  // const validateJpg = () => {
  //   console.log(Meta[7]);
  // };
  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.heading}>
          <Icon
            style={{
              color: validateMetaContent(),
              marginRight: 20
            }}
          >
            <CheckCircle />
          </Icon>
          <h2 className={classes.heading}>
            Title: {content.title ? content.title : "---"}
          </h2>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        {metaContent.map((metaItem, metaIndex) => {
          return (
            <SmartInput
              metaItem={metaItem}
              key={metaIndex}
              //validatejpg={validateJpg(metaItem[7])}
            />
          );
        })}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(Meta);
