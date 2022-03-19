import React from "react";
import styled from "styled-components";
import bg from "../../../public/Fill.png";
import JS from "../../../public/JS.png"
import Text from "../../../components/Text/Span";

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 5%;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentLeft = styled.div`
  background: rgba(255, 255, 255, 0.8);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Poster = styled.div`
  background-image: url(${JS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  background: #4CAF50;
  border-radius: 3px;
  padding: 3%;
  margin: 2% 2% 2% 0;
  cursor: pointer;
`;

const LandingSection = () => {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <Text size={'55px'} weight={'600'}>TAN Studies</Text>
          <Text size={'16px'} weight={'400'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui mattis nascetur vitae, cras ornare ut faucibus dignissim. Neque, fermentum, amet, velit etiam commodo suspendisse rutrum urna. Ac vestibulum ut nulla magna.
          </Text>
          <Buttons>
            <Button>
              <Text size={'14px'} weight={'700'}>DAFTAR SEKARANG</Text>
            </Button>
            <Button>
              <Text size={'14px'} weight={'700'}>DAFTAR SEKARANG</Text>
            </Button>
          </Buttons>
        </ContentLeft>
        <ContentRight>
          <Poster />
        </ContentRight>
      </Content>
    </Container>
  );
};

export default LandingSection;