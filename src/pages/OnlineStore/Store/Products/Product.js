import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import Rating from '../../../../components/Rating';
import Button from '../../../../components/Button';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(232, 232, 232, 0.535836);
  box-sizing: border-box;
  box-shadow: -0.2px 3px 16px #EAEAEA;
  border-radius: 3px;
  min-width: 20%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  padding: 5% 5%;
  height: 400px;
  width: auto;
`;

const Image = styled.div`
  background-image: ${({img}) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5%;
`;

const Wrapper = styled.div`
  padding: 4% 0;
  display: flex;
  align-items: center;
`;

const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-decoration: line-through;
`;

const RatingWrapper = styled.div`
  padding: 4% 0 8% 0;
  display: flex;
  align-items: center;
`;

const Product = ({ image, title, price, oldPrice, rating, reviewers }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image img={image}/>
      </ImageWrapper>
      <Information>
        <Text size={'22px'} weight={'400'}>{title}</Text>
        <Text size={'24px'} weight={'700'} color={'#4CAF50'}>{price}</Text>
        <Wrapper>
          <OldPrice>{oldPrice}</OldPrice>
        </Wrapper>
        <RatingWrapper>
          <Rating rating={rating} reviewers={reviewers} />
        </RatingWrapper>
        <Button text={'Beli'} color={'#4CAF50'} />
      </Information>
    </Container>
  );
};

export default Product;