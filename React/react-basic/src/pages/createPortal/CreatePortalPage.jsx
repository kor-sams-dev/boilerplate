import { useState } from "react";
import { createPortal } from "react-dom";

export const CreatePortalPage = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      style={{ position: "relative" }}
      onClick={() => console.log("div clicked")} // 이벤트 버블링 주의
    >
      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        Open Alert
      </button>
      <Alert isShow={isShow} onClose={() => setIsShow(false)} />
    </div>
  );
};

const Alert = ({ isShow, onClose }) => {
  if (!isShow) return null;

  return createPortal(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        backgroundColor: "aqua",
        padding: "15px",
        top: "0",
        left: "50%",
      }}
      onClick={onClose}
    >
      <span>This is Alert</span>
    </div>,
    document.body
  );
};
