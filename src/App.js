import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import HeroSwiper from "./components/HeroSwiper";
import Section3 from "./components/Section3";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSwiper />
      <Section2 />
      <Section3 />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
