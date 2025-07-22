import { Navbar, Nav, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar expand="md" fixed="top" className="navbar-custom px-0">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Gabrielle
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`nav-link-custom ${activeLink === link ? 'active' : ''}`}
                onClick={() => setActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
