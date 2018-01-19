import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import InputField from "./InputField";
import InputDropdown from "./InputDropdown";
import { metaSchema } from "../config/metaSchema";

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
  const { classes, content, metaUtils, valid } = props;

  // SmartInput iterates over array
  const validateMetaContent = () => {
    return valid.meta ? "green" : "lightgray";
  };

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
        {metaSchema.map((metaItem, metaIndex) => {
          return (
            <SmartInput
              tag={metaItem.tag}
              label={metaItem.label}
              placeholder={metaItem.placeholder}
              value={content[metaItem.tag]}
              options={metaItem.options}
              type={metaItem.type}
              handleChange={metaUtils.update}
              key={metaIndex}
            />
          );
        })}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(Meta);
