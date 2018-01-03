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

  render() {
    const updateTitle = e => {
      this.setState({ title: e });
    };

    const handleChange = event => {
      // let fieldName = event.target.name;
      // let fleldVal = event.target.value;
      // this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
      console.log("change happened");
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputContainer content={this.state} updateTitle={this.updateTitle} />
        <XMLContainer content={this.state} />
      </div>
    );
  }
}

export default App;
