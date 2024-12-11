import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button, Paper, Grid } from "@mui/material";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const services = [
    {
      id: 1,
      title: "Digital Finance Mastery",
      description: "Empowering your financial journey with smart tools.",
      details: `
        Step into the future of finance with our comprehensive solutions designed to simplify your life. 
        From budgeting to real-time tracking, we empower you to make informed decisions that elevate your financial potential.`,
      highlights: [
        "Real-time insights for smarter decision-making.",
        "Effortless management with advanced tools.",
        "Secure and reliable transactions every time.",
      ],
    },
    {
      id: 2,
      title: "Fortified Data Vault",
      description: "Your data, protected like never before.",
      details: `
        Experience unparalleled security with our advanced encryption technologies. 
        Safeguard your sensitive information, protect your assets, and enjoy peace of mind knowing your data is always safe.`,
      highlights: [
        "State-of-the-art encryption for maximum safety.",
        "Customizable plans to suit your needs.",
        "24/7 monitoring to ensure data integrity.",
      ],
    },
    {
      id: 3,
      title: "On-Demand Expert Network",
      description: "Get the answers you need, whenever you need them.",
      details: `
        Access a network of industry-leading experts ready to guide you through any challenge. 
        Whether it’s strategic advice or technical support, our team has you covered.`,
      highlights: [
        "Personalized support tailored to your goals.",
        "Seamless communication with our experts.",
        "Available around the clock, every day of the year.",
      ],
    },
  ];

  // Gjej shërbimin përkatës
  const service = services.find((service) => service.id.toString() === id);

  if (!service) {
    return (
      <Container>
        <Typography variant="h5" align="center" color="error">
          Service not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "2rem 0" }}>
      {/* Header Kryesor */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#003366", // Ngjyrë e kaltër e errët
          color: "#ffffff",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
          {service.title}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", opacity: 0.9 }}>
          {service.description}
        </Typography>
      </Box>

      {/* Përshkrimi i Plotë */}
      <Paper
        elevation={4}
        sx={{
          padding: "2rem",
          borderRadius: "12px",
          backgroundColor: "#e3f2fd", // Ngjyra e kaltër e lehtë
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#003366", // Ngjyra e kaltër e errët
            marginBottom: "1rem",
          }}
        >
          What Makes This Service Special?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          {service.details}
        </Typography>
      </Paper>

      {/* Pikat Kryesore */}
      <Box
        sx={{
          marginY: "2rem",
          padding: "1.5rem",
          backgroundColor: "#bbdefb", // Ngjyra e kaltër më e lehtë
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#003366",
            marginBottom: "1rem",
          }}
        >
          Key Highlights:
        </Typography>
        <Grid container spacing={2}>
          {service.highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: "1rem",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "#003366", // Ngjyra e kaltër e errët
                    fontWeight: 500,
                  }}
                >
                  {highlight}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Butoni për Kthim */}
      <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#003366", // Ngjyra e kaltër e errët
            color: "#ffffff",
            textTransform: "none",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#002244", // Ngjyra e kaltër shumë e errët
            },
          }}
          onClick={() => navigate(-1)} // Kthim prapa
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default ServiceDetails;
