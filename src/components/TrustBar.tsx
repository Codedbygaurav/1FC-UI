export default function TrustBar() {
  const items = [
    'SEBI Registered',
    'IRDAI Approved',
    '₹250Cr+ Assets Managed',
    '10,000+ Users',
    '99.9% Uptime',
    'Bank-grade Security',
    'ISO 27001 Certified',
    'MCA Compliant',
    'Unbiased Advisory',
    'Zero Commission',
  ];

  const doubled = [...items, ...items];

  return (
    <div style={{
      background: 'var(--color-dark-green)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '10px 0',
      overflow: 'hidden',
      position: 'relative',
      fontFamily:"Geist-SemiBold"
    }}>
      {/* Edge fades */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        background: 'linear-gradient(to right, var(--color-dark-green), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        background: 'linear-gradient(to left, var(--color-dark-green), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div className="ticker-wrap">
        <div
          className="animate-ticker"
          style={{
            display: 'inline-flex',
            gap: '0',
            whiteSpace: 'nowrap',
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                paddingRight: '32px',
              }}
            >
              <span style={{
                width: '4px',
                height: '3px',
                background: 'var(--color-accent-lime)',
                borderRadius: '50%',
                opacity: 0.6,
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(250,250,247,0.55)',
                letterSpacing: '0.02em',
              }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
