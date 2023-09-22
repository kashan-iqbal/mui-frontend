import React from "react";
import Layout from "../Component/Layout";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { menulist } from "../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mt: "2rem",
        }}
      >
        {menulist.map((menu) => (
          <Card sx={{ maxWidth: 250, margin: "10px" ,   boxShadow: "0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20)" }}>
            <CardMedia sx={{ height: 140 }} image={menu.image} />
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">{menu.name}</Typography>
                <Typography> Rs:{menu.price}</Typography>
              </Box>
              <Typography variant="p">{menu.descrption}</Typography>
              <Button sx={{mt:"5px",bgcolor:"green",color:"black",padding:"3px 4px"}}>Order Now</Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
