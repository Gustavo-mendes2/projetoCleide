import React from "react";
import FlashPlayer from "./Game";

export default function SudokuBox() {
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
        src="https://puzzleme.amuselabs.com/pmm/sudoku?id=daa23429&set=56c2e642727cf72808dfc0179e14d7ec7cf3f73d92df66404097d03b9de7020c&embed=1"
        frameborder="0"
      ></iframe>
    </div>
  );
}
