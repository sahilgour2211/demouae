import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box>
      {/* Contact Details Section */}
      <img style={{ width: "100%" }} src="/images/cu.png" alt="" />
      <Container>
        <Box sx={{ backgroundColor: "#FF7E54", py: 4 }}>
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
      <Box marginTop={"100px"} marginBottom={"160px"}>
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4, color: "#FF7E54" }}
          >
            Get In Touch
          </Typography>
          <form>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Comment"
                variant="outlined"
                multiline
                rows={4}
              />
            </Box>
            <Box textAlign="center">
              <Button
                sx={{
                  marginTop: "42px",
                  backgroundColor: "#FF7E54",
                  color: "#fff",
                  width: "100%",
                  height: "50px",
                  maxWidth: "250px",
                  fontFamily: "mySecondFont",
                  ":hover": {
                    backgroundColor: "#FF7E54",
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
