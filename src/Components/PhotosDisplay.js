import React from "react";
import { useEffect, useState } from "react";

function PhotosDisplay({
  previousStory,
  storyStep,
  image,
  imgText,
  nextStory,
  story,
  toggleFadeStory,
  setToggleFadeStory,
  setLastStoryStep,
  setChapterSeven,
}) {
  const [isSpecialBtn, setIsSpecialBtn] = useState(false);

  useEffect(() => {
    toggleFadeStory ? setToggleFadeStory(false) : setToggleFadeStory(true);

    if (storyStep === story.length - 1) {
      setIsSpecialBtn(true);
    } else {
      setIsSpecialBtn(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgText]);

  const nextChapter = () => {
    setLastStoryStep(true);
    setChapterSeven(true);
  };

  return (
    <section className="photo-section">
      <div className="btn-container">
        <button
          onClick={previousStory}
          disabled={storyStep === 0 ? true : false}
        >
          <span className="arrow">◀</span> Stai, de unde am plecat?
        </button>
      </div>

      <div className="photo-container">
        <figure>
          <img src={image} alt="Story part" />
          <div className="img-text">
            <figcaption className={toggleFadeStory ? "fade-in" : ""}>
              {imgText}
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="btn-container">
        {!isSpecialBtn ? (
          <button
            onClick={nextStory}
            disabled={storyStep === story.length - 1 ? true : false}
          >
            Hai la urmatoarea, nu? <span className="arrow">▶</span>
          </button>
        ) : (
          <button onClick={nextChapter} className="next-chapter-btn">
            Pregatita pentru urmatorul capitol?{" "}
            <span className="arrow">🍾</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default PhotosDisplay;
