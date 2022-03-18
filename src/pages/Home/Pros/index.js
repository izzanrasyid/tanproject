import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Span";
import Card from "./Card";
import pengajar from "../../../public/pengajar.png";
import soal from "../../../public/soal.png";
import belajar from "../../../public/belajar.png";


const Container = styled.div`
  display: flex;
  padding: 0 5%;
  flex-direction: column;
  margin-bottom: 2.5%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5% 10%;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Pros = () => {
  const contents = [
    {
      title: 'Pengajar Ahli & Seru',
      image: pengajar,
    },
    {
      title: 'Soal - Soal Asli dan Terjamin',
      image: soal,
    },
    {
      title: 'Belajar Intensif',
      image: belajar,
    },
  ];

  return (
    <Container>
      <Title>
        <Text size={'44px'} weight={'700'}>Keunggulan TAN Studies</Text>
      </Title>
      <Contents>
        {
          contents.map(content => <Card image={content.image} title={content.title}/>)
        }
      </Contents>
    </Container>
  );
};

export default Pros;