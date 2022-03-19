import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";
import Card from "./Card";
import { contents } from "./constant"

const Container = styled.div`
  display: flex;
  padding: 0 5%;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5% 10%;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Pros = () => {
  return (
    <Container>
      <Title>
        <Text size={'44px'} weight={'700'}>Keunggulan TAN Studies</Text>
      </Title>
      <Contents>
        { contents.map((content, id) => <Card image={content.image} title={content.title} key={id}/>) }
      </Contents>
    </Container>
  );
};

export default Pros;