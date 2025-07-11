
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Carrossel from "./Carrossel";

function App() {
  const [game, setGame] = useState(true);
  const [selectedGameId, setSelectedGameId] = useState(null);

  const handleHome = () => {
    setGame(true);
    setSelectedGameId(null);
  };

  const handleSelectGame = (id) => {
    setSelectedGameId(id);
    setGame(false);
  };

  return (
    <>
      <Header onHome={handleHome} />
      <main>
        <Carrossel
          game={game}
          selectedGameId={selectedGameId}
          onSelectGame={handleSelectGame}
        />
      </main>
    </>
  );
}

export default App;
