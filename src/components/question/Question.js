import React from "react";
import CodeArea from "./codeArea/CodeArea";
import SampleInputOutput from "./sampleInputOutput/SampleInputOutput";
import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <div>QUESTION</div>
      <SampleInputOutput />
      <CodeArea />
    </div>
  );
}
