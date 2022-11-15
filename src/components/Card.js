import React, { useState } from "react";

const Card = (props) => {
  const { letter, setStateOfParent } = props;

  const [clicked, setClicked] = useState();

  const updateClicked = () => {
    if (clicked) {
      console.log('You lose');
    } else {
      setClicked(true);
    }
  };

  const handleClick = () => {
    setStateOfParent();
    updateClicked();
  };

  return (
    <button className="card" onClick={handleClick}>{letter}</button>
  );
};

export default Card;
