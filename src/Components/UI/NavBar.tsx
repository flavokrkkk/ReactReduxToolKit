import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto d-flex gap-3">
          <NavLink className="text-decoration-none text-white" to="/users">
            Users
          </NavLink>
          <NavLink className="text-decoration-none text-white" to="/posts">
            Posts
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
