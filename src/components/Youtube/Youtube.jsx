import React from "react";
import "./Youtube.css";
const Youtube = () => {
  return (
    <div className="youtubewrapper">
      <iframe
        src="https://www.youtube.com/embed/ayl7ylTXPGQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
