"use client";

import {
  ShieldCheck,
  Landmark,
  Receipt,
  FolderOpen,
  Siren,
  Brain,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FeaturesProtectionSectionFPS() {
  const cards = [
    {
      title: "Insurance Overview",
      desc:
        "Track all insurance policies, premiums and coverage gaps.",
      sub:
        "Monitor renewals, nominees and total family coverage.",
      icon: ShieldCheck,
      tag: "Live Sync",
      dark: true,
    },

    {
      title: "Loan Intelligence",
      desc:
        "EMI tracking and liability monitoring.",
      sub:
        "Track active loans, EMIs and monthly obligations.",
      icon: Landmark,
      tag: "Real-time",
    },

    {
      title: "Tax Planning",
      desc:
        "Detect deductions and optimize savings.",
      sub:
        "Plan taxes proactively across investments and salary.",
      icon: Receipt,
      tag: "FY25 Ready",
    },

    {
      title: "Estate & Nominee",
      desc:
        "Keep succession planning and legal documentation organized.",
      sub:
        "Secure nominee mapping, wills and family access systems.",
      icon: FolderOpen,
      tag: "Protected",
    },

    {
      title: "Emergency Planning",
      desc:
        "Monitor emergency fund readiness.",
      sub:
        "Get alerts when your reserve ratio becomes risky.",
      icon: Siren,
      tag: "AI Alerts",
    },

    {
      title: "Risk Analysis",
      desc:
        "AI-powered financial risk scoring.",
      sub:
        "Analyze liabilities, insurance and portfolio imbalance.",
      icon: Brain,
      tag: "AI Powered",
    },
  ];

  return (
    <section className="featuresProtectSectionFPS">
      <div className="featuresProtectContainerFPS">
        <div className="featuresProtectGridFPS">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`
                  featuresProtectCardFPS
                  ${card.dark ? "darkFPS" : ""}
                `}
              >
                <div className="featuresProtectIconFPS">
                  <Icon size={22} strokeWidth={2.2} />
                </div>

                <div className="featuresProtectContentFPS">
                  <div className="featuresProtectMiniFPS">
                    {card.title}
                  </div>

                  <h3>{card.desc}</h3>

                  <p>{card.sub}</p>
                </div>

                <div className="featuresProtectFooterFPS">
                  <div className="featuresProtectBottomFPS">
                    <span>
                      <Sparkles size={12} />
                      {card.tag}
                    </span>
                  </div>

                  <div className="featuresProtectStatsFPS">
                    <div>
                      <span>Status</span>

                      <strong>
                        <CheckCircle2 size={14} />
                        Active
                      </strong>
                    </div>

                    <div>
                      <span>Sync</span>

                      <strong>
                        <Activity size={14} />
                        Live
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .featuresProtectSectionFPS {
        
          padding: 56px 22px;
          background: #F7F6F1;
        }

        .featuresProtectContainerFPS {
          max-width: 1280px;
          margin: 0 auto;
        }

        .featuresProtectGridFPS {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .featuresProtectCardFPS {
        
          position: relative;

          overflow: hidden;

          min-height: 285px;

          padding: 22px;

          border-radius: 26px;

          background:
            rgba(255,255,255,0.82);

          border:
            1px solid rgba(0,0,0,0.04);

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .featuresProtectCardFPS:hover {
          transform: translateY(-4px);

          box-shadow:
            0 16px 36px
            rgba(0,0,0,0.05);
        }

        .featuresProtectCardFPS.darkFPS {
          background:var(--color-dark-green);

          border: none;
        }

        .featuresProtectCardFPS.darkFPS h3,
        .featuresProtectCardFPS.darkFPS strong {
        
          color: white;
        }

        .featuresProtectCardFPS.darkFPS p,
        .featuresProtectCardFPS.darkFPS
        .featuresProtectMiniFPS,
        .featuresProtectCardFPS.darkFPS
        .featuresProtectStatsFPS span {
        font-family:"Geist-SemiBold";
          letter-spacing:1px;
          color:
            rgba(255,255,255,0.72);
        }

        .featuresProtectIconFPS {
          width: 52px;
          height: 52px;

          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            rgba(11,84,75,0.08);

          color: var(--color-dark-green);
        }

        .featuresProtectIconFPS svg {
          color: var(--color-dark-green);
          stroke: var(--color-dark-green);
        }

        .featuresProtectCardFPS.darkFPS
        .featuresProtectIconFPS {
          background:
            rgba(220,235,99,0.10);

          color: #EAE26A;
        }

        .featuresProtectCardFPS.darkFPS
        .featuresProtectIconFPS svg {
          color: #EAE26A;
          stroke: #EAE26A;
        }

        .featuresProtectContentFPS {
          margin-top: 20px;
        }

        .featuresProtectMiniFPS {
          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.10em;

          color: #7A8480;

          margin-bottom: 12px;

          text-transform: uppercase;
        }

        .featuresProtectCardFPS h3 {
        font-family:"Geist-Bold";
          letter-spacing:1px;
          font-size: 20px;

          line-height: 1.22;


          font-weight: 700;

          color: #111111;

          margin-bottom: 12px;

          max-width: 260px;
        }

        .featuresProtectCardFPS p {
          font-size: 13px;

          line-height: 1.55;

          color: #6E7773;

          max-width: 270px;
        }

        .featuresProtectFooterFPS {
          margin-top: auto;
          padding-top: 18px;
        }

        .featuresProtectBottomFPS span {
          display: inline-flex;
          font-family:"Geist-Bold";
          letter-spacing:1px;

          align-items: center;
          justify-content: center;
          gap: 6px;

          height: 32px;

          padding: 0 12px;

          border-radius: 999px;

          background:
            rgba(11,84,75,0.08);

          color: var(--color-dark-green);

          font-size: 11px;

          font-weight: 700;
        }

        .featuresProtectCardFPS.darkFPS
        .featuresProtectBottomFPS span {
          background:
            rgba(220,235,99,0.12);

          color: #EAE26A;
        }

        .featuresProtectStatsFPS {
          display: flex;
          gap: 24px;
          margin-top: 16px;
          font-family:"Geist-SemiBold";
          letter-spacing:1px;
        }

        .featuresProtectStatsFPS span {
          display: block;

          font-size: 10px;

          color: #8A918E;

          margin-bottom: 6px;
        }

        .featuresProtectStatsFPS strong {
          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 15px;

          color: #111111;

          letter-spacing: -0.04em;
        }

  @media (max-width: 1024px) {

  .featuresProtectSectionFPS {
    padding: 88px 28px;
  }

  .featuresProtectGridFPS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .featuresProtectCardFPS {
    min-height: 290px;
    padding: 24px;
    border-radius: 24px;
  }

  .featuresProtectCardFPS h3 {
    font-size: 20px;
    max-width: 100%;
  }

  .featuresProtectCardFPS p {
    max-width: 100%;
    font-size: 14px;
    line-height: 1.7;
  }
}

@media (max-width: 768px) {

  .featuresProtectSectionFPS {
    padding: 72px 20px;
  }

  .featuresProtectGridFPS {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .featuresProtectCardFPS {
    min-height: auto;
    padding: 22px;
    border-radius: 22px;
  }

  .featuresProtectIconFPS {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }

  .featuresProtectContentFPS {
    margin-top: 18px;
  }

  .featuresProtectMiniFPS {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .featuresProtectCardFPS h3 {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .featuresProtectCardFPS p {
    font-size: 13px;
    line-height: 1.7;
  }

  .featuresProtectFooterFPS {
    padding-top: 18px;
  }

  .featuresProtectStatsFPS {
    gap: 20px;
    margin-top: 14px;
  }

  .featuresProtectStatsFPS strong {
    font-size: 14px;
  }

  .featuresProtectBottomFPS span {
    font-size: 10px;
    height: 30px;
  }
}

@media (max-width: 480px) {

  .featuresProtectSectionFPS {
    padding: 64px 16px;
  }

  .featuresProtectCardFPS {
    padding: 18px;
    border-radius: 20px;
  }

  .featuresProtectIconFPS {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .featuresProtectContentFPS {
    margin-top: 14px;
  }

  .featuresProtectCardFPS h3 {
    font-size: 17px;
  }

  .featuresProtectCardFPS p {
    font-size: 12px;
  }

  .featuresProtectStatsFPS {
    justify-content: space-between;
    gap: 12px;
  }

  .featuresProtectStatsFPS span {
    font-size: 9px;
  }

  .featuresProtectStatsFPS strong {
    font-size: 12px;
    gap: 4px;
  }

  .featuresProtectBottomFPS span {
    font-size: 9px;
    padding: 0 10px;
    height: 28px;
  }
}

@media (max-width: 360px) {

  .featuresProtectSectionFPS {
    padding: 56px 12px;
  }

  .featuresProtectCardFPS {
    padding: 16px;
  }

  .featuresProtectCardFPS h3 {
    font-size: 15px;
  }

  .featuresProtectCardFPS p {
    font-size: 11px;
  }

  .featuresProtectStatsFPS {
    flex-direction: column;
    gap: 10px;
  }

  .featuresProtectStatsFPS strong {
    font-size: 11px;
  }

  .featuresProtectBottomFPS span {
    font-size: 8px;
  }
}
      `}</style>
    </section>
  );
}