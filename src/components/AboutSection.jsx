import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
];
const AboutSection = () => {
  return (
    <>
      <Box sx={{ marginTop: { xs: "50px", sm: "108px" } }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            borderRadius={"30px"}
            bgcolor={"#E3FEF7"}
            //   bgcolor={"#fff"}
            py={{ xs: "30px", sm: "50px" }}
            px={{ xs: "30px", sm: "128px" }}
            // width={{ xs: "85%", sm: "82%" }}
            width={"100%"}
          >
            <Typography
              textAlign={"center"}
              fontWeight={700}
              color={"#1A3560"}
              fontSize={"clamp(1.125rem, 0.0313rem + 3.5vw, 2rem);"}
            >
              Major Clients
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={{ xs: "20px", sm: "40px" }}
              flexWrap={"wrap"}
              gap={{ xs: "16px", sm: 0 }}
            >
              {clients.map((src) => (
                <Box width={"100px"} height={"100px"}>
                  <img
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "scale-down" }}
                    src={src}
                    alt=""
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutSection;
