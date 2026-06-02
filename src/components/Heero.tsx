import {
  TrendingUp,
  ShieldCheck,
  Landmark,
  Receipt,
  Scale,
  Bot,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function Hero() {
  const cards = [
    {
      type: "networth",
      title: "Net Worth",
      value: "₹24.8L",
      sub: "↑ 12.4% growth",
    },
    {
      type: "portfolio",
      title: "Portfolio Split",
    },
    {
      type: "advisor",
      title: "Expert Advisory",
      value: "₹365/year",
    },
  ];

  return (
    <section className="hero-section">
      <div className="ph-hero-grid" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            India's #1 Financial Operating System
          </div>

          <h1 className="hero-title">
            Your <span className="hero-italic">entire</span> financial
            <br />
            life, in one <span className="hero-highlight">single</span>
            <br />
            system
          </h1>

          <p className="hero-description">
            Investments, insurance, taxes, loans, legal planning and AI-powered
            monitoring — unified into one intelligent financial operating system
            for individuals and families.
          </p>

          <div className="hero-actions">
            <button className="btn-primary hero-btn-primary">
              Explore Products
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
            <button className="btn-secondary hero-btn-secondary">
              <CalendarDays size={18} strokeWidth={2.2} />
              Book Demo
            </button>
          </div>

          <div className="hero-trust">
            <span>Trusted by 10K+ Indian families</span>
            <div className="trust-dot" />
            <span>SEBI aligned</span>
            <div className="trust-dot" />
            <span>Bank-grade security</span>
            <div className="trust-dot" />
            <span>Zero commissions</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-main-glow" />
          <div className="hero-gradient-blob" />
          <div className="ecosystem-orbit">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />

            <div className="orbit-node node-invest">
              <TrendingUp size={18} />
              <span>Investments</span>
            </div>

            <div className="orbit-node node-insurance">
              <ShieldCheck size={18} />
              <span>Insurance</span>
            </div>

            <div className="orbit-node node-loans">
              <Landmark size={18} />
              <span>Loans</span>
            </div>

            <div className="orbit-node node-tax">
              <Receipt size={18} />
              <span>Tax</span>
            </div>

            <div className="orbit-node node-legal">
              <Scale size={18} />
              <span>Legal</span>
            </div>

            <div className="orbit-node node-ai">
              <Bot size={18} />
              <span>AI Monitor</span>
            </div>
          </div>

          <div className="hero-mascot-wrap">
            <img src="/homeHero.png" alt="Mascot" className="hero-mascot" />
          </div>

          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`hero-floating-card card-${index} ${card.type}`}
            >
              {card.type === "networth" && (
                <>
                  <div className="hero-card-label">{card.title}</div>
                  <div className="hero-card-value">{card.value}</div>
                  <div className="hero-card-sub growth">{card.sub}</div>
                </>
              )}

              {card.type === "portfolio" && (
                <>
                  <div className="hero-card-label">Portfolio Split</div>
                  <div className="portfolio-wrap">
                    {[
                      ["Equity", "62%"],
                      ["Debt", "25%"],
                      ["Gold", "13%"],
                    ].map(([label, value], i) => (
                      <div key={label} className="portfolio-item">
                        <div className="portfolio-row">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="portfolio-bar">
                          <div className={`portfolio-fill fill-${i}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {card.type === "advisor" && (
                <>
                  <div className="hero-card-label">{card.title}</div>
                  <div className="advisor-pill">₹365/year</div>
                </>
              )}

              <div className="hero-card-glow" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 108px 24px 0;
          background: #F8F7F2;
        }

        .ph-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(11,59,54,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,59,54,0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .hero-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.04fr 0.96fr;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index: 2;
}

        .hero-content {
          position: relative;
          z-index: 4;
        }

        .hero-badge {
          width: fit-content;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(11,59,54,0.08);
          color: #0B3B36;
          font-size: 12px;
          font-weight: 650;
          letter-spacing: 0.04em;
          margin-bottom: 22px;
          border: 1px solid rgba(11,59,54,0.06);
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(42px, 4.25vw, 62px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
          color: #111111;
          margin-bottom: 22px;
          max-width: 650px;
        }

        .hero-italic {
          font-style: italic;
          font-family: 'DM Serif Display', serif;
          color: #0B3B36;
          font-weight: 400;
        }

        .hero-highlight {
          background: rgba(11,59,54,0.075);
          color: #0B3B36;
          border: 1px solid rgba(11,59,54,0.08);
          padding: 0px 9px 3px;
          border-radius: 10px;
          display: inline-block;
          font-style: italic;
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
        }

        .hero-description {
          font-size: 15.5px;
          line-height: 1.72;
          color: #5F6461;
          max-width: 570px;
          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .hero-btn-primary,
        .hero-btn-secondary {
          height: 52px;
          padding: 0 26px;
          display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
          border-radius: 15px;
          font-weight: 700;
        }

        .hero-btn-primary {
          box-shadow: 0 10px 24px rgba(11,59,54,0.10);
        }

        .hero-btn-secondary {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(11,59,54,0.08);
        }

        .hero-stats {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 2px;
        }

        .hero-stat-card {
          min-width: 116px;
          padding: 0 18px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 28px rgba(0,0,0,0.04);
        }

        .hero-stat-accent {
          width: 100%;
          height: 3px;
          background: #0B3B36;
          border-radius: 999px;
          margin-bottom: 14px;
        }

        .hero-stat-number {
          font-size: 27px;
          font-weight: 850;
          color: #0B3B36;
          line-height: 1;
          margin-bottom: 6px;
        }

        .hero-stat-label {
          font-size: 12px;
          color: #6D726F;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 12px;
          color: #6B716E;
        }

        .trust-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #DCEB63;
        }

        .hero-visual {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-main-glow {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(11,59,54,.18) 0%,
      rgba(220,235,99,.08) 35%,
      rgba(220,235,99,.03) 55%,
      transparent 75%
    );
  filter: blur(35px);
  z-index: 0;
}

        .hero-gradient-blob {
          position: absolute;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(220,235,99,0.2), transparent 70%);
          filter: blur(50px);
          z-index: 0;
        }

        .hero-mascot-wrap {
  position: relative;
  z-index: 5;
  transform: translateX(-150px) translateY(10px);
}

        .hero-mascot {
  height: 620px;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(
    0 28px 60px rgba(0,0,0,.18)
  );
}

   .ecosystem-orbit {
  position: absolute;
   width: 560px;
  height: 560px;
  left: -55px;
  top: 30px;
  transform: translateX(-60px);
  
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(11,59,54,.10);
}
  .orbit-label {
  background: rgba(255,255,255,.92);
  border-radius: 999px;
  padding: 6px 10px;
  box-shadow: 0 10px 24px rgba(0,0,0,.05);
}

.orbit-1 {
  inset: 23px;
}

.orbit-2 {
  inset: 0;
}

.orbit-node {
  position: absolute;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}
  .orbit-node span {
  font-size: 12px;
  font-weight: 700;
  color: #0B3B36;
}

.orbit-node svg {
  width: 38px;
  height: 38px;
  padding: 10px;
  background: rgba(255,255,255,.92);
  border-radius: 50%;
  box-shadow:
    0 10px 24px rgba(0,0,0,.06),
    0 1px 0 rgba(255,255,255,.9);
    color:#0B3B36;
}

.node-invest {
  top: 40px;
  left: 25%;
  transform: translateX(-50%);
}

.node-insurance {
  top: 210px;
  left: -25px;
}

.node-loans {
  top: 70px;
  right: 55px;
}

.node-tax {
  bottom: 115px;
  left: 5px;
}

.node-legal {
  bottom: -15px;
  right: 345px;
}

.node-ai {
  bottom: 100px;
  left: 90%;
  transform: translateX(-50%);
}
  

.system-title {
  font-size: 14px;
  font-weight: 700;
  color: #111;
}

.system-subtitle {
  font-size: 14px;
  font-weight: 800;
  color: #0B3B36;
}

        .hero-floating-card {
          position: absolute;
          padding: 13px;
          border-radius: 20px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: 0 18px 50px rgba(0,0,0,0.075);
          z-index: 3;
          overflow: hidden;
        }

        .hero-floating-card.networth {
          width: 170px;
        }

        .hero-floating-card.portfolio {
          width: 190px;
        }

        .hero-floating-card.advisor {
          width: 162px;
        }

     .card-0 {
  top: 10%;
  right: -2%;
}

.card-1 {
  top: 40%;
  right: -4%;
  left: auto;
}

.card-2 {
  bottom: 5%;
  right: -1%;
}

        .hero-card-label {
          font-size: 11px;
          color: #6A6F6B;
          margin-bottom: 9px;
        }

        .hero-card-value {
          font-size: 26px;
          font-weight: 850;
          line-height: 1;
          color: #111111;
        }

        .hero-card-sub {
          margin-top: 9px;
          font-size: 12.5px;
          font-weight: 600;
        }

        .hero-card-sub.growth {
          color: #2FAE60;
        }

        .portfolio-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 9px;
        }

        .portfolio-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .portfolio-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11.5px;
          font-weight: 600;
          color: #5F6461;
        }

        .portfolio-bar {
          width: 100%;
          height: 5px;
          border-radius: 999px;
          background: rgba(11,59,54,0.08);
          overflow: hidden;
        }

        .portfolio-fill {
          height: 100%;
          border-radius: 999px;
          background: #0B3B36;
        }

        .fill-0 { width: 62%; }
        .fill-1 { width: 25%; }
        .fill-2 { width: 13%; }

        .advisor-pill {
          margin-top: 10px;
          background: #0B3B36;
          color: #DCEB63;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 800;
        }

        .hero-card-glow {
          position: absolute;
          inset: auto -40px -40px auto;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(220,235,99,0.18), transparent 70%);
          filter: blur(25px);
        }

    @media (max-width: 1024px) {

  .hero-section {
    padding: 90px 28px 0;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .hero-content {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .hero-title {
    max-width: 780px;
    font-size: clamp(52px, 7vw, 64px);
  }

  .hero-description {
    max-width: 680px;
    font-size: 17px;
  }

  .hero-actions,
  .hero-stats,
  .hero-trust {
    justify-content: center;
  }

  .hero-visual {
    min-height: 620px;
    margin-top: 0;
  }

  .hero-mascot-wrap {
    transform: translateX(-40px);
  }

  .hero-mascot {
    height: 560px;
  }

  .ecosystem-orbit {
    width: 520px;
    height: 520px;
    left: 50%;
    top: 10px;
    transform: translateX(-58%);
  }

  .orbit-node svg {
    width: 44px;
    height: 44px;
  }

  .orbit-node span {
    font-size: 11px;
  }

  .node-invest {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .node-insurance {
    top: 110px;
    left: -5px;
  }

  .node-loans {
    top: 110px;
    right: -5px;
  }

  .node-tax {
    bottom: 110px;
    left: -5px;
  }

  .node-legal {
    bottom: 110px;
    right: -5px;
  }

  .node-ai {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-floating-card.networth {
    width: 170px;
  }

  .hero-floating-card.portfolio {
    width: 190px;
  }

  .card-0 {
    top: 20px;
    right: 5%;
  }

  .card-1 {
    top: 255px;
    right: 3%;
  }

  .card-2 {
    bottom: 25px;
    right: 8%;
  }
}

@media (max-width: 768px) {

  .hero-section {
    padding: 110px 20px 0;
  }

  .hero-badge {
    margin-bottom: 20px;
  }

  .hero-title {
    font-size: 46px;
    line-height: 0.98;
    max-width: 100%;
    text-align: center;
  }

  .hero-description {
    font-size: 16px;
    line-height: 1.75;
    max-width: 100%;
    text-align: center;
    margin-bottom: 26px;
  }

  .hero-actions {
    width: 100%;
    max-width: 520px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .hero-actions button {
    width: 100%;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    height: 54px;
    font-size: 15px;
  }

  .hero-stats {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .hero-stat-card {
    min-width: 0;
    padding: 0 14px 14px;
  }

  .hero-stat-number {
    font-size: 24px;
  }

  .hero-stat-label {
    font-size: 12px;
  }

  .hero-trust {
    justify-content: center;
    row-gap: 8px;
  }

  .hero-visual {
    min-height: 420px;
    justify-content: center;
    margin-top: 0;
  }

  .ecosystem-orbit,
  .orbit,
  .orbit-node {
    display: none;
  }

  .hero-main-glow {
    width: 360px;
    height: 360px;
  }

  .hero-gradient-blob {
    width: 180px;
    height: 180px;
  }

  .hero-mascot-wrap {
    transform: translateX(-25px);
  }

  .hero-mascot {
    height: 360px;
  }

  .hero-floating-card.portfolio,
  .hero-floating-card.advisor {
    display: none;
  }

  .hero-floating-card.networth {
    width: 130px;
    padding: 12px;
  }

  .card-0 {
    top: 20px;
    right: 12px;
  }

  .hero-card-value {
    font-size: 20px;
  }
}

@media (max-width: 480px) {

  .hero-section {
    padding: 125px 16px 0;
  }

  .hero-title {
    font-size: 38px;
    letter-spacing: -0.05em;
  }

  .hero-description {
    font-size: 15px;
    line-height: 1.7;
  }

  .hero-actions {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    height: 52px;
  }

  .hero-stats {
    gap: 10px;
  }

  .hero-stat-card {
    padding: 0 10px 12px;
    border-radius: 14px;
  }

  .hero-stat-number {
    font-size: 20px;
  }

  .hero-stat-label {
    font-size: 11px;
  }

  .hero-trust {
    font-size: 11px;
    gap: 7px;
  }

  .hero-visual {
    min-height: 360px;
  }

  .hero-mascot-wrap {
    transform: translateX(-30px);
  }

  .hero-mascot {
    height: 360px;
  }

  .hero-floating-card.networth {
    width: 118px;
    padding: 10px;
  }

  .card-0 {
    top: 8px;
    right: 0;
  }

  .hero-card-label {
    font-size: 9px;
  }

  .hero-card-value {
    font-size: 17px;
  }

  .hero-card-sub {
    font-size: 10px;
  }
}
      `}</style>
    </section>
  );
}
