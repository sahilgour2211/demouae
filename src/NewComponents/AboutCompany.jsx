import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <Box my={"48px"}>
      <Container>
        <Typography
          fontFamily={"mySecondFont"}
          textAlign={"center"}
          fontWeight={700}
          color={"#ff7e54"}
          fontSize={"clamp(1.125rem, 0.0313rem + 3.5vw, 2rem);"}
        >
          About Company
        </Typography>
        <Grid
          container
          columnSpacing={"48px"}
          sx={{
            padding: { xs: "16px", sm: "0" },
            display: "flex",
            //   alignItems: "center",
            gap: { xs: "20px", md: "0" },
            mt: { xs: 2, md: 4 },
          }}
        >
          <Grid item md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                loading="lazy"
                width={"80%"}
                src="/images/about.png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              textAlign={"start"}
              fontWeight={"bold"}
              fontSize={"clamp(2rem, 1.7925rem + 1.0063vw, 3rem)"}
            >
              Our story: built on
              <br /> trust and expertise
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                color={"#000"}
                fontFamily={"mySecondFont"}
                mt={{ xs: 2, md: 4 }}
              >
                Founded with a commitment to safety and precision, DS DEMOLITION
                WORKS is a newly established leader in the demolition industry
                in Dubai. Our passionate team combines innovative techniques
                with a strong focus on environmental responsibility, ensuring
                each project is executed with integrity and excellence.
                Specializing in both residential and commercial demolition, DS
                DEMOLITION WORKS delivers dependable service and strives for
                outstanding results on every project.
              </Typography>
              <Button
                onClick={() => {
                  navigate("/contact");
                }}
                sx={{
                  mt: 6,
                  fontWeight: 600,
                  width: "200px",
                  height: "50px",
                  color: "#fff",
                  fontSize: "16px",
                  padding: "16px",
                  background: "#ff7e54",
                  textTransform: "capitalize",
                  ":hover": {
                    background: "#ff7e54",
                  },
                  borderRadius: "0px",
                }}
              >
                Discover More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCompany;
