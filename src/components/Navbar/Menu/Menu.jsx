import React, { useState } from 'react';
import { Text } from '../../Text';
import { IconHamburger } from '../../Icons';
import { Link } from "react-router-dom";
import {
  Container,
  MenuContainer,
  HamburgerWrapper,
  Title,
  IconWrapper,
  MenuWrapper,
  MenuLink
} from './styles';
import { linkStyle } from './constant';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    console.log('tes');
    setIsOpen(false);
  };

  return (
    <Container>
      <HamburgerWrapper>
        <Title>
          <Text size={'24px'} weight={700}>TAN Studies</Text>
        </Title>
        <IconWrapper onClick={() => setIsOpen(!isOpen)}>
          <IconHamburger />
        </IconWrapper>
      </HamburgerWrapper>
      <MenuContainer isOpen={isOpen}>
        <MenuWrapper>
          <Link to="/" style={linkStyle} onClick={closeNavbar}>HOME</Link>
          <MenuLink href="">TENTANG KAMI</MenuLink>
          <Link to="/products" style={linkStyle} onClick={closeNavbar}>PRODUK KAMI</Link>
          <Link to="/store" style={linkStyle} onClick={closeNavbar}>E-STORE</Link>
          <MenuLink href="">JADWAL BIMBEL OFFLINE</MenuLink>
          <MenuLink href="">BLOG</MenuLink>
          <MenuLink href="">FAQ</MenuLink>
          <MenuLink href="">CONTACT US</MenuLink>
        </MenuWrapper>
      </MenuContainer>
    </Container>
  );
};

export default Menu;