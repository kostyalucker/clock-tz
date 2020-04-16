import { useEffect, useState } from "react";

export default (callback, interval) => {
  const [isRun, setRun] = useState(false);

  useEffect(() => {
    let savedInterval = null;

    if (isRun) {
      savedInterval = setInterval(callback, interval * 1000);
    } else if (!isRun && interval === 0) {
        clearInterval(savedInterval)
    }

    return () => clearInterval(savedInterval);
  }, [interval, isRun, callback]);

  return {
    start: () => {
      setRun(true);
    },
    stop: () => {
      setRun(false);
    },
  };
};
