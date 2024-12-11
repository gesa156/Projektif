import React from 'react';
import { Container, Grid2, Typography, Box, Button } from '@mui/material';
import w1 from '../components/images/w1.png';
import w2 from '../components/images/w2.png';
import w3 from '../components/images/w3.png';
import w4 from '../components/images/w4.png';


const handleReadMore = () => {
  window.location.reload(); 
};

const Whyus = () => {
  const features = [
    {
      icon: w1,
      title: 'Expert Management',
      description:
        'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
    },
    {
      icon: w2,
      title: 'Secure Investment',
      description:
        'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
    },
    {
      icon: w3,
      title: 'Instant Trading',
      description:
        'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
    },
    {
      icon: w4,
      title: 'Happy Customers',
      description:
        'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
    },
  ];

  return (
    <Container>
      <Box sx={{ marginTop: '80px' }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Why Choose{' '}
          <span style={{ color: '#007BFF', marginTop: '60px' }}>Us</span>
        </Typography>
      </Box>

      <Grid2 container spacing={4}>
        {features.map((feature, index) => (
          <Grid2 item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '5px solid black', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '26px',
                
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{ width: '60px', height: '60px' }} 
                />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" align="center">
                {feature.description}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>

      <Box
        display="flex"
        justifyContent="center"
        marginTop="35px"
        marginBottom="60px"
      >
        <Button variant="contained"   onClick={handleReadMore}  color="primary">
          Read More
        </Button>
      </Box>
    </Container>
  );
};

export default Whyus;
