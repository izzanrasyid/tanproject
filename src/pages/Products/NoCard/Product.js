import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5%;
  padding: 2%;
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 235px;
  width: 345px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 0;
`;

const TextWrapper = styled.div`
  padding: 2% 0;
  display: flex;
  justify-content: center;
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