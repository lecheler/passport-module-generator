import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import InputString from "./InputString";
import DeleteCategory from "./DeleteCategory";
import AddScore from "./AddScore";
import AddTask from "./AddTask";
import Score from "./Score";
import Task from "./Task";
import Icon from "material-ui/Icon";
import CheckCircle from "material-ui-icons/CheckCircle";
import { categorySchema } from "../config/categorySchema";

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
  deleteBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center"
  }
});

class Category extends Component {
  isCategoryValid = () => {
    return this.props.validate(this.props.catContent) ? "green" : "lightgray";
  };

  updateCatTitle = e => {
    let newCategory = { ...this.props.catContent };
    newCategory.title = e.value;
    this.props.updateCategory(this.props.catIndex, newCategory);
  };

  render() {
    const {
      classes,
      catIndex,
      catContent,
      scoringUtils,
      taskUtils,
      categoryCount
    } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.deleteBar}>
            <Icon style={{ color: this.isCategoryValid() }}>
              <CheckCircle />
            </Icon>

            <h2>Category {catIndex + 1}</h2>

            {categoryCount > 1 ? (
              <DeleteCategory
                catIndex={catIndex}
                deleteCategory={this.props.deleteCategory}
              />
            ) : (
              <div />
            )}
          </div>
          <Divider />
          <InputString
            tag={categorySchema.tag}
            label={categorySchema.label}
            placeholder={categorySchema.placeholder}
            handleChange={this.updateCatTitle}
            value={catContent.title}
          />
          <Divider />
          {/*<h2>Category {catIndex + 1}</h2>*/}
          <h3>Scores</h3>
          <FlipMove
            duration={100}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {catContent.scoring.map((score, scoreIndex) => (
              <Score
                scoringUtils={scoringUtils}
                scoreContent={scoringUtils.get(catIndex, scoreIndex)}
                catIndex={catIndex}
                scoreIndex={scoreIndex}
                key={scoreIndex}
              />
            ))}
          </FlipMove>
          {scoringUtils.count(catIndex) < scoringUtils.countMax ? (
            <AddScore catIndex={catIndex} scoringUtils={scoringUtils} />
          ) : null}
          <Divider />
          <h3>Tasks</h3>
          <FlipMove
            duration={100}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {catContent.tasks.map((score, taskIndex) => (
              <Task
                taskUtils={taskUtils}
                taskContent={catContent.tasks[taskIndex]}
                catIndex={catIndex}
                taskIndex={taskIndex}
                key={taskIndex}
              />
            ))}
          </FlipMove>

          {taskUtils.count(catIndex) < taskUtils.countMax ? (
            <AddTask catIndex={catIndex} taskUtils={taskUtils} />
          ) : null}
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.object.isRequired,
  catContent: PropTypes.object.isRequired,
  scoringUtils: PropTypes.object.isRequired,
  taskUtils: PropTypes.object.isRequired,
  categoryCount: PropTypes.number.isRequired,
  validate: PropTypes.func.isRequired
};

export default withStyles(styles)(Category);
