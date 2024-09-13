import React from "react";
import "./RetryScreen.css";

const RetryScreen = ({ handleRetry }) => {
  return (
    <div className="retry-screen">
      <h2>You did not pass the level. Would you like to retry?</h2>
      <button className="retry-button" onClick={handleRetry}>
        Retry Level
      </button>
    </div>
  );
};

export default RetryScreen;
