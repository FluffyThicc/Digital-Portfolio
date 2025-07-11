import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = () => {
    setExpanded(false); // Close mobile menu when clicking a link
  };

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/phay-jun-hong-47750b351/',
      label: 'LinkedIn'
    },
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  return (
    <Navbar 
      expand="lg" 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="full-name">Phay Jun Hong</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded => !expanded)}
          className={expanded ? 'navbar-toggler active' : 'navbar-toggler'}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.id}
                as={Link}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={onUpdateActiveLink}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <Link to="/contact" className="connect-button">
            <button className="vvd">
              <span>Let's Connect</span>
            </button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
