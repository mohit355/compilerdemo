import React from "react";
import "./Error.css";

export default function Error(props) {
  return (
    <div className="errorBox">
      <textarea
        className="errorBox-textarea"
        name="errorBox"
        rows="4"
        cols="50"
        value={props.error}
        readOnly
      ></textarea>
    </div>
  );
}
