"use client";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { FaForward } from "react-icons/fa";

const KiaPlayer = ({ audioElement, title }) => {
  const playPause = () => {
    audioElement.current.play();
  };

  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div className="navigation-wrapper">
        <div
          className="navigation"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="button-div flex">
        <FaForward />
        <IoCaretForwardCircleOutline
          onClick={playPause}
        />
        <FaForward />
      </div>
    </div>
  );
};

export default KiaPlayer;
