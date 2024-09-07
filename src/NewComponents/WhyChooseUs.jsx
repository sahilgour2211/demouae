import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const WhyChooseUs = () => {
  return (
    <Box sx={{ mt: "120px" }}>
      <Container>
        <Grid container>
          <Grid item md={5}>
            <Box
              sx={{ position: "relative", maxWidth: "372px", width: "100%" }}
            >
              {/* Background Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: "15px", // Adjust this value for the desired offset
                  right: "15px", // Adjust this value for the desired offset
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FF7E54", // Your desired orange color
                  zIndex: 1,
                }}
              />
              {/* Main Image */}
              <Box
                component="img"
                src="/images/choose.png"
                alt=""
                sx={{
                  position: "relative",
                  maxWidth: "372px",
                  width: "100%",
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography
                fontFamily={"mySecondFont"}
                fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                color={"#FF7E54"}
              >
                Why Choose Us
              </Typography>
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
