import React from "react";
import { Box, Typography, Avatar, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "@mui/icons-material";


const teamMembers = [
  {
    name: "Ardian Halilaj",
    role: "Marketing Head",
    image: "https://projekti-final-bit.netlify.app/images/team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Nancy White",
    role: "Marketing Head",
    image: "https://projekti-final-bit.netlify.app/images/team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Earl Martinez",
    role: "Marketing Head",
    image: "https://projekti-final-bit.netlify.app/images/team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Josephine Allard",
    role: "Marketing Head",
    image: "https://projekti-final-bit.netlify.app/images/team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
    },
  },
];

const Team = () => {
  return (
    <Box sx={{ backgroundColor: "#002855", color: "#fff", py: 8, px: 3 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: "#fff" }}>
        Our <span style={{ color: "#007BFF" }}>Team</span>
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#12366e",
                borderRadius: 2,
                textAlign: "center",
                p: 4,
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                  mb: 2,
                  border: '5px solid white'
                }}
              />
              <Typography variant="h6" sx={{ color: "#00d1ff" }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 3 }}>
                {member.role}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <IconButton
                  href={member.social.facebook}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" }, 
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href={member.social.twitter}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href={member.social.linkedin}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href={member.social.instagram}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href={member.social.youtube}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                  }}
                >
                  <YouTube />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
