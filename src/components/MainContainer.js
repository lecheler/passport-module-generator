import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import CategoryTabContainer from "./CategoryTabContainer";
import Meta from "./Meta";
import XMLContainer from "./XMLContainer";

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
    categoryUtils,
    scoringUtils,
    taskUtils,
    metaUtils,
    valid
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={8} md={10}>
          <Paper className={classes.paper}>
            <Meta metaUtils={metaUtils} content={content} valid={valid} />
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
  metaUtils: PropTypes.object.isRequired,
  valid: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContainer);
