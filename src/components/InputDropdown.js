import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;

class InputDropdown extends React.Component {
  // state = {
  //   language: ""
  // };
  constructor(props) {
    super(props);
    this.state = {
      inputDropdownValue: ""
    };
  }

  handleDropdownChange = event => {
    // updates local state with name
    this.setState({ inputDropdownValue: event.target.value });

    // updates app state with ID
    // reference handleChange function from props here
    this.props.handleChange(event.target.value);
  };

  render() {
    const { classes, label, options } = this.props;

    // const options = this.props.options;
    console.log(options);
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="inputDropdownValue">Program</InputLabel>
          <Select
            value={this.state.inputDropdownValue}
            onChange={this.handleDropdownChange}
            input={<Input name="inputDropdownValue" id="inputDropdownValue" />}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.display}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

InputDropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputDropdown);
