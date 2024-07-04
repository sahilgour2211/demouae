import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import AboutSection from "../components/AboutSection";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box>
        <HeroSwiper />
        <Section2 />
        <Section3 />
        <AboutSection />
      </Box>
    </>
  );
};

export default Home;
