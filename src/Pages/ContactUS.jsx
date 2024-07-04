import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    number: "",
    email: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <Box sx={{ marginTop: "95px" }}>
      {/* <Navbar /> */}
      {/* top - image */}
      <Box
        sx={{
          backgroundImage: "url('/images/contactUs.png')",
          width: "100%",
          height: "370px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('/images/contactShadow.png')",
            width: "100%",
            height: "370px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            textAlign={"center"}
            paddingTop={"92px"}
            fontSize={"clamp(2rem, 1.7925rem + 1.0063vw, 3rem)"}
            fontFamily={"mySecondFont"}
            color={"#E3FEF7"}
          >
            CONTACT US
          </Typography>
        </Box>
      </Box>
      {/* contact - box */}
      <Container>
        <Box
          sx={{
            padding: "62px 92px 120px 92px",
            background: "#E87421",
            borderRadius: "16px",
            marginTop: "-140px",
          }}
        >
          <Grid
            container
            rowSpacing={"48px"}
            sx={{ display: "flex", alignItems: "flexStart" }}
          >
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ maxWidth: "60px", width: "100%" }}
                  src="/images/iconmail.png"
                  alt=""
                />
                <Typography
                  color={"#fff"}
                  fontFamily={"mySecondFont"}
                  fontSize={"clamp(1.25rem, 1.0425rem + 1.0063vw, 2.25rem)"}
                >
                  Email
                </Typography>
                <Typography
                  color={"#fff"}
                  fontFamily={"myThirdFont"}
                  fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                >
                  dsdemouae@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ maxWidth: "60px", width: "100%" }}
                  src="/images/iconphone.png"
                  alt=""
                />
                <Typography
                  color={"#fff"}
                  fontFamily={"mySecondFont"}
                  fontSize={"clamp(1.25rem, 1.0425rem + 1.0063vw, 2.25rem)"}
                >
                  Phone
                </Typography>
                <Typography
                  color={"#fff"}
                  fontFamily={"myThirdFont"}
                  fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                >
                  +971 56 244 4476
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ maxWidth: "60px", width: "100%" }}
                  src="/images/iconloc.png"
                  alt=""
                />
                <Typography
                  color={"#fff"}
                  fontFamily={"mySecondFont"}
                  fontSize={"clamp(1.25rem, 1.0425rem + 1.0063vw, 2.25rem)"}
                >
                  Location
                </Typography>
                <Typography
                  color={"#fff"}
                  fontFamily={"myThirdFont"}
                  fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                  textAlign={"center"}
                >
                  Dubai Investment Park, First Plot No.2970 - Dubai - U.A.E
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* contact - form */}
      <Box sx={{ marginTop: "120px" }}>
        <Container>
          <Typography
            textAlign={"center"}
            fontSize={"clamp(2rem, 1.7925rem + 1.0063vw, 3rem)"}
            fontFamily={"mySecondFont"}
            color={"#E87421"}
          >
            GET IN TOUCH
          </Typography>
          <Box
            sx={{
              marginTop: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <input
              className="contactInput"
              style={{
                width: "500px",
                height: "50px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              type="text"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              className="contactInput"
              style={{
                width: "500px",
                height: "50px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              type="text"
              placeholder="Your Name"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
            />
            <input
              className="contactInput"
              style={{
                width: "500px",
                height: "50px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              type="number"
              placeholder="Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              className="contactInput"
              style={{
                width: "500px",
                height: "50px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="contactInput"
              style={{
                width: "500px",
                height: "50px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            <textarea
              className="contactInput"
              style={{
                width: "500px",
                borderRadius: "12px",
                border: "1px solid #E87421A6",
                outline: "none",
                padding: "16px",
                fontFamily: "mySecondFont",
              }}
              rows={6}
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  width: { md: "275px", xs: "160px" },
                  background: "#E87421",
                  color: "#fff",
                  fontFamily: "mySecondFont",
                  padding: "14px",
                  ":hover": {
                    background: "#E87421",
                  },
                }}
                onClick={handleSubmit}
              >
                SEND
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default ContactUS;
