

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarLinks() {
    return (
        <Nav className="me-auto">
        <Nav.Link className="text-white" as={Link} to="/">About Me</Nav.Link>
        <Nav.Link className="text-white" as={Link} to="/contact">Contact Me</Nav.Link>
        <Nav.Link className="text-white" as={Link} to="/portfolio">Portfolio</Nav.Link>
        <Nav.Link className="text-white" as={Link} to="/resume">Resume</Nav.Link>
      </Nav>
    )
}

export default NavBarLinks;