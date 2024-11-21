import React from "react";
import { Link } from "react-router-dom";
import Students from "../assets/bannr.png";
import {
  StyledContainer,
  Header,
  Logo,
  Nav,
  NavLink,
  NavButton,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButton,
  HeroImage,
  StyledLink,
} from "./HomepageStyles";

const Homepage = () => {
  document.body.style.backgroundImage = `url(${Students})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  return (
    <StyledContainer>
      <Header>
        <Logo>EduCore</Logo>
        <Nav>
          {/* <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink> */}
          {/* <NavLink href="#about">About Us</NavLink> */}
          <NavLink><StyledLink to="/contact">Contact US</StyledLink></NavLink>
          <StyledLink to="/choose">
            {/* <NavButton>Login</NavButton> */}
          </StyledLink>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent style={{ margin: "60px" }}h>
          <HeroTitle style={{marginLeft: "0px"}}>Empowering Education</HeroTitle>
          <HeroText>
            "Transforming Education. Nurturing Talent. Inspiring Excellence.
            Your Partner in Educational Success. Where Learning Meets
            Innovation."
          </HeroText>
          <StyledLink to="/choose">
            <HeroButton>Get Started</HeroButton>
          </StyledLink>
        </HeroContent>
        <HeroImage>
          {/* <img src={Students} alt="EduCore Logo" /> */}
        </HeroImage>
      </HeroSection>
    </StyledContainer>
  );
};

export default Homepage;
