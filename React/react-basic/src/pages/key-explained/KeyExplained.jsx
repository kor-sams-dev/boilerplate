import React from "react";

export const KeyExplained = () => {
  const [showShoes, setShowShoes] = React.useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
      <h1 style={{ fontSize: "20px" }}>Key Explained</h1>
      <button
        style={{ width: "100px" }}
        onClick={() => setShowShoes(!showShoes)}
      >
        Change!
      </button>
      {showShoes ? (
        <>
          <h1>신발 몇개!!</h1>
          <Counter key="신발" />
        </>
      ) : (
        <>
          <h1>신발 말고 몇개!</h1>
          <Counter key="신발아님" />
        </>
      )}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ display: "flex", columnGap: "12px" }}>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};
