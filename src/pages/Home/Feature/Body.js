import React from "react";
import styled from "styled-components";
import bg from "../../../public/BG.png";
import Card from "./Card";
import c1 from "../../../public/Feature/c1.png";
import c2 from "../../../public/Feature/c2.png";
import c3 from "../../../public/Feature/c3.png";
import c4 from "../../../public/Feature/c4.png";
import c5 from "../../../public/Feature/c5.png";
import c6 from "../../../public/Feature/c6.png";
import c7 from "../../../public/Feature/c7.png";
import c8 from "../../../public/Feature/c8.png";

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Body = () => {
  const contents = [
    {
      title: 'Jelajah Voucher',
      image: c1,
    },
    {
      title: 'Jelajah Video Belajar',
      image: c2,
    },
    {
      title: 'Jelajah Private Online',
      image: c3,
    },
    {
      title: 'Jelajah Group Online',
      image: c4,
    },
    {
      title: 'Jelajah Private Tatap Muka',
      image: c5,
    },
    {
      title: 'Jelajah TryOut Online',
      image: c6,
    },
    {
      title: 'Jelajah Kelas Online',
      image: c7,
    },
    {
      title: 'Jelajah Online Store',
      image: c8,
    },
  ];

  return (
    <Container>
      <CardWrapper>
        { contents.map((content, id) => <Card title={content.title} image={content.image} key={id} />) }
      </CardWrapper>
    </Container>
  );
};

export default Body;