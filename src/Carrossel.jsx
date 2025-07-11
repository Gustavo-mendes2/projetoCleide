import React, { useState } from "react";
import SudokuBox from "./SudokuBox";
import CrosswordBox from "./CrosswordBox";
import ChessBox from "./ChessBox";
const boxes = [
  { id: 0, content: "Sudoku" },
  { id: 1, content: "Palavras cruzadas" },
  { id: 2, content: "Desafio de xadrez" },
];

export default function Carousel() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [game, setGame] = useState(true);
  const [selectedGameId, setSelectedGameId] = useState(null);

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

  const renderGameComponent = () => {
    switch (selectedGameId) {
      case 0:
        return <SudokuBox />;
      case 1:
        return <CrosswordBox/>;
      case 2:
        return <ChessBox/>;
      default:
        return <div>Jogo não encontrado</div>;
    }
  };

  return game ? (
    <div className="carousel-container">
      <button className="nav-button" onClick={handlePrev}>⬅</button>

      <div className="carousel">
        {[getRelativeIndex(-1), centerIndex, getRelativeIndex(1)].map(
          (index) => (
            <button
              key={boxes[index].id}
              className={getBoxClass(index)}
              onClick={() => {
                setSelectedGameId(boxes[index].id);
                setGame(false);
              }}
            >
              {boxes[index].content}
            </button>
          )
        )}
      </div>

      <button className="nav-button" onClick={handleNext}>➡</button>
    </div>
  ) : (
    renderGameComponent()
  );
}
