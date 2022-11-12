import React from "react";

const Card = (props) => {
  const { letter } = props;

  return (
    <div className="card">
      <div className="letter">{letter}</div>
    </div>
  );
};

export default Card;
