import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import AddCategoryButton from "./AddCategoryButton";
import Category from "./Category";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
    alignContent: "center"
  },
  categoryTab: {
    marginTop: 5
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleCategoryDelete = e => {
    const currentValue = this.state.value;

    // change tab value when attempting to delete the last category
    if (
      currentValue >= 1 &&
      currentValue === this.props.content.categories.length - 1
    ) {
      this.setState({ value: currentValue - 1 });
    }

    this.props.categories.delete(e);
  };

  render() {
    const { classes, categories, content, scoring, tasks } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {content.categories.map((category, catIndex) => {
              return (
                <Tab
                  label={`C-${catIndex + 1}: ${category.title}`}
                  className={classes.categoryTab}
                />
              );
            })}

            {content.categories.length < 4 ? (
              <AddCategoryButton
                addCategory={categories.add}
                categoryCount={content.categories.length}
              />
            ) : null}
          </Tabs>
        </AppBar>

        {content.categories.length > 0 && (
          <TabContainer key={value}>
            <Category
              catIndex={value}
              categoryCount={content.categories.length}
              updateCategory={categories.update}
              deleteCategory={this.handleCategoryDelete}
              catContent={content.categories[value]}
              scoring={scoring}
              tasks={tasks}
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);