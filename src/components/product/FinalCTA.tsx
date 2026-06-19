import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="cta-grid" />
      <div className="cta-glow-left" />
      <div className="cta-glow-right" />

      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-left">
        <div className="cta-badge">
          <span className="cta-badge-dot" />
          Unified Financial Operating System
        </div>

        <h2 className="cta-title">
  One intelligent platform
  <br />
  for your <span>financial ecosystem</span>
</h2>

        <p className="cta-description">
          Investments, insurance, taxes,
          loans, legal planning and AI-powered
          monitoring — connected into one
          seamless experience.
        </p>

        <div className="cta-actions">
          <button className="cta-primary">
            Get Started
            <ArrowRight size={16} />
          </button>

          <button className="cta-secondary">
            <Calendar size={16} />
            Book Demo
          </button>
        </div>

        <div className="trust-grid">
          <div className="trust-item">
            <ShieldCheck size={14} />
            <span>Bank-grade security</span>
          </div>

          <div className="trust-item">
            <Sparkles size={14} />
            <span>AI-powered insights</span>
          </div>

          <div className="trust-item">
            <ShieldCheck size={14} />
            <span>Family-first access</span>
          </div>

          <div className="trust-item">
            <LayoutDashboard size={14} />
            <span>Unified dashboard</span>
          </div>
        </div>
        </div>

        <div className="cta-right">
      <div className="hero-bg-circle" />
      <div className="hero-bg-circle-small" />

      <img
        src="/productCTA.png"
        alt="Financial Advisor"
        className="hero-image"
      />
    </div>
        </div>
      </div>

      <style>{`.cta-section {
  position: relative;
  overflow: hidden;

  max-width: 1280px;
  width: calc(100% - 48px);

  margin: 40px auto;

  padding: 48px 24px;

  background:var(--color-dark-green);

  border-radius: 28px;
  height:600px;
}

.cta-grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);

  background-size: 56px 56px;
  pointer-events: none;
}

.cta-container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto 0;
  
}

.cta-content {
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  height: 100%;
}

.cta-left {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-left: 40px;
  margin-bottom: 40px;
  
}

.cta-badge {
  width: fit-content;
  margin: 0 auto 18px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 18px;

  border-radius: 999px;

  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);

  color: rgba(255,255,255,0.92);

  font-size: 12px;
  font-weight: 700;

  backdrop-filter: blur(12px);
}

.cta-badge-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background: var(--color-accent-lime);
}

.cta-title {
font-family:"Geist-Bold";
letter-spacing: 1px;

  margin: 0 auto 20px;

  max-width: 1000px;

  color: #ffffff;

  font-size: 50px;
  font-weight: 850;

  line-height: 0.95;
}

.cta-title span {
  color: var(--color-accent-lime);

  font-style: italic;
  font-weight: 400;

  
}

.cta-description {
  max-width: 650px;

  margin: 0 auto 24px;

  color: rgba(255,255,255,0.78);

  font-size: 15px;
  line-height: 1.8;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 14px;

  margin-bottom: 18px;
}

.cta-primary,
.cta-secondary {
  height: 52px;

  padding: 0 30px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;

  transition: all .25s ease;
}

.cta-primary {
font-family:"Geist-Bold";
letter-spacing: 1px;

  background: var(--color-accent-lime);
  color: var(--color-dark-green);
}

.cta-secondary {
font-family:"Geist-Bold";
letter-spacing: 1px;
  background: rgba(234,226,106,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: white;
}

.trust-grid {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
color: var(--color-bg-ivory);
  padding: 10px 14px;

  border-radius: 999px;

  background: rgba(234,226,106,0.05);
  border: 1px solid rgba(255,255,255,0.06);
}
  .trust-item svg {
  stroke: currentColor;
}


.trust-item span {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-bg-ivory);
}

.cta-right {
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

}

.hero-bg-circle {
  position: absolute;

  width: 580px;
  height: 580px;

  right: -70px;
  top: 50%;

  transform: translateY(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(220,235,99,0.18),
      rgba(220,235,99,0.08),
      transparent 72%
    );
}

.hero-bg-circle-small {
  position: absolute;

  width: 220px;
  height: 220px;

  right: 0;
  bottom: 10px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(220,235,99,0.08),
      transparent 72%
    );
}

.hero-image {
  position: relative;
  z-index: 2;

  height: 550px;
  width: auto;

  object-fit: contain;
  display: block;

  margin-right: 50px;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {

  .cta-section {
  height: auto;
    padding: 64px 28px;
    width: calc(100% - 12px);
  }

  .cta-content {
    grid-template-columns: 1fr;
    gap: 48px;
    min-height: auto;
  }

  .cta-left {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-title {
    max-width: 100%;
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .cta-description {
    max-width: 680px;
    font-size: 17px;
    line-height: 1.8;
  }

  .cta-right {
    justify-content: center;
    min-height: auto;
  }

  .hero-bg-circle {
    width: 460px;
    height: 460px;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
  }

  .hero-bg-circle-small {
    display: none;
  }

  .hero-image {
    height: 500px;
    margin-right: 0;
    margin-bottom: -35px;
    bottom:-65px;
  }
}

@media (max-width: 768px) {

.cta-content{
gap: 16px;
}

  .cta-section {
  
    padding: 20px 20px;
  }

  .cta-badge {
    font-size: 9px;
    padding: 9px 14px;
    margin-bottom: 16px;
  }

  .cta-title {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 14px;
  }

  .cta-description {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .cta-actions {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 18px;
  }

  .cta-primary,
  .cta-secondary {
  
    width: 100%;
    height: 54px;
    justify-content: center;
    font-size: 14px;
  }

  .trust-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .trust-item {
    j
    padding: 9px;
  }

  .trust-item span {
    font-size: 11px;
  }

  .hero-bg-circle {
    width: 340px;
    height: 340px;
  }

  .hero-image {
    height: 360px;
    bottom: -20px;
  margin-bottom: 0;
  }
}



`}</style>
    </section>
  );
}