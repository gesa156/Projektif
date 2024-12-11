import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper, Alert } from "@mui/material";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; // Emri duhet të fillojë me shkronjë dhe të jetë mes 4-24 karaktere
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // Fjalëkalimi duhet të ketë kushte të caktuara
const REGISTER_URL = '/register';

const Register = () => {
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    // Kontrollojmë nëse përdoruesi ekziston tashmë
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.username === user);

    if (userExists) {
      setErrMsg("Username already exists!");
      return;
    }

    // Ruajmë të dhënat e përdoruesit në localStorage
    const newUser = { username: user, password: pwd };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);
    setUser('');
    setPwd('');
    setMatchPwd('');
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 500 }}>
        {success ? (
          <Typography variant="h5" align="center" color="success.main">
            Registration successful! <br />
            <a href="/login" style={{ textDecoration: "none", color: "#1976d2" }}>Sign In</a>
          </Typography>
        ) : (
          <>
            {errMsg && (
              <Alert severity="error" sx={{ marginBottom: 2 }} tabIndex={-1}>
                {errMsg}
              </Alert>
            )}
            <Typography variant="h5" align="center" gutterBottom>Register</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                error={!!user && !validName}
                helperText={user && !validName ? "4 to 24 characters. Must start with a letter." : ""}
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
                error={!!pwd && !validPwd}
                helperText={pwd && !validPwd ? "8 to 24 characters, include upper, lower, number, special (!@#$%)." : ""}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
                error={!!matchPwd && !validMatch}
                helperText={matchPwd && !validMatch ? "Passwords must match." : ""}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                disabled={!validName || !validPwd || !validMatch}
              >
                Sign Up
              </Button>
            </form>
            <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
              Already registered? <a href="/" style={{ textDecoration: "none", color: "#1976d2" }}>Sign In</a>
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Register;
