import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { Mail, Menu, Phone } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = ["Home", "Contact Us"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    if (item === "Home") {
      navigate("/");
    }
    if (item === "Contact Us") {
      navigate("/contact-us");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        display={"flex"}
        flexGrow={1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/images/logo.png" alt="" width={"82px"} height={"82px"} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                onClick={() => {
                  handleNavigate(item);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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

      {/* <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ background: "#E3FEF7", height: "90px" }}>
          <Container>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { xs: "flex", sm: "none" },
                  color: "#000",
                  mt: 2.5,
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Box
                display={"flex"}
                flexGrow={1}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: { xs: "flex-end", sm: "flex-start" },
                }}
              >
                <img
                  src="/images/lg.png"
                  alt=""
                  width={"170px"}
                  height={"82px"}
                  style={{ marginTop: "8px" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={{ sm: "100%" }}
              >
                <Box
                  display={"flex"}
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <img
                    src="/images/lg.png"
                    alt=""
                    height={"82px"}
                    style={{ marginTop: "8px" }}
                  />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"16px"}
                    mt={2}
                  >
                    {navItems.map((item) => (
                      <Button
                        key={item}
                        sx={{
                          color: "#003C43",
                          fontWeight: 700,
                          fontSize: "18px",
                        }}
                        onClick={() => handleNavigate(item)}
                      >
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#003C43",
                      fontWeight: 700,
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIcon /> <span>+971 56 244 4476</span>
                  </Typography>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box> */}
    </>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
