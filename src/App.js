import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import XMLContainer from "./components/XMLContainer";
import InputContainer from "./components/InputContainer";
import sample from "./data/sample.js";
import InputField from "./components/InputField";
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
    const updateTitle = () => {
      console.log("updateTitle");
    };
    updateTitle();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

<<<<<<< HEAD
        <InputContainer content={this.state.content}>
          <InputField>
            <input placeholder="placeholder" />
          </InputField>
        </InputContainer>
        {/*<XMLContainer content={this.state.content} />*/}
        <XMLContainer content={sample} />
=======
        <InputContainer content={this.state} />
        <XMLContainer content={this.state} />
>>>>>>> e163b8ca9b1d5f6d0dda242cc45b0b671db66202
      </div>
    );
  }
}

export default App;
