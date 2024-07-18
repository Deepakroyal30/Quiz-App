import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Ensure we only shuffle and limit to 10 questions
    const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(shuffled);
  }, [questions]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentQuestionIndex]?.answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 3000);
  };

  const renderCorrectAnswer = () => {
    if (showFeedback && !isCorrect) {
      return <p className="correct-answer">Correct answer: {shuffledQuestions[currentQuestionIndex]?.answer}</p>;
    }
  };

  if (currentQuestionIndex >= shuffledQuestions.length) {
    return (
      <div className="quiz-container completed">
        <h2>Quiz Over</h2>
        <p>You have answered all the questions.</p>
        <p>Your Score: {score}</p>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p className="question">{shuffledQuestions[currentQuestionIndex]?.question}</p>
      <ol className="options-list">
        {shuffledQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <li key={index}>
            <button className="option-button" onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          </li>
        ))}
      </ol>
      {showFeedback && (
        <div className="feedback-container">
          {isCorrect ? <p className="feedback correct">Yeah! You were correct!</p> : <p className="feedback wrong">Oops! It was wrong.</p>}
          {renderCorrectAnswer()}
        </div>
      )}
      <p className="score">Current Score: {score}</p>
    </div>
  );
};

export default Quiz;
