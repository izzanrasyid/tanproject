import React from 'react';
import { NavbarContainer } from './styles';
import Headerbar from './Headerbar/Headerbar';
import Menu from './Menu/Menu';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Headerbar />
      <Menu />
    </NavbarContainer>
  );
};

export default Navbar;
