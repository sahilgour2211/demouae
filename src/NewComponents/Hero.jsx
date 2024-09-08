import { Box, Button, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
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
              <Container sx={{ ml: { xs: "10px", sm: "32px" } }}>
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
                  we specialize in the expert dismantling, removal, and
                  demolition
                  <br /> of structures across Dubai. With a commitment to
                  safety, efficiency,
                  <br /> and meticulous deconstruction.
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
                    onClick={() => {
                      navigate("/contact");
                    }}
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
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              height: "600px", // Adjust height as needed
              backgroundImage: "url('/images/slider3.png')",
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
              <Container sx={{ ml: { xs: "10px", sm: "32px" } }}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
                    color: "#fff",
                  }}
                >
                  Controlled
                </Typography>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
                  }}
                >
                  Demolition
                </Typography>

                <Typography
                  sx={{
                    textAlign: "start",
                    fontSize: "16px",
                    mt: "20px",
                  }}
                >
                  we specialize in the expert dismantling, removal, and
                  demolition
                  <br /> of structures across Dubai. With a commitment to
                  safety, efficiency,
                  <br /> and meticulous deconstruction.
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
                    onClick={() => {
                      navigate("/contact");
                    }}
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
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              height: "600px",
              backgroundImage: "url('/images/slider2.png')",
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
              <Container sx={{ ml: { xs: "10px", sm: "32px" } }}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
                    color: "#fff",
                  }}
                >
                  Excavation
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
                  we specialize in the expert dismantling, removal, and
                  demolition
                  <br /> of structures across Dubai. With a commitment to
                  safety, efficiency,
                  <br /> and meticulous deconstruction.
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
                    onClick={() => {
                      navigate("/contact");
                    }}
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
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              height: "600px",
              backgroundImage:
                "url('https://www.hometowndemolitioncontractors.com/static/942903c6e2099e0610a07c7d62afbf56/concrete-foundation-removal-contractor.jpg')",
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
              <Container sx={{ ml: { xs: "10px", sm: "32px" } }}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
                    color: "#fff",
                  }}
                >
                  Foundation
                </Typography>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
                  }}
                >
                  Removal
                </Typography>

                <Typography
                  sx={{
                    textAlign: "start",
                    fontSize: "16px",
                    mt: "20px",
                  }}
                >
                  we specialize in the expert dismantling, removal, and
                  demolition
                  <br /> of structures across Dubai. With a commitment to
                  safety, efficiency,
                  <br /> and meticulous deconstruction.
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
                    onClick={() => {
                      navigate("/contact");
                    }}
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
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Hero;
