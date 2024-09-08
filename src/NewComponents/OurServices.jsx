import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

const OurServices = () => {
  return (
    <Box sx={{ background: "#EFECEC", padding: "48px 0px" }}>
      <Container>
        {/* Section Header */}
        <Typography
          fontFamily="mySecondFont"
          fontSize="clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"
          color="#FF7E54"
          textAlign="center"
        >
          Our Services
        </Typography>
        <Typography
          fontFamily="mySecondFont"
          fontSize="clamp(2rem, 1.7925rem + 1.0063vw, 3rem)"
          lineHeight="56px"
          color="#18212E"
          textAlign="center"
          mt={2}
        >
          Comprehensive demolition solutions
        </Typography>

        {/* Service Cards */}
        <Grid container mt={4} spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                maxWidth: "350px",
                margin: "0 auto",
                bgcolor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                // "&:hover": {
                //   transform: "translateY(-10px)",
                // },
              }}
            >
              {/* Image Container */}
              <Box width="100%" height="360px">
                <img
                  loading="lazy"
                  src="/images/PE.png"
                  alt="Service Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              {/* Content */}
              <Box padding={2}>
                <Typography
                  fontFamily="mySecondFont"
                  fontSize="20px"
                  fontWeight="bold"
                  color="#FF7E54"
                  gutterBottom
                >
                  Demolition Works
                </Typography>
                <Typography
                  fontSize="14px"
                  color="#555"
                  lineHeight="1.5"
                  mb={2}
                >
                  we specialize in safe and controlled demolition works,
                  efficiently dismantling structures and ensuring proper debris
                  disposal while strictly adhering to safety regulations.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#FF7E54",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: 0,
                    "&:hover": { background: "transparent" },
                  }}
                  endIcon={<span>→</span>}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                maxWidth: "350px",
                margin: "0 auto",
                bgcolor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                // "&:hover": {
                //   transform: "translateY(-10px)",
                // },
              }}
            >
              {/* Image Container */}
              <Box width="100%" height="360px">
                <img
                  loading="lazy"
                  src="/images/DW.png"
                  alt="Service Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              {/* Content */}
              <Box padding={2}>
                <Typography
                  fontFamily="mySecondFont"
                  fontSize="20px"
                  fontWeight="bold"
                  color="#FF7E54"
                  gutterBottom
                >
                  Excavation
                </Typography>
                <Typography
                  fontSize="14px"
                  color="#555"
                  lineHeight="1.5"
                  mb={2}
                >
                  we excel in precise and efficient excavation services,
                  preparing sites for construction with advanced equipment,
                  skilled operators, and a commitment to safety and quality.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#FF7E54",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: 0,
                    "&:hover": { background: "transparent" },
                  }}
                  endIcon={<span>→</span>}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                maxWidth: "350px",
                margin: "0 auto",
                bgcolor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                // "&:hover": {
                //   transform: "translateY(-10px)",
                // },
              }}
            >
              {/* Image Container */}
              <Box width="100%" height="360px">
                <img
                  loading="lazy"
                  src="/images/CD.jpg"
                  alt="Service Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              {/* Content */}
              <Box padding={2}>
                <Typography
                  fontFamily="mySecondFont"
                  fontSize="20px"
                  fontWeight="bold"
                  color="#FF7E54"
                  gutterBottom
                >
                  Controlled Demolition
                </Typography>
                <Typography
                  fontSize="14px"
                  color="#555"
                  lineHeight="1.5"
                  mb={2}
                >
                  we are experts in controlled demolition, executing precise and
                  safe dismantling of structures. Our meticulous planning and
                  advanced techniques ensure minimal disruption and maximum
                  safety.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#FF7E54",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: 0,
                    "&:hover": { background: "transparent" },
                  }}
                  endIcon={<span>→</span>}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
