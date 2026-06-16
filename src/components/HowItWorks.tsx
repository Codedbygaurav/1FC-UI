import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",

    title: "Register & Onboard",

    description:
      "Securely connect accounts, policies and investments into one unified system.",

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="7"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "02",

    title: "Get Profiled",

    description:
      "Our AI maps your goals, risk appetite and financial behavior intelligently.",

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4 15L8 9L12 12L16 5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },

  {
    number: "03",

    title: "Connect & Aggregate",

    description:
      "Track investments, loans, insurance and taxes from one clean dashboard.",

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="10"
          r="3"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <circle
          cx="3"
          cy="5"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <circle
          cx="17"
          cy="5"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <circle
          cx="3"
          cy="15"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <circle
          cx="17"
          cy="15"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M5 5.5L8 8M12 8L15 5.5M5 14.5L8 12M12 12L15 14.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "04",

    title: "Advise & Act",

    description:
      "Receive expert guidance and execute investments, taxes and planning seamlessly.",

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4 10h12M12 6l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                const reveals =
                  entry.target.querySelectorAll(
                    ".reveal"
                  );

                reveals.forEach(
                  (el, i) => {
                    setTimeout(() => {
                      el.classList.add(
                        "visible"
                      );
                    }, i * 90);
                  }
                );
              }
            }
          );
        },
        { threshold: 0.1 }
      );

    if (sectionRef.current)
      observer.observe(
        sectionRef.current
      );

    return () =>
      observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{
        position: "relative",

        overflow: "hidden",

        background:
          "var(--color-dark-green)",

        padding:
          "clamp(42px, 5vw, 78px) 20px",
      }}
    >

      <div
        style={{
          position: "absolute",

          top: "42%",
          left: "55%",

          transform:
            "translateX(-50%)",

          width: "520px",
          height: "260px",

          background:
            "radial-gradient(circle, rgba(220,235,99,0.05), transparent 70%)",

          filter: "blur(40px)",

          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",

          margin: "0 auto",

          position: "relative",

          zIndex: 2,
        }}
      >

        <div
          style={{
            textAlign: "center",

            marginBottom:
              "clamp(40px, 5vw, 64px)",
          }}
        >

          <div
            className="reveal"
            style={{
              display:
                "inline-flex",

              alignItems:
                "center",

              gap: "12px",

              marginBottom:
                "18px",
            }}
          >
            <div className="label-line" />

            <span className="section-labelH">
              How It Works
            </span>

            <div className="label-line" />
          </div>


          <h2 className="workflow-title reveal">
            From scattered to{" "}
            <span className="workflow-highlight">
              sorted
            </span>{"  "}
            in four steps
          </h2>


          <p className="workflow-subtext reveal">
            Your complete
            financial ecosystem —
            connected, automated
            and intelligently
            managed.
          </p>
        </div>


        <div className="steps-grid">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card reveal"
            >
              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3 className="step-title">
                {step.title}
              </h3>

              <p className="step-desc">
                {step.description}
              </p>
            </div>
          ))}
        </div>


        <div className="stats-band reveal">
          {[
            {
              value: "₹250Cr+",
              label:
                "Assets Managed",
            },

            {
              value: "10K+",
              label:
                "Active Users",
            },

            {
              value: "99.9%",
              label: "Uptime SLA",
            },

            {
              value: "24/7",
              label:
                "AI Monitoring",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-item"
            >
              <div className="stat-number">
                {stat.value}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .label-line {
          width: 26px;
          height: 1px;

          background:
            rgba(220,235,99,0.35);
        }

        .section-labelH {
          font-size: 11px;

          font-weight: 700;

          

          color:
            rgba(220,235,99,0.7);

          text-transform: uppercase;
        }

        .workflow-title {
        font-family:"Geist-Bold";
        letter-spacing:1px;
          max-width: 820px;

          margin-inline: auto;

          margin-bottom: 16px;

          font-size:
            54px;

          line-height: 1.02;

          

          font-weight: 850;

          color: #FAFAF7;
        }

        .workflow-highlight {
          color: var(--color-accent-lime);
          margin-right:10px;
          font-style: italic;

          

          font-weight: 400;
        }

        .workflow-subtext {
          max-width: 560px;

          margin: 0 auto;

          font-size: 16px;

          line-height: 1.55;

          color:
            rgba(250,250,247,0.55);
        }


        .steps-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 16px;

          align-items: start;
        }


        .step-card {
          position: relative;

          padding: 24px 22px;

          border-radius: 24px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.04),
              rgba(255,255,255,0.025)
            );

          border:
            1px solid rgba(255,255,255,0.05);

          box-shadow:
            0 14px 34px rgba(0,0,0,0.14);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-2px);

          border-color:
            rgba(220,235,99,0.12);

          background:
            rgba(255,255,255,0.05);
        }

        .step-number {
        font-family:"Geist-SemiBold";
        letter-spacing: 1px;
          font-size: 11px;

          font-weight: 700;
          

          color: var(--color-accent-lime);

          margin-bottom: 14px;
        }

        .step-icon {
          width: 44px;
          height: 44px;

          border-radius: 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            rgba(220,235,99,0.08);

          border:
            1px solid rgba(220,235,99,0.14);

          color: #EAE26A;

          margin-bottom: 18px;
        }

        .step-title {
        font-Family:"Geist-Bold";
            letter-Spacing:1px;
          font-size: 18px;

          line-height: 1.3;


          font-weight: 700;

          color: #FAFAF7;

          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 13px;

          line-height: 1.55;

          color:
            rgba(250,250,247,0.52);
        }


        .stats-band {
          margin-top: 34px;
          

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 12px;

          padding: 18px;

          border-radius: 26px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.02)
            );

          border:
            1px solid rgba(255,255,255,0.05);
        }

        .stat-item {
          padding: 16px 10px;

          text-align: center;
        }

        .stat-number {
          font-size: 35px;
            font-Family:"Geist-Bold";
            letter-Spacing: "1px";

          line-height: 1;


          font-weight: 850;

          color:
            var(--color-accent-lime);

          margin-bottom: 6px;
        }

        .stat-label {
          font-family:"Geist-SemiBold";

          font-weight: 500;

          color:
            red;
        }


        .reveal {
          opacity: 0;

          transform:
            translateY(24px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;

          transform:
            translateY(0);
        }

@media (max-width: 1024px) {

  .workflow-title {
    max-width: 760px;
    font-size: clamp(50px, 6vw, 60px);
    line-height: 1;
  }

  .workflow-subtext {
    max-width: 650px;
    font-size: 17px;
    line-height: 1.8;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .step-card {
    padding: 28px 24px;
    border-radius: 24px;
  }

  .step-icon {
    width: 48px;
    height: 48px;
  }

  .step-title {
    font-size: 20px;
  }

  .step-desc {
    font-size: 14px;
    line-height: 1.75;
  }

  .stats-band {
    margin-top: 30px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 18px;
    border-radius: 24px;
  }

  .stat-number {
    font-size: 30px;
  }

  .stat-label {
    font-size: 11px;
  }
}

@media (max-width: 768px) {

  .workflow-title {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 14px;
  }

  .workflow-subtext {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.8;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .step-card {
    padding: 24px 20px;
    border-radius: 22px;
  }

  .step-number {
    font-size: 12px;
    margin-bottom: 12px;
  }

  .step-icon {
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
  }

  .step-title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    line-height: 1.75;
  }

  .stats-band {
    margin-top: 24px;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 12px;
    border-radius: 20px;
  }

  .stat-item {
    padding: 16px 10px;
  }

  .stat-number {
    font-size: 26px;
  }

  .stat-label {
    font-size: 11px;
  }
}

@media (max-width: 480px) {

  .workflow-title {
    font-size: 36px;
  }

  .workflow-subtext {
    font-size: 14px;
  }

  .section-labelH {
    font-size: 10px;
  }

  .label-line {
    width: 22px;
  }

  .step-card {
    padding: 20px 18px;
    border-radius: 18px;
  }

  .step-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .step-title {
    font-size: 17px;
  }

  .step-desc {
    font-size: 13px;
  }

  .stats-band {
    gap: 8px;
    padding: 10px;
  }

  .stat-item {
    padding: 14px 8px;
  }

  .stat-number {
    font-size: 22px;
  }

  .stat-label {
    font-size: 10px;
  }
}

@media (max-width: 360px) {

  .workflow-title {
    font-size: 30px;
  }

  .workflow-subtext {
    font-size: 13px;
  }

  .steps-grid {
    gap: 12px;
  }

  .step-card {
    padding: 18px 16px;
  }

  .step-title {
    font-size: 16px;
  }

  .step-desc {
    font-size: 12px;
  }

  .stats-band {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 20px;
  }

  .stat-label {
    font-size: 9px;
  }
}
      `}</style>
    </section>
  );
}