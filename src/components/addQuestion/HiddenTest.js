import React from "react";

export const HiddenTest = (props) => {
  return (
    <div>
      <label for="hiddenTestInput">Hidden Test case Inputs</label>
      <textarea
        onChange={props.handleHiddenInput}
        id="hiddenTestInput"
        name="hiddenTestInput"
        rows="4"
        cols="50"
        required
      />
      <br></br>
      <label for="hiddenTestOutput">Hidden test case Outputs</label>
      <textarea
        onChange={props.handleHiddenOutput}
        id="hiddenTestOutput"
        name="hiddenTestOutput"
        rows="4"
        cols="50"
        required
      />
    </div>
  );
};
