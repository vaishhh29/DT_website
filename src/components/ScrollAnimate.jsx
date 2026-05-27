import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({ children, animationType = 'slide', delay = 0, className = '', instant = false, ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(instant);

  useEffect(() => {
    if (instant) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [instant]);

  // Use CSS transitions instead of keyframe animations to avoid flickering
  // The element starts invisible and transitions smoothly to visible
  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: getInitialTransform(animationType, isVisible),
    transition: `opacity ${getDuration(animationType)}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${getDuration(animationType)}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </div>
  );
}

function getInitialTransform(type, isVisible) {
  if (isVisible) return 'translate3d(0, 0, 0)';
  
  switch (type) {
    case 'slide':
      return 'translate3d(0, 40px, 0)';
    case 'slide-left':
      return 'translate3d(-40px, 0, 0)';
    case 'slide-right':
      return 'translate3d(40px, 0, 0)';
    case 'flip-in':
      return 'perspective(600px) rotate3d(1, 0, 0, 12deg) translate3d(0, 25px, 0)';
    case 'fade-slow':
      return 'translate3d(0, 25px, 0)';
    case 'fade':
    default:
      return 'translate3d(0, 0, 0)';
  }
}

function getDuration(type) {
  switch (type) {
    case 'fade-slow':
      return 1.2;
    case 'fade':
      return 0.8;
    default:
      return 0.7;
  }
}
