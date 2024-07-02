import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Box
      sx={{
        background: `
         linear-gradient(rgba(232, 116, 33, 0.5), rgba(232, 116, 33, 0.5)),
        url('/images/section2.png')
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "282px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          pt={"112px"}
          pb={"32px"}
          display={"flex"}
          justifyContent={{ xs: "space-around", sm: "space-between" }}
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
            <img width={"90px"} src="/images/smiley.png" alt="" />
            <Typography textAlign={"center"} color={"#F7D2C4"} fontWeight={700}>
              250+ <br /> Happy Clients
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img width={"90px"} src="/images/bag.png" alt="" />
            <Typography textAlign={"center"} color={"#F7D2C4"} fontWeight={700}>
              300+ <br /> Completed Projects
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img width={"90px"} src="/images/news.png" alt="" />
            <Typography textAlign={"center"} color={"#F7D2C4"} fontWeight={700}>
              130+ <br /> Government Authorities
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
