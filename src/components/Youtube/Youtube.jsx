import React from "react";
import "./Youtube.css";
const Youtube = () => {
  return (
    <div className="youtubewrapper">
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  );
};

export default Youtube;
