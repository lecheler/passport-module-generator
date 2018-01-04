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

  scoring = {
    get: (catIndex, scoreIndex) =>
      this.state.categories[catIndex].scoring[scoreIndex],
    count: catIndex => this.state.categories[catIndex].scoring.length,
    countMax: 5,
    add: catIndex => {
      this.setState(prevState => {
        // const defaultScore = { score: [{ _attr: { max: 99 } }, "STRING"] };
        const defaultScore = { max: "", label: "" };
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.scoring.push(defaultScore);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    update: (catIndex, scoreIndex, scoreUpdate) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        const prevScore = this.state.categories[catIndex].scoring[scoreIndex];
        const newScore = {
          ...prevScore,
          ...scoreUpdate
        };
        newCategory.scoring.splice(scoreIndex, 1, newScore);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    remove: (catIndex, scoreIndex) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.scoring.splice(scoreIndex, 1);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    }
  };

  updateTitle = e => {
    this.setState({ title: e.target.value });
  };
  updateDirection = e => {
    this.setState({ direction: e.target.value });
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
          scoring={this.scoring}
          deleteCategory={this.deleteCategory}
          updateCategory={this.updateCategory}
          updateTitle={this.updateTitle}
          updateDirection={this.updateDirection}
          updateCategory={this.updateCategory}
        />
        <XMLContainer content={this.state} />
      </div>
    );
  }
}

export default App;
