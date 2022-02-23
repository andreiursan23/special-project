import React from "react";

function RingVideo() {
  return (
    <>
      <h1 className="title final fade-in">
        Te iubesc! <span className="heart">💖</span>
      </h1>
      <div className="video-container fade-in">
        <video
          autoPlay
          loop
          muted
          src="./ring-video.webm"
          type="video/webm"
        >
          Ring Video
        </video>
      </div>
    </>
  );
}

export default RingVideo;
