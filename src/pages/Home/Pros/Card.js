import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  padding: 2.5% 0;
`;

const Poster = styled.div`
  padding: 5% 5%;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 80%;
  width: 80%;
  flex: 8;
`;

const Title = styled.div`
  flex: 2;
  padding: 1% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ image, title }) => {
  return (
    <Container>
      <Poster img={image} />
      <Title>
        <Text size={'20px'} weight={'700'}>{title}</Text>
      </Title>
      <Title>
        <Text size={'12px'} weight={'400'} color={'#333849'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vulputate nisi, commodo ullamcorper purus. Aenean et quam amet cras. Amet cursus dictum donec orci. In platea amet, pellentesque enim sed.
        </Text>
      </Title>
    </Container>
  );
};

export default Card;