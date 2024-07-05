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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutSection;
