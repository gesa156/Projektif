import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Zen Court',
    image: 'https://projekti-final-bit.netlify.app/images/client1.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'LusDen',
    image: 'https://projekti-final-bit.netlify.app/images/client2.jpg',
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Customers = () => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Për ekranet më të vogla se "sm" (600px)

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = isSmallScreen ? [index] : [index, (index + 1) % testimonials.length];

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '5rem',
        }}
      >
        What{' '}
        <span style={{ color: '#0056b3', fontWeight: 'bold' }}>Our Customers</span>{' '}
        Say
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {displayedTestimonials.map((testimonialIndex) => (
          <Grid item xs={12} sm={6} md={4} key={testimonialIndex}>
            <Card
              sx={{
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                maxWidth: '100%',
                margin: 'auto',
                overflow: 'visible',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-70px',
                  left: '30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '5px solid #002855',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  alt={testimonials[testimonialIndex].name}
                  image={testimonials[testimonialIndex].image}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center', paddingTop: '2.5rem' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '1rem' }}>
                  {testimonials[testimonialIndex].name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonials[testimonialIndex].quote}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '1rem' }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            '&:hover': { backgroundColor: '#e0e0e0' },
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            '&:hover': { backgroundColor: '#e0e0e0' },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Customers;
