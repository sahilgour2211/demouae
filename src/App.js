import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/route";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
