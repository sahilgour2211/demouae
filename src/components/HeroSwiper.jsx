import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";

const HeroSwiper = () => {
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
              backgroundImage: "url('/images/jcb.png')",
              width: "100%",
              height: "615px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "95px",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/shadow.png')",
                width: "100%",
                height: "615px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "95px",
                backgroundPosition: { xs: "bottom", md: "" },
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "100px",
                    gap: "28px",
                  }}
                >
                  <Typography
                    color={"#E3FEF7"}
                    fontSize={"clamp(2rem, 1.6887rem + 1.5094vw, 3.5rem)"}
                    fontFamily={"myFirstFont"}
                    lineHeight={"56px"}
                  >
                    Demolition
                    <br /> Service
                  </Typography>
                  <Typography
                    fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
                    color={"#fff"}
                    fontFamily={"myThirdFont"}
                  >
                    we specialize in the expert dismantling, removal, and
                    demolition
                    <br /> of structures across Dubai. With a commitment to
                    safety, efficiency,
                    <br /> and environmental responsibility, our team utilizes
                    advanced techniques
                    <br /> including controlled explosives, mechanical
                    demolition,
                    <br /> and meticulous deconstruction.
                  </Typography>
                  <Box
                    sx={{
                      background: "#3c3c3c",
                      maxWidth: "300px",
                      width: "100%",
                      padding: "16px",
                      borderRadius: "8px",
                      opacity: "90%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography
                      color={"#E3FEF7"}
                      fontFamily={"myThirdFont"}
                      letterSpacing={"1px"}
                    >
                      Email:{" "}
                      <span style={{ fontWeight: "600" }}>
                        dsdemouae@gmail.com
                      </span>
                    </Typography>
                    <Typography color={"#E3FEF7"}>
                      Phone:{" "}
                      <span style={{ fontWeight: "600" }}>
                        +971 56 244 4476
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/images/slide2.png')",
              width: "100%",
              height: "615px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "95px",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/shadow.png')",
                width: "100%",
                height: "615px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "95px",
                backgroundPosition: { xs: "bottom", md: "" },
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "100px",
                    gap: "28px",
                  }}
                >
                  <Typography
                    color={"#E3FEF7"}
                    fontSize={"clamp(2rem, 1.6887rem + 1.5094vw, 3.5rem)"}
                    fontFamily={"myFirstFont"}
                    lineHeight={"56px"}
                  >
                    Demolition
                    <br /> Service
                  </Typography>
                  <Typography
                    fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
                    color={"#fff"}
                    fontFamily={"myThirdFont"}
                  >
                    we specialize in the expert dismantling, removal, and
                    demolition
                    <br /> of structures across Dubai. With a commitment to
                    safety, efficiency,
                    <br /> and environmental responsibility, our team utilizes
                    advanced techniques
                    <br /> including controlled explosives, mechanical
                    demolition,
                    <br /> and meticulous deconstruction.
                  </Typography>
                  <Box
                    sx={{
                      background: "#3c3c3c",
                      maxWidth: "300px",
                      width: "100%",
                      padding: "16px",
                      borderRadius: "8px",
                      opacity: "90%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography
                      color={"#E3FEF7"}
                      fontFamily={"myThirdFont"}
                      letterSpacing={"1px"}
                    >
                      Email:{" "}
                      <span style={{ fontWeight: "600" }}>
                        dsdemouae@gmail.com
                      </span>
                    </Typography>
                    <Typography color={"#E3FEF7"}>
                      Phone:{" "}
                      <span style={{ fontWeight: "600" }}>
                        +971 56 244 4476
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/images/slide3.png')",
              width: "100%",
              height: "615px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "95px",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/shadow.png')",
                width: "100%",
                height: "615px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "95px",
                backgroundPosition: { xs: "bottom", md: "" },
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "100px",
                    gap: "28px",
                  }}
                >
                  <Typography
                    color={"#E3FEF7"}
                    fontSize={"clamp(2rem, 1.6887rem + 1.5094vw, 3.5rem)"}
                    fontFamily={"myFirstFont"}
                    lineHeight={"56px"}
                  >
                    Demolition
                    <br /> Service
                  </Typography>
                  <Typography
                    fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
                    color={"#fff"}
                    fontFamily={"myThirdFont"}
                  >
                    we specialize in the expert dismantling, removal, and
                    demolition
                    <br /> of structures across Dubai. With a commitment to
                    safety, efficiency,
                    <br /> and environmental responsibility, our team utilizes
                    advanced techniques
                    <br /> including controlled explosives, mechanical
                    demolition,
                    <br /> and meticulous deconstruction.
                  </Typography>
                  <Box
                    sx={{
                      background: "#3c3c3c",
                      maxWidth: "300px",
                      width: "100%",
                      padding: "16px",
                      borderRadius: "8px",
                      opacity: "90%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography
                      color={"#E3FEF7"}
                      fontFamily={"myThirdFont"}
                      letterSpacing={"1px"}
                    >
                      Email:{" "}
                      <span style={{ fontWeight: "600" }}>
                        dsdemouae@gmail.com
                      </span>
                    </Typography>
                    <Typography color={"#E3FEF7"}>
                      Phone:{" "}
                      <span style={{ fontWeight: "600" }}>
                        +971 56 244 4476
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSwiper;
