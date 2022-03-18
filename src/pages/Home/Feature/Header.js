import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5%;
`;

const Title = styled.div`
  flex: 2;
  padding: 1% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Title>
        <Text size={'44px'} weight={'700'}>Fitur TAN Studies</Text>
      </Title>
      <Title>
        <Text size={'12px'} weight={'400'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet urna, blandit convallis sed ridiculus integer gravida.</Text>
      </Title>
    </Container>
  );
};

export default Header;