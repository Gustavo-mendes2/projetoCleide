import React from "react";
import FlashPlayer from "./Game";

export default function CrosswordBox() {
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
        src="https://puzzleme.amuselabs.com/pmm/crossword?id=8c90a88d&set=56c2e642727cf72808dfc0179e14d7ec7cf3f73d92df66404097d03b9de7020c"
        frameborder="0"
      ></iframe>
    </div>
  );
}
