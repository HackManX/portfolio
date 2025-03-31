import React from "react";
import bgVideo from "../../assets/videos/background.mp4"; // Adjust path based on your folder structure

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src={bgVideo}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default BackgroundVideo;