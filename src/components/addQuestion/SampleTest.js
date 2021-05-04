import React from "react";

export const SampleTest = (props) => {
  return (
    <div className="sampleTest">
      <div className="sampleInput">
        <label for="sampleTestInput">Sample Input</label>
        <textarea
          onChange={props.handleSampleInput}
          id="sampleTestInput"
          name="sampleTestInput"
          rows="4"
          cols="50"
          required
        />
      </div>
      <div className="sampleOutput">
        <label for="sampleTestOutput">Sample Output</label>
        <textarea
          onChange={props.handleSampleOutput}
          id="sampleTestOutput"
          name="sampleTestOutput"
          rows="4"
          cols="50"
          required
        />
      </div>
    </div>
  );
};
