import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import InputField from "./InputField";
import InputFieldTwo from "./InputFieldTwo";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 10,
    marginBottom: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.index,
      title: "",
      scoring: ["max 5"],
      tasks: ["max tasks?"]
    };
  }

  updateCategory = () => {
    let formatedCategory = {
      category: [
        { _attr: { order: this.state.order } },
        { title: this.state.title },
        { scoring: this.state.scoring },
        { tasks: this.state.tasks }
      ]
    };
    console.log(this.state);
    this.props.updateCategory(formatedCategory);
  };

  updateCatTitle = obj => {
    this.setState({ title: obj.value }, () => this.updateCategory());
  };

  render() {
    const { classes, index } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h2>Category {index + 1}</h2>
          <InputFieldTwo
            handleChange={this.updateCatTitle}
            placeholder="Category Title"
          />
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
