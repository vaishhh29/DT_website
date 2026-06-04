import { useState } from 'react';
import { Briefcase, MapPin, Clock, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimate from './ScrollAnimate';

export default function Career() {
  const openings = [
    {
      title: 'Software Developer',
      location: 'Coimbatore (Branch Office)',
      type: 'Full-time',
      experience: '0 – 1 year',
      description: 'We\'re looking for a passionate Software Developer to join our growing team at Dolphins Technology. You\'ll work on building and maintaining our AI-powered learning platforms, collaborating closely with designers, product managers, and backend engineers.',
      requirements: [
        'React.js — building dynamic, component-driven UIs',
        'CSS — writing clean, responsive, and well-structured styles',
        'Tailwind CSS — utility-first styling for rapid development',
        'React Native — mobile app development for iOS and Android',
        'Backend development — RESTful APIs, Node.js or similar',
      ],
      niceToHave: [
        'Experience with TypeScript',
        'Familiarity with AI/ML-integrated products',
        'Understanding of education technology',
      ]
    }
  ];

  return (
    <div className="career-page-wrapper">
      {/* Background blobs matching Contact layout */}
      <div className="career-half-circle-left"></div>
      <div className="career-yellow-glow-circle"></div>
      <div className="career-blue-glow-bottom-right"></div>

      {/* Floating background dots */}
      <div className="floating-orange-dot career-dot-1"></div>
      <div className="floating-orange-dot career-dot-2"></div>
      <div className="floating-blue-dot career-dot-3"></div>

      <div className="career-page-content">
        {/* Header */}
        <ScrollAnimate animationType="fade" className="career-hero-header">
          <div className="career-icon-box animate-float">
            <Briefcase size={28} />
          </div>

          <h1 className="career-main-title">
            <span className="career-text-blue">Careers at </span>
            <span className="career-text-teal-gradient">Dol</span>
            <span className="career-text-gold-gradient">phin</span>
          </h1>

          <p className="career-main-desc">
            Join our team and help shape the future of education technology. We're headquartered in the <strong>United Kingdom</strong> with a development branch in <strong>Coimbatore, India</strong>.
          </p>
        </ScrollAnimate>

        {/* Job Listings */}
        {openings.map((job, idx) => (
          <ScrollAnimate key={idx} animationType="fade" delay={200} className="career-job-card">
            <div className="career-job-header">
              <h2 className="career-job-title">{job.title}</h2>
              <div className="career-job-meta">
                <span className="career-meta-tag">
                  <MapPin size={14} />
                  {job.location}
                </span>
                <span className="career-meta-tag">
                  <Clock size={14} />
                  {job.type}
                </span>
                <span className="career-meta-tag">
                  <Code size={14} />
                  {job.experience}
                </span>
              </div>
            </div>

            <p className="career-job-desc">{job.description}</p>

            <div className="career-requirements-section">
              <h3 className="career-req-title">Requirements</h3>
              <ul className="career-req-list">
                {job.requirements.map((req, rIdx) => (
                  <li key={rIdx}>
                    <ChevronRight size={14} className="career-req-icon" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="career-requirements-section">
              <h3 className="career-req-title">Nice to have</h3>
              <ul className="career-req-list nice-to-have">
                {job.niceToHave.map((item, nIdx) => (
                  <li key={nIdx}>
                    <ChevronRight size={14} className="career-req-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="career-card-actions">
              <a href="mailto:careers@dolphintech.io" className="career-email-btn">
                <span>✉</span> Apply now — careers@dolphintech.io
              </a>
              <Link to="/contact" className="career-contact-btn">Or contact us</Link>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
}
