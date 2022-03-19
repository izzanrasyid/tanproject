import React, { useState } from "react";
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import OnlineStore from './pages/OnlineStore';
import Footer from "./components/Footer";

const Appl = styled.div`
  height: 100vh;
`;

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Appl>
      {
        isLogin && (<Login/>)
      }
      <Router>
        <Navbar setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/products" element={<Products />}/>
          <Route path="/store" element={<OnlineStore />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </Router>
    </Appl>
  );
};

export default App;
