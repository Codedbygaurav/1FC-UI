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
            Investments, insurance, taxes, loans, legal planning and
            AI-powered monitoring — unified into one intelligent financial
            operating system for individuals and families.
          </p>

          <div className="hero-actions">
            <button className="btn-primary hero-btn-primary">
              Explore Products
            </button>
            <button className="btn-secondary hero-btn-secondary">
              Book Demo
            </button>
          </div>

          <div className="hero-stats">
            {[
              ["6", "Core Products"],
              ["360°", "Financial View"],
              ["24/7", "AI Monitoring"],
            ].map(([value, label]) => (
              <div key={label} className="hero-stat-card">
                <div className="hero-stat-accent" />
                <div className="hero-stat-number">{value}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
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

          <div className="hero-mascot-wrap">
            <img
              src="/MainMascotFull.png"
              alt="Mascot"
              className="hero-mascot animate-float"
            />
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
          padding: 118px 24px 25px;
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
          gap: 12px;
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
          margin-bottom: 22px;
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
          min-height: 535px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-main-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(11,59,54,0.13), transparent 72%);
          filter: blur(30px);
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
          z-index: 2;
          transform: translateX(26px) translateY(38px);
        }

        .hero-mascot {
          height: 565px;
          object-fit: contain;
          object-position: bottom;
          filter: drop-shadow(0 26px 56px rgba(0,0,0,0.17));
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
          top: 13%;
          right: 5%;
        }

        .card-1 {
          bottom: 5%;
          left: 1%;
          z-index: 5;
        }

        .card-2 {
          bottom: 12%;
          right: 2%;
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
          .hero-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-description {
            max-width: 680px;
          }

          .hero-actions,
          .hero-stats,
          .hero-trust {
            justify-content: center;
          }

          .hero-visual {
            min-height: 420px;
          }

          .hero-mascot-wrap {
            transform: translateX(10px) translateY(24px);
          }

          .hero-mascot {
            height: 420px;
          }

          .card-0 {
            right: 14%;
          }

          .card-1 {
            left: 12%;
            bottom: 2%;
          }

          .card-2 {
            right: 12%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 112px 20px 56px;
          }

          .hero-title {
            font-size: clamp(38px, 10vw, 54px);
            line-height: 0.96;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 26px;
          }

          .hero-actions {
            width: 100%;
            flex-direction: column;
            gap: 14px;
          }

          .hero-actions button {
            width: 100%;
          }

          .hero-stats {
            width: 100%;
            justify-content: center;
          }

          .hero-stat-card {
            min-width: 100px;
            padding: 0 14px 14px;
          }

          .hero-stat-number {
            font-size: 22px;
          }

          .hero-trust {
            justify-content: center;
            font-size: 11px;
          }

          .hero-visual {
            min-height: 305px;
            margin-top: 8px;
          }

          .hero-mascot-wrap {
            transform: translateX(8px) translateY(28px);
          }

          .hero-mascot {
            height: 260px;
          }

          .hero-floating-card {
            padding: 10px;
            border-radius: 14px;
          }

          .hero-floating-card.networth {
            width: 112px;
          }

          .hero-floating-card.portfolio {
            width: 138px;
          }

          .hero-floating-card.advisor {
            display: none;
          }

          .hero-card-label {
            font-size: 8px;
            margin-bottom: 4px;
          }

          .hero-card-value {
            font-size: 16px;
          }

          .hero-card-sub {
            font-size: 8px;
            margin-top: 5px;
          }

          .portfolio-row {
            font-size: 8px;
          }

          .portfolio-bar {
            height: 4px;
          }

          .card-0 {
            top: 0%;
            right: 2%;
          }

          .card-1 {
            bottom: 4%;
            left: -2%;
          }
        }

        @media (max-width: 560px) {
          .hero-section {
            padding: 108px 16px 52px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 13px;
          }

          .hero-stat-card {
            flex: 1;
          }

          .hero-visual {
            min-height: 275px;
          }

          .hero-mascot {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}