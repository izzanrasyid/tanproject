import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";
import {
  PictureWrapper,
  Picture,
  Content,
  TextWrapper
} from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 3px 16px rgba(141, 141, 141, 0.6);
  border-radius: 10px;
  margin: 5%;
  padding: 2%;
`;

const Product = ({img, title}) => {
  return (
    <Container>
      <PictureWrapper>
        <Picture img={img}/>
      </PictureWrapper>
      <Content>
        <TextWrapper>
          <Text size={'28px'} weight={'700'} color={'#333849'}>
            {title}
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text size={'16px'} weight={'400'} color={'#737373'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ac orci, euismod eu amet ullamcorper eget faucibus. Aliquam tortor augue vitae, elementum erat vehicula senectus.
          </Text>
        </TextWrapper>
      </Content>
    </Container>
  );
};

export default Product;