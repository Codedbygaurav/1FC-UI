import {
  Link2,
  Brain,
  LayoutDashboard,
  BellRing,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Accounts",
    text: "Securely sync investments, insurance, bank accounts, and liabilities into one unified financial layer.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Processing",
    text: "Our intelligence engine analyzes risks, opportunities, allocation gaps, and optimization signals.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    text: "Access real-time visibility across investments, insurance, loans, taxes, legal, and risk systems.",
  },
  {
    number: "04",
    icon: BellRing,
    title: "Smart Alerts",
    text: "Receive proactive alerts, renewal reminders, tax insights, and AI-driven recommendations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-glow" />

      <div className="how-container">
        <div className="how-header">
          <div className="section-label">
            PROCESS
          </div>

          <h2 className="section-title">
            One connected workflow.
            <br />
            Four intelligent <span>steps.</span>
          </h2>

          <p className="section-subtitle">
            Four intelligent steps to transform scattered finances into one
            connected operating system.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          <div className="how-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className={`how-card ${
                    index === 0 ? "featured" : ""
                  }`}
                >
                  <div className="how-top">
                    <div className="how-icon">
                      <Icon size={24} strokeWidth={2.1} />
                    </div>

                    <div className="how-number">
                      {step.number}
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  {index !== steps.length - 1 && (
                    <div className="card-connector" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .how-section {
          position: relative;
          overflow: hidden;
          padding: 84px 24px 96px;
          background: #F8F7F2;
        }

        .how-glow {
          position: absolute;
          top: -220px;
          left: -180px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(220,235,99,0.10),
              transparent 70%
            );
          filter: blur(40px);
          pointer-events: none;
        }

        .how-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        .how-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .how-title {
          font-size: clamp(42px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
          color: #111111;
          margin-bottom: 18px;
        }

        .how-title span {
          font-style: italic;
          font-family:
            "Geist-Bold",
            serif;
          font-weight: 400;
          color: var(--color-dark-green);
        }

        .how-subtitle {
          max-width: 660px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 1.75;
          color: #6A6F6B;
        }

        .timeline-wrapper {
          position: relative;
        }

        .timeline-line {
          position: absolute;
          top: 52px;
          left: 10%;
          right: 10%;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(11,59,54,0.06),
              transparent
            );
        }

        .how-grid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .how-card {
          position: relative;
          padding: 24px 20px;
          border-radius: 24px;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.95),
              rgba(248,248,246,0.90)
            );
          border:
            1px solid rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          box-shadow:
            0 16px 40px rgba(0,0,0,0.04);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .how-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 26px 60px rgba(0,0,0,0.06);
        }

        .how-card.featured {
          background:var(--color-dark-green);
          color: white;
        }

        .how-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .how-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background:
            rgba(11,59,54,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark-green);
        }

        .featured .how-icon {
          background:
            rgba(220,235,99,0.12);
          color: #EAE26A;
        }

        .how-number {
        font-family:"Geist-SemiBold";
          font-size: 13px;
          font-weight: 700;
          color: rgba(0,0,0,0.28);
        }

        .featured .how-number {
          color: rgba(255,255,255,0.34);
        }

        .how-card h3 {
          font-size: 24px;
          line-height: 1.05;
          letter-spacing: 1px;
          font-weight: 800;
          margin-bottom: 14px;
          color: #111111;
        }

        .featured h3 {
          color: white;
        }

        .how-card p {
          font-size: 14px;
          line-height: 1.75;
          color: #6A6F6B;
        }

        .featured p {
          color:
            rgba(255,255,255,0.72);
        }

        .card-connector {
          position: absolute;
          top: 52px;
          right: -18px;
          width: 18px;
          height: 1px;
          background:
            rgba(11,59,54,0.06);
        }

   @media (max-width: 1100px) {

  .how-section {
    padding: 88px 28px 96px;
  }

  .how-header {
    margin-bottom: 48px;
  }

  .how-title {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .how-subtitle {
    max-width: 700px;
    font-size: 17px;
    line-height: 1.8;
  }

  .how-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .timeline-line,
  .card-connector {
    display: none;
  }

  .how-card {
    padding: 28px;
  }

  .how-card h3 {
    font-size: 26px;
  }

  .how-card p {
    font-size: 15px;
    line-height: 1.8;
  }
}

@media (max-width: 768px) {

  .how-section {
    padding: 72px 20px 84px;
  }

  .how-header {
    margin-bottom: 36px;
  }

  .how-title {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 14px;
  }

  .how-subtitle {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .how-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .how-card {
    padding: 24px 20px;
    border-radius: 24px;
  }

  .how-top {
    margin-bottom: 18px;
  }

  .how-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }

  .how-number {
    font-size: 12px;
  }

  .how-card h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .how-card p {
    font-size: 14px;
    line-height: 1.75;
  }
}

@media (max-width: 480px) {

  .how-section {
    padding: 64px 16px 76px;
  }

  .how-title {
    font-size: 36px;
  }

  .how-subtitle {
    font-size: 14px;
  }

  .how-card {
    padding: 20px 18px;
    border-radius: 20px;
  }

  .how-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .how-number {
    font-size: 11px;
  }

  .how-card h3 {
    font-size: 19px;
  }

  .how-card p {
    font-size: 13px;
  }
}

@media (max-width: 360px) {

  .how-section {
    padding: 56px 12px 68px;
  }

  .how-title {
    font-size: 30px;
  }

  .how-subtitle {
    font-size: 13px;
  }

  .how-card {
    padding: 18px 16px;
  }

  .how-card h3 {
    font-size: 17px;
  }

  .how-card p {
    font-size: 12px;
  }

  .how-icon {
    width: 38px;
    height: 38px;
  }
}
      `}</style>
    </section>
  );
}