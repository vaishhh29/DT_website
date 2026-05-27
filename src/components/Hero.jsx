import { ArrowRight, Sparkles, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';
import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
  return (
    <div className="hero-bg-wrapper">
      <div className="hero-half-circle-left"></div>
      <div className="hero-yellow-glow-circle"></div>
      <section id="home" className="hero-section-layout">
        {/* Background circles / blobs matching the light design */}
        <div className="floating-orange-dot dot-1"></div>
        <div className="floating-orange-dot dot-2"></div>
        <div className="floating-blue-dot dot-3"></div>

        <div className="hero-grid">
          <div className="hero-text-content">
            <ScrollAnimate animationType="fade" delay={100} className="badge-wrapper">
              <span className="badge-light">
                <Sparkles size={14} className="badge-icon-blue" />
                AI-powered learning, made human
              </span>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={100}>
              <h1 className="hero-title-screenshot">
                <span className="text-connecting">Connecting</span> <br />
                <span className="text-teal">young</span> <span className="text-gold">minds</span> <br />
                <span className="text-black">to brilliant <br />
                teachers.</span>
              </h1>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={100}>
              <p className="hero-subtitle-screenshot">
                Dolphin Technologies builds intelligent learning experiences for 11+ and GCSE preparation — where teachers, students, and parents grow together.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={100} className="hero-cta-row">
              <Link to="/services" className="glow-btn hero-primary-btn">
                Explore services
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="hero-secondary-btn-screenshot">
                Talk to us
              </Link>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={100} className="hero-stats-row-screenshot">
              <div className="hero-stat-card glass-card">
                <div className="stat-num-blue">500+</div>
                <div className="stat-label-gray">Students</div>
              </div>
              <div className="hero-stat-card glass-card">
                <div className="stat-num-blue">60+</div>
                <div className="stat-label-gray">Teachers</div>
              </div>
              <div className="hero-stat-card glass-card">
                <div className="stat-num-blue">AI</div>
                <div className="stat-label-gray">Inside</div>
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate animationType="fade" delay={100} className="hero-visual-content">
            <div className="hero-image-container animate-float">
              <div className="hero-image-glow"></div>
              <img
                src={heroImg}
                className="hero-main-image"
                alt="Dolphin Technologies glass dolphin mascot"
              />
              {/* Floating Glass Badges */}
              <div className="floating-badge-glass badge-top-right">
                <BrainCircuit size={18} className="glow-icon-blue" />
                <span>AI Tutor</span>
              </div>
              <div className="floating-badge-glass badge-bottom-left">
                <span className="live-label">Live progress</span>
                <span className="improvement-val">
                  <span className="badge-blue-text">+38%</span>{' '}
                  <span className="badge-gold-text">improvement</span>
                </span>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}
