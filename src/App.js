import React, { useState } from "react";
import "./App.css";
import FirstScreen from "./Components/FirstScreen/FirstScreen";
import QuizQuestionScreen from "./Components/QuizQuestionScreen/QuizQuestionScreen";
import RetryScreen from "./Components/RetryScreen/RetryScreen";
 import { questionData } from "./questionData";
import ScoreScreen from "./Components/ScoreScreen/ScoreScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("startScreen");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState("easy");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(3);
  const [answerStatus, setAnswerStatus] = useState("");

  const questions = questionData[currentLevel];

  const handleAnswerSubmission = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

     const points = currentLevel === "easy" ? 10 : currentLevel === "medium" ? 20 : 30;
    if (isCorrect) {
      setScore((prevScore) => prevScore + points);
      setCorrectAnswers((prev) => prev + 1);
      setAnswerStatus("Correct");
    } else {
      setAnswerStatus("Incorrect");
    }
  };

  const handleNextQuestion = () => {
     if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerStatus("");  
    } else {
      handleLevelCompletion();
    }
  };

  const handleLevelCompletion = () => {
     if (correctAnswers >= 2) {
       if (currentLevel === "easy") {
        setCurrentLevel("medium");
      } else if (currentLevel === "medium") {
        setCurrentLevel("hard");
      } else {
        setCurrentScreen("endScreen");
      }
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);  
    } else {
      setCurrentScreen("retryScreen");
    }
  };

  const handleRetry = () => {
    setCurrentScreen("questionScreen");
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setAnswerStatus("");
  };

  const handleRestart = () => {
    setCurrentScreen("startScreen");
    setScore(0);
    setCurrentLevel("easy");
    setCorrectAnswers(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="appWrapper">
      {currentScreen === "startScreen" && <FirstScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "questionScreen" && (
        <QuizQuestionScreen
          questionData={questions}
          currentQuestionIndex={currentQuestionIndex}
          onSubmitAnswer={handleAnswerSubmission}
          answerStatus={answerStatus}
          onNextQuestion={handleNextQuestion}
        />
      )}
      {currentScreen === "retryScreen" && <RetryScreen handleRetry={handleRetry} />}
      {currentScreen === "endScreen" && <ScoreScreen score={score} handleRestart={handleRestart} />}
    </div>
  );
}

export default App;
