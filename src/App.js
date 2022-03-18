import React from "react";
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Home from './pages/Home';

const Appl = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Appl>
      <Navbar />
      <Home />
    </Appl>
  );
};

export default App;
