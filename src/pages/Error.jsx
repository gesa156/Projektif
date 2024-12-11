import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "#fff", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",
        textAlign: "center",
        padding: "50px"
      }}
    >
      <Typography variant="h3" sx={{ color: "#333", marginBottom: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ color: "#555", marginBottom: 3 }}>
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </Typography>
      <Button 
        component={Link} 
        to="/" 
        variant="contained" 
        sx={{
          backgroundColor: "#1e90ff", 
          "&:hover": { backgroundColor: "#0056b3" }
        }}
      >
        Back to our site
      </Button>
    
    </Box>
  );
};

export default Error;
