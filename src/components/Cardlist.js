import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardlist = () => {
  const [letters] = useState('abcabc');
  const arrCard = [
    <Card letter={letters[0]} key='0' />,
    <Card letter={letters[1]} key='1' />,
    <Card letter={letters[2]} key='2' />,
    <Card letter={letters[3]} key='3' />,
    <Card letter={letters[4]} key='4' />,
    <Card letter={letters[5]} key='5' />
  ];
  
  const randomizeCards = () => {
    const newArr = [...arrCard];
    const randomIndex = () => Math.floor(Math.random() * newArr.length);
    const arr = [];
    while (newArr.length > 0) {
      arr.push(newArr.splice(randomIndex(), 1));
    }
    return arr;
  };

  console.log(randomizeCards());

  const onClickRandomize = (e) => {
  };

  useEffect(() => {

  }, [])

  return(
  <div className="cardlist">
    {arrCard}
  </div>
  );
};

export default Cardlist;
