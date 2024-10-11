import React from "react";

function FinalPage({ score, handleRestart }) {
  return (
    <div>
      <div>Thanks for taking the quiz</div>
      <div>Your score is {score}</div>
      <button
        className="btn btn-custom"
        onClick={handleRestart}
        style={{ background: "#673AB7", margin: "16px", cursor: "pointer" }}
      >
        Restart
      </button>
    </div>
  );
}

export default FinalPage;
