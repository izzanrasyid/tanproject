import React from "react";
import styled from "styled-components";
import Product from "./Product";
import bg from "../../../public/BG.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WithCard = ({contents}) => {
  return (
    <Container>
      {
        contents.map((content, id) => <Product img={content?.img} title={content?.title} key={id} />)
      }
    </Container>
  );
};

export default WithCard;