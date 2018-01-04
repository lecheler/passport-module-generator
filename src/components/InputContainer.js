import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";

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
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={8} md={10}>
          <Paper className={classes.paper}>
            <h2>section 1</h2>
            <InputField
              placeholder="add title"
              handleChange={props.updateTitle}
              title={props.content.title}
            />
            <InputField
              placeholder="add desc"
              handleChange={props.updateTitle}
              title={props.content.title}
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
