import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "600px", // Adjust height as needed
        backgroundImage: "url('/images/hero_img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            "linear-gradient(to right, rgba(24,33,46,1) , rgba(25,36,47,0.4), rgba(25,36,47,0.1) )",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Container sx={{ ml: "32px" }}>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
              color: "#fff",
            }}
          >
            Demolition
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}
          >
            Service
          </Typography>

          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              mt: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the and typesetting
            <br /> industry. Lorem Ipsum is dummy text of the printing.
          </Typography>

          <Box display={"flex"} mt={5} gap={3} flexWrap={"wrap"}>
            <Button
              sx={{
                fontWeight: 600,
                minWidth: 180,
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
              Services
            </Button>

            <Button
              sx={{
                fontWeight: 600,
                minWidth: 180,
                height: "50px",
                border: `1px solid #000`,
                color: "#000",
                fontSize: "16px",
                padding: "16px",
                background: "#fff",
                textTransform: "capitalize",
                ":hover": {
                  background: "#fff",
                },
                borderRadius: "0px",
              }}
            >
              Contact
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
