import React, { useEffect } from "react";
import HeroSwiper from "../components/HeroSwiper";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import AboutSection from "../components/AboutSection";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate]);
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
