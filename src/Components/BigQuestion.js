import React from "react";

function BigQuestion({ setShowBigQuestion, setShowRing }) {
  const showRing = () => {
    setShowBigQuestion(false);
    setShowRing(true);
  };

  return (
    <>
      <div className="big-question-container fade-in">
        <p>
          Vrei sa fim noi doi, din <span className="date">22.02.2022</span>,
          pana la sfarsitul vietii?
        </p>
      </div>

      <div className="btn-container special fade-in">
        <button className="big-question-btn" onClick={showRing}>
          DA <span className="arrow">💖</span>
        </button>
        <button className="big-question-btn" disabled={true}>
          NU <span className="arrow"></span>
        </button>
      </div>
    </>
  );
}

export default BigQuestion;
