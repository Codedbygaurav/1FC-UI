"use client";

import {
  Brain,
  Activity,
  Sparkles,
  Users,
  TrendingUp,
  ShieldCheck,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturesIntelligenceSectionFIS() {
  const insights = [
    {
      title: "AI Financial Monitoring",
      description:
        "Track unusual spending, liability spikes and portfolio imbalance automatically.",
      icon: Activity,
    },
    {
      title: "Smart Wealth Forecasting",
      description:
        "Project future net worth, SIP growth and financial independence timelines.",
      icon: TrendingUp,
    },
    {
      title: "Unified Family View",
      description:
        "Monitor investments, insurance and legal planning across your family ecosystem.",
      icon: Users,
    },
    {
      title: "Real-time Risk Alerts",
      description:
        "Receive intelligent alerts before financial issues become critical.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="featuresIntelSectionFIS">
      <div className="featuresIntelContainerFIS">
        <div className="featuresIntelLeftFIS">
          <div className="section-label">
            FINANCIAL INTELLIGENCE
          </div>

          <h2 className="section-title">
            One intelligent
            <br />
            system <span>watching everything.</span>
          </h2>

          <p className="section-subtitle">
            1FCode continuously analyzes your financial ecosystem —
            investments, insurance, liabilities, taxes and cashflow —
            to deliver smarter financial decisions in real time.
          </p>

          <div className="featuresIntelInsightsGridFIS">
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="featuresIntelInsightCardFIS"
                >
                  <div className="featuresIntelInsightTopFIS">
                    <div className="featuresIntelIconFIS">
                      <Icon size={16} />
                    </div>

                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="featuresIntelDashboardWrapFIS">
          <div className="featuresIntelDashboardFIS">
            <div className="featuresIntelTopBarFIS">
              <div>
                <span>Unified Net Worth</span>

                <h2>₹48.2L</h2>
              </div>

              <div className="featuresIntelGrowthBadgeFIS">
                <ArrowUpRight size={16} />
                +18.4%
              </div>
            </div>

            <div className="featuresIntelGraphAreaFIS">
              <div className="featuresIntelGraphShapeFIS" />

              <div className="featuresIntelMiniCardFIS featuresIntelMiniCardOneFIS">
                <div className="featuresIntelMiniIconFIS">
                  <Landmark size={14} />
                </div>

                <span>Portfolio Health</span>

                <h4 className="mobile-hiddenFIS">
                  Risk score improved by 12%
                </h4>
              </div>

              <div className="featuresIntelMiniCardFIS featuresIntelMiniCardTwoFIS">
                <div className="featuresIntelMiniIconFIS">
                  <Brain size={14} />
                </div>

                <span>AI Alert</span>

                <h4 className="mobile-hiddenFIS">
                  Tax optimization opportunity detected
                </h4>
              </div>
            </div>

            <div className="featuresIntelStatsGridFIS">
              <div className="featuresIntelStatCardFIS">
                <Landmark size={16} />

                <span>Investments</span>

                <h3>₹26.6L</h3>
              </div>

              <div className="featuresIntelStatCardFIS">
                <ShieldCheck size={16} />

                <span>Insurance</span>

                <h3>₹4.8Cr</h3>
              </div>

              <div className="featuresIntelStatCardFIS">
                <Activity size={16} />

                <span>Liabilities</span>

                <h3>₹11.2L</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featuresIntelSectionFIS {
          width: 100%;
          padding: 90px 0;
          background: #F5F4EF;
          overflow: hidden;
        }

        .featuresIntelContainerFIS {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 0.92fr 1.08fr;

          gap: 48px;
          align-items: center;

          padding: 0 24px;
        }

        .featuresIntelLeftFIS {
          max-width: 560px;
        }

        .featuresIntelTitleFIS {
        font-family: "Geist-Bold";
          letter-spacing:1px;
          font-size: clamp(44px, 4.2vw, 58px);
          line-height: 0.95;
          font-weight: 900;
          color: #111;
          margin: 18px 0 0;
        }
        .mobile-hiddenFIS{
        display:block;
        }

        .featuresIntelTitleFIS span {
          font-family: "DM Serif Display", serif;
          font-style: italic;
          font-weight: 400;
          color: #0B5A4F;
        }

        .featuresIntelDescFIS {
          margin-top: 18px;
          max-width: 540px;
          font-size: 15px;
          line-height: 1.75;
          color: #5F6763;
        }

        .featuresIntelInsightsGridFIS {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
        }

        .featuresIntelInsightCardFIS {
          background: #FFFFFF;
          border-radius: 22px;
          border: 1px solid rgba(7,59,52,0.05);
          padding: 18px 20px;

          transition: all 0.25s ease;
        }

        .featuresIntelInsightCardFIS:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 40px rgba(0,0,0,0.05);
        }

        .featuresIntelInsightTopFIS {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .featuresIntelIconFIS {
          width: 34px;
          height: 34px;

          border-radius: 10px;

          background:
            rgba(11,84,75,0.08);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0B5A4F;

          flex-shrink: 0;
        }

        .featuresIntelInsightCardFIS h3 {
          margin: 0;

          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111;
        }

        .featuresIntelInsightCardFIS p {
          margin: 0;
          padding-left: 46px;

          font-size: 13px;
          line-height: 1.6;
          color: #6D7570;
        }

        .featuresIntelDashboardFIS {
          position: relative;
          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #012C28 0%,
              #014238 50%,
              #0B5A4F 100%
            );

          border-radius: 28px;

          padding: 22px;

          min-height: 440px;

          color: white;

          box-shadow:
            0 35px 70px rgba(0,0,0,0.12);
        }

        .featuresIntelDashboardFIS::before {
          content: "";

          position: absolute;
          top: -120px;
          right: -120px;

          width: 260px;
          height: 260px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(220,235,99,0.12),
              transparent 70%
            );
        }

        .featuresIntelTopBarFIS {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          margin-bottom: 22px;
        }

        .featuresIntelTopBarFIS span {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
        }

        .featuresIntelTopBarFIS h2 {
          font-size: 76px;
          line-height: 0.95;
          letter-spacing: -0.06em;
          margin: 10px 0 0;
          font-weight: 900;
        }

        .featuresIntelGrowthBadgeFIS {
          display: flex;
          align-items: center;
          gap: 6px;

          background:
            rgba(220,235,99,0.16);

          color: #EAE26A;

          padding: 12px 16px;

          border-radius: 999px;

          font-size: 18px;
          font-weight: 700;
        }

        .featuresIntelGraphAreaFIS {
          position: relative;

          height: 190px;

          border-radius: 24px;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.08),
              rgba(255,255,255,0.03)
            );

          margin-bottom: 18px;
        }

        .featuresIntelGraphShapeFIS {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top right,
              rgba(188,195,120,0.06),
              rgba(188,195,120,0.40)
            );

          clip-path: polygon(
            0% 100%,
            0% 75%,
            22% 72%,
            38% 58%,
            52% 61%,
            72% 34%,
            100% 0%,
            100% 100%
          );
        }

        .featuresIntelMiniCardFIS {
          position: absolute;

          background:
            rgba(255,255,255,0.08);

          backdrop-filter: blur(12px);

          border:
            1px solid rgba(255,255,255,0.06);

          border-radius: 18px;

          padding: 16px;

          width: 210px;
        }

        .featuresIntelMiniIconFIS {
          width: 30px;
          height: 30px;

          border-radius: 10px;

          background:
            rgba(220,235,99,0.14);

          color: #EAE26A;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 10px;
        }

        .featuresIntelMiniCardFIS span {
          display: block;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 8px;
        }

        .featuresIntelMiniCardFIS h4 {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
        }

        .featuresIntelMiniCardOneFIS {
          left: 18px;
          bottom: 14px;
          
        }

        .featuresIntelMiniCardTwoFIS {
          right: 18px;
          top: 14px;
          
        }

        .featuresIntelStatsGridFIS {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .featuresIntelStatCardFIS {
          height: 90px;

          border-radius: 20px;

          background:
            rgba(255,255,255,0.06);

          padding: 14px 16px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featuresIntelStatCardFIS svg {
          color: #EAE26A;
          margin-bottom: 8px;
        }

        .featuresIntelStatCardFIS span {
          font-size: 11px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 6px;
        }

        .featuresIntelStatCardFIS h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }

   @media (max-width: 980px) {

  .featuresIntelSectionFIS {
    padding: 88px 0;
  }

  .featuresIntelContainerFIS {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 0 28px;
  }

  .featuresIntelLeftFIS {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .featuresIntelTitleFIS {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .featuresIntelDescFIS {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    line-height: 1.8;
  }

  .featuresIntelDashboardWrapFIS {
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
  }

  .featuresIntelDashboardFIS {
    min-height: auto;
  }

  .featuresIntelTopBarFIS h2 {
    font-size: 62px;
  }

  .mobile-hiddenFIS {
    display: block;
  }
}

@media (max-width: 768px) {

  .featuresIntelSectionFIS {
    padding: 72px 0;
  }

  .featuresIntelContainerFIS {
    padding: 0 20px;
    gap: 32px;
  }

  .featuresIntelLeftFIS {
    text-align: center;
    max-width: 100%;
  }

  .featuresIntelTitleFIS {
    font-size: 44px;
    line-height: 1;
  }

  .featuresIntelDescFIS {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .featuresIntelInsightsGridFIS {
    gap: 12px;
    margin-top: 28px;
  }

  .featuresIntelInsightCardFIS {
    padding: 18px;
    border-radius: 20px;
  }

  .featuresIntelInsightTopFIS {
    gap: 12px;
    margin-bottom: 8px;
  }

  .featuresIntelIconFIS {
    width: 36px;
    height: 36px;
  }

  .featuresIntelInsightCardFIS h3 {
    font-size: 15px;
  }

  .featuresIntelInsightCardFIS p {
    padding-left: 48px;
    font-size: 13px;
  }

  .featuresIntelDashboardFIS {
    padding: 20px;
    border-radius: 24px;
  }

  .featuresIntelTopBarFIS {
    margin-bottom: 20px;
  }

  .featuresIntelTopBarFIS h2 {
    font-size: 48px;
  }

  .featuresIntelGrowthBadgeFIS {
    padding: 10px 14px;
    font-size: 14px;
  }

  .featuresIntelGraphAreaFIS {
    height: 170px;
  }

  .featuresIntelMiniCardFIS {
    width: 160px;
    padding: 12px;
  }

  .mobile-hiddenFIS {
    display: none;
  }

  .featuresIntelStatsGridFIS {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .featuresIntelStatCardFIS {
    height: 84px;
    padding: 12px;
    border-radius: 16px;
  }

  .featuresIntelStatCardFIS h3 {
    font-size: 16px;
  }

  .featuresIntelStatCardFIS span {
    font-size: 10px;
  }
}

@media (max-width: 480px) {

  .featuresIntelSectionFIS {
    padding: 64px 0;
  }

  .featuresIntelContainerFIS {
    padding: 0 16px;
  }

  .featuresIntelTitleFIS {
    font-size: 36px;
  }

  .featuresIntelDescFIS {
    font-size: 14px;
  }

  .featuresIntelInsightCardFIS {
    padding: 16px;
    border-radius: 18px;
  }

  .featuresIntelInsightCardFIS h3 {
    font-size: 14px;
  }

  .featuresIntelInsightCardFIS p {
    font-size: 12px;
    padding-left: 0;
    margin-top: 8px;
  }

  .featuresIntelTopBarFIS {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .featuresIntelTopBarFIS h2 {
    font-size: 38px;
  }

  .featuresIntelGrowthBadgeFIS {
    font-size: 12px;
    padding: 8px 12px;
  }

  .featuresIntelGraphAreaFIS {
    height: 140px;
  }

  .featuresIntelMiniCardFIS {
    width: 115px;
    padding: 10px;
    border-radius: 14px;
  }

  .featuresIntelMiniCardOneFIS {
    left: 10px;
    bottom: 10px;
  }

  .featuresIntelMiniCardTwoFIS {
    right: 10px;
    top: 10px;
  }

  .featuresIntelMiniCardFIS h4 {
    font-size: 11px;
  }

  .featuresIntelStatsGridFIS {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .featuresIntelStatCardFIS {
    height: auto;
    min-height: 72px;
  }

  .featuresIntelStatCardFIS h3 {
    font-size: 18px;
  }
}

@media (max-width: 360px) {

  .featuresIntelContainerFIS {
    padding: 0 12px;
  }

  .featuresIntelTitleFIS {
    font-size: 30px;
  }

  .featuresIntelDescFIS {
    font-size: 13px;
  }

  .featuresIntelTopBarFIS h2 {
    font-size: 32px;
  }

  .featuresIntelMiniCardFIS {
    width: 95px;
    padding: 8px;
  }

  .featuresIntelMiniIconFIS {
    width: 24px;
    height: 24px;
  }

  .featuresIntelStatCardFIS h3 {
    font-size: 16px;
  }

  .featuresIntelInsightCardFIS p {
    font-size: 11px;
  }
}
      `}</style>
    </section>
  );
}