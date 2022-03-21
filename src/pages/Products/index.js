import React from "react";
import { Text } from "../../components/Text";
import NoCard from "./NoCard";
import WithCard from "./WithCard";
import { row1, row2, row3, row4 } from "./constant";
import {
  Container,
  TitleContainer
} from './styles';

const Products = () => {
  return (
    <Container>
      <TitleContainer>
        <Text size={'44px'} weight={'700'} color={'#333849'}>Layanan dan Produk Kami</Text>
      </TitleContainer>
      <NoCard contents={row1}/>
      <WithCard contents={row2}/>
      <NoCard contents={row3}/>
      <WithCard contents={row4}/>
    </Container>
  );
};

export default Products;