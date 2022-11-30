import React, { useCallback, useState } from "react";

const Debounce = (props) => {
  const [count, setCount] = useState(0);

  const debounce = useCallback((callback, delay) => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
  }, []);

  const increaseCount = useCallback(
    debounce(() => {
      setCount((prev) => ++prev);
    }, 100),
    []
  );

  const handleScroll = useCallback(() => {
    increaseCount();
  }, []);

  return (
    <div className="item">
      <div className="title">debounce</div>
      <div className="scroll" onScroll={handleScroll}>
        <div className="content"></div>
      </div>
      <span className="count">{count}</span>
    </div>
  );
};

export default Debounce;
