import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="">Employees</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to='/'>Employee List</Link></Nav.Link>
                            
                            {
                                localStorage.getItem('login') ? <Nav.Link><Link to='/logout'>LogOut</Link></Nav.Link> : <Nav.Link><Link to='/login'>LogIn</Link></Nav.Link>
                            }
                        </Nav>  
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
