import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const navList = [
    {
      title: 'Ana Sayfa',
      slug: '/',
    },
    {
      title: 'Hakkımda',
      slug: '/about',
    },
    {
      title: 'Hizmetler',
      slug: '/tedavi',
    },
    {
      title: 'Blog',
      slug: '/blog',
    },
    {
      title: 'İletişim',
      slug: '/contact',
    },
  ];

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
                  <NavDropdown
                    title="Blog"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/blog/blog1">Blog1</NavDropdown.Item>
                    <NavDropdown.Item href="/blog/blog2">
                      Blog2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/blog/blog3">
                      Blog3
                    </NavDropdown.Item>
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