import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "108px", background: "#003c43" }}>
      <Container>
        <Grid container columnSpacing={"64px"} sx={{ paddingTop: "56px" }}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <img
                  style={{ maxWidth: "164px" }}
                  width={"100%"}
                  src="/images/logo.png"
                  alt=""
                />
                <Typography
                  fontSize={"clamp(1rem, 0.9481rem + 0.2516vw, 1.25rem)"}
                  fontWeight={600}
                  color={"#fff"}
                >
                  DS Wrecking &<br /> Demolition Works Co. L.L.C
                </Typography>
              </Box>
              <Typography color={"#fff"} fontFamily={"myThirdFont"}>
                Address:
                <br /> Dubai Investment Park,
                <br /> First Plot No.2970 -<br /> Dubai - U.A.E
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "96px",
                paddingTop: "32px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Typography sx={{ color: "#fff", fontWeight: "700" }}>
                  Official Information
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <PhoneIcon sx={{ color: "#fff" }} />
                  <Typography color={"#fff"}>+971 56 244 4476</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <EmailIcon sx={{ color: "#fff" }} />
                  <Typography color={"#fff"}>dsdemouae@gmail.com</Typography>
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
                  <Typography sx={{ color: "#fff", fontWeight: "700" }}>
                    Quick Links
                  </Typography>
                  <Typography
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </Typography>
                  {/* <Typography sx={{ color: "#135D66" }}>Services</Typography>
                  <Typography sx={{ color: "#135D66" }}>About</Typography> */}
                  <Typography
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Contact US
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <FacebookRoundedIcon sx={{ color: "#fff" }} />
                  <InstagramIcon sx={{ color: "#fff" }} />
                  <LinkedInIcon sx={{ color: "#fff" }} />
                  <XIcon sx={{ color: "#fff" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ marginTop: "64px" }} />
      <Box sx={{ padding: "32px" }}>
        <Typography color={"#fff"} textAlign={"center"}>
          © 2024 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
