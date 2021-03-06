import React from "react";
import "./styles.css";
import DisplayQuestions from "./DisplayQuestions";
import JumpToQuestion from "./JumpToQuestion";
export default function App() {
  return (
    <div className="App">
      <Header message="Janata Curfew - Family Quiz" />
      <h3>Ready to Challenge yourselves ??</h3>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <DisplayQuestions />
          </div>
          <div class="column">
            <JumpToQuestion />
          </div>
        </div>
      </div>
      <hr />

      {/* <DisplayQuestions /> */}
    </div>
  );
}

const Header = ({ message }) => <h1>{message}</h1>;

// For a later use
// const Options = ({ message }) => (
//   <select>
//     <option> Sports </option>
//     <option> Science </option>
//     <option> Maths </option>
//     <option> To Do </option>
//   </select>
// );
