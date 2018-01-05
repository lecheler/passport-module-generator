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

// const language = [
//   "Chinese: Zhēn Bàng!",
//   "Chinese: Zhēn Bàng! 2nd Edition",
//   "French: T`es branché ?/",
//   "German: Deutsch Aktuell 6th Edition,2",
//   "German: Deutsch Aktuell 7th Edition,133",
//   "Mirrors and Windows,170",
//   "Mirrors and Windows: CCSS,169",
//   "Spanish: ¡Aventura!,1",
//   "Spanish: ¡Qué chévere!,55"
// ];
class SelectLanguageID extends React.Component {
  // state = {
  //   language: ""
  // };
  constructor(props) {
    super(props);
    this.state = {
      language: ""
    };
  }

  handleDropdownChange = event => {
    // updates local state with name
    this.setState({ language: event.target.value });
    // updates app state with ID
    // reference handleChange function from props here
    this.props.selectLanguageID(event.target.value);
  };

  render() {
    const { classes } = this.props;

    // const options = this.props.options;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="languageID">LanguageID</InputLabel>
          <Select
            value={this.state.language}
            onChange={this.handleDropdownChange}
            input={<Input name="LanguageID" id="languageid" />}
          >
            <MenuItem value={3}>Chinese: Zhēn Bàng!</MenuItem>
            <MenuItem value={155}>Chinese: Zhēn Bàng! 2nd Edition</MenuItem>
            <MenuItem value={4}>French: T`es branché ?</MenuItem>
            <MenuItem value={2}>German: Deutsch Aktuell 6th Edition</MenuItem>
            <MenuItem value={133}>German: Deutsch Aktuell 7th Edition</MenuItem>
            <MenuItem value={170}>Mirrors and Windows</MenuItem>
            <MenuItem value={169}>Mirrors and Windows: CCSS</MenuItem>
            <MenuItem value={1}>Spanish: ¡Aventura!</MenuItem>
            <MenuItem value={55}>Spanish: ¡Qué chévere!</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

SelectLanguageID.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectLanguageID);
