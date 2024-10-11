import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import { questions } from "./MockData";
import Timer from "./Timer";
import FinalPage from "./FinalPage";

const LandingPage = () => {
  const [data, setData] = useState(questions);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isPageSubmitted, setIsPageSubmitted] = useState(false);

  useEffect(() => {
    let shuffledQuestions = shuffleArray(questions);
    const slicedQuestions = shuffledQuestions?.slice(0, 10);
    setData(slicedQuestions);
  }, [isPageSubmitted]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const handleNextClick = (isCorrect) => {
    setIndex((prev) => prev + 1);
    isCorrect && setScore((prev) => prev + 1);
    return;
  };

  const headerCardStyle = {
    borderRadius: "6px",
    padding: "32px",
    width: "800px",
  };

  const handleSubmit = () => {
    return setIsPageSubmitted(true);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      {isPageSubmitted ? (
        <FinalPage score={score} handleRestart={() => handleRestart()} />
      ) : (
        <div>
          <div style={headerCardStyle} className="i-box-shadow">
            <div
              style={{ fontWeight: 700, margin: "16px 0", fontSize: "32px" }}
            >
              Quiz
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Score {score}</div>
              <Timer />
            </div>
          </div>

          <Quiz
            data={data[index]}
            maxLength={data?.length}
            index={index}
            handleNextClick={handleNextClick}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
