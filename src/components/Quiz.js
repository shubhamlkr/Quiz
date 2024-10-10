import React, { useState } from "react";

function Quiz({ data, index, handleNextClick, handlePrevClick, maxLength }) {
  const [style, setStyle] = useState(null);
  const successStyle = {
    backgroundColor: "green",
    border: "1px solid blue",
    marginBottom: "4px",
  };

  const failureStyle = {
    backgroundColor: "red",
    border: "1px solid yellow",
    marginBottom: "4px",
  };

  const handleOptionClick = (optionIndex) => {
    if (optionIndex == data?.answer) {
      setStyle(successStyle);
    } else {
      setStyle(failureStyle);
    }
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <div>Question :</div>
      <div>
        <div>{data?.question}</div>
        <div>
          <div style={{ fontWeight: 600 }}>Options</div>
          {data?.options?.map((option, optionIndex) => {
            return (
              <div
                key={optionIndex}
                onClick={() => handleOptionClick(optionIndex)}
                style={style}
              >
                {option}
              </div>
            );
          })}
          {/* <div onClick={handleOptionClick}>{data?.option1}</div>
          <div onClick={handleOptionClick}>{data?.option2}</div>
          <div onClick={handleOptionClick}>{data?.option3}</div>
          <div onClick={handleOptionClick}>{data?.option4}</div> */}
        </div>
        {/* <div>answer={data?.answer}</div> */}
      </div>
      <div>
        <button
          style={{ display: index <= 0 ? "none" : "" }}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          style={{ display: index < maxLength - 1 ? "" : "none" }}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
