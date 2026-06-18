import {
  Sparkles,
  Brain,
  LayoutDashboard,
  BellRing,
  Smartphone,
} from "lucide-react";

const capabilities = [
  {
    title: "AI-Powered Insights",
    icon: Brain,
    description:
      "Real-time intelligence across investments, taxes, insurance and risk monitoring.",
    products: [
      "Investments",
      "Insurance",
      "Tax Planning",
      "Risk & AI",
    ],
  },

  {
    title: "Unified Dashboard",
    icon: LayoutDashboard,
    description:
      "One connected financial operating system with live sync across all modules.",
    products: [
      "Investments",
      "Loans",
      "Insurance",
      "Legal",
      "Risk & AI",
    ],
  },

  {
    title: "Family & Nominee Access",
    icon: Sparkles,
    description:
      "Secure family-first infrastructure with nominee visibility and permissions.",
    products: [
      "Insurance",
      "Legal & Estate",
      "Risk & AI",
    ],
  },

  {
    title: "Smart Alerts",
    icon: BellRing,
    description:
      "AI-generated reminders, renewal notifications and proactive monitoring.",
    products: [
      "Insurance",
      "Tax Planning",
      "Risk & AI",
      "Loans",
    ],
  },

  {
    title: "Mobile Experience",
    icon: Smartphone,
    description:
      "Designed for real-time access across devices with secure cloud syncing.",
    products: [
      "All Products",
    ],
  },
];

export default function FeatureMatrix() {
  return (
    <section className="matrix-section">
      <div className="matrix-glow" />

      <div className="matrix-container">
        <div className="matrix-header">
          <div className="section-label">
            SHARED INTELLIGENCE
          </div>

          <h2 className="section-title">
            Every product,
            fully <span>connected</span>
          </h2>

          <p className="section-subtitle">
            All modules operate on the same intelligent foundation —
            unified data, AI insights, live sync and family-first
            infrastructure.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`capability-card ${
                  index === 0 ? "featured" : ""
                }`}
              >
                <div className="capability-top">
                  <div className="capability-icon">
                    <Icon size={22} />
                  </div>

                  <div className="capability-index">
                    0{index + 1}
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="product-pills">
                  {item.products.map((product) => (
                    <div
                      key={product}
                      className="product-pill"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .matrix-section {
          position: relative;
          overflow: hidden;
          padding: 84px 24px 96px;
          background: #F8F7F2;
        }

        .matrix-glow {
          position: absolute;
          bottom: -240px;
          right: -180px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(11,59,54,0.08),
              transparent 70%
            );
          filter: blur(40px);
          pointer-events: none;
        }

        .matrix-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        .matrix-header {
          text-align: center;
          margin-bottom: 42px;
        }

        .matrix-title {
          font-size:
            clamp(42px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
          color: #111111;
          margin-bottom: 18px;
        }

        .matrix-title span {
          font-style: italic;
          font-family:
            "Geist-Bold",
            serif;
          font-weight: 400;
          color: var(--color-dark-green);
        }

        .matrix-subtitle {
          max-width: 720px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 1.75;
          color: #6A6F6B;
        }

        .capability-grid {
        
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .capability-card {
          position: relative;
          padding: 26px 22px;
          border-radius: 24px;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.96),
              rgba(248,248,246,0.92)
            );
          border:
            1px solid rgba(255,255,255,0.7);
          box-shadow:
            0 16px 40px rgba(0,0,0,0.04);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .capability-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 26px 60px rgba(0,0,0,0.06);
        }

        .capability-card.featured {
          background:var(--color-dark-green);
          color: white;
        }

        .capability-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .capability-icon {
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

        .featured .capability-icon {
          background:
            rgba(220,235,99,0.12);
          color: #EAE26A;
        }

        .capability-index {
        font-family:"Geist-SemiBold";
letter-spacing: 1px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(0,0,0,0.28);
        }

        .featured .capability-index {
          color:
            rgba(255,255,255,0.34);
        }

        .capability-card h3 {
        font-family:"Geist-Bold";
letter-spacing: 1px;
          font-size: 26px;
          line-height: 1.05;
          
          font-weight: 800;
          margin-bottom: 14px;
          color: #111111;
        }

        .featured h3 {
          color: white;
        }

        .capability-card p {
          font-size: 14px;
          line-height: 1.75;
          color: #6A6F6B;
          margin-bottom: 22px;
        }

        .featured p {
          color:
            rgba(255,255,255,0.72);
        }

        .product-pills {
        font-family:"Geist-SemiBold";
letter-spacing: 1px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .product-pill {
          padding: 8px 12px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 1px solid rgba(11,59,54,0.05);
          box-shadow:
            0 8px 20px rgba(0,0,0,0.025);
          color: var(--color-dark-green);
          font-size: 11px;
          font-weight: 700;
        }

        .featured .product-pill {
          background:
            rgba(255,255,255,0.08);
          border-color:
            rgba(255,255,255,0.08);
          color: white;
          box-shadow: none;
        }

  @media (max-width: 1100px) {

  .matrix-section {
    padding: 88px 28px 96px;
  }

  .matrix-header {
    margin-bottom: 48px;
  }

  .matrix-title {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .matrix-subtitle {
    max-width: 720px;
    font-size: 17px;
    line-height: 1.8;
  }

  .capability-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .capability-card {
    padding: 28px;
  }

  .capability-card h3 {
    font-size: 28px;
  }

  .capability-card p {
    font-size: 15px;
    line-height: 1.8;
  }
}

@media (max-width: 768px) {

  .matrix-section {
    padding: 72px 20px 84px;
  }

  .matrix-header {
    margin-bottom: 36px;
  }

  .matrix-title {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 14px;
  }

  .matrix-subtitle {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .capability-grid {
    gap: 14px;
  }

  .capability-card {
    padding: 24px 20px;
    border-radius: 24px;
  }

  .capability-top {
    margin-bottom: 18px;
  }

  .capability-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }

  .capability-index {
    font-size: 12px;
  }

  .capability-card h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .capability-card p {
    font-size: 14px;
    line-height: 1.75;
    margin-bottom: 18px;
  }

  .product-pills {
    gap: 8px;
  }

  .product-pill {
    font-size: 11px;
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {

  .matrix-section {
    padding: 64px 16px 76px;
  }

  .matrix-title {
    font-size: 36px;
  }

  .matrix-subtitle {
    font-size: 14px;
  }

  .capability-card {
    padding: 20px 18px;
    border-radius: 20px;
  }

  .capability-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .capability-card h3 {
    font-size: 20px;
  }

  .capability-card p {
    font-size: 13px;
  }

  .product-pill {
    font-size: 10px;
    padding: 7px 10px;
  }
}

@media (max-width: 360px) {

  .matrix-section {
    padding: 56px 12px 68px;
  }

  .matrix-title {
    font-size: 30px;
  }

  .matrix-subtitle {
    font-size: 13px;
  }

  .capability-card {
    padding: 18px 16px;
  }

  .capability-card h3 {
    font-size: 18px;
  }

  .capability-card p {
    font-size: 12px;
  }

  .product-pill {
    font-size: 9px;
  }
}
      `}</style>
    </section>
  );
}