export const questionData = {
  easy: [
    {
      type: "multiple-choice",
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "CSS", "HTML", "Python"],
      correctAnswer: "React",
      level: "Easy",
    },
    {
      type: "true-false",
      question: "JavaScript is a compiled language.",
      correctAnswer: "false",
      level: "Easy",
    },
    {
      type: "text-input",
      question: "What does DOM stand for?",
      correctAnswer: "Document Object Model",
      level: "Easy",
    },
  ],
  medium: [
    {
      type: "multiple-choice",
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Oracle"],
      correctAnswer: "Netscape",
      level: "Medium",
    },
    {
      type: "true-false",
      question: "JavaScript supports automatic memory management.",
      correctAnswer: "true",
      level: "Medium",
    },
    {
      type: "text-input",
      question: "What keyword is used to define a constant in JavaScript?",
      correctAnswer: "const",
      level: "Medium",
    },
  ],
  hard: [
    {
      type: "multiple-choice",
      question:
        "Which method is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
      level: "Hard",
    },
    {
      type: "true-false",
      question: "JavaScript is single-threaded.",
      correctAnswer: "true",
      level: "Hard",
    },
    {
      type: "text-input",
      question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
      correctAnswer: "false",
      level: "Hard",
    },
  ],
};
