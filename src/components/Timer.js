import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isActive && minutes < 10) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else if (minutes === 10) {
      clearInterval(timer);
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, seconds, minutes]);

  const formatTime = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div>
      <h1>
        Timer: {formatTime(minutes)}:{formatTime(seconds)}
      </h1>
      {isActive ? (
        <p>Counting down...</p>
      ) : (
        <p>Time's up! Timer stopped after 10 minutes.</p>
      )}
    </div>
  );
};

export default Timer;
