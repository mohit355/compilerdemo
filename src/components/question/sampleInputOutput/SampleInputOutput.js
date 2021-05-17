import React from "react";
import TextArea from "react-autosize-textarea";

export default function SampleInputOutput(props) {
  console.log(props.sample);
  return (
    <div className="sampleInOut">
      {props.sample.map((item, index) => {
        return (
          <>
            <p>Sample Input {index + 1}</p>
            <TextArea value={item[0].stringValue} disabled />
            <p>Sample Output {index + 1} </p>
            <TextArea value={item[1].stringValue} disabled />
          </>
        );
      })}
    </div>
  );
}
