import React from "react";
import styled from 'styled-components';
import Products from "./Products";
import Filter from "./Filter";

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Store = () => {
  return (
    <Container>
      <Filter />
      <Products />
    </Container>
  );
};

export default Store;