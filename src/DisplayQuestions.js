import React from "react";
import { question } from "./constants";
import DisplayOptions from "./DisplayOptions";
import DisplayButtonGroup from "./DisplayButtonGroup";
import "./styles.css";

const DisplayQuestions = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [questions, setQuestions] = React.useState(question);
  // const [revealAnswer, setRevealAnswer] = React.useState(
  //   questions[questionNo].answeredRequested
  // );
  const [attemptedAnswer, setAttemptedAnswer] = React.useState(
    questions[questionNo].attemptedAnswer
  );
  const [tempRadioSelection, setTempRadioSelection] = React.useState();

  function updateAttemptedAnswer(answer) {
    const currentQuestion = {
      ...questions[questionNo],
      attemptedAnswer: answer,
      answeredRequested: true
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

  function revealAnswer() {
    const currentQuestion = {
      ...questions[questionNo],
      answeredRequested: true
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
  }

  const states = {
    questionNo,
    questions,
    attemptedAnswer,
    tempRadioSelection
  };
  const setters = {
    setQuestionNo,
    setQuestions,
    setAttemptedAnswer,
    setTempRadioSelection,
    revealAnswer,
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

export default DisplayQuestions;
