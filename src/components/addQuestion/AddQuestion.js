import React, { useState } from "react";
import { HiddenTest } from "./HiddenTest";
import { SampleTest } from "./SampleTest";
import { Statement } from "./Statement";

export const AddQuestion = () => {
  const [prblmTitle, setPrblmTitle] = useState();
  const [prblmStat, setPrblmStat] = useState();
  const [sampleInput, setSampleInput] = useState();
  const [sampleOutput, setSampleOutput] = useState();
  const [hiddenInputs, setHiddenInputs] = useState();
  const [hiddenOutputs, setHiddenOutputs] = useState();

  const handleTitle = (event) => {
    setPrblmTitle(event.target.value);
  };

  const handlePrblmStatement = (event) => {
    setPrblmStat(event.target.value);
  };

  const handleSampleInput = (event) => {
    setSampleInput(event.target.value);
  };

  const handleSampleOutput = (event) => {
    setSampleOutput(event.target.value);
  };

  const handleHiddenInput = (event) => {
    setHiddenInputs(event.target.value);
  };
  const handleHiddenOutput = (event) => {
    setHiddenOutputs(event.target.value);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    console.log("title : ", prblmTitle);
    console.log("statement : ", prblmStat);
    console.log("sample input : ", sampleInput);
    console.log("sample output : ", sampleOutput);
    console.log("hidden inputs : ", hiddenInputs);
    console.log("hidden outputs : ", hiddenOutputs);
  };

  return (
    <div className="addQuestion">
      <h1>Add your question here</h1>
      <form>
        <Statement
          handleTitle={handleTitle}
          handlePrblmStatement={handlePrblmStatement}
        ></Statement>
        <SampleTest
          handleSampleInput={handleSampleInput}
          handleSampleOutput={handleSampleOutput}
        ></SampleTest>
        <HiddenTest
          handleHiddenInput={handleHiddenInput}
          handleHiddenOutput={handleHiddenOutput}
        ></HiddenTest>
        <input type="submit" onClick={handleQuestionSubmit} />
      </form>
    </div>
  );
};
