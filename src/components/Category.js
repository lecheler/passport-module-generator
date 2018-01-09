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
import InputFieldTwo from "./InputFieldTwo";
import DeleteCategory from "./DeleteCategory";
import AddScore from "./AddScore";
import AddTask from "./AddTask";
import Score from "./Score";
import Task from "./Task";

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
    marginBottom: "10px"
  }
});

class Category extends Component {
  updateCatTitle = e => {
    // console.log(e);
    let newCategory = { ...this.props.catContent };
    newCategory.title = e.value;
    this.props.updateCategory(this.props.index, newCategory);
  };

  render() {
    const { classes, index, catContent, scoring, tasks } = this.props;
    // console.log("catContent", catContent);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h2>Category {index + 1}</h2>
          <div className={classes.deleteBar}>
            <InputFieldTwo
              label={`Category ${catContent.order + 1} Title`}
              handleChange={this.updateCatTitle}
              placeholder="Category Title"
              value={catContent.title}
            />
            <DeleteCategory
              index={index}
              deleteCategory={this.props.deleteCategory}
            />
          </div>
          <Divider />
          {/*<h2>Category {index + 1}</h2>*/}
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
                scoreContent={this.props.scoring.get(index, scoreIndex)}
                catIndex={index}
                scoreIndex={scoreIndex}
                key={scoreIndex}
              />
            ))}
          </FlipMove>
          {scoring.count(index) < scoring.countMax ? (
            <AddScore catIndex={index} scoring={this.props.scoring} />
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
                taskContent={tasks.get(index, taskIndex)}
                catIndex={index}
                taskIndex={taskIndex}
                key={taskIndex}
              />
            ))}
          </FlipMove>
          {tasks.count(index) < tasks.countMax ? (
            <AddTask catIndex={index} tasks={this.props.tasks} />
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
