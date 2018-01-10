import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import InputDropdown from "./InputDropdown";
// import InputField from "./InputField";
import AddCategory from "./AddCategory";
import FlipMove from "react-flip-move";
import CategoryTabContainer from "./CategoryTabContainer";
import Meta from "./Meta";

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

  const languageIdOptions = [
    { value: 3, display: "Chinese: Zhēn Bàng!" },
    { value: 155, display: "Chinese: Zhēn Bàng! 2nd Edition" },
    { value: 4, display: "French: T`es branché ?" },
    { value: 2, display: "German: Deutsch Aktuell 6th Edition" },
    { value: 133, display: "German: Deutsch Aktuell 7th Edition" },
    { value: 170, display: "Mirrors and Windows" },
    { value: 169, display: "Mirrors and Windows: CCSS" },
    { value: 1, display: "Spanish: ¡Aventura!" },
    { value: 55, display: "Spanish: ¡Qué chévere!" }
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
            <InputDropdown
              options={languageIdOptions}
              updateInputDropdown={props.updateInputDropdown}
              handleChange={props.updateInputDropdown}
            />
          </Paper>
          <Paper className={classes.paper}>
            <Meta metaUpdates={props.metaUpdates} content={props.content} />
            {/* <InputField
              // verify type of input
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
            /> */}
          </Paper>

          <CategoryTabContainer
            content={props.content}
            categories={props.categories}
            scoring={props.scoring}
            tasks={props.tasks}
          />

          {/*<FlipMove
            duration={300}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {content.categories.map((category, catIndex) => {
              return (
                <Grid item xs={12} key={catIndex}>
                  <Category
                    catIndex={catIndex}
                    updateCategory={props.categories.update}
                    deleteCategory={props.categories.delete}
                    catContent={category}
                    scoring={props.scoring}
                    tasks={props.tasks}
                  />
                </Grid>
              );
            })}
          </FlipMove>
          <AddCategory
            categoryCount={content.categories.length}
            addCategory={props.categories.add}
          />
          */}
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

InputContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputContainer);
