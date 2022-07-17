
import { Navbar, Container  } from "react-bootstrap";
import NavBarLinks from "./NavBarLinks";
import {Link} from "react-router-dom"
import Hero from "./Hero"
function Head() {
    return (
        <header>
        <Navbar bg="dark" expand="lg" className="sticky-top">
  <Container >
   <Navbar.Brand className="text-white" as={Link} to="/React-Portfolio">Sajid Jaber</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <NavBarLinks />
    </Navbar.Collapse>
  </Container>
</Navbar>
<Hero />
</header>
    )
}


export default Head;
