import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardlist = () => {
  const [arrCard, setArrCard] = useState([
    <Card letter='a' key='0' setStateOfParent={setStateOfParent} />,
    <Card letter='b' key='1' setStateOfParent={setStateOfParent} />,
    <Card letter='c' key='2' setStateOfParent={setStateOfParent} />,
    <Card letter='a' key='3' setStateOfParent={setStateOfParent} />,
    <Card letter='b' key='4' setStateOfParent={setStateOfParent} />,
    <Card letter='c' key='5' setStateOfParent={setStateOfParent} />
  ]);

  const randomizeCards = () => {
    const newArr = [...arrCard];
    const arrTemp = [];
    const randomIndex = () => Math.floor(Math.random() * newArr.length);
    while (newArr.length > 0) {
      arrTemp.push(newArr.splice(randomIndex(), 1));
    }
    return arrTemp;
  };

  function setStateOfParent() {
    setArrCard(randomizeCards)
  }

  useEffect(() => {
    setArrCard(randomizeCards);
  }, [])

  return (
  <div className="cardlist">
    {arrCard}
  </div>
  );
};

export default Cardlist;
