import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

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
          ></Box>
        </SwiperSlide>
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
          ></Box>
        </SwiperSlide>
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
          ></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSwiper;
