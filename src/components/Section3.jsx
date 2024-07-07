import { Box, Container, Typography } from "@mui/material";
import React from "react";

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
];

const cards = [
  {
    title: "Demolition Works",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    src: "/images/service2.png",
  },
  {
    title: "Pipeline Excavation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    src: "/images/service1.png",
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
              >
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
          </Box>
        </Container>
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          position={"absolute"}
          borderRadius={"30px"}
          bgcolor={"#E3FEF7"}
          //   bgcolor={"#fff"}
          py={{ xs: "30px", sm: "50px" }}
          px={{ xs: "30px", sm: "128px" }}
          top={{ xs: "40%", sm: "39%" }}
          width={{ xs: "85%", sm: "82%" }}
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
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(26,53,96,1) 0%, rgba(247,210,196,1) 100%)",
        }}
        py={{ xs: "40px", sm: "90px" }}
        px={{ xs: "20px", sm: 0 }}
      >
        <Container>
          <Typography
            mt={{ xs: "250px", sm: "170px" }}
            textAlign={"center"}
            fontWeight={700}
            color={"#E3FEF7"}
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
                  background: `url(${item.src})`,
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
                  "::after": {
                    content: '""',
                    bottom: 0,
                    left: 0,
                    position: "absolute",
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)",
                    borderRadius: "inherit",
                  },
                }}
              >
                <Typography
                  position={"relative"}
                  zIndex={1000}
                  fontWeight={700}
                  color={"#E3FEF7"}
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
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Section3;
