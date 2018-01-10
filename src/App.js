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

  tasks = {
    get: (catIndex, taskIndex) => {
      // console.log(catIndex, taskIndex);
      // console.log(this.state.categories[catIndex].tasks[taskIndex]);
      return this.state.categories[catIndex].tasks[taskIndex];
    },
    count: catIndex => this.state.categories[catIndex].tasks.length,
    countMax: 5,
    countMin: 1,
    addFlipGrid: catIndex => {
      this.setState(prevState => {
        const defaultTask = { type: "flipgrid", question: "", direction: "" };
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.tasks.push(defaultTask);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    addStimulus: catIndex => {
      this.setState(prevState => {
        const defaultTask = {
          type: "stimulus",
          responseType: "",
          direction: "",
          shortDirection: "",
          resources: []
        };
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.tasks.push(defaultTask);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    addAvenue: catIndex => {
      this.setState(prevState => {
        const defaultTask = {
          type: "avenue",
          name: "",
          instructions: "",
          recordingTries: "",
          recordTime: "",
          views: "",
          mediaTime: "",
          mediaWhileRecording: "",
          allowMobile: "",
          sliders: [],
          assets: [],
          level: "",
          unit: ""
        };
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.tasks.push(defaultTask);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },

    update: (catIndex, taskIndex, taskUpdate) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        const prevTask = this.state.categories[catIndex].tasks[taskIndex];
        const newTask = {
          ...prevTask,
          ...taskUpdate
        };
        newCategory.tasks.splice(taskIndex, 1, newTask);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    remove: (catIndex, taskIndex) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.tasks.splice(taskIndex, 1);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    addRepeater: (catIndex, taskIndex, type) => {
      let defaultRepeater = {};
      let repeaterArray = "";
      switch (type) {
        case "resource":
          defaultRepeater = { type: "HTTP", url: "", label: "" };
          repeaterArray = "resources";
          break;
        case "asset":
          defaultRepeater = {
            type: "",
            extension: "",
            file: "",
            title: "",
            text: ""
          };
          repeaterArray = "assets";
          break;
        case "slider":
          defaultRepeater = { max: "", title: "" };
          repeaterArray = "sliders";
          break;
        default:
          return {};
      }

      const defaultResource = { type: "HTTP", url: "", label: "" };
      let prevTask = this.tasks.get(catIndex, taskIndex);
      let newResources = [...prevTask.resources, defaultResource];
      let updatedTask = {
        ...prevTask
      };
      updatedTask[repeaterArray] = newResources;
      this.tasks.update(catIndex, taskIndex, updatedTask);
    },
    updateRepeater: (catIndex, taskIndex, repeaterIndex, repeaterUpdate) => {
      let prevTask = this.tasks.get(catIndex, taskIndex);
      let repeaterArrayName = (prevTask.type = "stimulus")
        ? "resources"
        : "sliders";

      let updatedRepeater = {
        ...prevTask[repeaterArrayName][repeaterIndex],
        ...repeaterUpdate
      };

      // console.log(updatedRepeater);

      let updatedRepeaterArray = [...prevTask[repeaterArrayName]];
      updatedRepeaterArray.splice(repeaterIndex, 1, updatedRepeater);

      let updatedTask = {
        ...prevTask
      };

      updatedTask[repeaterArrayName] = updatedRepeaterArray;

      this.tasks.update(catIndex, taskIndex, updatedTask);
    }
  };

  updateTitle = e => {
    this.setState({ title: e.target.value });
  };
  updateDirection = e => {
    this.setState({ direction: e.target.value });
  };
  selectLanguageID = value => {
    this.setState({ languageID: value });
  };
  updateInputDropdown = value => {
    this.setState({ inputDropdownValue: value });
  };
  // above igURL and sgURL add image field that is an input field for phase one, for phase 2
  //`igUrl` and `sgUrl` need to be inputs that accept a URL.  The label for igUrl on the front end should be "Integration Guide URL" and sgUrl should be "Scoring Guide URL".

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputContainer
          content={this.state}
          selectLanguageID={this.selectLanguageID}
          updateInputDropdown={this.updateInputDropdown}
          addCategory={this.addCategory}
          scoring={this.scoring}
          tasks={this.tasks}
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
