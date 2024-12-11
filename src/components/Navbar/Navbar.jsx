import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom"; // Importo NavLink
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Mbyll Drawer kur kalon në ekran më të madh
  useEffect(() => {
    if (!isSmallScreen) {
      setDrawerOpen(false); 
    }
  }, [isSmallScreen]);

  // Scroll to the top for the Home page
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [window.location.pathname]);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "WHY US", path: "/whyus" },
    { label: "TEAM", path: "/team" },
    { label: "CONTACT", path: "/contact" },
  ];

  // Funksioni për rifreskimin e faqes
  const handleSearchClick = () => {
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#2A2A72" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: "#00BFFF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Finexo
          </Typography>

          {isSmallScreen && (
            <IconButton
              sx={{ color: "white" }}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!isSmallScreen && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "white",
              }}
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#1e90ff" : "white", // Ndryshimi i ngjyrës për lidhjen aktive
                    fontWeight: isActive ? "bold" : "normal", // Bëni lidhjen aktive më të theksuar
                  })}
                >
                  <Typography>{item.label}</Typography>
                </NavLink>
              ))}
              <IconButton
                component={Link}
                to="/login"
                sx={{
                  color: "white",
                  "&:hover": { color: "#1e90ff" },
                }}
              >
                <PersonIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": { color: "#1e90ff" },
                }}
                onClick={handleSearchClick} // Këtu thërrasim funksionin për rifreskimin
              >
                <SearchIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer për pajisjet e vogla */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#2A2A72",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          {/* Ikona për mbyllje */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "0 16px",
              marginBottom: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#00BFFF",
                fontWeight: "bold",
              }}
            >
              Finexo
            </Typography>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={NavLink} // Përdorni NavLink për të përdorur lidhjet aktive
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                justifyContent: "center",
                color: "white",
                "&:hover": { color: "#1e90ff" },
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              <ListItemText primary={item.label} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}

          <ListItem
            button
            component={Link}
            to="/login"
            onClick={() => setDrawerOpen(false)}
            sx={{
              justifyContent: "center",
              color: "white",
              "&:hover": { color: "#1e90ff" },
            }}
          >
            <PersonIcon sx={{ marginRight: 1 }} />
            Login
          </ListItem>
          <IconButton
            sx={{
              color: "white",
              "&:hover": { color: "#1e90ff" },
              mt: 2,
            }}
            onClick={handleSearchClick} // Po ashtu këtu
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
