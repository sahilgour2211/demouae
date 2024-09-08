import React, { useState } from "react";
import { Mail, Menu, Phone } from "@mui/icons-material";
import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"; // React Router for navigation

const Header = () => {
  const location = useLocation(); // Use React Router's hook for the current location
  const navigate = useNavigate(); // Use React Router's hook for navigation
  const [mobile, setMobile] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "CONTACT US", path: "/contact" },
  ]; // Example navigation items; replace with your actual items

  const colors = {
    HEADER: "#000", // Replace with your actual header color
    FOOTER_BG: "#EFECEC", // Replace with your footer background color
    BUTTON_BG: "#FF7E54", // Replace with your button background color
  };

  const DrawerComponent = () => {
    return (
      <Drawer anchor="right" open={true} onClose={() => setMobile(false)}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          mt={3}
          px={3}
          width={250}
        >
          {navItems.map((item) => (
            <Typography
              onClick={() => {
                navigate(item.path);
              }}
              key={item.name}
              sx={{ cursor: "pointer" }}
              color={colors.HEADER}
              fontWeight={600}
              fontSize={"18px"}
              borderBottom={
                item.path === location.pathname ? "3px solid #FFA800" : ""
              }
            >
              {item.name}
            </Typography>
          ))}
        </Box>
        <Box pl={3} mt={3}>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
            sx={{
              borderRadius: "0px",
              fontWeight: 600,
              minWidth: 180,
              height: "40px",
              color: "#fff",
              fontSize: "16px",
              padding: "16px",
              background: "#FC6736",
              textTransform: "capitalize",
              ":hover": {
                background: "#FFEB33",
              },
            }}
          >
            Request A Call
          </Button>
        </Box>
      </Drawer>
    );
  };

  return (
    <>
      <Box bgcolor={"#18212e"} py={1}>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            overflow={"auto"}
          >
            <Box display={"flex"} gap={4}>
              <Typography
                color={"#fff"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Phone fontSize="small" sx={{ color: `#FC6736 !important` }} />
                <span>+971 56 244 4476</span>
              </Typography>
              <Typography
                color={"#fff"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Mail fontSize="small" sx={{ color: `#FC6736 !important` }} />
                <span>dsdemouae@gmail.com</span>
              </Typography>
            </Box>
            <Box
              display={{ xs: "none", md: "flex" }}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img width={"16px"} height={"16px"} src="/images/fb.png" />
              <img width={"16px"} height={"16px"} src="/images/insta.png" />
              <img width={"16px"} height={"16px"} src="/images/ldkn.png" />
              <img width={"16px"} height={"16px"} src="/images/x.png" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          // py={"8px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexGrow={1}
        >
          <Box display={"flex"}>
            <Typography
              onClick={() => {
                navigate("/");
              }}
              sx={{ cursor: "pointer" }}
            >
              <img width={"120px"} src="/images/newlogo.png" alt="Logo" />
            </Typography>
          </Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            onClick={() => setMobile(!mobile)}
          >
            <Menu fontSize="large" />
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            gap={"28px"}
            flexWrap={"wrap"}
          >
            {navItems.map((item) => (
              <Typography
                onClick={() => {
                  navigate(item.path);
                }}
                key={item.name}
                sx={{ cursor: "pointer" }}
                color={colors.HEADER}
                fontWeight={600}
                fontSize={"18px"}
                borderBottom={
                  item.path === location.pathname ? "3px solid #FC6736" : ""
                }
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box display={{ xs: "none", md: "flex" }}>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              sx={{
                borderRadius: "0px",
                fontWeight: 600,
                minWidth: 180,
                height: "40px",
                color: "#fff",
                fontSize: "16px",
                padding: "16px",
                background: "#FC6736",
                textTransform: "capitalize",
                ":hover": {
                  background: "#FC6736",
                },
              }}
            >
              Request A Call
            </Button>
          </Box>
        </Box>
      </Container>
      {mobile && <DrawerComponent />}
    </>
  );
};

export default Header;
