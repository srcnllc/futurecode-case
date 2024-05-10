import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dbArray from '../../../data'

export default function Header() {

  return (
    <>
    {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
          <Container >
            <Navbar.Brand href="/">FutureCodeCase</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                FutureCodeCase
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Ana Sayfa</Nav.Link>
                  <Nav.Link href="/iletisim">İletişim</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <NavDropdown title="BlogList" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {dbArray.blogData.map((item,index)=>(
                        <NavDropdown.Item href={`/blog/${item.id}`} key={index}>{item.title}</NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}