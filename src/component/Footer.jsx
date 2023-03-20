import { Container, Grid, Typography } from "@mui/material";
import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Muigridfooter = () => {
  return (
    <>
      <Container>
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
              Connects
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Facebook
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Instagram
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Github
            </Typography>
            <Typography variant="h6" sx={{ margin: "1px" }}>
              {" "}
              Linkedin
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
         
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
    
        </Grid>
      </Container>
    </>
  );
};

export default Muigridfooter;