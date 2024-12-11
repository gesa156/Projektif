import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper, Alert } from "@mui/material";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            setUser("");
            setPwd("");
            setMatchPwd("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f4f6f8",
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 400 }}>
                {success ? (
                    <Typography variant="h5" align="center" color="success.main">
                        Success! <Link to="/">Sign In</Link>
                    </Typography>
                ) : (
                    <>
                        {errMsg && (
                            <Alert severity="error" ref={errRef} sx={{ marginBottom: 2 }}>
                                {errMsg}
                            </Alert>
                        )}
                        <Typography variant="h5" align="center" gutterBottom>
                            Register
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                inputRef={userRef}
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                error={!!user && !validName}
                                helperText={
                                    user && !validName
                                        ? "4 to 24 characters. Must start with a letter."
                                        : ""
                                }
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
                                helperText={
                                    pwd && !validPwd
                                        ? "8-24 chars, include upper, lower, number, special (!@#$%)."
                                        : ""
                                }
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
                                helperText={
                                    matchPwd && !validMatch ? "Passwords must match." : ""
                                }
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
                            Already registered?{" "}
                            <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
                                Sign In
                            </Link>
                        </Typography>
                    </>
                )}
            </Paper>
        </Box>
    );
};

export default Register;
