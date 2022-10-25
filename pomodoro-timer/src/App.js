import React from "react";

import { Timer } from "./Timer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Timer />
    </div>
  );
}

export default App;

// export const Timer = () => {
//   const [minutes, setMinutes] = React.useState(0);
//   const [seconds, setSeconds] = React.useState(0);
//   const [pomodoroCount, setPomodoroCount] = React.useState(0);

//   const [isTimerStarted, setIsTimerStarted] = React.useState(false);

//   const [isBreak, setIsBreak] = React.useState(false);
//   const [isSkipedBreak, setIsSkipedBreak] = React.useState(false);

//   const [isMounted, setIsMounted] = React.useState(false); // Был ли первый рендер

//   React.useEffect(() => {
//     if (!isMounted || isSkipedBreak) {
//       zeroTime();
//       return;
//     }

//     const interval = setInterval(() => {
//       clearInterval(interval);

//       if (seconds === 1 && minutes !== 0) {
//         setSeconds(0);
//         setMinutes((prev) => prev - 1);
//       } else if (minutes === 0) {
//         console.log("Помидор закончен");
//         if (!isBreak) {
//           breakTime();
//           setIsBreak(true);
//           setPomodoroCount((prev) => prev + 1);
//         } else {
//           setIsBreak(false);
//           setIsTimerStarted(false);
//         }
//       } else {
//         setSeconds((prev) => prev - 1);
//       }
//     }, 1000);
//   }, [seconds, minutes]);

//   const pomodoroTime = () => {
//     setMinutes(1);
//     setSeconds(5);
//   };

//   const breakTime = () => {
//     setMinutes(1);
//     setSeconds(4);
//   };

//   const zeroTime = () => {
//     setMinutes(0);
//     setSeconds(0);
//   };

//   const startTimer = () => {
//     setIsMounted(true);
//     setIsTimerStarted(true);
//     setIsSkipedBreak(false);

//     if (isBreak) {
//       breakTime();
//     } else {
//       pomodoroTime();
//     }
//   };

//   const resetTimer = () => {
//     setIsMounted(false);
//     setIsTimerStarted(false);
//     zeroTime();
//   };

//   const skipBreak = () => {
//     setIsBreak(false);
//     setIsSkipedBreak(true);
//     setIsTimerStarted(false);
//     pomodoroTime();
//   };

//   const minutesTime = minutes >= 10 ? minutes : `0${minutes}`;
//   const secondsTime = seconds >= 10 ? seconds : `0${seconds}`;

//   return (
//     <div className="timer">
//       {isBreak ? <h1>Break timer</h1> : <h1>Pomodoro timer</h1>}
//       <h2 className="completedPomodoros">
//         Completed pomodoros: {pomodoroCount}
//       </h2>
//       <div className="time">
//         <h2>{minutesTime === 0 ? "00" : minutesTime}</h2>
//         <h2>{secondsTime === 60 || secondsTime === 0 ? "00" : secondsTime}</h2>
//       </div>
//       <div className="buttons">
//         {!isTimerStarted ? (
//           <button onClick={startTimer}>Start</button>
//         ) : (
//           <button onClick={resetTimer}>Reset</button>
//         )}
//         {isBreak && <button onClick={skipBreak}>Skip a break</button>}
//       </div>
//     </div>
//   );
// };
