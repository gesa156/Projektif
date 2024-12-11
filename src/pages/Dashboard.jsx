import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 500 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Welcome to the Dashboard!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          You are logged in.
        </Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;
