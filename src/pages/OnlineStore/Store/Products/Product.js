import React from 'react';
import { Text } from '../../../../components/Text';
import Rating from '../../../../components/Rating';
import Button from '../../../../components/Button';
import { ProductContainer, ImageWrapper, Image, Information, Wrapper, OldPrice, RatingWrapper } from './styles';

const Product = ({ image, title, price, oldPrice, rating, reviewers }) => {
  return (
    <ProductContainer>
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
    </ProductContainer>
  );
};

export default Product;