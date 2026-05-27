import { Brain, Users, TrendingUp } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function WhyDolphin() {
  const cards = [
    {
      icon: <Brain size={24} className="why-icon" />,
      title: 'AI-built tests',
      desc: "Teachers tell our AI to generate tests tailored to each student's weak areas."
    },
    {
      icon: <Users size={24} className="why-icon" />,
      title: 'Parents stay close',
      desc: 'Connect with teachers, track progress, and read clear reports anytime.'
    },
    {
      icon: <TrendingUp size={24} className="why-icon" />,
      title: 'Real progress',
      desc: 'Mock exams and analytics that turn effort into measurable growth.'
    }
  ];

  return (
    <section className="why-section">
      <ScrollAnimate animationType="fade" className="why-header text-center">
        <span className="orange-badge">WHY DOLPHIN</span>
        <h2 className="why-title">
          Smart learning, <span className="highlight-text-green-gold">made human</span>
        </h2>
        <p className="why-subtitle">
          We blend thoughtful pedagogy with AI that actually helps — never replaces — the teacher.
        </p>
      </ScrollAnimate>

      <div className="why-grid">
        {cards.map((card, idx) => (
          <ScrollAnimate 
            key={idx} 
            animationType="fade" 
            delay={idx * 120} 
            className="why-card glass-card hover-card"
          >
            <div className="why-icon-container">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
