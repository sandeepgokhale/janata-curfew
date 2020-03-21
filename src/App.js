import React from "react";
import "./styles.css";
import { question } from "./constants";

export default function App() {
  return (
    <div className="App">
      <Header message="Janata Curfew" />
      Try One : <Options />
      <h2>Answer the following</h2>
      <DisplayQuestions />
    </div>
  );
}

//    attemptedAnswer: "",
//    answeredCorrectly: false,
//    answeredRequested: false

const DisplayQuestions = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [questions, setQuestions] = React.useState(question);
  const [revealAnswer, setRevealAnswer] = React.useState(
    questions[questionNo].answeredRequested
  );
  const [attemptedAnswer, setAttemptedAnswer] = React.useState(
    questions[questionNo].attemptedAnswer
  );
  const [tempRadioSelection, setTempRadioSelection] = React.useState();

  function updateAttemptedAnswer(answer) {
    const currentQuestion = {
      ...questions[questionNo],
      attemptedAnswer: answer
    };

    // Possible Optimization Oppty.
    let array2 = questions.map(a => {
      var returnValue = { ...a };
      if (a.questionNo === questionNo.toString()) {
        returnValue = currentQuestion;
      }
      return returnValue;
    });
    setQuestions(array2);
    setAttemptedAnswer(answer);
  }

  const states = {
    questionNo,
    questions,
    attemptedAnswer,
    tempRadioSelection,
    revealAnswer
  };
  const setters = {
    setQuestionNo,
    setQuestions,
    setAttemptedAnswer,
    setTempRadioSelection,
    setRevealAnswer,
    updateAttemptedAnswer
  };

  return (
    <div>
      <DisplayOptions {...setters} {...states} />
      {/* <DebugHelper {...setters} {...states} /> */}
      <DisplayButtonGroup {...states} {...setters} />
    </div>
  );
};

const DisplayOptions = ({
  questionNo,
  setQuestionNo,
  revealAnswer,
  questions,
  setQuestions,
  answer,
  tempRadioSelection,
  setTempRadioSelection,
  setAttemptedAnswer,
  attemptedAnswer,
  setRevealAnswer,
  answerHistory,
  setAnswerHistory,
  updateAttemptedAnswer
}) => {
  return (
    <div>
      <h2>{questions[questionNo].question} </h2>
      <div className="centerInput">
        {questions[questionNo].options.map(([text, value], i) => (
          <div key={i}>
            <input
              type="radio"
              onChange={e => {
                setTempRadioSelection(e.target.value);
              }}
              value={value}
              // checked={tempRadioSelection === value ? true : false}
              checked={
                questions[questionNo].attemptedAnswer === value
                  ? true
                  : tempRadioSelection === value
                  ? true
                  : false
              }
              // checked={getCheckBoxStatus(tempRadioSelection, value)}
            />
            {text}
            {value === questions[questionNo].answer && revealAnswer && (
              <span role="img">✔️</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DebugHelper = ({
  questionNo,
  setQuestionNo,
  revealAnswer,
  questions,
  setQuestions,
  answer,
  tempRadioSelection,
  setTempRadioSelection,
  setAttemptedAnswer,
  attemptedAnswer,
  setRevealAnswer,
  answerHistory,
  setAnswerHistory,
  updateAttemptedAnswer
}) => {
  console.log("hii");
  return (
    <div>
      {JSON.stringify(questions, null, "\t")}
      <hr />
      <div className="centerInput">
        <hr />
        {JSON.stringify(questions[questionNo], null, "\t")}
        <hr />
        <hr />
        Temp Radio - {JSON.stringify(tempRadioSelection, null, "\t")}
        <hr />
        <hr />
        Attempted Answer - {JSON.stringify(attemptedAnswer, null, "\t")}
        <hr />
      </div>
    </div>
  );
};

const DisplayButtonGroup = ({
  questionNo,
  setQuestionNo,
  questions,
  setQuestions,
  answer,
  tempRadioSelection,
  setTempRadioSelection,
  setAttemptedAnswer,
  setRevealAnswer,
  answerHistory,
  setAnswerHistory,
  updateAttemptedAnswer
}) => {
  return (
    <>
      <button
        onClick={() => {
          // if (answerHistory)
          // setAnswerAttempted(0);
          setQuestionNo(questionNo - 1);
          // setTempRadioSelection("");
        }}
        disabled={questionNo === 0 ? true : false}
        className={questionNo !== 0 ? "btn btnBlue" : "btn btnGrey"}
      >
        Previous
      </button>
      <button
        className="btn btnGreen"
        style={{ color: "green" }}
        onClick={() => updateAttemptedAnswer(tempRadioSelection)}
        // onClick={() => setRevealAnswer(true)}
      >
        Submit Answer
      </button>
      <button
        className="btn btnRed"
        style={{ color: "red" }}
        onClick={() => setRevealAnswer(true)}
      >
        Show Answer
      </button>
      <button
        disabled={questionNo === questions.length - 1 ? true : false}
        className={
          questionNo !== questions.length - 1 ? "btn btnBlue" : "btn btnGrey"
        }
        onClick={() => {
          // setAnswerAttempted(0);
          setQuestionNo(questionNo + 1);
          setTempRadioSelection("");
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
