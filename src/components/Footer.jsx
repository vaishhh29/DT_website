import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-screenshot">
      <div className="footer-container-screenshot">
        <div className="footer-brand-section-screenshot">
          <div className="footer-logo-row-screenshot">
            <div className="logo-wrapper footer-logo-wrapper-screenshot">
              <img src={logoImg} className="company-logo" alt="Dolphins Technology Logo" />
            </div>
            <span className="footer-brand-name-screenshot">Dolphins Technology</span>
          </div>
          <p className="footer-tagline-screenshot">
            Connecting young minds to teachers through intelligent learning experiences.
          </p>

          {/* Social Links */}
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/company/dolphintechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/dolphintechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-grid-screenshot">
          <div className="footer-links-col-screenshot">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          <div className="footer-links-col-screenshot contact-col-screenshot">
            <h3>Contact</h3>
            <ul>
              <li>
                <span className="contact-link-email">hello@dolphintech.io</span>
              </li>
              <li>
                <span>+44 7352 312802</span>
              </li>
              <li className="footer-location-item">
                <strong>Head Office:</strong>
                <span>Daimler Green, Alverley Road, CV6 3LH</span>
              </li>
              <li className="footer-location-item">
                <strong>Branch:</strong>
                <span>Coimbatore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-screenshot">
        <div className="footer-bottom-container-screenshot">
          <p>&copy; {currentYear} Dolphins Technology. All rights reserved.</p>
          <p className="crafted-text">Crafted with care for curious minds.</p>
        </div>
      </div>
    </footer>
  );
}
