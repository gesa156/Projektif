import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';


const AboutSection = styled('div')(({ theme }) => ({
  backgroundColor: '#002855', 
  color: '#fff',
  width: '100vw', 
  padding: '50px 0',
}));


const AboutImg = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '500px',
  borderRadius: '8px',
});



const handleReadMore = () => {
  window.location.reload(); 
};

const AboutUs = () => {
  return (
    <AboutSection>
      <Container sx={{ maxWidth: '100%' }}>
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          marginBottom: "1rem", 
          fontWeight: "bold",
          color: "#fff"
        }}
      >
        About <span style={{ color: "#0056b3", fontWeight: "bold" }}>Us</span>
      </Typography>

      <Typography 
  variant="body1" 
  align="center" 
  sx={{ marginBottom: "1rem", color: "#ffffff", fontWeight: 500 }}
>
  Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
</Typography>

        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} sm={6}>
            <AboutImg src="https://projekti-final-bit.netlify.app/images/about-img.png" alt="About Us" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom>
            
           We Are Finexo
            </Typography>
            <Typography variant="body1" paragraph>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
            </Typography>
            <Button variant="contained"   
                  onClick={handleReadMore} 
            color="primary">
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default AboutUs;
