import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
const LodashDebounce = (props) => {
  const [count, setCount] = useState(0);

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
      <div className="title">lodash debounce</div>
      <div className="scroll" onScroll={handleScroll}>
        <div className="content"></div>
      </div>
      <span className="count">{count}</span>
    </div>
  );
};

export default LodashDebounce;
