import { Box, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}>
        <Box
          sx={{
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              fontSize:"42px",
              transition:"all 400ms"
            },
          }}
        >
          <YouTubeIcon />
          <FacebookOutlinedIcon />
          <WhatsAppIcon />
        </Box>
        <Typography
          variant="h4"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All rights and reserved &copy; by kashan iqbal
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
