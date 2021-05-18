import React from "react";
import "./CodeArea.css";
import MonacoEditor from "react-monaco-editor";
import querystring from "querystring";
import axios from "../../../axios";
import Error from "../error/Error";
import * as actions from "../../../store/actions/actions";
import { connect } from "react-redux";

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// Write or paste your code here to submit",
      language: "",
      error: "",
      fileExt: "",
      questionId: "",
    };
  }

  options = {
    selectOnLineNumbers: true,
  };

  editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  onChange = (newValue, e) => {
    this.setState({
      code: newValue,
    });
  };

  handleLanguage = (event) => {
    event.preventDefault();
    this.setState({
      language: event.target.value,
    });
    console.log(event.target.value);
  };

  submitTextAra = async (event) => {
    event.preventDefault();
    var setFileExt = "";
    switch (this.state.language) {
      case "java":
        setFileExt = "java";
        break;
      case "cpp":
        setFileExt = "cpp";
        break;
      case "python":
        setFileExt = "py";
        break;
      case "c":
        setFileExt = "c";
        break;
      default:
        setFileExt = "cpp";
        break;
    }

    const jsonData = {
      code: this.state.code,
      file_ext: setFileExt,
      questionID: this.props.qid,
    };

    console.log("====================================");
    console.log(jsonData);
    console.log("====================================");
    // json to string
    const data = querystring.stringify(jsonData);

    await axios
      .post("/judge", data)
      .then((result) => {
        console.log("result: ", result);
        // this.setState({
        //   error: result.error,
        // });
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
  render() {
    return (
      <div className="editor">
        <div className="editor-group">
          <div className="editor__label">
            <label for="sourceCode">
              <strong> Language </strong>
            </label>
          </div>
          <div id="select-lang">
            <select
              className="lang__select"
              name="language"
              id="language"
              required
              onChange={this.handleLanguage}
            >
              <option value="cpp">C++ (GCC 9.2.1)</option>
              <option value="c">C (GCC 9.2.1)</option>
              <option value="java">Java (OpenJDK 11.0.6)</option>
              <option value="python">Python (3.8.2)</option>
              <option value="nodejs">Javascript (Node.js 12.16.1)</option>
            </select>
          </div>
        </div>

        <div className="editor-group">
          <div className="editor__label">
            <label for="sourceCode">
              <strong> Source Code </strong>
            </label>
          </div>

          <div
            id="monacEditor"
            className="monacEditor"
            style={{ textAlign: "left" }}
          >
            <MonacoEditor
              width="700"
              height="400"
              language="C++"
              theme="vs-dark"
              value={this.code}
              options={this.options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
            />
            <p>* at most 512 KiB</p>
            <p>* Your source code will be saved as Main.extension.</p>
            <br></br>
            <input type="submit" onClick={this.submitTextAra}></input>
          </div>
        </div>

        {/* CODE FOR ERROR BOX IF THERE IS ANY SYNTAX ERROR IN THE CODE DURING SUBMISSION */}

        <div className="editor-group">
          <div className="editor__label">
            <label for="sourceCode">
              <strong> Error </strong>
            </label>
          </div>
          <Error error={this.error}></Error>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     qname: state.contest.prblmstatement,
//     redirectToQuestion: state.contest.redirectTOQuestion,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onQuestionClick: (qid) => dispatch(actions.handleQuestionOpen(qid)),
//   };
// };

export default CodeArea;
