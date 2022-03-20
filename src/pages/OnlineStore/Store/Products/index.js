import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import Searchbar from '../../../../components/Searchbar';
import Product from './Product';
import { productList } from '../../constant';

const Container = styled.div`
  flex: 9;
  padding: 0 5% 5% 5%;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const SearchbarWrapper = styled.div`
  margin: 2% 0;
  background: #FFF;
  border-radius: 3px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Products = () => {
  return (
    <Container>
      <Text size={'14px'} weight={'700'} color={'#333849'}>Cari Produk</Text>
      <SearchbarWrapper>
        <Searchbar />
      </SearchbarWrapper>
      <ProductsWrapper>
        { productList.map((product, id) => <Product image={product.image} title={product.title} price={product.price} oldPrice={product.oldPrice} rating={product.rating} reviewers={product.reviewers} key={id} />) }
      </ProductsWrapper>
    </Container>
  );
};

export default Products;