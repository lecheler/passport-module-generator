import React, { Component } from "react";

export default class AddScore extends Component {
  handleAddScore = () => {
    if (this.props.categoryCount >= 4) {
      alert("Slow your roll! Our master has set a limit of 5 total scores.");
    } else
      this.props.addScore({
        index: this.props.index,
        score: { score: [{ _attr: { max: 99 } }, "STRING"] }
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddScore}>Add Score</button>
      </div>
    );
  }
}
