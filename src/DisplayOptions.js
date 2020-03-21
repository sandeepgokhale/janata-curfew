import React from "react";
import "./styles.css";

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
            {value === questions[questionNo].answer &&
              questions[questionNo].answeredRequested && (
                <span role="img">✔️</span>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayOptions;
