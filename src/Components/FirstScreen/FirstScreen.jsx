import React from "react";
import "./FirstScreen.css";  
import PrimaryButton from "../../UiKit/PrimaryButton/PrimaryButton";

const FirstScreen = ({setCurrentScreen}) => {
  return (
    <div className="first-screen">
      <h1 className="quiz-title">Welcome to the Quiz Game!</h1>
      <p className="quiz-description">
        Test your knowledge with our fun and challenging quiz. 
      </p>
      <PrimaryButton label={'Start Quiz'} onClick={()=>setCurrentScreen('questionScreen')} />
    </div>
  );
};

export default FirstScreen;
