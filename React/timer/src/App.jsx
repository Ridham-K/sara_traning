import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const totalTime = 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  // Start Timer
  const startTimer = () => {
    // Prevent multiple intervals
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= totalTime) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  // Stop Timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const progress = count / totalTime;
  const offset = circumference * (1 - progress);

  return (
    <div className="container">
      <h1>Circle Timer</h1>

      <svg width="180" height="180">
        {/* Background Circle */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#ddd"
          strokeWidth="10"
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="blue"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
        />

        {/* Number */}
        <text
          x="90"
          y="98"
          textAnchor="middle"
          fontSize="30"
          fontWeight="bold"
        >
          {count}
        </text>
      </svg>

      <div style={{ marginTop: "20px" }}>
        <button onClick={startTimer}>Start Timer</button>

        <button
          onClick={stopTimer}
          style={{ marginLeft: "10px" }}
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default App;