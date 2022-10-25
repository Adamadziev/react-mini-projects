import React from "react";

import "./Timer.css";

export const Timer = () => {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [pomodoroCount, setPomodoroCount] = React.useState(0);

  const [isTimerStarted, setIsTimerStarted] = React.useState(false);

  const [isBreak, setIsBreak] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isSkipedBreak, setIsSkipedBreak] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false); // Был ли первый рендер

  // Сделать так чтоб таймер заканчивался когда минута равна нулю и закончились секунды, а не когда минута равна единице

  React.useEffect(() => {
    console.log(minutes, " ", seconds);
    if (isPaused) return;

    if (!isMounted || isSkipedBreak) {
      zeroTime();
      return;
    }

    const tick = () => {
      if (seconds === 0) {
        setSeconds(4);
        if (minutes !== 0) {
          setMinutes((prev) => prev - 1);
        }
      }
      if (minutes === 0 && seconds === 0) {
        console.log("Помидор закончен");
        if (!isBreak) {
          breakTime();
          setIsBreak(true);
          setPomodoroCount((prev) => prev + 1);
        } else {
          setIsBreak(false);
          setIsTimerStarted(false);
          zeroTime();
        }
      } else {
        setSeconds((prev) => prev - 1);
      }
    };

    const interval = setInterval(() => {
      clearInterval(interval);

      tick();
    }, 1000);
  }, [seconds, minutes, isPaused]);

  const pomodoroTime = () => {
    setMinutes(1);
    setSeconds(4);
  };

  const breakTime = () => {
    setMinutes(1);
    setSeconds(3);
  };

  const zeroTime = () => {
    setMinutes(0);
    setSeconds(0);
  };

  const startTimer = () => {
    setIsMounted(true);
    setIsTimerStarted(true);
    setIsSkipedBreak(false);
    setIsPaused(false);

    if (isBreak) {
      breakTime();
    } else {
      pomodoroTime();
    }
  };

  const resetTimer = () => {
    setIsMounted(false);
    setIsTimerStarted(false);
    zeroTime();
  };

  const skipBreak = () => {
    setIsBreak(false);
    setIsSkipedBreak(true);
    setIsTimerStarted(false);
    pomodoroTime();
  };

  const pausedTimer = () => {
    setIsPaused(true);

    // const min = minutes;
    // const sec = seconds;
    // setTimeout(() => {
    //   console.log(`min: ${min}`, `sec: ${sec}`);
    //   setMinutes(min);
    //   setSeconds(sec);
    // }, 400);
  };

  const minutesTime = minutes >= 10 ? minutes : `0${minutes}`;
  const secondsTime = seconds >= 10 ? seconds : `0${seconds}`;

  return (
    <div className="timer">
      {isBreak ? <h1>Break timer</h1> : <h1>Pomodoro timer</h1>}
      <h2 className="completedPomodoros">
        Completed pomodoros: {pomodoroCount}
      </h2>
      <div className="time">
        <h2>{minutesTime === 0 ? "00" : minutesTime}</h2>
        <h2>{secondsTime === 60 || secondsTime === 0 ? "00" : secondsTime}</h2>
      </div>
      <div className="buttons">
        {!isTimerStarted ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={pausedTimer}>Paused</button>
            <button onClick={() => setIsPaused(false)}>Continue</button>
          </>
        )}
        {isBreak && <button onClick={skipBreak}>Skip a break</button>}
      </div>
    </div>
  );
};
