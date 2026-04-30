import { useEffect, useRef, useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTimerRunning]);

  return (
    <div className={styles.container}>
      <div className={styles.countDisplay}>{count}</div>

      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${styles.danger}`}
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </button>

        <button
          className={styles.button}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className={`${styles.button} ${styles.success}`}
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
      </div>

      <button
        className={styles.button}
        onClick={() => setIsTimerRunning(!isTimerRunning)}
      >
        {isTimerRunning ? "⏸ Pause" : "▶️ Start"}
      </button>
    </div>
  );
}

export default Counter;
