import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Gototop = () => {
  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="top-btn" onClick={gotoBtn}>
      <button className="top">
          <FaArrowCircleUp/>
      </button>
    </div>
  );
};

export default Gototop;
