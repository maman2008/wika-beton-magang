import { useState, useEffect } from 'react';
import './TypingAnimation.css';

function TypingAnimation({ text, speed = 100, delay = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const texts = Array.isArray(text) ? text : [text];
  
  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pauseTimer);
    }

    const currentText = texts[loopNum % texts.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause at the end before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting effect
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, texts, speed, delay, isPaused]);

  return (
    <div className="typing-animation">
      <span className="typing-text">{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
}

export default TypingAnimation;
