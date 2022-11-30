import React, { useCallback, useState } from "react";

const Normal = (props) => {
  const [count, setCount] = useState(0);

  const handleScroll = useCallback(() => {
    setCount((prev) => ++prev);
  }, []);

  return (
    <div className="item">
      <div className="title">normal</div>
      <div className="scroll" onScroll={handleScroll}>
        <div className="content"></div>
      </div>
      <span className="count">{count}</span>
    </div>
  );
};

export default Normal;
