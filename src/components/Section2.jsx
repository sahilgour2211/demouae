import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Box
      sx={{
        background: `
         linear-gradient(90deg, rgba(45,53,64,0.9) 0%, rgba(25,36,47,0.9) 100%),
        url('/images/section2.png')
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "272px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          pt={"40px"}
          pb={"32px"}
          display={"flex"}
          justifyContent={{ xs: "space-around" }}
          alignItems={"center"}
          width={"100%"}
          flexWrap={"wrap"}
          gap={{ xs: 2, sm: 0 }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img width={"60px"} src="/images/smiley.png" alt="" />
            <Typography textAlign={"center"} color={"#FFF"} fontWeight={700}>
              250+ <br /> Happy Clients
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img width={"60px"} src="/images/bag.png" alt="" />
            <Typography textAlign={"center"} color={"#FFF"} fontWeight={700}>
              300+ <br /> Completed Projects
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img width={"60px"} src="/images/news.png" alt="" />
            <Typography textAlign={"center"} color={"#FFF"} fontWeight={700}>
              130+ <br /> Government Authorities
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
