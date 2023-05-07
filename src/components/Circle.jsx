import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  border-radius: 360px;
  background-color: ${(props) => (props.circleColor ? props.circleColor : "green")};
  display: inline-block;

  align-items: center;
  justify-content: center;
`;

const CircleText = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const Circle = (props) => {
  return (
    <>
      <CircleEach circleColor={props.circleColor}>
        <CircleText></CircleText>
      </CircleEach>
    </>
  );
};

export default Circle;
