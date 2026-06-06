import { useEffect, useRef } from "react";

const tools = [
  {
    icon: "◎",
    label: "SIP Calculator",
    category: "Investments",
  },

  {
    icon: "✓",
    label: "Tax Saver",
    category: "Tax",
  },

  {
    icon: "↗",
    label: "FD vs MF",
    category: "Compare",
  },

  {
    icon: "⊕",
    label: "Term Plan",
    category: "Insurance",
  },

  {
    icon: "▢",
    label: "HRA Exemption",
    category: "Tax",
  },

  {
    icon: "⌂",
    label: "Home Loan EMI",
    category: "Loans",
  },

  {
    icon: "◔",
    label: "Retirement Planner",
    category: "Planning",
  },

  {
    icon: "⬡",
    label: "Net Worth Tracker",
    category: "Intelligence",
  },
];

const updates = [
  {
    tag: "NEW FEATURE",
    title: "Auto-import from EPFO portal",
    time: "2d ago",
  },

  {
    tag: "ADVISORY",
    title: "Budget 2025 — What changes for you",
    time: "1w ago",
  },

  {
    tag: "INSURANCE",
    title: "New ULIPs vs Pure Term — our take",
    time: "2w ago",
  },

  {
    tag: "TAX",
    title: "Section 80C investments — deadline alert",
    time: "3w ago",
  },

  {
    tag: "UPDATE",
    title: "Portfolio analytics V2 now live",
    time: "1mo ago",
  },
];

