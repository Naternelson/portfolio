import { Navbar, Nav, Container } from "react-bootstrap"

export default function NavBar(){
    return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
            <Navbar.Brand href="#">Nate Nelson</Navbar.Brand>
            <Nav>
                <Nav.Link href="#top">About Me</Nav.Link>
                <Nav.Link href="#projects">Portfolio</Nav.Link>

            </Nav>
            
        </Container>
    </Navbar>
    )
}