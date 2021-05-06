import React, { useEffect } from "react";
import "./SampleInputOutput.css";

export default function SampleInputOutput(props) {
  console.log("props ", props.sample[0]);
  useEffect(() => {
    props.sample.map((val) => {
      console.log(val.stringValue);
    });
  }, [props.sample]);

  return (
    <div className="sampleInOut">
      <div className="sampleInput">
        <table>
          <thead>
            <tr>
              <td>Sample Input</td>
            </tr>
          </thead>
          <tbody>
            {props.sample.map((val) => {
              return (
                <tr>
                  <td> {val.stringValue} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <br></br>
      <div className="sampleOutput">
        <table>
          <thead>
            <tr>
              <td>Sample Output</td>
            </tr>
          </thead>
          <tbody>
            <tr>output1</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
