import React from 'react';
import { NavbarContainer } from './styles';
import Headerbar from './Headerbar/Headerbar';
import Menu from './Menu/Menu';

const Navbar = ({setIsLogin}) => {
  return (
    <NavbarContainer>
      <Headerbar setIsLogin={setIsLogin} />
      <Menu />
    </NavbarContainer>
  );
};

export default Navbar;
