import React from "react";
import styled from 'styled-components';
import Products from "./Products";

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Filter = styled.div`
  flex: 3;

  @media (max-width: 768px) {
    flex: 1;
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