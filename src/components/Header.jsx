import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ isAuth, signUserOut }) => {
  return (
    <Navbar bg="info" variant="light" >
      <Container>
        <Navbar.Brand style={{fontSize: 28, fontWeight: 600,}} variant="danger" as={Link} to="/">
          blogbae
        </Navbar.Brand>
        <Nav className="me-auto-justify-content-end" >
          <Nav.Link as={Link} to="/" >
            Home
          </Nav.Link>
          {isAuth ? (
            <>
              <Nav.Link as={Link} to="/createpost">
                Create Post
              </Nav.Link>
              <Button onClick={signUserOut}  variant="danger">Logout</Button>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
