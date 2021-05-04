import React, { useEffect, useState } from "react";
import "./CodeArea.css";
import MonacoEditor from "react-monaco-editor";
import querystring from "querystring";
import axios from "../../../axios";
import Error from "../error/Error";

export default function CodeArea() {
  const [code, setCode] = useState(
    "// Write or paste your code here to submit"
  );
  const [language, setLanguage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (language === "") {
      setLanguage("C++");
    }
  }, [language]);

  const options = {
    selectOnLineNumbers: true,
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {
    setCode(newValue);
  };

  const submitTextAra = async (event) => {
    event.preventDefault();
    const jsonData = {
      lang: language,
      code: code,
    };

    // json to string
    const data = querystring.stringify(jsonData);

    await axios
      .post("/", data)
      .then((result) => {
        console.log("result: ", result);
        setError(result.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
    console.log("data ", jsonData);
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

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
            onChange={handleLanguage}
          >
            <option value="c++">C++ (GCC 9.2.1)</option>
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
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
          />
          <p>* at most 512 KiB</p>
          <p>* Your source code will be saved as Main.extension.</p>
          <br></br>
          <input type="submit" onClick={submitTextAra}></input>
        </div>
      </div>

      {/* CODE FOR ERROR BOX IF THERE IS ANY SYNTAX ERROR IN THE CODE DURING SUBMISSION */}

      <div className="editor-group">
        <div className="editor__label">
          <label for="sourceCode">
            <strong> Error </strong>
          </label>
        </div>
        <Error error={error}></Error>
      </div>
    </div>
  );
}
