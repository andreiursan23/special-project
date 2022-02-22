import { useState, useEffect } from "react";

import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import PhotosDisplay from "./Components/PhotosDisplay";
import LastChapterStory from "./Components/LastChapterStory";
import BigQuestion from "./Components/BigQuestion";

import { useStory } from "./Hooks/useStory.js";

import "./App.css";

function App() {
  const [storyStep, setStoryStep] = useState(0);

  const { story } = useStory();

  const [subtitle, setSubtitle] = useState(story[storyStep].subtitle);
  const [image, setImage] = useState(story[storyStep].image);
  const [imgText, setImgText] = useState(story[storyStep].imgText);
  const [toggleFadeSubtitle, setToggleFadeSubtitle] = useState(true);
  const [toggleFadeStory, setToggleFadeStory] = useState(true);
  const [lastStoryStep, setLastStoryStep] = useState(false);
  const [chapterSeven, setChapterSeven] = useState(false);
  const [showBigQuestion, setShowBigQuestion] = useState(false);
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    setSubtitle(story[storyStep].subtitle);
    setImage(story[storyStep].image);
    setImgText(story[storyStep].imgText);
  }, [storyStep, story]);

  const previousStory = () => {
    setStoryStep(storyStep - 1);
    setToggleFadeSubtitle(false);
    setToggleFadeStory(false);
  };

  const nextStory = () => {
    setStoryStep(storyStep + 1);
    setToggleFadeSubtitle(false);
    setToggleFadeStory(false);
  };

  return (
    <div className="main-container">
      <main>
        {!lastStoryStep && (
          <>
            <Title />

            <Subtitle
              subtitle={subtitle}
              toggleFadeSubtitle={toggleFadeSubtitle}
              setToggleFadeSubtitle={setToggleFadeSubtitle}
            />

            <PhotosDisplay
              previousStory={previousStory}
              storyStep={storyStep}
              image={image}
              imgText={imgText}
              nextStory={nextStory}
              story={story}
              toggleFadeStory={toggleFadeStory}
              setToggleFadeStory={setToggleFadeStory}
              setLastStoryStep={setLastStoryStep}
              setChapterSeven={setChapterSeven}
            />
          </>
        )}

        {chapterSeven && (
          <>
            <Title />

            <Subtitle
              subtitle="Capitolul VII"
              toggleFadeSubtitle={toggleFadeSubtitle}
              setToggleFadeSubtitle={setToggleFadeSubtitle}
            />

            <LastChapterStory
              setChapterSeven={setChapterSeven}
              setShowBigQuestion={setShowBigQuestion}
            />
          </>
        )}

        {showBigQuestion && (
          <>
            <Subtitle
              subtitle="Capitolul VII - Marea intrebare 💍"
              toggleFadeSubtitle={toggleFadeSubtitle}
              setToggleFadeSubtitle={setToggleFadeSubtitle}
            />
            <BigQuestion
              setShowBigQuestion={setShowBigQuestion}
              setShowRing={setShowRing}
            />
          </>
        )}

        {showRing && (
          <>
            <h1 className="title final fade-in">
              Te iubesc! <span className="heart">💖</span>
            </h1>
            <div className="video-container fade-in" >
              <video
                autoPlay
                loop
                muted
                src="./ring-video.webm"
                type="video/webm"
                height={"656px"}
                width={"504px"}
              >
                Ring Video
              </video>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
