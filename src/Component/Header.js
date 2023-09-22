import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodTwoToneIcon from "@mui/icons-material/FastfoodTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.svg"
import "../Styles/Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //menu drawer handle click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // menu drawer
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "250px" }}
    >
      <Typography
        variant={"h6"}
        color={"goldenrod"}
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <div className="logo">
          <FastfoodTwoToneIcon /> Header
        </div>
      </Typography>
      <Divider />
      <ul className="navigation_mobile">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography
            variant={"h6"}
            color={"goldenrod"}
            component={"div"}
            sx={{ flexGrow: 1, my: 2 }}
          >
            <div className="logo">
              <Link to="/">
                {/* <FastfoodTwoToneIcon /> Header */}
                <img src={logo} alt="logo" style={{height:"40px"}}/>
              </Link>
            </div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation_menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
            </ul>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          xs={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "300px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
