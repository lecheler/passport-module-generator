import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import XMLContainer from "./components/XMLContainer";
import InputContainer from "./components/InputContainer";
import sample from "./data/sample.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Temp Title",
      direction: "Temp Directions",
      language_ID: "Temp Language Id",
      level: "Temp Level",
      categories: []
    };
  }

  addCategory = e => {
    this.setState(prevState => {
      let prevCategories = prevState.categories;
      let newCategories = [...prevCategories, e];
      return { categories: newCategories };
    });
  };

  deleteCategory = index => {
    // console.log("DELETE", index);
    this.setState(prevState => {
      let newCategories = [...prevState.categories];
      newCategories.splice(index, 1);

      let reorderedCategories = newCategories.map((category, index) => {
        return { ...category, order: index };
      });
      return { categories: reorderedCategories };
    });
  };

  updateCategory = (index, newCategory) => {
    this.setState(prevState => {
      // console.log("new cat >>> ", newCategory);
      let newCategories = [...prevState.categories];
      newCategories.splice(index, 1, newCategory);
      return { categories: newCategories };
    });
  };

  addScore = catIndex => {
    console.log("ADD SCORE", catIndex);
  };

  removeScore = (catIndex, scoreIndex) => {
    console.log("REMOVING SCORE", scoreIndex, "from category", catIndex);
  };

  updateTitle = e => {
    this.setState({ title: e });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputContainer
          content={this.state}
          addCategory={this.addCategory}
          removeScore={this.removeScore}
          addScore={this.addScore}
          deleteCategory={this.deleteCategory}
          updateCategory={this.updateCategory}
          updateTitle={this.updateTitle}
          updateCategory={this.updateCategory}
        />
        <XMLContainer content={this.state} />
      </div>
    );
  }
}

export default App;
