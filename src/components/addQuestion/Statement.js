import React from "react";

export const Statement = (props) => {
  return (
    <div>
      <div>
        <label for="questionTitle">Title</label>
        <input
          onChange={props.handleTitle}
          type="text"
          id="questionTitle"
          name="questionTitle"
          required
        />
        <br></br>
        <label for="statement">Write the question statement</label>
        <textarea
          onChange={props.handlePrblmStatement}
          id="statement"
          name="statement"
          rows="4"
          cols="50"
          required
        />
        <br></br>
      </div>
    </div>
  );
};
