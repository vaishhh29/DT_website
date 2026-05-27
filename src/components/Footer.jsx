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
              <img src={logoImg} className="company-logo" alt="Dolphin Technologies Logo" />
            </div>
            <span className="footer-brand-name-screenshot">Dolphin Technologies</span>
          </div>
          <p className="footer-tagline-screenshot">
            Connecting young minds to teachers through intelligent learning experiences.
          </p>
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
                <span>+91 9952940444</span>
              </li>
              <li>
                <span>Coimbatore</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-screenshot">
        <div className="footer-bottom-container-screenshot">
          <p>&copy; {currentYear} Dolphin Technologies. All rights reserved.</p>
          <p className="crafted-text">Crafted with care for curious minds.</p>
        </div>
      </div>
    </footer>
  );
}
