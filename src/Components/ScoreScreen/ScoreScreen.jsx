import React from "react";
import "./ScoreScreen.css";

const ScoreScreen = ({ score, handleRestart }) => {
  return (
    <div className="end-screen">
      <h2>Quiz Completed</h2>
      <p>Your Final Score: {score}</p>
      <button className="restart-button" onClick={handleRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreScreen;
