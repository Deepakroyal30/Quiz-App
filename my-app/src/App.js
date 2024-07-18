import React, { useState } from 'react';
import Quiz from './Quiz';
import './App.css';

const App = () => {
  const [quizData] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Orca'],
      answer: 'Blue Whale'
    },
    {
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Silver'],
      answer: 'Diamond'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Jane Austen', 'Mark Twain', 'J.K. Rowling'],
      answer: 'Harper Lee'
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
      answer: 'Mitochondria'
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Seoul', 'Beijing', 'Bangkok', 'Tokyo'],
      answer: 'Tokyo'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent Van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
      answer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the smallest prime number?',
      options: ['1', '2', '3', '5'],
      answer: '2'
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Gold', 'Oxygen', 'Osmium', 'Oganesson'],
      answer: 'Oxygen'
    },
    {
      question: 'What is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      answer: 'Nile'
    },
    {
      question: 'Who is known as the father of computers?',
      options: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Steve Jobs'],
      answer: 'Charles Babbage'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Liver', 'Skin', 'Lungs'],
      answer: 'Skin'
    },
    {
      question: 'Which country is the largest by land area?',
      options: ['Canada', 'China', 'United States', 'Russia'],
      answer: 'Russia'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yuan', 'Yen', 'Won', 'Dollar'],
      answer: 'Yen'
    },
    {
      question: 'Which ocean is the deepest?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      answer: 'Pacific'
    },
    {
      question: 'Who discovered penicillin?',
      options: ['Marie Curie', 'Alexander Fleming', 'Isaac Newton', 'Albert Einstein'],
      answer: 'Alexander Fleming'
    },
    {
      question: 'What is the speed of light?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
      answer: '300,000 km/s'
    },
    {
      question: 'Who wrote "1984"?',
      options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Philip K. Dick'],
      answer: 'George Orwell'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pt', 'Pb'],
      answer: 'Au'
    }
  ]);

  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div >
      <h1 className='heading'>Quiz Application</h1>
      {!startQuiz ? (
        <button className='button' onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <Quiz questions={quizData} />
      )}
    </div>
  );
};

export default App;
