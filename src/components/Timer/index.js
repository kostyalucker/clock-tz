import React, { useState, useEffect } from "react";
import Interval from "../Interval";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(0);
  const [isPlay, setPlay] = useState(false);

  function handleStart() {
    if (currentInterval === 0) return;

    setPlay(true);
  }

  function handleStop() {
    setPlay(false);
    setCurrentTime(0);
  }

  function changeInterval(count) {
    if (count === -1) return;

    setCurrentInterval(count);
  }

  useEffect(() => {
    let savedInterval = null;

    if (isPlay) {
      savedInterval = setInterval(() => {
        setCurrentTime((prevState) => prevState + currentInterval);
      }, currentInterval * 1000);
    } else if (!isPlay || currentInterval === 0) {
      clearInterval(savedInterval);
    }

    return () => clearInterval(savedInterval);
  }, [currentInterval, isPlay]);

  return (
    <div>
      <Interval
        currentInterval={currentInterval}
        changeInterval={changeInterval}
      />
      <div>Секундомер: {currentTime} сек.</div>
      <div>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>
    </div>
  );
};

export default Timer;
