import React from "react";
import "./SampleInputOutput.css";

export default function SampleInputOutput() {
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
            <tr>inputs1</tr>
            <tr>inputs1</tr>
            <tr>inputs1</tr>
            <tr>inputs1</tr>
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
            <tr>output1</tr>
            <tr>output1</tr>
            <tr>output1</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
