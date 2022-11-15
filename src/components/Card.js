import React, { useState, useEffect } from "react";

const Card = (props) => {
  const {
    letter,
    setStateOfParent,
    updateCurrentScore,
    updateBestScore
  } = props;

  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    if (clicked === 0) {
      updateCurrentScore();
      setClicked(1);
    } else if (clicked === 1) {
      console.log('You lose');
      return null;
    }
    setStateOfParent();
  };

  useEffect(() => {
    updateCurrentScore();
    updateBestScore();
  }, [updateBestScore, updateCurrentScore]);

  return (
    <button className="card" clicked={clicked} onClick={handleClick}>{letter}</button>
  );
};

export default Card;
