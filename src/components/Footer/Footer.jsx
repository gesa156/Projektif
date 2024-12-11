import React from "react";
import { Box, Typography, TextField, Button, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, LocationOn, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#002855", color: "white", padding: "40px 20px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            gap: 4,
            marginBottom: 4,
          }}
        >
          {/* Seksioni i Adresës */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
              Address
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", marginBottom: 1, }}>
              <LocationOn sx={{ marginRight: 1 }} /> Location
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <Phone sx={{ marginRight: 1 }} /> Call +01 1234567890
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <Email sx={{ marginRight: 1 }} /> demo@gmail.com
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Box>

          {/* Seksioni i Informacionit */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ marginBottom: 2 , fontWeight: 'bold'}}>
              Info
            </Typography>
            <Typography variant="body2">
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful.
            </Typography>
          </Box>

          {/* Seksioni i Linkeve */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
              Links
            </Typography>
            <Box>
              <Link
                href="/"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff", // Kalon në ngjyrë të kalter kur kalon mbi të
                  },
                  "&.Mui-active": {
                    color: "#1e90ff", // Kur është klikuar, mbetet me ngjyrën e kalter
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff",
                  },
                }}
              >
                About
              </Link>
              <Link
                href="/services"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff",
                  },
                }}
              >
                Services
              </Link>
              <Link
                href="/why-us"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff",
                  },
                }}
              >
                Why Us
              </Link>
              <Link
                href="/team"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff",
                  },
                }}
              >
                Team
              </Link>
              <Link
                href="/contact"
                underline="none"
                sx={{
                  display: "block",
                  color: "white",
                  marginBottom: 1,
                  "&:hover": {
                    color: "#1e90ff",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>

          {/* Seksioni i Subscription */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
              Subscribe
            </Typography>
            <TextField
              placeholder="Enter email"
              variant="standard"
              size="small"
              sx={{
                width: "100%",
                maxWidth: "250px",
                marginBottom: 2,
                '& .MuiInputBase-input': {
                  padding: "8px 0",  
                  color: "#fff",  
                },
                '& .MuiInputBase-input::placeholder': {
                  color: "#fff",  
                },
                '& .MuiInput-underline:before': {
                  borderBottom: "1px solid #fff",  
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottom: "2px solid #fff",  
                },
                '& .MuiInput-underline:after': {
                  borderBottom: "2px solid #fff",  
                }
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1e90ff",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "#002855", textAlign: "center", padding: "10px 0", marginTop: 2, marginBottom: 2 }}>
        © 2024 All Rights Reserved By Free Html Templates
      </Typography>
    </Box>
  );
};

export default Footer;
