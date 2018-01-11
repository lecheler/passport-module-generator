import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import InputField from "./InputField";
import InputString from "./InputString";
import DeleteCategory from "./DeleteCategory";
import AddScore from "./AddScore";
import AddTask from "./AddTask";
import Score from "./Score";
import Task from "./Task";
import Icon from "material-ui/Icon";
import CheckCircle from "material-ui-icons/CheckCircle";

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
  },
  deleteBar: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center"
  }
});

const validateContent = content => {
  const validateObject = object => {
    return Object.keys(object).every(key => {
      if (Array.isArray(object[key])) {
        return object[key].every(itemInArray => {
          return validateObject(itemInArray);
        });
      } else return object[key] ? true : false;
    });
  };

  const validScores = content.scoring.every(score => {
    return validateObject(score);
  });

  const validTasks = content.tasks.every(task => {
    return validateObject(task);
  });

  return content.title && validScores && validTasks ? "green" : "lightgray";
};

class Category extends Component {
  updateCatTitle = e => {
    // console.log(e);
    let newCategory = { ...this.props.catContent };
    newCategory.title = e.value;
    this.props.updateCategory(this.props.catIndex, newCategory);
  };

  render() {
    const {
      classes,
      catIndex,
      catContent,
      scoring,
      tasks,
      categoryCount
    } = this.props;
    // console.log("catContent", catContent);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.deleteBar}>
            <Icon style={{ color: validateContent(catContent) }}>
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
            label="Title"
            handleChange={this.updateCatTitle}
            placeholder="Title"
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
                scoring={this.props.scoring}
                scoreContent={this.props.scoring.get(catIndex, scoreIndex)}
                catIndex={catIndex}
                scoreIndex={scoreIndex}
                key={scoreIndex}
              />
            ))}
          </FlipMove>
          {scoring.count(catIndex) < scoring.countMax ? (
            <AddScore catIndex={catIndex} scoring={this.props.scoring} />
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
                tasks={tasks}
                taskContent={tasks.get(catIndex, taskIndex)}
                catIndex={catIndex}
                taskIndex={taskIndex}
                key={taskIndex}
              />
            ))}
          </FlipMove>

          {tasks.count(catIndex) < tasks.countMax ? (
            <AddTask catIndex={catIndex} tasks={this.props.tasks} />
          ) : null}
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
