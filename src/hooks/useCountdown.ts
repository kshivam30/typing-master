import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current !== null;

  const startCountdown = useCallback(() => {
    if (!hasTimerEnded && !isRunning) {
      console.log("Countdown has started."); 
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(intervalRef.current!);
            return 0; 
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }
  }, [hasTimerEnded, isRunning]);

  const resetCountdown = useCallback(() => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setTimeLeft(seconds);
  }, [seconds]);

  // Clear the interval when the countdown reaches 0
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  // Clear the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, []);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;
