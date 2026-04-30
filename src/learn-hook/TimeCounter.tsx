import { useEffect, useState } from "react";

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Count: {count}</div>;
}

export default TimerCounter;
