import React from "react";
import FlashPlayer from "./Game";

export default function GameScreen() {
  return (
    <div className="wrapper">
      <div className="top-bar">
        <div className="arrow-box">↑</div>
        <div className="arrow-box">↓</div>
        <div className="arrow-box">←</div>
        <div className="arrow-box">→</div>
      </div>

      <iframe
        width="800px"
        height="600px"
        src="https://embedabbl.zombienw.com/ruffle/index.html?swf=https://embedabbl.zombienw.com/ruffle/test.swf"
        frameborder="0"
      ></iframe>
    </div>
  );
}
