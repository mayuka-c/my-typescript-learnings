import { useEffect, useRef, useState } from "react";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const intervalID = useRef<number>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalID.current) {
    clearInterval(intervalID.current);
  }

  useEffect(() => {
    let timerID: number;
    if (isRunning) {
      timerID = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) return prevTime;
          return prevTime - 50;
        });
      }, 50);

      intervalID.current = timerID;
    } else if (intervalID.current) {
      clearInterval(intervalID.current);
    }

    return () => clearInterval(timerID);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
