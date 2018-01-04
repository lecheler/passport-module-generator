import React, { Component } from "react";

export default class DeleteCategory extends Component {
  handleDelete = () => {
    this.props.deleteCategory(this.props.index);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>Delete Category</button>
      </div>
    );
  }
}
