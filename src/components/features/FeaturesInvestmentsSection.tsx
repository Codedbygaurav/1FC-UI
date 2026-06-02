"use client";

import {
  Landmark,
  TrendingUp,
  PieChart,
  Target,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Brain,
  Activity,
} from "lucide-react";

export default function FeaturesInvestmentsSection() {
  return (
    <section className="featuresInvestSectionFB">
      <div className="featuresInvestContainerFB">
        <div className="featuresInvestTopFB">
          <div className="section-label">
            INVESTMENTS
          </div>

          <h2 className="featuresInvestTitleFB">
            Smarter investing.<br className="mobile-only"/>
            <span> One connected portfolio.</span>
          </h2>
        </div>

        <div className="featuresInvestGridFB">
          <div className="featuresInvestLeftFB">
            <div className="featuresInvestMainCardFB">
              <div className="featuresInvestMiniFB">
                Portfolio Value
              </div>

              <div className="featuresInvestAmountFB">
                ₹26.6L
              </div>

              <div className="featuresInvestGrowthFB">
                <TrendingUp size={14} />
                +18.4%
              </div>

              <div className="featuresInvestChartFB">
                <div className="featuresInvestLineFB" />
              </div>
            </div>
          </div>

          <div className="featuresInvestRightFB">
            <div className="featuresInvestFeatureCardFB">
              <Landmark
                size={18}
                className="featuresInvestCardIconFB"
              />

              <span>SIP Tracker</span>

              <strong>12 Active SIPs</strong>
            </div>

            <div className="featuresInvestFeatureCardFB">
              <PieChart
                size={18}
                className="featuresInvestCardIconFB"
              />

              <span>Asset Allocation</span>

              <strong>72% Equity</strong>
            </div>

            <div className="featuresInvestFeatureCardFB">
              <BarChart3
                size={18}
                className="featuresInvestCardIconFB"
              />

              <span>IPO Tracking</span>

              <strong>Live Opportunities</strong>
            </div>

            <div className="featuresInvestFeatureCardFB">
              <Target
                size={18}
                className="featuresInvestCardIconFB"
              />

              <span>Goal Planning</span>

              <strong>9 Financial Goals</strong>
            </div>
          </div>
        </div>

        <div className="featuresInvestRailFB">
          <div className="featuresInvestPillFB">
            <ShieldCheck size={14} />
            Tax Harvesting
          </div>

          <div className="featuresInvestPillFB">
            <Landmark size={14} />
            PMS & AIF
          </div>

          <div className="featuresInvestPillFB">
            <Activity size={14} />
            Risk Analysis
          </div>

          <div className="featuresInvestPillFB">
            <Brain size={14} />
            Portfolio Analyzer
          </div>

          <div className="featuresInvestPillFB">
            <Sparkles size={14} />
            Wealth Forecasting
          </div>
        </div>
      </div>

      <style>{`
        .featuresInvestSectionFB {
          position: relative;
          padding: 84px 24px;
          background: #F3F2EC;
          overflow: hidden;
        }

        .featuresInvestContainerFB {
          max-width: 1280px;
          margin: 0 auto;
        }

        .featuresInvestTopFB {
          text-align: center;
          margin-bottom: 42px;
        }

        .featuresInvestTitleFB {
          font-size:
            clamp(42px, 4vw, 58px);

          line-height: 0.94;
          letter-spacing: -0.06em;
          font-weight: 900;
          color: #111111;
          max-width: 720px;
          margin: 18px auto 0;
        }

        .featuresInvestTitleFB span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;
          font-weight: 400;
          color: #0B5A4F;
        }

        .featuresInvestGridFB {
          display: grid;
          grid-template-columns:
            1.1fr 0.9fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .featuresInvestMainCardFB {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          padding: 24px;

          background:
            linear-gradient(
              135deg,
              #032F2B 0%,
              #063B35 100%
            );

          min-height: 280px;

          box-shadow:
            0 24px 60px
            rgba(3,47,43,0.14);
        }

        .featuresInvestMiniFB {
          font-size: 11px;

          color:
            rgba(255,255,255,0.62);

          margin-bottom: 10px;
        }

        .featuresInvestAmountFB {
          font-size:
            clamp(38px, 4vw, 58px);

          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 900;
          color: white;
          margin-bottom: 16px;
        }

        .featuresInvestGrowthFB {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          height: 42px;
          padding: 0 16px;

          border-radius: 999px;

          background:
            rgba(220,235,99,0.14);

          color: #DCEB63;

          font-size: 13px;
          font-weight: 700;
        }

        .featuresInvestChartFB {
          position: absolute;

          left: 24px;
          right: 24px;
          bottom: 24px;

          height: 110px;

          border-radius: 18px;

          overflow: hidden;

          background:
            rgba(255,255,255,0.04);
        }

        .featuresInvestLineFB {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(220,235,99,0.4),
              transparent
            );

          clip-path:
            polygon(
              0% 90%,
              10% 82%,
              20% 84%,
              30% 70%,
              40% 74%,
              50% 58%,
              60% 60%,
              70% 42%,
              80% 46%,
              90% 20%,
              100% 0%,
              100% 100%,
              0% 100%
            );
        }

        .featuresInvestRightFB {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 16px;
        }

        .featuresInvestFeatureCardFB {
          position: relative;

          overflow: hidden;

          padding: 20px;

          border-radius: 22px;

          background:
            rgba(255,255,255,0.76);

          border:
            1px solid rgba(0,0,0,0.04);

          min-height: 132px;
        }


        .featuresInvestCardIconFB {
          color: #0B544B;
          margin-bottom: 14px;
        }

        .featuresInvestFeatureCardFB span {
          display: block;

          font-size: 12px;

          color: #66726D;

          margin-bottom: 14px;
        }

        .featuresInvestFeatureCardFB strong {
          font-size: 20px;

          line-height: 1.2;

          letter-spacing: -0.04em;

          color: #0B3B36;
        }

        .featuresInvestRailFB {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .featuresInvestPillFB {
          height: 46px;

          padding: 0 18px;

          border-radius: 999px;

          display: flex;
          align-items: center;
          gap: 8px;

          background:
            rgba(255,255,255,0.72);

          border:
            1px solid rgba(0,0,0,0.04);

          font-size: 13px;

          font-weight: 600;

          color: #0B3B36;
        }

        .featuresInvestPillFB svg {
          color: #0B544B;
          flex-shrink: 0;
        }

   @media (max-width: 1024px) {

  .featuresInvestSectionFB {
    padding: 88px 28px;
  }

  .featuresInvestTopFB {
    margin-bottom: 42px;
  }

  .featuresInvestTitleFB {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
    max-width: 820px;
  }

  .featuresInvestGridFB {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  .featuresInvestMainCardFB {
    min-height: 300px;
  }

  .featuresInvestRightFB {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .featuresInvestFeatureCardFB {
    min-height: 140px;
  }
}

@media (max-width: 768px) {

  .featuresInvestSectionFB {
    padding: 72px 20px;
  }

  .featuresInvestTopFB {
    margin-bottom: 34px;
  }

  .featuresInvestTitleFB {
    font-size: 44px;
    line-height: 1;
    max-width: 100%;
  }

  .featuresInvestGridFB {
    gap: 14px;
    margin-bottom: 18px;
  }

  .featuresInvestMainCardFB {
    min-height: 260px;
    padding: 22px;
    border-radius: 24px;
  }

  .featuresInvestMiniFB {
    font-size: 11px;
  }

  .featuresInvestAmountFB {
    font-size: 48px;
  }

  .featuresInvestGrowthFB {
    height: 40px;
    padding: 0 14px;
    font-size: 12px;
  }

  .featuresInvestChartFB {
    left: 22px;
    right: 22px;
    bottom: 22px;
    height: 95px;
  }

  .featuresInvestRightFB {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .featuresInvestFeatureCardFB {
    min-height: 120px;
    padding: 18px;
    border-radius: 20px;
  }

  .featuresInvestCardIconFB {
    margin-bottom: 12px;
  }

  .featuresInvestFeatureCardFB span {
    font-size: 11px;
    margin-bottom: 10px;
  }

  .featuresInvestFeatureCardFB strong {
    font-size: 18px;
  }

  .featuresInvestRailFB {
    gap: 10px;
  }

  .featuresInvestPillFB {
    height: 42px;
    padding: 0 14px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {

  .featuresInvestSectionFB {
    padding: 64px 16px;
  }

  .featuresInvestTitleFB {
    font-size: 36px;
  }

  .featuresInvestGridFB {
    gap: 12px;
  }

  .featuresInvestMainCardFB {
    min-height: 230px;
    padding: 18px;
    border-radius: 20px;
  }

  .featuresInvestMiniFB {
    font-size: 10px;
  }

  .featuresInvestAmountFB {
    font-size: 38px;
  }

  .featuresInvestGrowthFB {
    height: 34px;
    padding: 0 12px;
    font-size: 11px;
  }

  .featuresInvestChartFB {
    left: 18px;
    right: 18px;
    bottom: 18px;
    height: 75px;
  }

  .featuresInvestRightFB {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .featuresInvestFeatureCardFB {
    min-height: auto;
    padding: 16px;
    border-radius: 18px;
  }

  .featuresInvestCardIconFB {
    margin-bottom: 10px;
  }

  .featuresInvestFeatureCardFB strong {
    font-size: 16px;
  }

  .featuresInvestFeatureCardFB span {
    font-size: 10px;
  }

  .featuresInvestRailFB {
    flex-direction: column;
    gap: 8px;
  }

  .featuresInvestPillFB {
    width: 100%;
    justify-content: flex-start;
    height: 40px;
    font-size: 11px;
  }
}

@media (max-width: 360px) {

  .featuresInvestSectionFB {
    padding: 56px 12px;
  }

  .featuresInvestTitleFB {
    font-size: 30px;
  }

  .featuresInvestAmountFB {
    font-size: 32px;
  }

  .featuresInvestGrowthFB {
    font-size: 10px;
  }

  .featuresInvestFeatureCardFB strong {
    font-size: 14px;
  }

  .featuresInvestPillFB {
    font-size: 10px;
  }
}
      `}</style>
    </section>
  );
}