import React from "react";
import { useEffect } from "react";

function Subtitle({ subtitle, toggleFadeSubtitle, setToggleFadeSubtitle }) {
  useEffect(() => {
    toggleFadeSubtitle ? setToggleFadeSubtitle(false) : setToggleFadeSubtitle(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subtitle]);

  return (
    <h2 className={toggleFadeSubtitle ? "subtitle fade-in" : "subtitle"}>
      <span className="red-square">◻</span> {subtitle}{" "}
      <span className="red-square">◻</span>
    </h2>
  );
}

export default Subtitle;
