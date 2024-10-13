import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    number: "",
    email: "",
    location: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    const { companyName, yourName, number, email, location, description } =
      formData;

    if (
      !companyName ||
      !yourName ||
      !number ||
      !email ||
      !location ||
      !description
    ) {
      setMessage("All Fields Required");
      setOpen(true);
      return;
    }
    setLoading(true);
    emailjs
      .send("service_veaenbg", "template_efiv9ok", formData, {
        publicKey: "4uaYNLAGKqcM_2oTt",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setMessage("Form Submitted Successfully");
          setOpen(true);
          setFormData({
            companyName: "",
            yourName: "",
            number: "",
            email: "",
            location: "",
            description: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          setMessage("Error");
          setOpen(true);
        }
      );
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate]);
  return (
    <>
      <Helmet>
        <title>Dsdemo | Contact Us Now</title>
        <meta
          name="description"
          content="Contact us for dismantling, removal, and
                  demolition of structures across Dubai. With a commitment to
                  safety, efficiency,
                  and meticulous deconstruction."
        />
        <link rel="canonical" href="https://dsdemo.ae/contact" />
      </Helmet>
      <Box position={"relative"}>
        {/* Contact Details Section */}
        <img style={{ width: "100%" }} src="/images/cu.png" alt="" />
        <Container>
          <Box
            sx={{
              backgroundColor: "#FF7E54",
              py: 4,
              position: "absolute",
              width: "90%",
              top: { xs: "10%", sm: "18%", lg: "20%" },
              left: { sm: "4%", lg: "6%" },
            }}
          >
            <Container>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Grid item xs={12} md={4}>
                  <Email fontSize="large" sx={{ color: "#fff", mb: 1 }} />
                  <Typography color="#fff" fontWeight="bold">
                    Email
                  </Typography>
                  <Typography color="#fff">dsdemouae@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Phone fontSize="large" sx={{ color: "#fff", mb: 1 }} />
                  <Typography color="#fff" fontWeight="bold">
                    Phone
                  </Typography>
                  <Typography color="#fff">+971 56 244 4476</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <LocationOn fontSize="large" sx={{ color: "#fff", mb: 1 }} />
                  <Typography color="#fff" fontWeight="bold">
                    Location
                  </Typography>
                  <Typography color="#fff">
                    Dubai Investment Park,
                    <br /> First Plot No.2970 -<br /> Dubai - U.A.E
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>

        {/* Contact Form Section */}
        <Box marginTop={{ xs: "480px", sm: "120px" }} marginBottom={"160px"}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4, color: "#FF7E54" }}
            >
              Get In Touch
            </Typography>
            {loading && (
              <Box top={"200%"} left={"47%"} position={"absolute"}>
                <CircularProgress />
              </Box>
            )}
            <Box
              sx={{
                marginTop: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                px: 2,
              }}
            >
              <input
                className="contactInput"
                style={{
                  width: "460px",
                  borderRadius: "4px",
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
                  width: "460px",
                  borderRadius: "4px",
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
                  width: "460px",
                  borderRadius: "4px",
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
                  width: "460px",
                  borderRadius: "4px",
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
                  width: "460px",
                  borderRadius: "4px",
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
                  width: "460px",
                  borderRadius: "4px",
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
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              "& .MuiSnackbarContent-root": {
                backgroundColor:
                  message === "Form Submitted Successfully" ? "green" : "red",
              },
            }}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
