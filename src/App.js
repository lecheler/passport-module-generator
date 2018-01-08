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

  categories = {
    add: e => {
      this.setState(prevState => {
        let prevCategories = prevState.categories;
        let newCategories = [...prevCategories, e];
        return { categories: newCategories };
      });
    },
    update: (index, newCategory) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        newCategories.splice(index, 1, newCategory);
        return { categories: newCategories };
      });
    },
    delete: index => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        newCategories.splice(index, 1);

        let reorderedCategories = newCategories.map((category, index) => {
          return { ...category, order: index };
        });
        return { categories: reorderedCategories };
      });
    }
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
        case "resources":
          defaultRepeater = { type: "HTTP", url: "", label: "" };
          repeaterArray = "resources";
          break;
        case "assets":
          defaultRepeater = {
            type: "",
            extension: "",
            file: "",
            title: "",
            text: ""
          };
          repeaterArray = "assets";
          break;
        case "sliders":
          defaultRepeater = { max: "", label: "" };
          repeaterArray = "sliders";
          break;
        default:
          return {};
      }

      let prevTask = this.tasks.get(catIndex, taskIndex);
      let newRepeaters = [...prevTask[repeaterArray], defaultRepeater];
      let updatedTask = {
        ...prevTask
      };
      updatedTask[repeaterArray] = newRepeaters;
      this.tasks.update(catIndex, taskIndex, updatedTask);
    },
    updateRepeater: (
      catIndex,
      taskIndex,
      repeaterIndex,
      repeaterUpdate,
      repeaterType
    ) => {
      console.log(
        "catIndex, taskIndex, repeaterIndex, repeaterUpdate",
        catIndex,
        taskIndex,
        repeaterIndex,
        repeaterUpdate,
        repeaterType
      );
      let prevTask = this.tasks.get(catIndex, taskIndex);
      console.log("salkgjelakj?? ", prevTask);
      // let repeaterArrayName =
      //   prevTask.type === "stimulus" ? "resources" : "sliders";

      let updatedRepeater = {
        ...prevTask[repeaterType][repeaterIndex],
        ...repeaterUpdate
      };

      let updatedRepeaterArray = [...prevTask[repeaterType]];
      updatedRepeaterArray.splice(repeaterIndex, 1, updatedRepeater);

      let updatedTask = {
        ...prevTask
      };

      updatedTask[repeaterType] = updatedRepeaterArray;

      this.tasks.update(catIndex, taskIndex, updatedTask);
    },
    removeRepeater: (catIndex, taskIndex, repeaterIndex, type) => {
      let prevTask = this.tasks.get(catIndex, taskIndex);
      let newResources = [...prevTask[type]];
      newResources.splice(repeaterIndex, 1);
      let updatedTask = {
        ...prevTask
      };
      updatedTask[type] = newResources;
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputContainer
          content={this.state}
          categories={this.categories}
          scoring={this.scoring}
          tasks={this.tasks}
          selectLanguageID={this.selectLanguageID}
          updateTitle={this.updateTitle}
          updateDirection={this.updateDirection}
        />
        <XMLContainer content={this.state} />
      </div>
    );
  }
}

export default App;
