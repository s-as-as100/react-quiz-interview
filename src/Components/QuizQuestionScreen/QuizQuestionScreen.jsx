import React, { useState, useEffect } from "react";
import "./QuizQuestionScreen.css";

const QuizQuestionScreen = ({
  questionData,
  currentQuestionIndex,
  onSubmitAnswer,
  answerStatus,
  onNextQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput, setTextInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const currentQuestion = questionData[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    const answer =
      currentQuestion.type === "text-input" ? textInput : selectedOption;
    onSubmitAnswer(answer);
    setIsAnswered(true);
    setShowNextButton(true);
  };

  const handleNext = () => {
    setShowNextButton(false);
    setIsAnswered(false);
    onNextQuestion();
  };

  useEffect(() => {
    setSelectedOption("");
    setTextInput("");
    setIsAnswered(false);
    setShowNextButton(false);
  }, [currentQuestionIndex]);

  return (
    <div className="quiz-screen">
      <div className="card-header">
        <span>Level: {currentQuestion.level}</span>
        <h4 className={answerStatus === "Correct" ? "correct" : "incorrect"}>
          {answerStatus}
        </h4>
      </div>
      <div>
        <h2 className="question">{currentQuestion.question}</h2>
      </div>
      <div className="question-container">
        {currentQuestion.type === "multiple-choice" && (
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="quiz-option"
                  value={option}
                  onChange={handleOptionChange}
                  checked={selectedOption === option}
                  disabled={isAnswered}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        )}

        {currentQuestion.type === "true-false" && (
          <div className="options">
            <div className="option">
              <input
                type="radio"
                id="true"
                name="quiz-option"
                value="true"
                onChange={handleOptionChange}
                checked={selectedOption === "true"}
                disabled={isAnswered}
              />
              <label htmlFor="true">True</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="false"
                name="quiz-option"
                value="false"
                onChange={handleOptionChange}
                checked={selectedOption === "false"}
                disabled={isAnswered}
              />
              <label htmlFor="false">False</label>
            </div>
          </div>
        )}

        {currentQuestion.type === "text-input" && (
          <div className="text-input">
            <input
              type="text"
              placeholder="Your answer..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={isAnswered}
            />
          </div>
        )}
      </div>

      <div className="quiz-card-footer">
        <button
          className={isAnswered ? "submit-button-disabled" : "submit-button"}
          onClick={handleSubmit}
          disabled={isAnswered || (!selectedOption && !textInput)}
        >
          Submit
        </button>
        {showNextButton && (
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestionScreen;
