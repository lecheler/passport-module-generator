import React, { Component } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      direction: "",
      languageID: "",
      igURL: "",
      sgURL: "",
      image: "",
      categories: [
        {
          order: 1,
          title: "",
          scoring: [{ max: "", label: "" }],
          tasks: []
        }
      ],
      valid: {
        meta: false,
        categories: false
      },
      height: props.height
    };
  }

  validateMetaContent = () => {
    const metaContent = {
      title: this.state.title,
      direction: this.state.direction,
      languageID: this.state.languageID,
      level: this.state.level,
      igURL: this.state.igURL,
      sgURL: this.state.sgURL,
      image: this.state.image
    };
    return Object.keys(metaContent).every(key => {
      return metaContent[key] ? true : false;
    });
  };

  validateCategoryContent = content => {
    const validateObject = object => {
      return Object.keys(object).every(key => {
        if (Array.isArray(object[key])) {
          return object[key].every(itemInArray => {
            return validateObject(itemInArray);
          });
        } else return object[key] ? true : false;
      });
    };
    const validScores = content.scoring.every(score => {
      return validateObject(score);
    });
    const validTasks = content.tasks.every(task => {
      return validateObject(task);
    });
    return content.title && validScores && validTasks ? true : false;
  };

  validateAllCategories = () => {
    let isAllValid = this.state.categories.every(this.validateCategoryContent);
    return isAllValid;
  };

  componentWillMount() {
    this.setState({ height: window.innerHeight + "1px" });
  }

  componentDidUpdate() {
    /* ===== VALIDATE META ===== */
    if (this.validateMetaContent() != this.state.valid.meta) {
      this.setState({
        valid: { ...this.state.valid, meta: this.validateMetaContent() }
      });
    }
    /* ==== VALIDATE CATEGORIES ===== */
    // console.log(this.validateAllCategories());
    if (this.validateAllCategories() != this.state.valid.categories) {
      this.setState({
        valid: { ...this.state.valid, categories: this.validateAllCategories() }
      });
    }
  }

  /* ==================== CATEGORIES ==================== */
  categories = {
    /* ----- Add new category ----- */
    add: e => {
      this.setState(prevState => {
        let defaultCategory = {
          order: prevState.categories.length,
          title: "",
          scoring: [{ max: "", label: "" }],
          tasks: []
        };
        let prevCategories = prevState.categories;
        let newCategories = [...prevCategories, defaultCategory];
        return { categories: newCategories };
      });
    },
    /* ----- Update category ----- */
    update: (index, newCategory) => {
      this.setState(prevState => {
        let newCategories = [...prevState.categories];
        newCategories.splice(index, 1, newCategory);
        return { categories: newCategories };
      });
    },
    validate: catContent => {
      return this.validateCategoryContent(catContent);
    },
    /* ----- Delete category ----- */
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

  /* ==================== SCORING ==================== */
  scoring = {
    /* ----- Get info on score ----- */
    get: (catIndex, scoreIndex) =>
      this.state.categories[catIndex].scoring[scoreIndex],
    /* ----- Get current number of scores ----- */
    count: catIndex => this.state.categories[catIndex].scoring.length,
    /* ----- Max number of scores ----- */
    countMax: 5,
    /* ----- Add a new score ----- */
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
    /* ----- Update score ----- */
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

  /* ==================== TASKS ==================== */
  tasks = {
    /* ----- Get info on tasks ----- */
    get: (catIndex, taskIndex) => {
      return this.state.categories[catIndex].tasks[taskIndex];
    },
    /* ----- Get current number of tasks ----- */
    count: catIndex => this.state.categories[catIndex].tasks.length,
    /* ----- Max and min number of tasks ----- */
    countMax: 5,
    countMin: 1,
    /* ----- Add task controls ----- */
    addFlipGrid: catIndex => {
      this.setState(prevState => {
        const defaultTask = {
          type: "flipgrid",
          question: "",
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
    addExistingAvenue: catIndex => {
      this.setState(prevState => {
        const defaultTask = {
          type: "avenue-existing",
          avenueTaskID: "",
          direction: "",
          shortDirection: ""
        };
        let newCategories = [...prevState.categories];
        let newCategory = newCategories[catIndex];
        newCategory.tasks.push(defaultTask);
        newCategories.splice(catIndex, 1, newCategory);
        return { categories: newCategories };
      });
    },
    /* ----- Update and remove tasks ----- */
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
    /* ----- Reapeater controls ----- */
    /* Types: resources, assests, sliders
    /* Limits: Flipgrid / Stimulus: resources(unlimited), Avenue: assets(1), sliders(5) */
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
    /* ----- Update repeater ----- */
    updateRepeater: (
      catIndex,
      taskIndex,
      repeaterIndex,
      repeaterUpdate,
      repeaterType
    ) => {
      let prevTask = this.tasks.get(catIndex, taskIndex);
      console.log(
        catIndex,
        taskIndex,
        repeaterIndex,
        repeaterUpdate,
        repeaterType
      );
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
    /* ----- Remove repeater ----- */

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

  /* ==================== META DATA ==================== */

  // combine functions to receive tag

  metaUpdates = {
    updateLanguageId: inputDropdownValue => {
      this.setState({ languageID: inputDropdownValue });
    },

    updateTitle: e => {
      this.setState({ title: e.target.value });
    },
    updateLevel: e => {
      this.setState({ level: e.target.value });
    },
    updateDirection: e => {
      this.setState({ direction: e.target.value });
    },
    updateImage: e => {
      this.setState({ image: e.target.value });
    },
    updateigURL: e => {
      this.setState({ igURL: e.target.value });
    },
    updatesgURL: e => {
      this.setState({ sgURL: e.target.value });
    }
  };

  /* ==================== COMPONENT RENDER ==================== */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img alt="Passport logo" src="passport_logo.png" />
            <h1 className="App-title">Module Generator</h1>
          </div>
        </header>
        <MainContainer
          content={this.state}
          categories={this.categories}
          scoring={this.scoring}
          tasks={this.tasks}
          metaUpdates={this.metaUpdates}
          validateCategoryContent={this.validateCategoryContent}
          valid={this.state.valid}
        />
      </div>
    );
  }
}

export default App;
