import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import About from "./About";  // Importo faqet që ke gati
import Services from "./Services";
import Whyus from "./Whyus";
import Team from "./Team";
import Customers from "./Customers";



const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  backgroundColor: "#2A2A72",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  position: "relative",
  padding: "0",  // Eliminoni padding për të pasur më pak hapësirë
  margin: "0",   // Eliminoni marginën për të rregulluar ndarjet
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "10px", // Përshtatni padding për ekranet e vogla
  },
}));

const Section = styled(Box)(({ theme, bgColor }) => ({
  minHeight: "100vh",
  padding: "0",  // Eliminoni padding për të përfunduar seksionet me një lartësi të plotë
  margin: "0",   // Eliminoni marginën ndërmjet seksioneve
  backgroundColor: bgColor || "#f4f4f4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "0",  // Eliminoni padding për ekranet më të vogla
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "80%",
  backgroundImage: `url('https://projekti-final-bit.netlify.app/images/slider-img.png')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  animation: "moveUpDown 5s ease-in-out infinite",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "40%",  // Ulni lartësinë për ekranet e vogla
  },
}));

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <>
      <style>
        {`
          @keyframes moveUpDown {
            0% { transform: translateY(0); }
            50% { transform: translateY(-40px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* Hero Section */}
      <HeroSection>
        <Box sx={{ flex: 1, padding: "20px", color: "white" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",  // Titulli është bold
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              marginBottom: 2,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
            }}
          >
            Crypto Currency
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "normal",  // Fonti është normal për këtë pjesë
              marginBottom: 3, 
              maxWidth: "600px" 
            }}
          >
            Explicabo esse amet tempora quibusdams laudantium, labor eum magna fuga hic. Esse dicta aliquid error repudiandae...
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "25px",
              padding: "10px 20px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#1e90ff",
              "&:hover": { backgroundColor: "#1c86ee" },
            }}
            onClick={() => handleScroll("about")}
          >
            Learn More
          </Button>
        </Box>
        <ImageContainer />
      </HeroSection>

      {/* Responsive Sections */}
      <Section id="services">
        <Services />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="whyus">
        <Whyus />
      </Section>

   
      
      <Section id="team" bgColor="#002855">
        <Team />
      </Section>
      
      <Section id="customers">
        <Customers />
      </Section>
    </>
  );
};

export default Home;
