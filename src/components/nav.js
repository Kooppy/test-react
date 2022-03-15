import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class Nav extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/article">Article</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            // <div className='navigation'>
            //     <p> NAVBAR </p>
            //     <ul className='row'>
            //         <li className='item-nav'>
            //             <a href='/'> home </a>
            //         </li>
            //         <li className='item-nav'>
            //             <a href='/article'> article </a>
            //         </li>
            //     </ul>
            // </div>
        );
    }
}

export default Nav;