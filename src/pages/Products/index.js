import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import NoCard from "./NoCard";
import WithCard from "./WithCard";
import voucher from "../../public/Products/voucher.png";
import videoBelajar from "../../public/Products/video-belajar.png";
import tatapMuka from "../../public/Products/private-tatap-muka.png";
import tryoutOnline from "../../public/Products/tryout-online.png";
import privateOnline from "../../public/Products/private-online.png";
import groupOnline from "../../public/Products/group-online.png";
import kelasOnline from "../../public/Products/kelas-online.png";
import onlineStore from "../../public/Products/online-store.png";

const Container = styled.div`
    background: linear-gradient(0deg, #FFFFFF 0%, #EDF7ED 51.98%, #FFFFFF 100%);
`;

const TitleContainer = styled.div`
  padding: 5% 5% 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const row1 = [
  {
    img: voucher,
    title: 'Jelajah Voucher'
  },
  {
    img: videoBelajar,
    title: 'Jelajah Video Belajar'
  },
];

const row2 = [
  {
    img: privateOnline,
    title: 'Jelajah Private Online'
  },
  {
    img: groupOnline,
    title: 'Jelajah Group Online'
  },
];

const row3 = [
  {
    img: tatapMuka,
    title: 'Jelajah Private Tatap Muka'
  },
  {
    img: tryoutOnline,
    title: 'Jelajah TryOut Online'
  },
];

const row4 = [
  {
    img: kelasOnline,
    title: 'Jelajah Kelas Online'
  },
  {
    img: onlineStore,
    title: 'Jelajah Online Store'
  },
];

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