export default function CalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals =
              entry.target.querySelectorAll(".reveal");

            reveals.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="calc-section"
    >
       

      <div className="calc-grid-bg" />

      <div className="calc-container">
        <div className="calc-layout">
           

          <div>
            <div className="calc-label reveal">
              <div className="label-line" />

              <span>Tools</span>
            </div>

            <h2 className="calc-heading reveal">
              Calculate. Plan. Decide.
            </h2>

            <p className="calc-subtext reveal">
              Free financial tools designed
              to simplify everyday
              decisions.
            </p>

            <div className="tools-grid">
              {tools.map((tool) => (
                <a
                  href="#"
                  key={tool.label}
                  className="tool-card reveal"
                >
                  <div className="tool-icon">
                    {tool.icon}
                  </div>

                  <div>
                    <h3>{tool.label}</h3>

                    <p>{tool.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

           

          <div>
            <div className="calc-label reveal">
              <div className="label-line" />

              <span>Platform</span>
            </div>

            <h2 className="calc-heading reveal">
              Platform intelligence
            </h2>

            <p className="calc-subtext reveal">
              Continuous improvements.
              Always evolving.
            </p>

            <div className="updates-wrapper reveal">
              {updates.map((item) => (
                <a
                  href="#"
                  key={item.title}
                  className="update-card"
                >
                  <div className="update-left">
                    <span className="update-tag">
                      {item.tag}
                    </span>

                    <h4>{item.title}</h4>
                  </div>

                  <span className="update-time">
                    {item.time}
                  </span>
                </a>
              ))}

              <a
                href="#"
                className="view-all"
              >
                View all updates →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calc-section {
          position: relative;

          overflow: hidden;

          padding:
            46px 20px 64px;

          background:
            linear-gradient(
              180deg,
              #f6f6f2 0%,
              #fafaf7 100%
            );
        }

        .calc-grid-bg {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.016) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.016) 1px,
              transparent 1px
            );

          background-size: 44px 44px;

          pointer-events: none;
        }

        .calc-container {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;
        }

        .calc-layout {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 18px;
        }

         

        .calc-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

        .label-line {
          width: 30px;
          height: 1px;
          background: #0b3b36;

          opacity: 0.2;
        }

        .calc-label span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #666;
  white-space: nowrap;
}

         

        .calc-heading {
          font-size:
            clamp(28px, 3vw, 42px);

          line-height: 0.96;

          letter-spacing: -0.07em;

          font-weight: 850;

          color: #111;

          margin-bottom: 10px;

          max-width: 420px;
        }

        .calc-subtext {
          max-width: 320px;

          font-size: 14px;

          line-height: 1.65;

          color: #666;

          margin-bottom: 18px;
        }

         

        .tools-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 10px;
        }

        .tool-card {
          display: flex;
          align-items: center;

          gap: 12px;

          padding: 14px 16px;

          border-radius: 16px;

          background:
            rgba(255,255,255,0.9);

          border:
            1px solid rgba(11,59,54,0.05);

          text-decoration: none;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

          box-shadow:
            0 6px 18px
            rgba(0,0,0,0.025);
        }

        .tool-card:hover {
          transform: translateY(-2px);

          border-color:
            rgba(11,59,54,0.08);

          box-shadow:
            0 14px 28px
            rgba(0,0,0,0.045);
        }

        .tool-icon {
          width: 38px;
          height: 38px;

          min-width: 38px;

          border-radius: 12px;

          background:
            rgba(11,59,54,0.05);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0b3b36;

          font-size: 16px;

          font-weight: 700;
        }

        .tool-card h3 {
          font-size: 15px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.03em;

          color: #111;

          margin-bottom: 2px;
        }

        .tool-card p {
          font-size: 11px;

          color: #666;
        }

         

        .updates-wrapper {
          padding: 10px;

          border-radius: 18px;

          background:
            rgba(255,255,255,0.58);

          border:
            1px solid rgba(11,59,54,0.05);

          backdrop-filter: blur(10px);

          display: flex;
          flex-direction: column;

          gap: 8px;
        }

        .update-card {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 16px;

          padding: 14px;

          border-radius: 14px;

          background: #ffffff;

          border:
            1px solid rgba(11,59,54,0.05);

          text-decoration: none;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .update-card:hover {
          transform: translateX(3px);

          box-shadow:
            0 10px 20px
            rgba(0,0,0,0.04);
        }

        .update-left {
          display: flex;
          flex-direction: column;

          gap: 8px;
        }

        .update-tag {
          width: fit-content;

          padding: 5px 10px;

          border-radius: 999px;

          background: #0b3b36;

          color: #dceb63;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.08em;
        }

        .update-left h4 {
          font-size: 14px;

          line-height: 1.35;

          letter-spacing: -0.03em;

          font-weight: 700;

          color: #111;

          max-width: 240px;
        }

        .update-time {
          font-size: 11px;

          color: #777;

          flex-shrink: 0;

          padding-top: 2px;
        }

        .view-all {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 14px;

          border-radius: 14px;

          text-decoration: none;

          color: #555;

          font-size: 13px;

          font-weight: 600;

          border:
            1px dashed rgba(11,59,54,0.1);

          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .view-all:hover {
          background:
            rgba(11,59,54,0.04);

          color: #111;
        }

         

        .reveal {
          opacity: 0;

          transform:
            translateY(20px);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;

          transform:
            translateY(0);
        }

         

   @media (max-width: 1024px) {

  .calc-section {
    padding: 72px 28px 88px;
  }

  .calc-layout {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .calc-heading {
    max-width: 100%;
    font-size: clamp(46px, 6vw, 58px);
    line-height: 0.98;
  }

  .calc-subtext {
    max-width: 620px;
    font-size: 17px;
    line-height: 1.8;
  }

  .tools-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .tool-card {
    padding: 18px;
  }

  .tool-icon {
    width: 42px;
    height: 42px;
    min-width: 42px;
  }

  .updates-wrapper {
    padding: 14px;
  }

  .update-left h4 {
    max-width: 100%;
  }
}

@media (max-width: 768px) {

  .calc-section {
    padding: 68px 20px 72px;
  }

  .calc-label {
    margin-bottom: 12px;
  }

  .calc-heading {
    font-size: 42px;
    line-height: 1;
    margin-bottom: 12px;
    max-width: 100%;
  }

  .calc-subtext {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 22px;
  }

  .tools-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .tool-card {
    padding: 16px;
    border-radius: 18px;
  }

  .tool-icon {
    width: 42px;
    height: 42px;
    min-width: 42px;
  }

  .tool-card h3 {
    font-size: 15px;
  }

  .tool-card p {
    font-size: 12px;
  }

  .updates-wrapper {
    padding: 12px;
    border-radius: 18px;
  }

  .update-card {
    padding: 16px;
    gap: 12px;
  }

  .update-left h4 {
    font-size: 15px;
    max-width: 100%;
  }

  .update-time {
    font-size: 11px;
  }

  .view-all {
    padding: 14px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {

  .calc-section {
    padding: 64px 16px;
  }

  .label-line {
    width: 22px;
  }

  .calc-label span {
    font-size: 10px;
  }

  .calc-heading {
    font-size: 36px;
    line-height: 1;
  }

  .calc-subtext {
    font-size: 14px;
  }

  .tool-card {
    gap: 12px;
    padding: 14px;
  }

  .tool-icon {
    width: 38px;
    height: 38px;
    min-width: 38px;
    border-radius: 10px;
    font-size: 15px;
  }

  .tool-card h3 {
    font-size: 14px;
  }

  .tool-card p {
    font-size: 11px;
  }

  .updates-wrapper {
    gap: 8px;
    padding: 8px;
  }

  .update-card {
    padding: 14px;
    border-radius: 14px;
  }

  .update-tag {
    font-size: 8px;
  }

  .update-left h4 {
    font-size: 14px;
  }

  .update-time {
    font-size: 10px;
  }

  .view-all {
    font-size: 12px;
    padding: 12px;
  }
}

@media (max-width: 360px) {

  .calc-section {
    padding: 56px 12px;
  }

  .calc-heading {
    font-size: 30px;
  }

  .calc-subtext {
    font-size: 13px;
  }

  .tool-card {
    padding: 12px;
  }

  .tool-icon {
    width: 34px;
    height: 34px;
    min-width: 34px;
  }

  .tool-card h3 {
    font-size: 13px;
  }

  .tool-card p {
    font-size: 10px;
  }

  .update-left h4 {
    font-size: 13px;
  }

  .update-time {
    font-size: 9px;
  }
}
      `}</style>
    </section>
  );
}