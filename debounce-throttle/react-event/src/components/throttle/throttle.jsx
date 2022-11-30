import React, { useCallback, useState } from "react";

const Throttle = (props) => {
  const [count, setCount] = useState(0);

  const throttle = useCallback((callback, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    };
  }, []);

  const increaseCount = useCallback(
    throttle(() => {
      setCount((prev) => ++prev);
    }, 100),
    []
  );

  const handleScroll = useCallback(() => {
    increaseCount();
  }, []);

  return (
    <div className="item">
      <div className="title">throttle</div>
      <div className="scroll" onScroll={handleScroll}>
        <div className="content"></div>
      </div>
      <span className="count">{count}</span>
    </div>
  );
};

export default Throttle;
