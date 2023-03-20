import { Container, Grid, Typography } from "@mui/material";
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import './Footer.css'
const Muigridfooter = () => {
  return (
    <>
      <Container style={{backgroundColor:'#191825',width:'100%'}}>
        <Grid container spcing={3}>
         
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "1px" }}>
              Features
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Paraphrasing Tool
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Compresser
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Plagiarism Checker
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Wrod Coverter
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Pdf Converter
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "1px" }}>
              About US
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Aim
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Vison
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Testimonial
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "2px" }}>
             <CloudDoneIcon /> Connects
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
             <FacebookIcon /> Facebook
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
             <InstagramIcon /> Instagram
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
             <GitHubIcon /> Github
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
             <LinkedInIcon /> Linkedin
            </Typography>
           
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "1px" }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              janvhichaudhari@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
             +91 4356782190
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              +91 7890654523
            </Typography>
          </Grid>
         
    
        </Grid>
      </Container>
    </>
  );
};

export default Muigridfooter;