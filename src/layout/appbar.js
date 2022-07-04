import { IconButton } from "@mui/material";
import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import {useNavigate} from "react-router-dom";
export const Appbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container className="appbar-container" fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-left nav-cont">
            <Nav.Link className="nav-link active" onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => navigate("/world")}>World</Nav.Link>
            <Nav.Link className="nav-link" href="#world">Dev's Diary</Nav.Link>
            <Nav.Link className="nav-link" href="#world">Roadmap</Nav.Link>
            <NavDropdown title="NFTs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Parcels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Parcel Buckets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Loyalty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Alphas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Apps" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Heavenmarket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                World Explorer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Parcel Merging</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Docs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Whitepaper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tokenomics
              </NavDropdown.Item>
            </NavDropdown>
            <Button className="btn btn-primary">Try Demo</Button>
            <IconButton>
              <img src={twitter}  alt="twitter"/>
            </IconButton>
            <IconButton>
              <img src={discord}  alt="discord"/>
            </IconButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
