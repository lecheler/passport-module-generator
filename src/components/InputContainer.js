import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";

import SelectLanguageID from "./SelectLanguageID.js";
import InputDropdown from "./InputDropdown";

import InputField from "./InputField";
import AddCategory from "./AddCategory";
import FlipMove from "react-flip-move";

// import Title from "./Title";
import Category from "./Category";
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

function InputContainer(props) {
  const { classes, content } = props;

  const options = [
    { value: "my value", display: "name to display" },
    { value: "my value", display: "name to display" }
  ];

  const anotherOption = [
    { value: 1, display: "on" },
    { value: 0, display: "off" }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={8} md={10}>
          <Paper className={classes.paper}>
            <SelectLanguageID
              // send selectLanguageID through here
              handleChange={props.languageID}
              languageID={props.content.language}
              // get rid of this line
              selectLanguageID={props.selectLanguageID}
            />
            <InputDropdown
              name="string"
              id="string"
              options="array"
              handleChange="function"
            />
          </Paper>
          <Paper className={classes.paper}>
            <InputField
              label={"Title"}
              placeholder="add title"
              handleChange={props.updateTitle}
              title={props.content.title}
            />
            <InputField
              label={"Directions"}
              placeholder="add directions"
              handleChange={props.updateDirection}
              description={props.content.direction}
            />
          </Paper>
          <FlipMove
            duration={300}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {content.categories.map((category, index) => {
              {
                /*console.log("bananas", category);*/
              }
              return (
                <Grid item xs={12} key={index}>
                  <Category
                    type="stimulus"
                    index={index}
                    updateCategory={props.updateCategory}
                    updateValidCategory={props.updateValidCategory}
                    deleteCategory={props.deleteCategory}
                    catContent={category}
                    scoring={props.scoring}
                    tasks={props.tasks}
                  />
                </Grid>
              );
            })}
          </FlipMove>
        </Grid>
        <Grid item xs />
      </Grid>
      <AddCategory
        categoryCount={content.categories.length}
        addCategory={props.addCategory}
      />
    </div>
  );
}

InputContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputContainer);
