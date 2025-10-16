import React, { useState } from 'react';
import { Play, Award } from 'lucide-react';

const LoopChallenges = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState(new Set());

  const challenges = [
    {
      id: 1,
      title: "Challenge 1 – Print 5 Numbers (1 to 5)",
      description: "Fill in the blanks to print numbers from 1 to 5",
      starterCode: `for (let i = ; i < ; ) {
  console.log(i);
}`,
      solution: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
      expectedOutput: ['1', '2', '3', '4', '5'],
      hints: [
        "Start i at 1",
        "Loop while i is less than or equal to 5",
        "Increment i by 1 each time (i++)"
      ]
    },
    {
      id: 2,
      title: "Challenge 1b – Print 5 Numbers (45 to 49)",
      description: "Fill in the blanks to print numbers from 45 to 49",
      starterCode: `for (let i = ; i < ; ) {
  console.log(i);
}`,
      solution: `for (let i = 45; i <= 49; i++) {
  console.log(i);
}`,
      expectedOutput: ['45', '46', '47', '48', '49'],
      hints: [
        "Start i at 45",
        "Loop while i is less than or equal to 49",
        "Increment i by 1 each time (i++)"
      ]
    },
    {
      id: 3,
      title: "Challenge 2 – Print Alternate Numbers (1,3,5,7,9)",
      description: "Print odd numbers from 1 to 9",
      starterCode: `for (let i = ; i < ; ) {
  console.log(i);
}`,
      solution: `for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}`,
      expectedOutput: ['1', '3', '5', '7', '9'],
      hints: [
        "Start i at 1",
        "Loop while i is less than or equal to 9",
        "Increment i by 2 each time (i += 2)"
      ]
    },
    {
      id: 4,
      title: "Challenge 3 – Print in Reverse (10 to 1)",
      description: "Print numbers from 10 down to 1",
      starterCode: `for (let i = ; i ; ) {
  console.log(i);
}`,
      solution: `for (let i = 10; i >= 1; i--) {
  console.log(i);
}`,
      expectedOutput: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
      hints: [
        "Start i at 10",
        "Loop while i is greater than or equal to 1",
        "Decrement i by 1 each time (i--)"
      ]
    },
    {
      id: 5,
      title: "Challenge 4 – Multiples of 3 (3,6,9...30)",
      description: "Print multiples of 3 from 3 to 30",
      starterCode: `for (let i = ; i < ; ) {
  console.log(i);
}`,
      solution: `for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}`,
      expectedOutput: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30'],
      hints: [
        "Start i at 3",
        "Loop while i is less than or equal to 30",
        "Increment i by 3 each time (i += 3)"
      ]
    },
    {
      id: 6,
      title: "Challenge 5 – Display Message for Each Number",
      description: "Print 'Number: X' for numbers 1 to 5",
      starterCode: `for (let i = 1; i <= 5; i++) {
  console.log();
}`,
      solution: `for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}`,
      expectedOutput: ['Number: 1', 'Number: 2', 'Number: 3', 'Number: 4', 'Number: 5'],
      hints: [
        "Inside console.log(), use quotes and the + operator",
        'Try: console.log("Number: " + i)'
      ]
    },
    {
      id: 7,
      title: "Challenge 6 – Even Numbers with a Star",
      description: "Print numbers 1-10. For even numbers, add a star (⭐) after the number. Example: even numbers should display as '4 ⭐', while odd numbers display as just '3'",
      starterCode: `for (let i = 1; i <= 10; i++) {
  
}`,
      solution: `for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " ⭐");
  } else {
    console.log(i);
  }
}`,
      expectedOutput: ['1', '2 ⭐', '3', '4 ⭐', '5', '6 ⭐', '7', '8 ⭐', '9', '10 ⭐'],
      hints: [
        "Use the modulo operator (%) to check if a number is even: i % 2 === 0",
        "Use an if-else statement to handle even and odd numbers differently",
        "For even numbers: console.log(i + ' ⭐')",
        "For odd numbers: console.log(i)"
      ]
    },
    {
      id: 8,
      title: "Challenge 7 – Print All Fruits",
      description: "Loop through the fruits array and print each fruit",
      starterCode: `const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < ; ) {
  console.log();
}`,
      solution: `const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,
      expectedOutput: ['Apple', 'Banana', 'Mango', 'Orange'],
      hints: [
        "Loop while i < fruits.length",
        "Inside the loop, print fruits[i]",
        "Don't forget to increment i with i++"
      ]
    },
    {
      id: 9,
      title: "Challenge 8 – Even Numbers in Array",
      description: "Print only the even numbers from the array",
      starterCode: `const nums = [2, 7, 10, 13, 20];
for (let i = 0; i < nums.length; i++) {

}`,
      solution: `const nums = [2, 7, 10, 13, 20];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}`,
      expectedOutput: ['2', '10', '20'],
      hints: [
        "Use if (nums[i] % 2 === 0) to check if even",
        "If even, print nums[i]"
      ]
    }
  ];

  const challenge = challenges[currentChallenge];

  useState(() => {
    setUserCode(challenge.starterCode);
    setFeedback(null);
    setShowAnswer(false);
  }, [currentChallenge]);

  const runCode = (code) => {
    try {
      const output = [];
      const originalLog = console.log;
      console.log = (val) => output.push(String(val));
      
      // eslint-disable-next-line no-eval
      eval(code);
      
      console.log = originalLog;
      return { success: true, output };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = () => {
    const result = runCode(userCode);
    
    if (!result.success) {
      setFeedback({
        correct: false,
        message: "❌ Error in your code: " + result.error,
        output: []
      });
      return;
    }

    const isCorrect = JSON.stringify(result.output) === JSON.stringify(challenge.expectedOutput);
    
    if (isCorrect) {
      if (!completedChallenges.has(challenge.id)) {
        setScore(score + 100);
        setCompletedChallenges(new Set([...completedChallenges, challenge.id]));
      }
      setFeedback({
        correct: true,
        message: "🎉 Perfect! You got it right!",
        output: result.output
      });
    } else {
      setFeedback({
        correct: false,
        message: "❌ Not quite right. Check the expected output!",
        output: result.output
      });
    }
  };

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setUserCode(challenges[currentChallenge + 1].starterCode);
      setFeedback(null);
      setShowAnswer(false);
      setShowHints(false);
    }
  };

  const prevChallenge = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(currentChallenge - 1);
      setUserCode(challenges[currentChallenge - 1].starterCode);
      setFeedback(null);
      setShowAnswer(false);
      setShowHints(false);
    }
  };

  const resetCode = () => {
    setUserCode(challenge.starterCode);
    setFeedback(null);
  };

  return (
  <div className="app" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
    <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        🎮 JavaScript Loop Challenges
      </h1>
      <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem' }}>Complete the code and master loops!</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fbbf24', color: '#000', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>⭐</span>
          <span>{score} Points</span>
        </div>
        <div style={{ backgroundColor: '#10b981', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🏆</span>
          <span>{completedChallenges.size}/{challenges.length} Completed</span>
        </div>
      </div>
    </header>

    <div className="progress-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>Challenge {currentChallenge + 1} of {challenges.length}</span>
        <span>{Math.round(((currentChallenge + 1) / challenges.length) * 100)}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentChallenge + 1) / challenges.length) * 100}%` }}
        ></div>
      </div>
    </div>

    <div className="challenge-card">
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {completedChallenges.has(challenge.id) && (
            <span style={{ color: '#10b981', fontSize: '1.5rem' }}>✓</span>
          )}
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>{challenge.title}</h2>
        </div>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>{challenge.description}</p>
      </div>

      <div className="code-editor">
        <div className="code-toolbar">
          <span style={{ fontSize: '0.875rem', color: '#fbbf24', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ✏️ Your Code:
          </span>
          <button 
            onClick={resetCode}
            style={{ 
              fontSize: '0.75rem',
              background: 'transparent',
              color: '#10b981',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              padding: '0.25rem 0.5rem'
            }}
          >
            Reset Code
          </button>
        </div>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="code-area"
          spellCheck="false"
        />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', margin: '1.5rem 0', flexWrap: 'wrap' }}>
        <button 
          onClick={handleSubmit}
          className="btn btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Play size={16} />
          Run & Submit
        </button>
        <button 
          onClick={() => setShowHints(!showHints)}
          className="btn btn-hint"
        >
          👁️ {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          className="btn btn-answer"
        >
          💡 {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>

      {showHints && (
        <div className="feedback" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Hints:</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
            {challenge.hints.map((hint, idx) => (
              <li key={idx} style={{ marginBottom: '0.25rem' }}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {showAnswer && (
        <div className="feedback" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Solution:</h3>
          <pre style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
            padding: '1rem', 
            borderRadius: '0.375rem',
            overflowX: 'auto',
            margin: 0
          }}>
            {challenge.solution}
          </pre>
        </div>
      )}

      {feedback && (
        <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {feedback.correct ? (
              <span style={{ color: '#10b981' }}>✓</span>
            ) : (
              <span style={{ color: '#ef4444' }}>✗</span>
            )}
            <strong>{feedback.message}</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Expected Output:</div>
              <pre style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                padding: '0.75rem', 
                borderRadius: '0.375rem',
                margin: 0,
                fontSize: '0.875rem',
                whiteSpace: 'pre-wrap'
              }}>
                {challenge.expectedOutput.join('\n')}
              </pre>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Your Output:</div>
              <pre style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                padding: '0.75rem', 
                borderRadius: '0.375rem',
                margin: 0,
                fontSize: '0.875rem',
                whiteSpace: 'pre-wrap'
              }}>
                {feedback.output.length > 0 ? feedback.output.join('\n') : '(no output)'}
              </pre>
            </div>
          </div>
        </div>
      )}

      <div className="nav-buttons" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <button
          onClick={prevChallenge}
          disabled={currentChallenge === 0}
          className="btn btn-nav"
          style={{ opacity: currentChallenge === 0 ? 0.4 : 1, cursor: currentChallenge === 0 ? 'not-allowed' : 'pointer' }}
        >
          ← Previous
        </button>
        <button
          onClick={nextChallenge}
          disabled={currentChallenge === challenges.length - 1}
          className="btn btn-nav-next"
          style={{ opacity: currentChallenge === challenges.length - 1 ? 0.4 : 1, cursor: currentChallenge === challenges.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Next →
        </button>
      </div>
    </div>

    {completedChallenges.size === challenges.length && (
      <div style={{ 
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        padding: '2rem',
        borderRadius: '0.75rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          width: '3rem', 
          height: '3rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <Award size={24} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          All Challenges Completed! 🎉
        </h2>
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          You've mastered JavaScript loops!
        </p>
        <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{score} Points</div>
          <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Total Score</div>
        </div>
      </div>
    )}
  </div>
  );
};

export default LoopChallenges;