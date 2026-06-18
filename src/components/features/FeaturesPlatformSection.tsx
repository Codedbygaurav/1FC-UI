"use client";

import {
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  Brain,
  Activity,
  Wallet,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesPlatformSection() {
  return (
    <section className="featuresPlatformSectionFB">
      <div className="featuresPlatformGridFB" />

      <div className="featuresPlatformContainerFB">
        <div className="featuresPlatformLeftFB">
          <div className="section-label">
            PLATFORM INTELLIGENCE
          </div>

          <h2 className="section-title">
            One intelligent layer
            <span> powering everything.</span>
          </h2>

          <p className="section-subtitle">
            Every product inside 1FCode connects through one
            intelligent financial ecosystem — investments,
            insurance, loans, tax planning, estate management
            and AI-powered monitoring.
          </p>

          <div className="featuresPlatformListFB">
            <div className="featuresPlatformItemFB">
              <LayoutDashboard size={16} />
              Unified Financial Dashboard
            </div>

            <div className="featuresPlatformItemFB">
              <Brain size={16} />
              AI-powered intelligence
            </div>

            <div className="featuresPlatformItemFB">
              <Activity size={16} />
              Real-time monitoring
            </div>

            <div className="featuresPlatformItemFB">
              <ShieldCheck size={16} />
              Family financial view
            </div>
          </div>
        </div>

        <div className="featuresPlatformDashboardWrapFB">
          <div className="featuresPlatformDashboardFB">
            <div className="featuresPlatformTopFB">
              <div>
                <div className="featuresPlatformMiniLabelFB">
                  Unified Financial Overview
                </div>

                <div className="featuresPlatformAmountFB">
                  ₹48,32,410
                </div>
              </div>

              <div className="featuresPlatformLiveFB">
                <Sparkles size={12} />
                LIVE
              </div>
            </div>

            <div className="featuresPlatformCardsFB">
              <div className="featuresPlatformCardFB">
                <Landmark
                  size={18}
                  className="featuresPlatformCardIconFB"
                />

                <span>Investments</span>
                <strong>₹26.6L</strong>
              </div>

              <div className="featuresPlatformCardFB">
                <Wallet
                  size={18}
                  className="featuresPlatformCardIconFB"
                />

                <span>Bank Balance</span>
                <strong>₹4.3L</strong>
              </div>

              <div className="featuresPlatformCardFB">
                <Activity
                  size={18}
                  className="featuresPlatformCardIconFB"
                />

                <span>Loans</span>
                <strong>₹11.2L</strong>
              </div>

              <div className="featuresPlatformCardFB">
                <ShieldCheck
                  size={18}
                  className="featuresPlatformCardIconFB"
                />

                <span>Insurance</span>
                <strong>₹6.1L</strong>
              </div>
            </div>

            <div className="featuresPlatformInsightsFB">
              <div className="featuresPlatformInsightFB">
                <CheckCircle2 size={14} />
                SIP growth projection updated.
              </div>

              <div className="featuresPlatformInsightFB">
                <CheckCircle2 size={14} />
                3 tax-saving opportunities detected.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featuresPlatformSectionFB {
          position: relative;
          padding: 88px 24px;
          overflow: hidden;
          background: #F8F7F2;
        }

        .featuresPlatformGridFB {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.03) 1px,
              transparent 1px
            );

          background-size: 56px 56px;
          pointer-events: none;
        }

        .featuresPlatformContainerFB {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.9fr 1.1fr;

          gap: 44px;

          align-items: center;
        }

        .featuresPlatformLeftFB {
          padding-top: 20px;
        }

        .featuresPlatformTitleFB {
        font-family: "Geist-Bold";
          letter-spacing:1px;
          font-size:
            clamp(42px, 4.2vw, 60px);

          line-height: 0.94;

          letter-spacing: -0.06em;

          font-weight: 900;

          color: #111111;

          margin: 18px 0;
        }

        .featuresPlatformTitleFB span {

          font-style: italic;

          font-weight: 400;

          color: #0B5A4F;
        }

        .featuresPlatformDescFB {
          font-size: 14px;

          line-height:1.6;
font-weight:500;
letter-spacing:-1px;

          color: #5F6864;

          max-width: 520px;

          margin-bottom: 28px;
        }

        .featuresPlatformListFB {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .featuresPlatformItemFB {
          height: 50px;

          display: flex;
          align-items: center;
          gap: 10px;

          padding: 0 18px;

          border-radius: 16px;

          background:
            rgba(255,255,255,0.72);

          border:
            1px solid rgba(0,0,0,0.04);

          font-size: 13px;

          font-weight: 600;

          color: var(--color-dark-green);
        }

        .featuresPlatformItemFB svg {
          color: var(--color-dark-green);
          flex-shrink: 0;
        }

        .featuresPlatformDashboardWrapFB {
        
          position: relative;
        }

        .featuresPlatformDashboardFB {
          position: relative;
          overflow: hidden;

          border-radius: 28px;

          padding: 24px;

          background:
            var(--color-dark-green);

          box-shadow:
            0 24px 60px
            rgba(3,47,43,0.16);
        }

        .featuresPlatformDashboardFB::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle at top right,
              rgba(220,235,99,0.12),
              transparent 32%
            );

          pointer-events: none;
        }

        .featuresPlatformTopFB {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          margin-bottom: 24px;
        }

        .featuresPlatformMiniLabelFB {
          font-size: 11px;

          color:
            rgba(255,255,255,0.64);

          margin-bottom: 8px;
        }

        .featuresPlatformAmountFB {
          font-size:
            clamp(34px, 4vw, 52px);

          line-height: 1;

          letter-spacing: -0.06em;

          font-weight: 900;

          color: white;
        }

        .featuresPlatformLiveFB {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 7px 12px;

          border-radius: 999px;

          background:
            rgba(220,235,99,0.14);

          color: #EAE26A;

          font-size: 10px;

          font-weight: 700;
        }

        .featuresPlatformCardsFB {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 14px;

          margin-bottom: 16px;
        }

        .featuresPlatformCardFB {
          padding: 16px;

          border-radius: 18px;

          background:
            rgba(255,255,255,0.06);

          border:
            1px solid rgba(255,255,255,0.05);

          backdrop-filter: blur(10px);
        }

        .featuresPlatformCardIconFB {
          color: #EAE26A;
          margin-bottom: 10px;
        }

        .featuresPlatformCardFB span {
          display: block;

          font-size: 11px;

          color:
            rgba(255,255,255,0.58);

          margin-bottom: 10px;
        }

        .featuresPlatformCardFB strong {
          font-size: 22px;

          line-height: 1;

          letter-spacing: -0.04em;

          color: white;
        }

        .featuresPlatformInsightsFB {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .featuresPlatformInsightFB {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 14px 16px;

          border-radius: 16px;

          background:
            rgba(255,255,255,0.05);

          color:
            rgba(255,255,255,0.76);

          font-size: 12px;

          line-height: 1.6;
        }

        .featuresPlatformInsightFB svg {
          color: #EAE26A;
          flex-shrink: 0;
        }

  @media (max-width: 1024px) {

  .featuresPlatformSectionFB {
    padding: 88px 28px;
  }

  .featuresPlatformContainerFB {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .featuresPlatformLeftFB {
    padding-top: 0;
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .featuresPlatformTitleFB {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .featuresPlatformDescFB {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 28px;
    font-size: 17px;
    line-height: 1.8;
  }

  .featuresPlatformListFB {
    max-width: 680px;
    margin: 0 auto;
  }

  .featuresPlatformDashboardWrapFB {
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .featuresPlatformSectionFB {
    padding: 72px 20px;
  }

  .featuresPlatformContainerFB {
    gap: 32px;
  }

  .featuresPlatformLeftFB {
    text-align: center;
  }

  .featuresPlatformTitleFB {
    font-size: 44px;
    line-height: 1;
    margin: 14px 0;
  }

  .featuresPlatformDescFB {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
    margin-bottom: 24px;
  }

  .featuresPlatformListFB {
    gap: 10px;
  }

  .featuresPlatformItemFB {
    min-height: 52px;
    padding: 12px 16px;
    font-size: 13px;
    border-radius: 16px;
    justify-content: flex-start;
  }

  .featuresPlatformDashboardFB {
    padding: 22px;
    border-radius: 24px;
  }

  .featuresPlatformTopFB {
    margin-bottom: 22px;
  }

  .featuresPlatformAmountFB {
    font-size: 44px;
  }

  .featuresPlatformMiniLabelFB {
    font-size: 11px;
  }

  .featuresPlatformLiveFB {
    font-size: 10px;
    padding: 7px 11px;
  }

  .featuresPlatformCardsFB {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .featuresPlatformCardFB {
    padding: 16px;
    border-radius: 18px;
  }

  .featuresPlatformCardFB strong {
    font-size: 18px;
  }

  .featuresPlatformCardFB span {
    font-size: 11px;
  }

  .featuresPlatformInsightsFB {
    gap: 8px;
  }

  .featuresPlatformInsightFB {
    padding: 12px 14px;
    font-size: 11px;
    border-radius: 14px;
  }
}

@media (max-width: 480px) {

  .featuresPlatformSectionFB {
    padding: 64px 16px;
  }

  .featuresPlatformTitleFB {
    font-size: 36px;
  }

  .featuresPlatformDescFB {
    font-size: 14px;
  }

  .featuresPlatformItemFB {
    font-size: 12px;
    padding: 10px 14px;
  }

  .featuresPlatformDashboardFB {
    padding: 18px;
    border-radius: 20px;
  }

  .featuresPlatformTopFB {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .featuresPlatformAmountFB {
    font-size: 36px;
  }

  .featuresPlatformCardsFB {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .featuresPlatformCardFB {
    padding: 14px;
  }

  .featuresPlatformCardFB strong {
    font-size: 16px;
  }

  .featuresPlatformInsightFB {
    font-size: 11px;
    padding: 10px 12px;
  }
}

@media (max-width: 360px) {

  .featuresPlatformSectionFB {
    padding: 56px 12px;
  }

  .featuresPlatformTitleFB {
    font-size: 30px;
  }

  .featuresPlatformDescFB {
    font-size: 13px;
  }

  .featuresPlatformItemFB {
    font-size: 11px;
  }

  .featuresPlatformAmountFB {
    font-size: 30px;
  }

  .featuresPlatformCardFB strong {
    font-size: 14px;
  }

  .featuresPlatformInsightFB {
    font-size: 10px;
  }
}
      `}</style>
    </section>
  );
}