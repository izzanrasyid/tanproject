import React from "react";
import styled from "styled-components";
import bg from "../../../public/BG.png";
import Card from "./Card";
import { contents } from "./constant";

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Body = () => {
  return (
    <Container>
      <CardWrapper>
        { contents.map((content, id) => <Card title={content.title} image={content.image} key={id} />) }
      </CardWrapper>
    </Container>
  );
};

export default Body;