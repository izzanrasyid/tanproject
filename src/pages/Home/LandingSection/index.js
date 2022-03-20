import React from "react";
import Text from "../../../components/Text/Span";
import {
  Container,
  Content,
  ContentLeft,
  Buttons,
  ContentRight,
  Poster,
  Button
} from './styles';

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