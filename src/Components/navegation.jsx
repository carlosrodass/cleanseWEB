import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navegation = () => {
    return (
        <>
            <Navbar className="navbar" collapseOnSelect expand='sm' bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <a href="https://www.linkedin.com/in/carlos-rodas-65303a1a8/" target="_blank">CLEANSE</a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">MAP</Nav.Link>
                            <Nav.Link href="/offers">OFFERS</Nav.Link>
                            <Nav.Link href="/profile">PROFILE</Nav.Link>
                            {/* <Nav.Link href="/PopularSeries">LOG OUT</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navegation
