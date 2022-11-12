import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="container">

      <header>
        <h1>Memory Card Game</h1>
      </header>

      <div className="card-grid">
        <Card letter="a" />
        <Card letter="b" />
        <Card letter="c" />
        <Card letter="d" />
        <Card letter="e" />
        <Card letter="f" />
        <Card letter="a" />
        <Card letter="b" />
        <Card letter="c" />
        <Card letter="d" />
        <Card letter="e" />
        <Card letter="f" /> 
      </div>

    </div>
  );
};

export default App;
