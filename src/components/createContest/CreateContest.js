import React, { useState } from "react";
import Axios from "../../axios";
import querystring from "querystring";

const CreateContest = () => {
  const [data, setData] = useState({});
  const [contestID, setContestID] = useState("");
  const [id, setID] = useState("");
  const [num, setNum] = useState("");

  function contestIDHandler(event) {
    setContestID(event.target.value);
  }

  function questionNumberHandler(event) {
    setNum(event.target.value);
  }

  function QuestionIDHandler(event) {
    setID(event.target.value);
  }

  function QuestionIDADDHandler() {
    const updateData = data;
    updateData[num] = id;
    setData({ updateData });
  }

  function submitHandler() {
    const updateData = data;
    updateData["contestID"] = contestID;
    querystring.stringify(updateData);
    Axios.post("/addContest", querystring.stringify(updateData));
  }

  return (
    <form>
      <label>
        Contest ID :
        <input type="text" name="contestID" onChange={contestIDHandler} />
        <br />
      </label>
      <form>
      <label>
        Question Number:
        <input
          type="text"
          name="questionNumber"
          onChange={questionNumberHandler}
        />
        Question ID :
        <input type="text" name="questionID" onChange={QuestionIDHandler} />
        <button type="reset" onSubmit={QuestionIDADDHandler}>
          Add
        </button>
      </label>
      </form>
      <br />
      <button type="submit" onSubmit={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default CreateContest;
