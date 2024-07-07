import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <Box sx={{ marginTop: { xs: "50px", sm: "108px" } }}>
        <Container>
          <Typography
            color={"#135D66"}
            fontWeight={"700"}
            textAlign={"center"}
            mb={"32px"}
            fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
          >
            About US
          </Typography>
          <Grid
            container
            columnSpacing={"48px"}
            sx={{
              padding: { xs: "16px", sm: "0" },
              display: "flex",
              alignItems: "center",
              gap: { xs: "20px", md: "0" },
            }}
          >
            <Grid item md={6}>
              <img width={"100%"} src="/images/about.png" alt="" />
            </Grid>
            <Grid item md={6}>
              <Typography>
                Founded with a commitment to safety and precision, DS DEMOLITION
                WORKS is a newly established leader in the demolition industry
                in Dubai. Our passionate team combines innovative techniques
                with a strong focus on environmental responsibility, ensuring
                each project is executed with integrity and excellence.
                Specializing in both residential and commercial demolition, DS
                DEMOLITION WORKS delivers dependable service and strives for
                outstanding results on every project.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutSection;
