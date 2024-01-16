import React from "react";

const Context = React.createContext(null);

const Header = ({ children }) => {
  const { value } = React.useContext(Context);
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid black" }}>
      {children}
      {value}
    </div>
  );
};

const Body = ({ children }) => {
  return <div style={{ padding: "10px" }}>{children}</div>;
};

const Footer = ({ children }) => {
  return (
    <div style={{ padding: "10px", borderTop: "1px solid black" }}>
      {children}
    </div>
  );
};

export const Card = ({ children, value }) => {
  return (
    <Context.Provider value={{ value }}>
      <div style={{ width: "200px", border: "1px solid black" }}>
        {children}
      </div>
    </Context.Provider>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
