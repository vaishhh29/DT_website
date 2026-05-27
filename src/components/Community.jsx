import { Link } from 'react-router-dom';
import teacherConnectionImg from '../assets/connect.jpg';
import ScrollAnimate from './ScrollAnimate';

export default function Community() {
  return (
    <section className="community-section-layout">
      <div className="community-grid">
        <ScrollAnimate animationType="fade" className="community-visual">
          <div className="community-image-wrapper animate-float">
            <img 
              src={teacherConnectionImg} 
              alt="Community classroom connection" 
              className="community-img"
            />
          </div>
        </ScrollAnimate>

        <ScrollAnimate animationType="fade" className="community-info">
          <span className="orange-badge">COMMUNITY</span>
          <h2 className="community-title">
            Where teachers, students <br />& parents <span className="highlight-text-green-gold">meet.</span>
          </h2>
          <p className="community-subtitle">
            Parents connect with the right teachers for their child's 11+ journey, monitor progress in real time, and receive transparent reports.
          </p>
          <Link to="/about" className="glow-btn community-btn">
            About our mission &rarr;
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}
