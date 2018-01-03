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

  delete;

  updateCategory = newCategory => {
    this.setState(prevState => {
      let index = newCategory.order;
      let newCategories = prevState.categories;
      newCategories.splice(index, 1, newCategory);
      return { categories: newCategories };
    });
  };
  updateTitle = e => {
    this.setState({ title: e });
  };

  render() {
    // const handleChange = event => {
    //   // let fieldName = event.target.name;
    //   // let fleldVal = event.target.value;
    //   // this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
    //   console.log("change happened");
    // };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputContainer
          content={this.state}
          addCategory={this.addCategory}
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
