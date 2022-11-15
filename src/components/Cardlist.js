import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardlist = (props) => {
  const { updateCurrentScore, updateBestScore } = props;

  const [arrCard, setArrCard] = useState([
    <Card
      letter='a'
      key='0'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
    />,
    <Card
      letter='b'
      key='1'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
      />,
    <Card
      letter='c'
      key='2'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
    />,
    <Card
      letter='a'
      key='3'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
      />,
    <Card
      letter='b'
      key='4'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
    />,
    <Card
      letter='c'
      key='5'
      setStateOfParent={setStateOfParent}
      updateCurrentScore={updateCurrentScore}
      updateBestScore={updateBestScore}
    />
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

  // hoist function
  function setStateOfParent() {
    setArrCard(randomizeCards);
  }

  useEffect(() => {
    setArrCard(randomizeCards);
  }, []);

  return (
  <div className="cardlist">

    {arrCard}
    
  </div>
  );
};

export default Cardlist;
