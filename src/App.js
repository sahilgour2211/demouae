import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/route";
import Footer from "./NewComponents/Footer";
import Header from "./NewComponents/Header";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
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
