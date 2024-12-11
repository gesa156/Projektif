import { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importo useNavigate

const Login = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Inicializo navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.username === user && u.password === pwd);

    if (!userExists) {
      setErrMsg("Invalid username or password.");
      return;
    }

    // Kur login-i të jetë i suksesshëm, ruajmë përdoruesin dhe drejtojmë te dashboard
    localStorage.setItem("currentUser", JSON.stringify(userExists));
    setSuccess(true);
    setUser('');
    setPwd('');
    setErrMsg('');
   
    navigate('/dashboard'); 
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 500 }}>
        {success ? (
          <Typography variant="h5" align="center" color="success.main">
            Login successful! <br />
            <a href="/dashboard" style={{ textDecoration: "none", color: "#1976d2" }}>Go to Dashboard</a>
          </Typography>
        ) : (
          <>
            {errMsg && (
              <Alert severity="error" sx={{ marginBottom: 2 }} tabIndex={-1}>
                {errMsg}
              </Alert>
            )}
            <Typography variant="h5" align="center" gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Login
              </Button>
            </form>
            <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
              Not registered yet? <a href="/register" style={{ textDecoration: "none", color: "#1976d2" }}>Sign Up</a>
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Login;
