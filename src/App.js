import React, { useState }from "react";
import Cardlist from "./components/Cardlist";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateCurrentScore = () => {
    let score = currentScore + 1;
    setCurrentScore(score);
  };

  const updateBestScore = () => {
    setBestScore(currentScore);
  };

  return (
    <div className="container">

      <header>
        <h1>Memory Card Game</h1>
        <Scoreboard
          currentScore={currentScore}
          bestScore={bestScore}
        />
      </header>

      <Cardlist
        updateCurrentScore={updateCurrentScore}
        updateBestScore={updateBestScore}
      />

    </div>
  );
};

export default App;
