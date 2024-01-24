import React from "react";

const RecursiveList = ({ data, level = 0 }) => {
  if (data?.children?.length === 0) {
    return (
      <li style={{ marker: "none", marginLeft: `${level * 10}px` }}>
        {data.name}
      </li>
    );
  }
  return (
    <>
      {data.map((item) => {
        return (
          <li key={item.id} style={{ marginLeft: `${level * 10}px` }}>
            {`${item.name} :`}{" "}
            <ul>{<RecursiveList data={item.children} level={level + 1} />}</ul>
          </li>
        );
      })}
    </>
  );
};

export const Recursive = ({ data }) => {
  return (
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: "700" }}>Recursive</h1>
      <ul>
        <RecursiveList data={data} />
      </ul>
    </div>
  );
};
