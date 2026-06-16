"use client";

import {
  ArrowRight,
  Calculator,
  Sparkles,
  ShieldCheck,
  Landmark,
  LayoutDashboard,
} from "lucide-react";

export default function ToolsHero() {
  return (
    <section className="toolsHeroSectionTP">
      <div className="toolsHeroGridTP" />
      <div className="toolsHeroGlowTP" />

      <div className="toolsHeroContainerTP">
        <div className="toolsHeroLeftTP">
          <div className="hero-label">
            <Calculator size={14}/>
            FREE FINANCIAL TOOLS
          </div>

          <h1 className="hero-title">
            Calculate smarter.
            <br />
            Decide better.
            <br />
            <span>Pay nothing.</span>
          </h1>

          <p className="hero-subtext">
            9 powerful financial calculators —
            SIP, EMI, FD, tax, net worth and more.
            Built for every Indian.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Explore Tools
              <ArrowRight size={16} />
            </button>

            <button className="btn-secondary">
              <LayoutDashboard size={16} />
              Get Full Platform
            </button>
          </div>

          <div className="toolsHeroTrustTP">
            <div className="toolsHeroTrustItemTP">
              <ShieldCheck size={14} />
              No Login Required
            </div>

            <div className="toolsHeroTrustItemTP">
              <Sparkles size={14} />
              100% Free
            </div>

            <div className="toolsHeroTrustItemTP">
              <Landmark size={14} />
              Built for India
            </div>
          </div>
        </div>

        <div className="toolsHeroRightTP">
          <div className="toolsHeroStatCardTP largeTP">
            <div className="toolsHeroStatTopTP">
              <div className="toolsHeroStatValueTP">
                9
              </div>

              <div className="toolsHeroStatBadgeTP">
                LIVE
              </div>
            </div>

            <div className="toolsHeroStatLabelTP">
              Free Financial Tools
            </div>
          </div>

          <div className="toolsHeroStatCardTP">
            <Calculator
              size={18}
              className="toolsHeroCardIconTP"
            />

            <div className="toolsHeroSmallValueTP">
              ₹0
            </div>

            <div className="toolsHeroStatLabelTP">
              Cost Forever
            </div>
          </div>

          <div className="toolsHeroStatCardTP">
            <Sparkles
              size={18}
              className="toolsHeroCardIconTP"
            />

            <div className="toolsHeroSmallValueTP">
              ∞
            </div>

            <div className="toolsHeroStatLabelTP">
              Unlimited Usage
            </div>
          </div>

          <div className="toolsHeroStatCardTP">
            <LayoutDashboard
              size={18}
              className="toolsHeroCardIconTP"
            />

            <div className="toolsHeroSmallValueTP">
              4
            </div>

            <div className="toolsHeroStatLabelTP">
              Coming Soon
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .toolsHeroSectionTP {
          position: relative;
          overflow: hidden;

          min-height: 92vh;

          display: flex;
          align-items: center;
          padding: 120px 24px 48px;

          background:
            linear-gradient(
              180deg,
              #F8F7F3 0%,
              #F5F4EF 100%
            );
        }

        .toolsHeroGridTP {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(0,0,0,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,0,0,0.04) 1px,
              transparent 1px
            );

          background-size: 56px 56px;
        }

        .toolsHeroGlowTP {
          position: absolute;

          right: -120px;
          top: -120px;

          width: 360px;
          height: 360px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(201,219,78,0.16),
              transparent 70%
            );

          filter: blur(60px);
        }

        .toolsHeroContainerTP {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: minmax(0, 1fr) 460px;

          gap: 100px;

          align-items: center;
        }

        .toolsHeroLeftTP {
          max-width: 620px;
        }

        .toolsHeroTitleTP {
            font-size: clamp(62px, 8vw, 78px);

          line-height: 0.9;

          letter-spacing: -0.08em;

          font-weight: 900;

          color: #0F0F0F;

          margin: 18px 0 20px;
        }

        .toolsHeroTitleTP span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;

          font-weight: 400;

          color: #0B544B;
        }

        .toolsHeroDescTP {
          max-width: 520px;

          font-size: 16px;

          line-height: 1.8;

          color: #5F6764;

          margin-bottom: 28px;
        }

        .toolsHeroActionsTP {
          display: flex;

          gap: 12px;

          margin-bottom: 24px;
        }

        .toolsHeroPrimaryBtnTP,
        .toolsHeroSecondaryBtnTP {
          height: 50px;

          padding: 0 22px;

          border-radius: 16px;

          border: none;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          cursor: pointer;

          font-size: 13px;

          font-weight: 700;

          transition: 0.25s ease;
        }

        .toolsHeroPrimaryBtnTP {
          background: #0B3B36;
          color: white;
        }

        .toolsHeroPrimaryBtnTP:hover {
          transform: translateY(-2px);
        }

        .toolsHeroSecondaryBtnTP {
          background: white;
          color: #111;

          border:
            1px solid rgba(0,0,0,0.06);
        }

        .toolsHeroTrustTP {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .toolsHeroTrustItemTP {
          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 12px;
          font-weight: 600;
          color: #60716C;
        }

        .toolsHeroRightTP {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 16px;
        }

        .toolsHeroStatCardTP {
          position: relative;

          overflow: hidden;

          padding: 20px;

          border-radius: 24px;

          background:
            rgba(255,255,255,0.78);

          border:
            1px solid rgba(255,255,255,0.7);

          backdrop-filter: blur(18px);

          box-shadow:
            0 10px 24px
            rgba(0,0,0,0.03);
        }

        

        .toolsHeroStatCardTP.largeTP {
          grid-column: span 2;
        }

        .toolsHeroStatTopTP {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 12px;
        }

        .toolsHeroStatBadgeTP {
          padding: 8px 12px;

          border-radius: 999px;

          background:
            var(--color-accent-lime);

          font-size: 10px;

          font-weight: 800;

          color: var(--color-dark-green);
        }

        .toolsHeroStatValueTP {
          font-size: 52px;

          line-height: 1;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #0B544B;
        }

        .toolsHeroCardIconTP {
          color: #0B544B;
          margin-bottom: 12px;
        }

        .toolsHeroSmallValueTP {
          font-size: 34px;

          line-height: 1;

          letter-spacing: -0.05em;

          font-weight: 900;

          color: #0B544B;

          margin-bottom: 12px;
        }

        .toolsHeroStatLabelTP {
          font-size: 13px;

          line-height: 1.5;

          color: #646C69;
        }

  @media (max-width: 1000px) {

  .toolsHeroSectionTP {
    min-height: auto;
    padding: 145px 28px 80px;
  }

  .toolsHeroContainerTP {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .toolsHeroLeftTP {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .toolsHeroTitleTP {
    font-size: clamp(56px, 7vw, 68px);
  }

  .toolsHeroDescTP {
    max-width: 680px;
    margin-inline: auto;
    font-size: 17px;
    line-height: 1.8;
  }

  .toolsHeroActionsTP {
    justify-content: center;
  }

  .toolsHeroTrustTP {
    justify-content: center;
  }

  .toolsHeroRightTP {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .toolsHeroSectionTP {
    padding: 120px 20px 64px;
  }

  .toolsHeroContainerTP {
    gap: 40px;
  }

  .toolsHeroLeftTP {
    text-align: center;
    max-width: 100%;
  }

  

  .toolsHeroTitleTP {
    font-size: 46px;
    line-height: 0.95;
    margin: 16px 0 18px;
  }

   .toolsHeroDescTP {
    font-size: 17px;
    line-height: 1.75;
    max-width: 340px;
    margin-inline: auto;
  }

  .toolsHeroPrimaryBtnTP,
  .toolsHeroSecondaryBtnTP {
    height: 58px;
    font-size: 16px;
    font-weight: 700;
  }

  .toolsHeroTrustItemTP {
    font-size: 14px;
    font-weight: 700;
  }

  .toolsHeroActionsTP {
    flex-direction: column;
    gap: 12px;
  }

  

  .toolsHeroTrustItemTP {
    font-size: 12px;
  }

  .toolsHeroRightTP {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 100%;
  }

  .toolsHeroStatCardTP {
    padding: 20px;
    border-radius: 22px;
  }

  .toolsHeroStatCardTP.largeTP {
    grid-column: span 2;
  }

  .toolsHeroStatValueTP {
    font-size: 48px;
  }

  .toolsHeroSmallValueTP {
    font-size: 30px;
  }

  .toolsHeroStatLabelTP {
    font-size: 13px;
  }
}


      `}</style>
    </section>
  );
}