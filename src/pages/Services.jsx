import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Card, CardContent, Button, Box } from "@mui/material";
import s1 from "../components/images/s1.png";
import s2 from "../components/images/s2.png";
import s3 from "../components/images/s3.png";

const Services = () => {
  const navigate = useNavigate(); // Hook për navigimin


  const services = [
    {
      id: 1,
      title: "Currency Wallet",
      description:
        "Manage your digital currency securely and efficiently with advanced tools.",
      image: s1,
    },
    {
      id: 2,
      title: "Security Storage",
      description:
        "Advanced storage solutions to protect your data and digital assets.",
      image: s2,
    },
    {
      id: 3,
      title: "Expert Support",
      description:
        "Professional support to help you with all your technical and service needs.",
      image: s3,
    },
  ];

  
  const handleReadMore = (id) => {
    navigate(`/services/${id}`); 
  };

  return (
    <Container sx={{ padding: "2rem 0" }}>
     
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: "2rem",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        Our <span style={{ color: "#0056b3", fontWeight: "bold" }}>Services</span>
      </Typography>


      <Typography
        variant="body1"
        align="center"
        sx={{
          marginBottom: "2rem",
          color: "#000000",
          fontWeight: 500,
        }}
      >
        Explore our wide range of professional services designed to meet your needs.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, 
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" }, 
              maxWidth: 400,
              margin: "0 auto", 
            }}
          >
            <Card
              elevation={3}
              sx={{
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <CardContent>
               
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "50%",
                    height: "auto",
                    borderRadius: "8px",
                    margin: "0 auto",
                  }}
                />

              
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "bold",
                    color: "#000000",
                  }}
                >
                  {service.title}
                </Typography>

               
                <Typography
                  variant="body2"
                  sx={{
                    margin: "1rem 0",
                    color: "#000000",
                    fontWeight: 530,
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  sx={{
                    textTransform: "none",
                    color: "#000000",
                    padding: 0,
                    marginTop: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                  onClick={() => handleReadMore(service.id)} 
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}

       
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", sm: "auto" }, 
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;
