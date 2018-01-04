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
    minWidth: "95%",
    maxWidth: 800
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
  state = {
    language: ""
  };

  handleChange = event => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="languageID">LanguageID</InputLabel>
          <Select
            value={this.state.language}
            onChange={this.handleChange}
            input={<Input name="LanguageID" id="languageid" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Chinese: Zhēn Bàng!</MenuItem>
            <MenuItem value={20}>Chinese: Zhēn Bàng! 2nd Edition</MenuItem>
            <MenuItem value={30}>French: T`es branché ?</MenuItem>
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
