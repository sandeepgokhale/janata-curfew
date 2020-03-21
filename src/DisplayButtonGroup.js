import React from "react";
import "./styles.css";

const DisplayButtonGroup = ({
  questionNo,
  setQuestionNo,
  questions,
  setQuestions,
  answer,
  tempRadioSelection,
  setTempRadioSelection,
  setAttemptedAnswer,
  revealAnswer,
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
        onClick={() => revealAnswer()}
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

export default DisplayButtonGroup;
