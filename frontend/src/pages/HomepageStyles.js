// HomepageStyles.js
import styled from "styled-components";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c6e49;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin: 0 1rem;
  color: #2c6e49;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4a9e77;
  }
`;

export const NavButton = styled(Button)`
  background-color: #2c6e49 !important;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #4a9e77 !important;
  }
`;

export const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
`;

export const HeroContent = styled.div`
  max-width: 500px;
  text-align: left;
  animation: fadeIn 1.5s ease;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #2c6e49;
   text-align: left;
  margin-bottom: 1rem;
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: #333;
   text-align: left;
  margin-bottom: 2rem;
`;

export const HeroButton = styled(Button)`
  background-color: #2c6e49 !important;
  color: white !important;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;

  &:hover {
    background-color: #4a9e77 !important;
  }
`;

export const HeroImage = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
