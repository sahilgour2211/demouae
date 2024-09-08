"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#18212E", mt: 3 }}>
      <Container>
        <Grid container spacing={3} py={5}>
          {/* Left Section */}
          <Grid item md={6} xs={12}>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <img
                style={{ maxWidth: "125px", width: "100%" }}
                src="/images/newlogo.png"
                alt="Company Logo"
              />
              <Typography fontSize={18} color="#fff">
                We safely dismantles buildings and structures,
                <br /> using advanced techniques to efficiently remove
                <br /> debris and minimize environmental impact while
                <br /> adhering to safety regulations.
              </Typography>
            </Box>
          </Grid>

          {/* Middle Section */}
          <Grid item md={3} xs={12}>
            <Box display="flex" flexDirection="column" gap={4}>
              <Typography color="#fff" fontWeight="bold">
                QUICK LINKS
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {[
                  { name: "Home", path: "/" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link) => (
                  <Typography
                    onClick={() => {
                      navigate(link.path);
                    }}
                    key={link.name}
                    color="#fff"
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Typography color="#fff" fontWeight="bold">
                  SOCIALS
                </Typography>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <FacebookRoundedIcon sx={{ color: "#fff" }} />
                  <XIcon sx={{ color: "#fff" }} />
                  <InstagramIcon sx={{ color: "#fff" }} />
                  <LinkedInIcon sx={{ color: "#fff" }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item md={3} xs={12}>
            <Box display="flex" flexDirection="column" gap={7}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography color="#fff" fontWeight="bold">
                  OFFICIAL INFORMATION
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" alignItems="center" mt={1.5}>
                    <EmailIcon sx={{ color: "#fff" }} />
                    <Typography ml={1} color="#fff">
                      dsdemouae@gmail.com
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <PhoneIcon sx={{ color: "#fff" }} />
                    <Typography ml={1} color="#fff">
                      +971 56 244 4476
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography color="#fff" fontWeight="bold">
                  ADDRESS
                </Typography>
                <Typography color="#fff">
                  Dubai Investment Park,
                  <br /> First Plot No.2970 -<br /> Dubai - U.A.E
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ padding: 2, borderTop: "1px solid #fff" }}>
        <Typography color="#fff" textAlign="center">
          2024 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
