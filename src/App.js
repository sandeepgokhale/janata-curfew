import React from "react";
import "./styles.css";
import DisplayQuestions from "./DisplayQuestions";

export default function App() {
  return (
    <div className="App">
      <Header message="Janata Curfew" />
      <h2>Answer the following</h2>
      <DisplayQuestions />
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
