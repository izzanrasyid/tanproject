import React from "react";
import styled from 'styled-components';
import { Text, Span } from "../../../components/Text";
import Rating from '../../../components/Rating';
import Button from "../../../components/Button";
import book from '../../../public/book.png';

const Container = styled.div`
  padding: 5%;
  display: flex;
`;

const ProductImageWrapper = styled.div`
  padding: 0 5%;
  height: auto;
  width: auto;
  flex: 1;
`;

const ProductImage = styled.div`
  background-image: url(${book});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProductInformation = styled.div`
  flex: 1;
`;

const BookInformation = styled.div`
  display: flex;
  padding: 10% 10% 10% 0;
`;

const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 10%;
`;

const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-decoration: line-through;
`;

const Wrapper = styled.div`
  padding: 4% 0;
  display: flex;
  align-items: center;
`;

const RatingWrapper = styled.div`
  padding: 4% 0 8% 0;
  display: flex;
  align-items: center;
`;

const Product = () => {

  return (
    <Container>
      <ProductImageWrapper>
        <ProductImage/>
      </ProductImageWrapper>
      <ProductInformation>
        <Text size={'30px'} weight={'700'}>Best Of The Best Psikotes & TPA</Text>
        <BookInformation>
          <Information>
            <Text size={'12px'} weight={'400'} color={'#CFCFCF'}>Author</Text>
              &nbsp;
            <Span size={'12px'} weight={'600'} color={'#333849'}>Buku Bagus</Span>
          </Information>
          <Information>
            <Text size={'12px'} weight={'400'} color={'#CFCFCF'}>Program</Text>
              &nbsp;
            <Span size={'12px'} weight={'600'} color={'#333849'}>TPA</Span>
          </Information>
        </BookInformation>
        <Text size={'24px'} weight={'700'} color={'#4CAF50'}>Rp. 150.000</Text>
        <Wrapper>
          <OldPrice>Rp. 200.000</OldPrice>
        </Wrapper>
        <RatingWrapper>
          <Rating rating={5} reviewers={321}/>
        </RatingWrapper>
        <Button text={'Beli'} color={'#4CAF50'} />
      </ProductInformation>
    </Container>
  );
};

export default Product;