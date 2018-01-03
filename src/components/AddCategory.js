import React, { Component } from "react";

export default class componentName extends Component {
  handleAddCategory = () => {
    if (this.props.categoryCount >= 4) {
      alert(
        "Whoa there partner! Our supreme leader has set a limit of 4 categories."
      );
    } else this.props.addCategory({ test: "whooo" });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddCategory}>Add Category</button>
      </div>
    );
  }
}
