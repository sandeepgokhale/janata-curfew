import React from "react";
import "./styles.css";
import { questions } from "./constants";

export default function App() {
  return (
    <div className="App">
      <Header message="Janata Curfew" />
      Try One : <Options />
      <h2>Answer the following</h2>
      <DisplayQuestions questions={questions} />
    </div>
  );
}

const DisplayQuestions = question => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [answerHistory, setAnswerHistory] = React.useState(
    questions[questionNo].answerHistory
  );
  const [answerAttempted, setAnswerAttempted] = React.useState(
    questions[questionNo].answerHistory || 0
  );

  return (
    <div>
      <h2> {questions[questionNo].question} </h2>
      <div className="centerInput">
        {questions[questionNo].options.map(([text, value], i) => (
          <div key={i}>
            <input
              type="radio"
              onChange={e => {
                setAnswerAttempted(e.target.value);
                setAnswerHistory(e.target.value);
              }}
              value={value}
              checked={answerAttempted === value ? true : false}
            />
            {text}
          </div>
        ))}
      </div>
      <DisplayButtonGroup
        setQuestionNo={setQuestionNo}
        questionNo={questionNo}
        answer={questions[questionNo].answer}
        setAnswerAttempted={setAnswerAttempted}
        answerAttempted={answerAttempted}
        answerHistory={answerHistory}
        setAnswerHistory={setAnswerHistory}
      />
    </div>
  );
};

const DisplayButtonGroup = ({
  questionNo,
  setQuestionNo,
  answer,
  setAnswerAttempted,
  answerAttempted,
  answerHistory,
  setAnswerHistory
}) => {
  return (
    <>
      <button
        onClick={() => {
          // if (answerHistory)
          setAnswerAttempted(0);
          setQuestionNo(questionNo - 1);
        }}
        disabled={questionNo === 0 ? true : false}
        className={questionNo !== 0 ? "btn btnBlue" : "btn btnGrey"}
      >
        Previous
      </button>
      <button
        className="btn btnGreen"
        style={{ color: "green" }}
        onClick={() => alert(answer)}
      >
        Check Answer
      </button>
      <button className="btn btnRed" style={{ color: "red" }}>
        Show Answer
      </button>
      <button
        disabled={questionNo === questions.length - 1 ? true : false}
        className={
          questionNo !== questions.length - 1 ? "btn btnBlue" : "btn btnGrey"
        }
        onClick={() => {
          setAnswerAttempted(0);
          setQuestionNo(questionNo + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

const Header = ({ message }) => <h1>{message}</h1>;
const Options = ({ message }) => (
  <select>
    <option> Sports </option>
    <option> Science </option>
    <option> Maths </option>
    <option> To Do </option>
  </select>
);
