import React from 'react';
import { Navbar,
    Nav,
    Container,
    NavDropdown, } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import "./header.css"
function Header(){
    const navigate = useNavigate();
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Ini Navbar</Navbar.Brand>
                    <Nav className="me-auto navbar-wrapper">
                        <Link className='navbar_link' to="/">Homepage</Link>
                        <Link className='navbar_link' to="/meals">List Meals</Link>
                        <Link className='navbar_link' to="/detail">Detail Meal</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header