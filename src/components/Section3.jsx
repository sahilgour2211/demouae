import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const cards = [
  {
    title: "Demolition Works",
    desc: "we specialize in safe and controlled demolition works, efficiently dismantling structures and ensuring proper debris disposal while strictly adhering to safety regulations.",
    src: "/images/service2.png",
  },
  {
    title: "Excavation",
    desc: "we excel in precise and efficient excavation services, preparing sites for construction with advanced equipment, skilled operators, and a commitment to safety and quality.",
    src: "/images/service1.png",
  },
  {
    title: "Controlled Demolition",
    desc: "we are experts in controlled demolition, executing precise and safe dismantling of structures. Our meticulous planning and advanced techniques ensure minimal disruption and maximum safety.",
    src: "https://ezcleanup.com/wp-content/uploads/2023/07/controlled-demolition-with-dust.webp",
  },
  {
    title: "Foundation Removal",
    desc: " we specialize in foundation removal, offering precise and efficient services to clear your site for new construction. Our experienced team ensures safe, thorough, and timely completion.",
    src: "https://www.hometowndemolitioncontractors.com/static/942903c6e2099e0610a07c7d62afbf56/concrete-foundation-removal-contractor.jpg",
  },
];
const Section3 = () => {
  return (
    <Box position={"relative"}>
      <Box
        sx={{
          background:
            "linear-gradient(360deg, rgba(26,53,96,1) 0%, rgba(102,179,196,1) 80%)",
        }}
        pt={{ xs: "40px", sm: "90px" }}
        pb={{ xs: "280px", sm: "195px" }}
        px={{ xs: "20px", sm: 0 }}
      >
        <Container>
          <Typography
            mt={"10px"}
            textAlign={"center"}
            fontWeight={700}
            color={"#E3FEF7"}
            fontFamily={"myFirstFont"}
            fontSize={"clamp(1.5rem, 0.875rem + 2vw, 2rem)"}
          >
            Our Services
          </Typography>
          <Box
            mt={{ xs: "24px", sm: "80px" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ xs: "20px", sm: "0" }}
            position={"relative"}
          >
            {cards.map((item) => (
              <Box
                key={item.src}
                sx={{
                  position: "relative", // Make the parent Box relative
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: { xs: "100%", sm: "555px" },
                  height: { xs: "250px", sm: "500px" },
                  px: { xs: "20px", sm: "40px" },
                  py: { xs: "20px", sm: "90px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  justifyContent: "flex-end",
                  mb: "48px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))", // Gradient overlay
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    color: "white",
                    padding: { xs: "20px", sm: "40px" },
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    position={"relative"}
                    zIndex={1000}
                    fontWeight={700}
                    color={"#E3FEF7"}
                    fontFamily={"myFirstFont"}
                    fontSize={" clamp(1.5rem, 0.875rem + 2vw, 2rem)"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    position={"relative"}
                    zIndex={1000}
                    fontWeight={400}
                    color={"#E3FEF7"}
                    fontSize={"18px"}
                    fontFamily={"myThirdFont"}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          position={"absolute"}
          top={{ xs: "46%", sm: "50%" }}
          width={{ xs: "85%", sm: "82%" }}
        >
          <Typography
            color={"#fff"}
            fontWeight={"700"}
            textAlign={"center"}
            mb={"32px"}
            fontFamily={"myFirstFont"}
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
              <Typography color={"#fff"} fontFamily={"mySecondFont"}>
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
        </Box>
      </Container>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(26,53,96,1) 0%, rgba(247,210,196,1) 100%)",
        }}
        py={{ xs: "40px", sm: "90px" }}
        px={{ xs: "20px", sm: 0 }}
      >
        <Container>
          <Box mt={"500px"}>
            <Typography
              textAlign={"center"}
              fontWeight={700}
              color={"#E3FEF7"}
              fontSize={"clamp(1.5rem, 0.875rem + 2vw, 2rem)"}
            >
              Why Choose Us
            </Typography>

            <Box
              mt={{ xs: "20px", sm: "50px" }}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: "12px", sm: 0 }}
            >
              <Box
                width={{ xs: "350px", sm: "424px" }}
                height={"420px"}
                flex={0.4}
              >
                <img
                  src="/images/section3.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box flex={0.4}>
                <Typography
                  color={"#fff"}
                  textAlign={"start"}
                  fontWeight={400}
                  fontSize={"clamp(1.125rem, 0.9688rem + 0.5vw, 1.25rem)"}
                  fontFamily={"myThirdFont"}
                >
                  At DS DEMOLITION, we stand out for our extensive industry
                  expertise and commitment to excellence. With a focus on
                  safety, efficiency, and environmental responsibility, we
                  ensure each demolition project is executed with precision and
                  care. Our dedication to sustainable practices and client
                  satisfaction guarantees reliable results that exceed
                  expectations, making us the trusted choice for preparing sites
                  for new development with confidence.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Section3;
