import React, { useCallback, useState } from "react";
import { throttle } from "lodash";
const LodashThrottle = (props) => {
  const [count, setCount] = useState(0);

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
      <div className="title">lodash throttle</div>
      <div className="scroll" onScroll={handleScroll}>
        <div className="content"></div>
      </div>
      <span className="count">{count}</span>
    </div>
  );
};

export default LodashThrottle;
