import React, { useState } from "react";
import Interval from "../Interval";
import useInterval from "../../hooks/useInterval";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(0);

  const { start, stop } = useInterval(() => {
    setCurrentTime((prevState) => prevState + currentInterval);
  }, currentInterval);

  function changeInterval(count) {
    if (count === -1) return;

    setCurrentInterval(count);
  }

  return (
    <div>
      <Interval
        currentInterval={currentInterval}
        changeInterval={changeInterval}
      />
      <div>Секундомер: {currentTime} сек.</div>
      <div>
        <button onClick={start}>Старт</button>
        <button onClick={() => {
            stop()
            setCurrentTime(0)
        }}>Стоп</button>
      </div>
    </div>
  );
};

export default Timer;
