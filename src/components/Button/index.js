import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ color }) => (color)};
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Button = (color, text) => {
  return (
    <Wrapper color={color} >{text}</Wrapper>
  );
};

export default Button;