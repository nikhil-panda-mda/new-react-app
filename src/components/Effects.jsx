import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [pauseCount, setPauseCount] = useState({play: 0, pause: 0})
  const [intervalId, setIntervalId] = useState(null);

  // Format seconds to MM:SS
  function formatTime(totalSeconds) {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  const startTimer = () => {
    if (intervalId !== null) return; // Already running

    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  useEffect(() => {
    console.log(pauseCount, " - times paused");
  }, [pauseCount])
  
  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setPauseCount(prev => ({...prev, pause: prev.pause + 1}));
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setCount(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className='flex flex-col gap-y-2 p-4'>
      <div className='ps-3 text-xl'>
        <span>{formatTime(count)}</span>
      </div>
      <div className='gap-2 flex'>
        <button onClick={intervalId ? pauseTimer : startTimer}>
          {intervalId ? 'Pause Timer' : 'Start Timer'}
        </button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
}
