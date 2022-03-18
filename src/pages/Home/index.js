import React from "react";
import LandingSection from "./LandingSection";
import Pros from "./Pros";
import Feature from "./Feature";
import Video from "./Video";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <LandingSection />
      <Pros />
      <Feature />
      <Video />
      <Footer />
    </>
  );
};

export default Home;