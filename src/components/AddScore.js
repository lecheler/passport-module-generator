import React, { Component } from "react";

export default class AddScore extends Component {
  // handleAddScore = () => {
  //   if (this.props.categoryCount >= 4) {
  //     alert("Slow your roll! Our master has set a limit of 5 total scores.");
  //   } else
  //     this.props.addScore({
  //       index: this.props.index,
  //       score: { score: [{ _attr: { max: 99 } }, "STRING"] }
  //     });
  // };

  handleAddScore = () => {
    if (
      this.props.scoring.count(this.props.catIndex) >=
      this.props.scoring.countMax
    ) {
      alert("Slow your roll! Our master has set a limit of 5 total scores.");
    } else this.props.scoring.add(this.props.catIndex);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddScore}>Add Score</button>
      </div>
    );
  }
}
