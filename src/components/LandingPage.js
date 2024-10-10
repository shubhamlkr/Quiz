import React, { useState } from "react";
import Quiz from "./Quiz";
import { questions } from "./MockData";
import Timer from "./Timer";

const LandingPage = () => {
  // const [data, setData] = useState(questions);
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>Quiz</h1>
        <Timer />
      </div>
      {/* {data?.map((item) => {
        return <Quiz data={item} />;
      })} */}
      <Quiz
        data={questions[index]}
        maxLength={questions?.length}
        index={index}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  );
};

export default LandingPage;
