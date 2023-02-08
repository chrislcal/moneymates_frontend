import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import logo from "../assets/Logos/logo.svg"


export const NavBar = () => {

  // useState hook to keep track of the active link
  const [activeLink, setActiveLink] = useState('home');
  // useState hook to keep track of whether the navbar is scrolled or not
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Event listener for scroll event
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Add the event listener
    window.addEventListener("scroll", onScroll);

    // cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Function to update the active link state
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const { user } = useAuth0();

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          {user ? (
            <div>
              Welcome back, <strong>{user.nickname}</strong>
            </div>
      ) : (
        <div className="logosvg"><img src={logo} alt="logo"/></div>
      )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            </Nav>
            <span className="navbar-text">
                {user ? (<LogoutButton/>) : (<LoginButton/>)}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}