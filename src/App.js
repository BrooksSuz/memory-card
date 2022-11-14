import React from "react";
import Cardlist from "./components/Cardlist";

const App = () => {
  return (
    <div className="container">

      <header>
        <h1>Memory Card Game</h1>
      </header>

      <Cardlist />

    </div>
  );
};

export default App;
