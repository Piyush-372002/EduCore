import React from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContainer>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Header>Contact Us</Header>
          <SubHeader>
            We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
          </SubHeader>
          <Form>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <SubmitButton variant="contained">Send Message</SubmitButton>
          </Form>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;

// Styled Components
const StyledContainer = styled(Container)`
  padding: 2rem;
  margin-top: 4rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  color: #2c6e49;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubHeader = styled.p`
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubmitButton = styled(Button)`
  background-color: #2c6e49 !important;
  color: white !important;
  padding: 0.8rem;
  font-size: 1.1rem;
  align-self: center;

  &:hover {
    background-color: #4a9e77 !important;
  }
`;
