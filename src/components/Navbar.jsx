import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top and close menu when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/career', label: 'Career' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-wrapper">
            <img src={logoImg} className="company-logo" alt="Dolphin Technologies Logo" />
          </div>
          <span className="brand-name">
            <span className="brand-dolphin-techno">Dolphin Techno</span>
            <span className="brand-logies">logies</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active-route-pill' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mobile-cta-only">
            <Link to="/contact" className="nav-btn" onClick={() => setIsMenuOpen(false)}>
              Get in touch
            </Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <Link to="/contact" className="nav-btn">
            Get in touch
          </Link>
        </div>

        {/* Hamburger button (visible on mobile only) */}
        <button 
          className="navbar-hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
