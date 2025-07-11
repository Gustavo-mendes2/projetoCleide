import React, { useState } from "react";
import SudokuBox from "./SudokuBox";
import CrosswordBox from "./CrosswordBox";
import ChessBox from "./ChessBox";
import XadrezImg from './assets/LightKnight.png';
import SudokuImg from './assets/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png';
import CruzadasImg from './assets/649397.png';
const boxes = [
  { id: 0, content: "Sudoku" ,image : SudokuImg},
  { id: 1, content: "Palavras cruzadas", image : CruzadasImg },
  { id: 2, content: "Desafio de xadrez", image : XadrezImg},
];

export default function Carousel({ game, selectedGameId, onSelectGame }) {
  const [centerIndex, setCenterIndex] = useState(1);

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
                onSelectGame(boxes[index].id);
              }}
            >
               <img src={boxes[index].image} alt={boxes[index].content} className="box-img" />
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
