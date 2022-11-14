import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardlist = () => {
  const [arrCard, setArrCard] = useState([
    <Card letter='a' key='0' randomizeCards={randomizeCards} />,
    <Card letter='b' key='1' randomizeCards={randomizeCards} />,
    <Card letter='c' key='2' randomizeCards={randomizeCards} />,
    <Card letter='a' key='3' randomizeCards={randomizeCards} />,
    <Card letter='b' key='4' randomizeCards={randomizeCards} />,
    <Card letter='c' key='5' randomizeCards={randomizeCards} />
  ]);
  
  function randomizeCards() {
    const newArr = [...arrCard];
    const arrTemp = [];
    const randomIndex = () => Math.floor(Math.random() * newArr.length);
    while (newArr.length > 0) {
      arrTemp.push(newArr.splice(randomIndex(), 1));
    }
    return arrTemp;
  }

  useEffect(() => {
    setArrCard(randomizeCards);
  }, [])

  return (
  <div className="cardlist">
    {randomizeCards()}
  </div>
  );
};

export default Cardlist;
