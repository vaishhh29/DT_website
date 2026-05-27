import { Heart, Sparkles, Target } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';
import heroImg from '../assets/about.jpg';

export default function AboutUs() {
  const values = [
    {
      icon: <Heart size={20} />,
      title: 'Student first',
      desc: "Every decision begins with the learner's growth and wellbeing."
    },
    {
      icon: <Sparkles size={20} />,
      title: 'AI that empowers',
      desc: 'Technology that amplifies the teacher, never replaces them.'
    },
    {
      icon: <Target size={20} />,
      title: 'Real outcomes',
      desc: 'We measure success by progress, confidence, and exam results.'
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* Hero Section styled exactly like Hero background */}
      <div className="about-hero-wrapper">
        <div className="hero-half-circle-left"></div>
        <div className="hero-yellow-glow-circle"></div>

        {/* Floating circles background matching Hero design */}
        <div className="floating-orange-dot about-dot-1"></div>
        <div className="floating-orange-dot about-dot-2"></div>
        <div className="floating-blue-dot about-dot-3"></div>

        <section className="about-hero-grid">
          {/* Content alone slides in from left as a single unit */}
          <ScrollAnimate animationType="slide-left" delay={100} className="about-hero-text">
            <span className="about-badge">
              About Us
            </span>

            <h1 className="about-hero-title">
              <span className="about-text-blue-solid">We build </span>
              <span className="about-text-teal-gradient">lear</span>
              <span className="about-text-gold-gradient">ning</span> <br />
              <span className="about-text-dark">that listens.</span>
            </h1>

            <p className="about-hero-desc">
              Dolphin Technologies is an IT company crafting AI-powered platforms for 11+ and GCSE exam preparation. We connect young minds to teachers, and give parents a clear window into their child's progress.
            </p>

            <p className="about-hero-desc">
              Founded on the belief that the right teacher at the right moment changes everything, we use technology to make that moment happen more often.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animationType="fade" delay={200} className="about-hero-visual-content">
            <div className="about-image-container animate-float">
              <div className="about-image-glow"></div>
              <img
                src={heroImg}
                className="about-main-image"
                alt="Dolphin Technologies glass dolphin illustration"
              />
            </div>
          </ScrollAnimate>
        </section>
      </div>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="about-values-header">
            <ScrollAnimate animationType="fade" className="badge-wrapper">
              <span className="about-badge">
                Our Values
              </span>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={150}>
              <h2 className="about-values-title">
                What guides us <span className="highlight-text-green-gold">every day</span>
              </h2>
            </ScrollAnimate>
          </div>

          <div className="about-values-cards">
            {values.map((val, idx) => (
              <ScrollAnimate
                key={idx}
                animationType="fade"
                delay={idx * 150}
                className="about-value-card"
              >
                <div className="about-value-icon-circle">
                  {val.icon}
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <ScrollAnimate animationType="fade" className="about-mission-card">
          <h2>Our mission</h2>
          <p>
            To make personalized, high-quality exam preparation accessible — so every student walks into an exam room feeling ready, supported, and confident.
          </p>
        </ScrollAnimate>
      </section>
    </div>
  );
}
