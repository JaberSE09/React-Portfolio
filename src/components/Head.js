
import { Navbar, Container  } from "react-bootstrap";
import NavBarLinks from "./NavBarLinks";
import {Link} from "react-router-dom"
function Head() {
    return (
        <Navbar bg="dark" expand="lg">
  <Container >
   <Navbar.Brand className="text-white" as={Link} to="jaberse09.github.io/React-Portfolio">Sajid Jaber</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <NavBarLinks />
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}


export default Head;
