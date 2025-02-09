import React, { useEffect } from "react";
import HeroSwiper from "../components/HeroSwiper";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import AboutSection from "../components/AboutSection";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hero from "../NewComponents/Hero";
import AboutCompany from "../NewComponents/AboutCompany";
import { Helmet } from "react-helmet-async";
import Footer from "../NewComponents/Footer";
import WhyChooseUs from "../NewComponents/WhyChooseUs";
import OurServices from "../NewComponents/OurServices";

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
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="we specialize in the expert dismantling, removal, and
                  demolition of structures across Dubai. With a commitment to
                  safety, efficiency,
                  and meticulous deconstruction."
        />
        <link rel="canonical" href="https://dsdemo.ae/" />
      </Helmet>
      <Box>
        {/* <HeroSwiper /> */}
        <Hero />
        <Section2 />
        <OurServices />
        {/* <Section3 /> */}
        <AboutCompany />
        <WhyChooseUs />
        <AboutSection />
      </Box>
    </>
  );
};

export default Home;
