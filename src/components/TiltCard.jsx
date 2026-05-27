export default function TiltCard({ children, className = '', style = {}, ...props }) {
  return (
    <div
      className={`glass-card hover-card ${className}`}
      style={{
        position: 'relative',
        cursor: 'pointer',
        ...style
      }}
      {...props}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
