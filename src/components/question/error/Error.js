import React from "react";
import "./Error.css";

export default function Error(props) {
  return (
    <div className="errorBox">
      <textarea
        className="errorBox-textarea"
        name="errorBox"
        rows="2"
        cols="30"
        value={props.error}
        readOnly
      ></textarea>
    </div>
  );
}
