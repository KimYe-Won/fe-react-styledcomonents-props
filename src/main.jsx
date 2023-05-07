import React from "react";
import Box from "./components/box";
import Circle from "./components/Circle";

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" boxText="text1" />
      <Box boxColor="blue" boxText="text2" />
      <Box boxColor="green" boxText="text3"/>
      <Box boxColor="pink" boxText="text4"/>
      <Circle circleColor="pink"></Circle>
      <Circle circleColor="red"></Circle>
      <Circle circleColor="black"></Circle>
      <Circle circleColor="grey"></Circle>
      <Circle circleColor="green"></Circle>
      <Circle circleColor="blue"></Circle>
      <Circle circleColor="orange"></Circle>

    </>
  );
};

export default Main;
