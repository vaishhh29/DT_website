import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Background blobs matching Hero/About/Services layout */}
      <div className="contact-half-circle-left"></div>
      <div className="contact-yellow-glow-circle"></div>
      <div className="contact-blue-glow-bottom-right"></div>

      {/* Floating background dots */}
      <div className="floating-orange-dot contact-dot-1"></div>
      <div className="floating-orange-dot contact-dot-2"></div>
      <div className="floating-blue-dot contact-dot-3"></div>

      <div className="contact-page-grid">
        {/* Left Column: Contact Information (slides in from left) */}
        <ScrollAnimate animationType="slide-left" delay={100} className="contact-info-column">
          <div className="badge-wrapper">
            <span className="orange-badge">
              Contact
            </span>
          </div>

          <h1 className="contact-main-title">
            <span className="contact-text-blue">Let's </span>
            <span className="contact-text-teal-gradient">st</span>
            <span className="contact-text-gold-gradient">art</span> <br />
            <span className="contact-text-dark">a conversation.</span>
          </h1>

          <p className="contact-main-desc">
            Whether you’re a parent exploring 11+ options, a teacher who’d like to join our network, or a partner with an idea – we’d love to hear from you.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-row glass-card">
              <div className="contact-icon-circle">
                <Mail size={18} />
              </div>
              <div className="contact-detail-content">
                <span className="detail-label">EMAIL</span>
                <span className="detail-value">hello@dolphintech.io</span>
              </div>
            </div>

            <div className="contact-detail-row glass-card">
              <div className="contact-icon-circle">
                <Phone size={18} />
              </div>
              <div className="contact-detail-content">
                <span className="detail-label">PHONE</span>
                <span className="detail-value">+91 9952940444</span>
              </div>
            </div>

            <div className="contact-detail-row glass-card">
              <div className="contact-icon-circle">
                <MapPin size={18} />
              </div>
              <div className="contact-detail-content">
                <span className="detail-label">LOCATION</span>
                <span className="detail-value">Coimbatore</span>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Right Column: Contact Form (slides in from right) */}
        <ScrollAnimate animationType="slide-right" delay={250} className="contact-form-column">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form-card glass-card">
              <h2 className="form-card-title">Send us a message</h2>

              <div className="form-row-grid">
                <div className="form-group-item">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="contact-field-input"
                  />
                </div>

                <div className="form-group-item">
                  <label htmlFor="form-email">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="contact-field-input"
                  />
                </div>
              </div>

              <div className="form-group-item">
                <label htmlFor="form-subject">Subject</label>
                <input
                  type="text"
                  id="form-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="How can we help?"
                  className="contact-field-input"
                />
              </div>

              <div className="form-group-item">
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us a little about your needs..."
                  className="contact-field-textarea"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send message</span>
                <Send size={16} className="contact-send-icon" />
              </button>
            </form>
          ) : (
            <div className="contact-success-card glass-card text-center">
              <div className="success-icon-box">
                <Send size={44} className="success-icon" />
              </div>
              <h2 className="form-card-title">Message Sent!</h2>
              <p className="success-card-desc">
                Thank you for contacting us, <strong>{formData.name}</strong>. We've received your message and our team will get back to you shortly.
              </p>
              <button
                type="button"
                className="contact-submit-btn"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </ScrollAnimate>
      </div>
    </div>
  );
}
