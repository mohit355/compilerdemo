import React from "react";
import "./Contests.css";

export const Contests = () => {
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
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contests_rank">rank</div>
    </div>
  );
};
