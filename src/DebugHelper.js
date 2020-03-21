import React from "react";
// Not In use
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

export default DebugHelper;
