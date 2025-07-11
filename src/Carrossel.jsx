import React, { useState } from "react";
import GameScreen from "./GameScreen";

const boxes = [
  { id: 0, content: "Caixa 1" },
  { id: 1, content: "Caixa 2" },
  { id: 2, content: "Caixa 3" },
];

export default function Carousel() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [game, setGame] = useState(true);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + boxes.length) % boxes.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % boxes.length);
  };

  const getBoxClass = (index) => {
    return index === centerIndex ? "box center" : "box side";
  };

  const getRelativeIndex = (offset) =>
    (centerIndex + offset + boxes.length) % boxes.length;

  return game ? (
    <div className="carousel-container">
      <button className="nav-button" onClick={handlePrev}>
        ⬅
      </button>

      <div className="carousel">
        {[getRelativeIndex(-1), centerIndex, getRelativeIndex(1)].map(
          (index) => (
            <button
              key={boxes[index].id}
              className={getBoxClass(index)}
              onClick={() => {
                setGame(false);
              }}
            >
              {boxes[index].content}
            </button>
          )
        )}
      </div>

      <button className="nav-button" onClick={handleNext}>
        ➡
      </button>
    </div>
  ) : (
    <>
      <GameScreen></GameScreen>
    </>
  );
}
