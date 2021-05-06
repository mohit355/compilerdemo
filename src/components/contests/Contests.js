import React from "react";
import "./Contests.css";
import Qname from "./question/Qname";

const Contests = () => {
  return (
    <div className="contests">
      <div className="contests_questions">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Successfull submission</th>
            </tr>
          </thead>
          <tbody>
            <Qname
              name="Question1 eiufghe kejfhei"
              code="QUESTION"
              submission="4"
            ></Qname>
          </tbody>
        </table>
      </div>
      <div className="contests_rank">rank</div>
    </div>
  );
};

export default Contests;
