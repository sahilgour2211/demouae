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

const drawerWidth = 240;
const navItems = ["Home", "Services", "About", "Contact Us"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} fontWeight={"bold"}>
        DEMOUAE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    if (item === "Home") {
      navigate("/");
    }
    if (item === "Contact Us") {
      navigate("/contact-us");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#E3FEF7", height: "95px" }}>
        <Container>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              display={"flex"}
              flexGrow={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <img
                src="/images/logo.png"
                alt=""
                width={"82px"}
                height={"82px"}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
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
    </Box>
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
