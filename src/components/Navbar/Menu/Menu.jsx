import React, { useState } from 'react';
import { Text } from '../../Text';
import { IconHamburger } from '../../Icons';
import {
  Container,
  MenuContainer,
  HamburgerWrapper,
  Title,
  IconWrapper,
  MenuWrapper,
  MenuLink
} from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <MenuLink href="">HOME</MenuLink>
          <MenuLink href="">TENTANG KAMI</MenuLink>
          <MenuLink href="">PRODUK KAMI</MenuLink>
          <MenuLink href="">E-STORE</MenuLink>
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