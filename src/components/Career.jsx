import { useState } from 'react';
import { UserCheck, Sparkles, FolderUp, UploadCloud, AlertCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimate from './ScrollAnimate';

export default function Career() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: 'Tutor',
    note: ''
  });
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    // Simulate submission
    setSubmitted(true);
  };

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
            We're not actively hiring right now — but we're always inspired by people who care about learning, design, and AI used for good.
          </p>
        </ScrollAnimate>

        {/* No openings card */}
        <ScrollAnimate animationType="fade" delay={200} className="career-no-openings-card">
          <h3 className="career-card-title">No open positions</h3>
          <p className="career-card-desc">
            There are no roles open at the moment. If you'd still like to introduce yourself, send a short note and your portfolio — we'll keep it on file for when the right opportunity opens.
          </p>
          <div className="career-card-actions">
            <a href="mailto:careers@dolphintech.io" className="career-email-btn">
              <span>✉</span> careers@dolphintech.io
            </a>
            <Link to="/contact" className="career-contact-btn">Or contact us</Link>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
}
