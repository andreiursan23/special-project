import React from "react";

function LastChapterStory({ setChapterSeven, setShowBigQuestion }) {
  const goToBigQuestion = () => {
    setChapterSeven(false);
    setShowBigQuestion(true);
  };

  return (
    <>
      <div className="last-chapter-container fade-in">
        <p>
          In fiecare zi imi dau seama cat suntem de norocosi ca ne avem unul pe
          celalalt.
        </p>
        <p>
          Cand te strang in brate, oriunde am fi, ma simt acasa, ma simt iubit,
          ma simt apreciat si stiu ca sunt cu dragostea vietii mele, si cu
          persoana cu care ma distrez cel mai tare.
        </p>
        <p>
          Simt ca in prezenta ta vreau sa fiu o persoana mai buna si ca ne
          ajutam unul pe celalat sa crestem frumos.
        </p>
        <p>
          Chiar daca poate nu reusesc sa descriu in cuvinte sentimentele pe care
          le traiesc in preajma ta, de un lucru sunt sigur:{" "}
          <em>ca vreau sa simt asta pentru tot restul vietii mele.</em>
        </p>
        <p>
          Si stiu ca probabil pare a fi o perioada destul de lunga, dar sincer
          nu imi dau seama cand au trecut acesti 12 ani de cand ne cunoastem.
        </p>
      </div>

      <div className="btn-container fade-in">
        <button
          className="second-to-last-chapter-btn"
          onClick={goToBigQuestion}
        >
          Asa ca a venit momentul sa te intreb ceva... <span className="arrow">🐧</span>
        </button>
      </div>
    </>
  );
}

export default LastChapterStory;
