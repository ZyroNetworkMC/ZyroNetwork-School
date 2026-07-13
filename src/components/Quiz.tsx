import React, { useState } from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return; // Answer already selected
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextClick = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div style={{
        background: '#13141c',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '12px',
        padding: '2.5rem',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        margin: '2rem 0',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Quiz Completed!</h3>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '2rem' }}>
          You scored <strong style={{ color: '#c084fc' }}>{score}</strong> out of <strong style={{ color: '#fff' }}>{questions.length}</strong> ({percentage}%)
        </p>
        
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '4px solid #a855f7',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: 800,
          color: '#fff',
          margin: '0 auto 2rem auto',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
        }}>
          {percentage}%
        </div>

        <button 
          onClick={resetQuiz}
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 30px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const activeQ = questions[currentQuestion];

  return (
    <div style={{
      background: '#13141c',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      margin: '2rem 0',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        paddingBottom: '1rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{ color: '#c084fc', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
          Score: {score}
        </span>
      </div>

      <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', lineHeight: '1.4' }}>
        {activeQ.question}
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem' }}>
        {activeQ.options.map((option, index) => {
          let btnStyle: React.CSSProperties = {
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            padding: '14px 20px',
            color: '#d1d5db',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '0.95rem',
            transition: 'all 0.2s',
            fontWeight: 500
          };

          if (selectedAnswer !== null) {
            if (index === activeQ.correctAnswer) {
              btnStyle.background = 'rgba(16, 185, 129, 0.15)';
              btnStyle.border = '1px solid #10b981';
              btnStyle.color = '#34d399';
            } else if (index === selectedAnswer) {
              btnStyle.background = 'rgba(239, 68, 68, 0.15)';
              btnStyle.border = '1px solid #ef4444';
              btnStyle.color = '#f87171';
            } else {
              btnStyle.opacity = 0.5;
            }
          }

          return (
            <button 
              key={index}
              onClick={() => handleAnswerClick(index)}
              style={btnStyle}
              onMouseOver={(e) => {
                if (selectedAnswer === null) {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.05)';
                  e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
                }
              }}
              onMouseOut={(e) => {
                if (selectedAnswer === null) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.01)',
          borderLeft: `4px solid ${selectedAnswer === activeQ.correctAnswer ? '#10b981' : '#ef4444'}`,
          padding: '1.25rem',
          borderRadius: '0 8px 8px 0',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          <strong style={{ display: 'block', color: '#fff', marginBottom: '0.25rem' }}>
            {selectedAnswer === activeQ.correctAnswer ? 'Correct!' : 'Incorrect'}
          </strong>
          <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{activeQ.explanation}</span>
        </div>
      )}

      {selectedAnswer !== null && (
        <button 
          onClick={handleNextClick}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            border: 'none',
            borderRadius: '6px',
            padding: '12px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}
        >
          {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
}
