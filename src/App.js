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

import {
  getTask,
  addTask,
  updateTask,
  deleteTask,
  addRepeater,
  updateRepeater,
  deleteRepeater
} from "./utils/tasks";

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
      return getTask(this.state, catIndex, taskIndex);
    },
    count: catIndex => this.state.categories[catIndex].tasks.length,
    add: (catIndex, taskType) => {
      this.setState(prevState => {
        return addTask(prevState, catIndex, taskType);
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
    addRepeater: (catIndex, taskIndex, repeaterType) => {
      this.setState(prevState => {
        return addRepeater(prevState, catIndex, taskIndex, repeaterType);
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
          categoryUtils={this.categoryUtils}
          scoringUtils={this.scoringUtils}
          taskUtils={this.taskUtils}
          metaUpdates={this.metaUpdates}
          valid={this.state.valid}
        />
      </div>
    );
  }
}

export default App;
