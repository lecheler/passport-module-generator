import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import InputDropdown from "./InputDropdown";
import FlipMove from "react-flip-move";
import CategoryTabContainer from "./CategoryTabContainer";
import Meta from "./Meta";
import XMLContainer from "./XMLContainer";
import Category from "./Category";

const styles = theme => ({
  root: {
    marginTop: 30
  },
  paper: {
    padding: 10,
    marginBottom: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paperBottom: {
    padding: 10,
    marginTop: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function MainContainer(props) {
  const {
    classes,
    content,
    categories,
    categoryUtils,
    scoringUtils,
    taskUtils,
    valid
  } = props;
  // const anotherOption = [
  //   { value: 1, display: "on" },
  //   { value: 0, display: "off" }
  // ];

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={8} md={10}>
          {/* <Paper className={classes.paper}>
            <InputDropdown
              options={languageIdOptions}
              updateInputDropdown={props.updateInputDropdown}
              handleChange={props.updateInputDropdown}
            />
          </Paper> */}
          <Paper className={classes.paper}>
            <Meta metaUpdates={props.metaUpdates} content={props.content} />
          </Paper>
          <CategoryTabContainer
            content={content}
            categoryUtils={categoryUtils}
            scoringUtils={scoringUtils}
            taskUtils={taskUtils}
          />

          <Paper className={classes.paperBottom}>
            <XMLContainer content={content} valid={valid} />
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  categoryUtils: PropTypes.object.isRequired,
  scoringUtils: PropTypes.object.isRequired,
  taskUtils: PropTypes.object.isRequired,
  metaUpdates: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired
};

export default withStyles(styles)(MainContainer);
