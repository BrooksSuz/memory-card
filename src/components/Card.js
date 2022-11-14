import React from "react";

const Card = (props) => {
  const { letter, setStateOfParent } = props;

  return (
    <p className="card" onClick={setStateOfParent}>{letter}</p>
  );
};

export default Card;
