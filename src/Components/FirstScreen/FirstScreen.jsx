import React, { useState } from "react";
import "./FirstScreen.css"; // Assuming you'll use a separate CSS file

const FirstScreen = ( ) => {
 
 

  return (
    <div className="first-screen">
      <h1 className="quiz-title">Welcome to the Quiz Game!</h1>
      <p className="quiz-description">
        Test your knowledge with our fun and challenging quiz. Select your
        difficulty level and get started!
      </p>

      
      <button className="start-button"  >
        Start Quiz
      </button>
    </div>
  );
};

export default FirstScreen;
