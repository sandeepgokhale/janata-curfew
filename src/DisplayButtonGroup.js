import React from "react";
import "./styles.css";

const DisplayButtonGroup = ({
  questionNo,
  setQuestionNo,
  questions,
  tempRadioSelection,
  setTempRadioSelection,
  revealAnswer,
  updateAttemptedAnswer
}) => {
  console.log("tempRadioSelection" + tempRadioSelection);
  return (
    <>
      <button
        onClick={() => {
          setQuestionNo(questionNo - 1);
        }}
        disabled={questionNo === 0 ? true : false}
        className={questionNo !== 0 ? "btn btnBlue" : "btn btnGrey"}
      >
        Previous
      </button>
      <button
        className={
          questions[questionNo].answeredRequested === true
            ? "btn btnGrey"
            : "btn btnBlue"
        }
        // className={
        //   questions[questionNo].answeredRequested === true
        //     ? "btn btnGrey"
        //     : "btn btnBlue"
        // }
        disabled={
          questions[questionNo].answeredRequested === true ? true : false
        }
        // disabled={
        //   questions[questionNo].answeredRequested === true
        //     ? true
        //     : tempRadioSelection === undefined
        //     ? true
        //     : false
        // }
        onClick={() => updateAttemptedAnswer(tempRadioSelection)}
      >
        Submit Answer
      </button>

      <button
        disabled={questionNo === questions.length - 1 ? true : false}
        className={
          questionNo !== questions.length - 1 ? "btn btnBlue" : "btn btnGrey"
        }
        onClick={() => {
          setQuestionNo(questionNo + 1);
          setTempRadioSelection("");
        }}
      >
        Next
      </button>
      <button
        className={
          questions[questionNo].answeredRequested === true
            ? "btn btnGrey"
            : "btn btnRed"
        }
        disabled={
          questions[questionNo].answeredRequested === true ? true : false
        }
        onClick={() => revealAnswer()}
      >
        Show Answer
      </button>
    </>
  );
};

export default DisplayButtonGroup;
