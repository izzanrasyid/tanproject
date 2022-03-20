import React from 'react';
import { Text } from '../../../../components/Text';
import Searchbar from '../../../../components/Searchbar';
import Product from './Product';
import { productList } from '../../constant';
import { Container, SearchbarWrapper, ProductsWrapper } from './styles';

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