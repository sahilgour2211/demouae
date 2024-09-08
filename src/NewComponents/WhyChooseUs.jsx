import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: "80px", bgcolor: "#EFECEC" }}>
      <Container>
        <Typography
          fontFamily={"mySecondFont"}
          textAlign={"center"}
          fontWeight={700}
          color={"#ff7e54"}
          fontSize={"clamp(1.125rem, 0.0313rem + 3.5vw, 2rem);"}
        >
          Why Choose Us
        </Typography>
        <Grid
          container
          sx={{
            padding: { xs: "16px", sm: "0" },
            display: "flex",
            gap: { xs: "20px", md: "0" },
            mt: { xs: 2, md: 4 },
          }}
        >
          <Grid item md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "red",
                  position: "absolute",
                  left: "5%", // Offset from the left
                  bottom: "-5%", // Offset from the bottom
                  width: "80%", // Full width relative to its container
                  height: "100%", // Full height relative to its container
                  zIndex: 1, // Ensure it stays behind the image
                }}
              />
              <img
                width={"80%"}
                src="/images/choose.png"
                alt="Demolished Building"
                loading="lazy"
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography
                fontFamily={"mySecondFont"}
                fontSize={"clamp(2rem, 1.7925rem + 1.0063vw, 3rem)"}
                lineHeight={"56px"}
                color={"#18212E"}
              >
                Quality, safety, and reliability guaranteed
              </Typography>
              <Typography fontSize={"18px"} fontFamily={"myThirdFont"}>
                At DS DEMOLITION, we stand out for our extensive industry
                expertise and commitment to excellence. With a focus on safety,
                efficiency, and environmental responsibility, we ensure each
                demolition project is executed with precision and care. Our
                dedication to sustainable practices and client satisfaction
                guarantees reliable results that exceed expectations, making us
                the trusted choice for preparing sites for new development with
                confidence.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
