import React from "react";
import Layout from "../Component/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ height: "90vh" }}>
        <Box>
          <Typography
            variant="h5"
            align="center"
            marginTop="1rem"
            marginBottom="1rem"
            sx={{
              "@media (max-width:600px)": {
                "& h3": {
                  marginTop: "20px",
                  fontSize: "5rem",
                },
              },
            }}
          >
            Contact To Our Restraunt
          </Typography>
          <p style={{ padding: "0px 20px" }}>
            We're here to help. If you have any questions or need assistance,
            please don't hesitate to contact us. We're always happy to hear from
            you. We value your feedback and suggestions, and we're always
            looking for ways to improve. We're here to make your life easier.
            Whether you need help with a product or service, or you just have a
            question, we're here to help you find the answer.
          </p>
        </Box>

        <Box sx={{ mt: "10%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" bgColor="black"  sx={{color:"white" , fontWeight:"600" , fontSize:"2rem"}} >
                    Option to contact us
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <EmailOutlinedIcon sx={{pt:1, mr: "12px" }} />
                    Email@contactus.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddIcCallOutlinedIcon sx={{pt:1, mr: "12px" }} />
                    000-9274373-89
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddLocationAltOutlinedIcon sx={{pt:1, mr: "12px" }} />
                    E539-Block-R
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
