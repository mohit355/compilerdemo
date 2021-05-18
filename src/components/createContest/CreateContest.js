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
    const oldData = data;
    const newData = { ...oldData, [num]: id };
    setData(newData);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const oldData = data;
    const newData = { ...oldData, contestID: contestID };
    querystring.stringify(newData);
    await Axios.post("/addContest", querystring.stringify(newData))
      .then((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <button type="reset" onClick={QuestionIDADDHandler}>
            Add
          </button>
        </label>
      </form>
      <br />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default CreateContest;
