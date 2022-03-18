import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";
import { IconArrow } from "../../../components/Icons";

const CardContainer = styled.div`
  max-width: 20%;
  background-color: #FFF;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(202, 202, 202, 0.6);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 40%;
  }
  margin: 2%;
`;

const PhotoWrapper = styled.div`
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Poster = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70%;
  width: 70%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5% 10%;
`;

const Card = ({ title, image }) => {
  return (
    <CardContainer>
      <PhotoWrapper>
        <Poster img={image} />
      </PhotoWrapper>
      <Title>
        <Text size={'20px'} weight={'700'}>{title}</Text>
      </Title>
      <Title>
        <Text size={'12px'} weight={'400'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Title>
      <Title>
        <Text size={'14px'} weight={'600'} color={'#4CAF50'}>
          Learn More
        </Text>
      </Title>
    </CardContainer>
  );
};

export default Card;