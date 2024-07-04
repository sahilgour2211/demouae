import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "108px", background: "#E3FEF7" }}>
      <Container>
        <Grid container columnSpacing={"64px"} sx={{ paddingTop: "56px" }}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <img
                style={{ maxWidth: "164px" }}
                width={"100%"}
                src="/images/logo.png"
                alt=""
              />
              <Typography color={"#135D66"} fontFamily={"myThirdFont"}>
                Address:
                <br /> Lorem Ipsum is simply dummy text of the
                <br /> printing and typesetting industry. Lorem
                <br /> Ipsum has been the industry's standard
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "42px",
                paddingTop: "32px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Typography sx={{ color: "#135D66", fontWeight: "700" }}>
                  Official Information
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <PhoneIcon sx={{ color: "#135D66" }} />
                  <Typography color={"#135D66"}>12345678900</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <EmailIcon sx={{ color: "#135D66" }} />
                  <Typography color={"#135D66"}>example@example.com</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <Typography sx={{ color: "#135D66", fontWeight: "700" }}>
                    Quick Links
                  </Typography>
                  <Typography sx={{ color: "#135D66" }}>Home</Typography>
                  <Typography sx={{ color: "#135D66" }}>Services</Typography>
                  <Typography sx={{ color: "#135D66" }}>About</Typography>
                  <Typography sx={{ color: "#135D66" }}>Contact US</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <FacebookRoundedIcon sx={{ color: "#135D66" }} />
                  <InstagramIcon sx={{ color: "#135D66" }} />
                  <LinkedInIcon sx={{ color: "#135D66" }} />
                  <XIcon sx={{ color: "#135D66" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ marginTop: "64px" }} />
      <Box sx={{ padding: "32px" }}>
        <Typography color={"#77B0AA"} textAlign={"center"}>
          © 2024 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
