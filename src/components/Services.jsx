import img11plus from '../assets/11plus.jpg';
import gcseImg from '../assets/gcse.jpg';
import ScrollAnimate from './ScrollAnimate';

export default function Services() {
  return (
    <div className="services-page-wrapper">
      {/* Hero Section wrapper with gradient */}
      <ScrollAnimate animationType="fade" className="services-hero-wrapper">
        {/* Background blobs matching Hero/About layout */}
        <div className="hero-half-circle-left"></div>
        <div className="services-yellow-glow-circle"></div>
        <div className="services-blue-glow-bottom-right"></div>

        {/* Floating background dots */}
        <div className="floating-orange-dot services-dot-1"></div>
        <div className="floating-orange-dot services-dot-2"></div>
        <div className="floating-blue-dot services-dot-3"></div>
        <div className="floating-white-dot services-dot-4"></div>

        {/* Services Header Section */}
        <section className="services-hero-header">
          <div className="services-header-content">
            <ScrollAnimate animationType="fade" className="badge-wrapper">
              <span className="orange-badge">
                What We Do
              </span>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={150}>
              <h1 className="services-main-title">
                <span className="services-text-blue">Services built </span>
                <span className="services-text-teal-gradient">arou</span>
                <span className="services-text-gold-gradient">nd</span> <br />
                <span className="services-text-dark">the learner.</span>
              </h1>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={300}>
              <p className="services-main-desc">
                From 11+ Academy to GCSE preparation — every product blends real teachers with AI that knows where each student needs help.
              </p>
            </ScrollAnimate>
          </div>
        </section>
      </ScrollAnimate>

      {/* Product Cards Section */}
      <ScrollAnimate animationType="fade" className="services-products-section">
        <div className="services-products-container">
          
          {/* Card 1: 11+ Academy */}
          <ScrollAnimate animationType="fade" delay={100} className="product-layout-card">
            <div className="product-image-column">
              <div className="product-image-container animate-float">
                <div className="product-image-glow-blue"></div>
                <img src={img11plus} alt="11+ Academy illustration" className="product-img" />
              </div>
            </div>
            <div className="product-info-column">
              <div className="product-badge-row">
                <span className="badge-status-blue">ONGOING</span>
                <span className="badge-label-ai">AI-powered</span>
              </div>
              <h2 className="product-title-text">11+ Academy</h2>
              <p className="product-desc-text">
                Our flagship programme combines expert tutors with an AI engine that builds personalised tests. Teachers tell the AI what to focus on, and it generates mocks and exercises that target each student's weak areas.
              </p>
              <ul className="product-features-list">
                <li>AI-generated tests tailored to each student’s weak areas</li>
                <li>Live teacher-student sessions and on-demand mocks</li>
                <li>Weekly mock exams with detailed performance analytics</li>
                <li>Parent dashboard to monitor progress and receive reports</li>
                <li>Connect with the right teacher for your child’s 11+ journey</li>
              </ul>
            </div>
          </ScrollAnimate>

          {/* Card 2: GCSE Preparation */}
          <ScrollAnimate animationType="fade" delay={250} className="product-layout-card card-reversed">
            <div className="product-info-column">
              <div className="product-badge-row">
                <span className="badge-status-orange">UPCOMING</span>
                <span className="badge-label-ai">AI-powered</span>
              </div>
              <h2 className="product-title-text">GCSE Preparation</h2>
              <p className="product-desc-text">
                The next chapter. A GCSE-focused programme with an AI engine tuned to the curriculum, deeper subject coverage, and richer analytics — the same teacher-led heart, evolved for older students.
              </p>
              <ul className="product-features-list">
                <li>Subject-specialist teachers across core GCSE topics</li>
                <li>AI mocks aligned to GCSE specification and grading</li>
                <li>Adaptive practice based on confidence and accuracy</li>
                <li>Smart revision plans that fit each student’s calendar</li>
                <li>Parent and student reports that track every milestone</li>
              </ul>
            </div>
            <div className="product-image-column">
              <div className="product-image-container animate-float">
                <div className="product-image-glow-blue"></div>
                <img src={gcseImg} alt="GCSE Preparation illustration" className="product-img" />
              </div>
            </div>
          </ScrollAnimate>

        </div>
      </ScrollAnimate>

      {/* How It Works Section */}
      <ScrollAnimate animationType="fade" className="services-workflow-section">
        <div className="workflow-container">
          <ScrollAnimate animationType="fade" className="badge-wrapper">
            <span className="orange-badge">
              How It Works
            </span>
          </ScrollAnimate>

          <ScrollAnimate animationType="fade" delay={150}>
            <h2 className="workflow-section-title">
              <span className="workflow-title-blue">A simple flow,</span> <br />
              <span className="workflow-title-gradient">powerful outcomes</span>
            </h2>
          </ScrollAnimate>

          <div className="workflow-cards-grid">
            <ScrollAnimate animationType="fade" delay={100} className="workflow-step-card">
              <div className="workflow-step-num">01</div>
              <h3>Meet your teacher</h3>
              <p>Parents pick the right tutor from our verified network.</p>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={200} className="workflow-step-card">
              <div className="workflow-step-num">02</div>
              <h3>AI builds the plan</h3>
              <p>Teachers brief our AI; it generates targeted tests and mocks.</p>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={300} className="workflow-step-card">
              <div className="workflow-step-num">03</div>
              <h3>Student practices</h3>
              <p>Engaging sessions, mock exams, and adaptive exercises.</p>
            </ScrollAnimate>

            <ScrollAnimate animationType="fade" delay={400} className="workflow-step-card">
              <div className="workflow-step-num">04</div>
              <h3>Track & report</h3>
              <p>Parents follow progress and receive clear reports.</p>
            </ScrollAnimate>
          </div>
        </div>
      </ScrollAnimate>
    </div>
  );
}
