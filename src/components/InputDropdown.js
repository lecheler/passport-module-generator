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

class InputDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDropdownValue: ""
    };
  }

  handleDropdownChange = e => {
    // updates local state with name
    this.setState({ inputDropdownValue: e.target.value });

    // updates app state with ID
    // reference handleChange function from props here

    this.props.handleChange({
      value: e.target.value,
      tag: this.props.tag,
      type: this.props.type
    });
  };

  render() {
    const { classes, tag, label, options } = this.props;

    // const options = this.props.options;
    // console.log(options);
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="inputDropdownValue">{label}</InputLabel>
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
