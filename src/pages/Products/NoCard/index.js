import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NoCard = ({contents}) => {
  console.log(contents, '<<<<');
  return (
    <Container>
      {
        contents.map((content, id) => <Product img={content?.img} title={content?.title} key={id} />)
      }
    </Container>
  );
};

export default NoCard;