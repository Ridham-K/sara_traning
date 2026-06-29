import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer Started");

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer Cleaned Up");
      clearInterval(timer);
    };
  }, []);

  return (
    <h2>
      Seconds: {seconds}
    </h2>
  );
}

export default Timer;