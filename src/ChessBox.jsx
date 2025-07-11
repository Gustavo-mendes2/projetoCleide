import React from "react";
import FlashPlayer from "./Game";

export default function ChessBox() {
  return (
    <div className="wrapper">
      <div className="top-bar">
        <div className="arrow-box">↑</div>
        <div className="arrow-box">↓</div>
        <div className="arrow-box">←</div>
        <div className="arrow-box">→</div>
      </div>
      <iframe
      allowTransparency = " true"
        width="800px"
        height="600px"
        src="https://lichess.org/training/frame?theme=brown&bg=dark" 
        frameborder="0"
      ></iframe>
    </div>
  );
}
