import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Your Company";

    const container = document.getElementById('contact-container');
    if (container) {
      container.style.opacity = 0;
      container.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(() => (container.style.opacity = 1), 100);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && /\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: '' });
    }
    if (name === 'phone' && /^\d+$/.test(value)) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (name === 'phone' && !/^\d+$/.test(value)) {
      newErrors.phone = 'Phone number must contain only digits';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name) newErrors.name = 'Your name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (formData.phone && !/^\d+$/.test(formData.phone)) newErrors.phone = 'Phone number must contain only digits';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message cannot be empty';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const submissionTime = new Date().toLocaleString();

      const formattedData = {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Message: formData.message,
        "Submission Time": submissionTime,
      };

      console.log(formattedData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      id="contact-container"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box sx={{ backgroundColor: 'white', p: 4, borderRadius: 2, boxShadow: 3, maxWidth: 500, width: '100%' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
          Contact <span style={{ color: '#000' }}>Us</span>
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone}
            inputProps={{ pattern: "[0-9]*" }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%', backgroundColor: '#1e90ff', '&:hover': { backgroundColor: '#63a8ff' } }}
          >
            SEND MESSAGE
          </Button>
        </form>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
        <span style={{ marginRight: '10px' }}>✅</span>
          Your message has been sent!
      
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
