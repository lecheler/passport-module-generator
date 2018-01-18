import React, { Component } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  validateCategory
} from "./utils/categories";
import { addScore, updateScore, deleteScore } from "./utils/scoring";

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
          order: 0,
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

  validateAllCategories = () => {
    let isAllValid = this.state.categories.every(validateCategory);
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

  categoryUtils = {
    add: () => {
      this.setState(prevState => addCategory(prevState));
    },
    update: (catIndex, newCategory) => {
      this.setState(prevState =>
        updateCategory(prevState, catIndex, newCategory)
      );
    },
    validate: catContent => {
      return validateCategory(catContent);
    },
    delete: catIndex => {
      this.setState(prevState => deleteCategory(prevState, catIndex));
    }
  };

  /* ==================== SCORING ==================== */
  scoringUtils = {
    countMax: 5,
    get: (catIndex, scoreIndex) => {
      return this.state.categories[catIndex].scoring[scoreIndex];
    },
    count: catIndex => this.state.categories[catIndex].scoring.length,
    add: catIndex => {
      this.setState(prevState => {
        return addScore(prevState, catIndex);
      });
    },
    update: (catIndex, scoreIndex, scoreUpdate) => {
      this.setState(prevState => {
        return updateScore(prevState, catIndex, scoreIndex, scoreUpdate);
      });
    },
    delete: (catIndex, scoreIndex) => {
      this.setState(prevState => {
        return deleteScore(prevState, catIndex, scoreIndex);
      });
    }
  };

  /* ==================== TASKS ==================== */

  taskUtils = {
    countMax: 5,
    countMin: 1,
    get: (catIndex, taskIndex) => {
      return this.state.categories[catIndex].tasks[taskIndex];
    },
    count: catIndex => this.state.categories[catIndex].tasks.length,
    addFlipGrid: catIndex => {
      this.setState(prevState => {
        return addFlipGrid(prevState, catIndex);
      });
    },
    addStimulus: catIndex => {
      this.setState(prevState => {
        return addStimulus(prevState, catIndex);
      });
    },
    addAvenue: catIndex => {
      this.setState(prevState => {
        return addAvenue(prevState, catIndex);
      });
    },
    addExistingAvenue: catIndex => {
      this.setState(prevState => {
        return addExistingAvenue(prevState, catIndex);
      });
    },
    update: (catIndex, taskIndex, taskUpdate) => {
      this.setState(prevState => {
        return updateTask(prevState, catIndex, taskIndex, taskUpdate);
      });
    },
    delete: (catIndex, taskIndex) => {
      this.setState(prevState => {
        return deleteTask(prevState, catIndex, taskIndex);
      });
    },
    addRepeater: (catIndex, taskIndex, type) => {
      this.setState(prevState => {
        return addRepeater(prevState, catIndex, taskIndex, type);
      });
    },
    updateRepeater: (
      catIndex,
      taskIndex,
      repeaterIndex,
      repeaterUpdate,
      repeaterType
    ) => {
      this.setState(prevState => {
        return updateRepeater(
          prevState,
          catIndex,
          taskIndex,
          repeaterIndex,
          repeaterUpdate,
          repeaterType
        );
      });
    },
    deleteRepeater: (catIndex, taskIndex, repeaterIndex, repeaterType) => {
      this.setState(prevState => {
        return deleteRepeater(
          prevState,
          catIndex,
          taskIndex,
          repeaterIndex,
          repeaterType
        );
      });
    }
  };

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
          taskId: ""
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
          categoryUtils={this.categoryUtils}
          scoringUtils={this.scoringUtils}
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
