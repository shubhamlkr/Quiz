import React, { useState } from "react";
import "./styles.css";

function Quiz({
  data,
  index,
  handleNextClick,
  handlePrevClick,
  maxLength,
  handleSubmit,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const successStyle = {
    backgroundColor: "green",
    border: "1px solid blue",
    // margin: "6px 0",
    borderRadius: "6px",
  };

  const failureStyle = {
    backgroundColor: "red",
    border: "1px solid yellow",
    // margin: "6px 0",
    borderRadius: "6px",
  };
  console.log("selectedOption", selectedOption);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    // if (!selectedOption) {
    if (optionIndex == data?.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    // }
  };

  const handleStyle = (optionIndex) => {
    if (selectedOption === optionIndex) {
      return isCorrect ? successStyle : failureStyle;
    }
    return {};
  };

  console.log("selectedOption", selectedOption);

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "6px",
        padding: "32px",
        textAlign: "left",
        width: "800px",
        minHeight: "200px",
      }}
    >
      <div style={{ fontWeight: 500, margin: "16px 0" }}>
        Question : {data?.question}
      </div>

      <div style={{ disabled: selectedOption ? true : false }}>
        {data?.options?.map((option, optionIndex) => {
          return (
            <div
              key={optionIndex}
              onClick={() =>
                selectedOption == null ? handleOptionClick(optionIndex) : ""
              }
              style={handleStyle(optionIndex)}
            >
              <li
                style={{
                  fontSize: "18px",
                  paddingLeft: "16px",
                  margin: "4px 0",
                  cursor: "pointer",
                  // disabled: selectedOption ?
                }}
              >
                {option}
              </li>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <div>
          {index < maxLength - 1 ? (
            <button
              className="btn btn-custom"
              style={{
                // display: index < maxLength - 1 ? "" : "none",
                opacity: selectedOption || selectedOption == 0 ? 1 : 0.5,
                cursor: "pointer",
              }}
              disabled={selectedOption || selectedOption == 0 ? false : true}
              onClick={() => {
                setTimeout(() => {
                  setSelectedOption(null);
                  setIsCorrect(false);
                }, 100);
                handleNextClick(isCorrect);

                return;
              }}
            >
              Next
            </button>
          ) : (
            <button
              className="btn btn-custom"
              onClick={() => {
                setTimeout(() => {
                  setSelectedOption(null);
                  setIsCorrect(false);
                }, 100);
                handleNextClick(isCorrect);
                handleSubmit();
              }}
              style={{
                background: "#673AB7",
                margin: "16px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
