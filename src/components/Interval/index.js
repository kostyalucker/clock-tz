import React from "react";

const Interval = ({currentInterval, changeInterval}) => {
  return (
    <div>
      <span>
        Интервал обновления секундомера: {currentInterval} сек.
      </span>
      <span>
        <button onClick={() => changeInterval(currentInterval - 1)}>-</button>
        <button onClick={() => changeInterval(currentInterval + 1)}>+</button>
      </span>
    </div>
  );
};

export default Interval;