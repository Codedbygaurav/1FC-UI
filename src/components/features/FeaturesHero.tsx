"use client";

import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  Landmark,
  Layers3,
  Wallet,
  Layers,
} from "lucide-react";

export default function FeaturesHero() {
  return (
    <section className="featuresHeroSectionFB">
      <div className="featuresHeroGridFB" />
      <div className="featuresHeroGlowFB" />

      <div className="featuresHeroContainerFB">
        <div className="featuresHeroContentFB">
          <div className="featuresHeroLeftFB">
            <div className="hero-label">
              <Layers size={14}/>
              FEATURES OVERVIEW
            </div>

            <h1 className="featuresHeroTitleFB">
              Every feature.
              <br />
              Every rupee.
              <br />
              <span>Under control.</span>
            </h1>

            <p className="featuresHeroDescriptionFB">
              1FCode brings together 50+ features across 7 domains —
              investments, insurance, loans, tax, legal, platform
              intelligence and free tools — so nothing in your
              financial life falls through the cracks.
            </p>

            <div className="featuresHeroActionsFB">
              <button className="featuresHeroPrimaryBtnFB">
                Explore All Features
                <ArrowRight size={16} />
              </button>

              <button className="featuresHeroSecondaryBtnFB">
                <Play size={16} />
                Take a Tour
              </button>
            </div>

            <div className="featuresHeroTrustRowFB">
              <div className="featuresHeroTrustItemFB">
                <Sparkles size={14} />
                AI-Powered Insights
              </div>

              <div className="featuresHeroTrustItemFB">
                <ShieldCheck size={14} />
                Secure & Compliant
              </div>

              <div className="featuresHeroTrustItemFB">
                <LayoutDashboard size={14} />
                All-in-One Platform
              </div>

              <div className="featuresHeroTrustItemFB">
                <Landmark size={14} />
                Built for India
              </div>
            </div>
          </div>

          <div className="featuresHeroMascotCenterFB">
            <img
              src="/mascotCoin1.png"
              alt="Mascot"
              className="featuresHeroMascotFB"
            />
          </div>

          <div className="featuresHeroStatsWrapFB">
            <div className="featuresHeroStatCardFB largeFB">
              <div className="featuresHeroStatTopFB">
                <div className="featuresHeroStatValueFB">
                  50+
                </div>

                <div className="featuresHeroStatBadgeFB">
                  <Layers3 size={16} />
                </div>
              </div>

              <div className="featuresHeroStatLabelFB">
                Powerful Features
              </div>
            </div>

            <div className="featuresHeroStatCardFB">
              <LayoutDashboard
                size={18}
                className="featuresHeroCardIconFB"
              />

              <div className="featuresHeroStatValueSmallFB">
                7
              </div>

              <div className="featuresHeroStatLabelFB">
                Financial Modules
              </div>
            </div>

            <div className="featuresHeroStatCardFB">
              <Wallet
                size={18}
                className="featuresHeroCardIconFB"
              />

              <div className="featuresHeroStatValueSmallFB">
                ₹365
              </div>

              <div className="featuresHeroStatLabelFB">
                For All Access
              </div>
            </div>

            <div className="featuresHeroStatCardFB">
              <Sparkles
                size={18}
                className="featuresHeroCardIconFB"
              />

              <div className="featuresHeroStatValueSmallFB">
                1
              </div>

              <div className="featuresHeroStatLabelFB">
                Ecosystem to
                run your life
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featuresHeroSectionFB {
          position: relative;
          overflow: hidden;
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 145px 24px 0 ;
          background:
            linear-gradient(
              180deg,
              #F8F7F3 0%,
              #F5F4EF 100%
            );
        }

        .featuresHeroGridFB {
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
          pointer-events: none;
        }

        .featuresHeroGlowFB {
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
              transparent 72%
            );

          filter: blur(60px);
        }

        .featuresHeroContainerFB {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .featuresHeroContentFB {
  display: grid;
  grid-template-columns:
    1.15fr 0.85fr 0.75fr;

  gap: 0;
  align-items: center;
}

        .featuresHeroLeftFB {
          max-width: 560px;
        }

        .featuresHeroTitleFB {
          font-size:
            clamp(52px,5vw,68px);

          line-height: 0.9;
          letter-spacing: -0.08em;
          font-weight: 900;
          color: #0F0F0F;

          margin: 18px 0 24px;
        }

        .featuresHeroTitleFB span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;
          font-weight: 400;
          color: #0B544B;
        }

        .featuresHeroDescriptionFB {
          max-width: 520px;
          font-size: 16px;
          line-height: 1.8;
          color: #5F6764;
          margin-bottom: 28px;
        }

        .featuresHeroActionsFB {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .featuresHeroPrimaryBtnFB,
        .featuresHeroSecondaryBtnFB {
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

        .featuresHeroPrimaryBtnFB {
          background: #0B3B36;
          color: white;
        }

        .featuresHeroSecondaryBtnFB {
          background: white;
          color: #111;

          border:
            1px solid rgba(0,0,0,0.06);
        }

        .featuresHeroTrustRowFB {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .featuresHeroTrustItemFB {
          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 12px;
          font-weight: 600;
          color: #60716C;
        }

        .featuresHeroMascotCenterFB {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -80px;
}

        .featuresHeroMascotFB {
  width: 370px;
  max-width: none;
  object-fit: contain;

  filter:
    drop-shadow(0 35px 50px rgba(0,0,0,.14));
}

        .featuresHeroStatsWrapFB {
  max-width: 360px;

  margin-left: -20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

        .featuresHeroStatCardFB {
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
            0 10px 24px rgba(0,0,0,0.03);
        }


        .featuresHeroStatCardFB.largeFB {
          grid-column: span 2;
        }

        .featuresHeroStatTopFB {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .featuresHeroStatBadgeFB {
          width: 38px;
          height: 38px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            rgba(210,224,90,0.16);

          color: #A6BA2D;
        }

        .featuresHeroCardIconFB {
          color: #0B544B;
          margin-bottom: 12px;
        }

        .featuresHeroStatValueFB {
          font-size: 54px;
          line-height: 1;
          letter-spacing: -0.07em;
          font-weight: 900;
          color: #0B544B;
        }

        .featuresHeroStatValueSmallFB {
          font-size: 38px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 900;
          color: #0B544B;
          margin-bottom: 12px;
        }

        .featuresHeroStatLabelFB {
          font-size: 14px;
          line-height: 1.6;
          color: #646C69;
        }


@media (max-width: 1280px) {

  .featuresHeroSectionFB {
    min-height: auto;
    padding: 145px 28px 80px;
  }

  .featuresHeroContentFB {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .featuresHeroLeftFB {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .featuresHeroTitleFB {
    font-size: clamp(56px, 7vw, 68px);
  }

  .featuresHeroDescriptionFB {
    max-width: 700px;
    margin-inline: auto;
    font-size: 17px;
    line-height: 1.8;
  }

  .featuresHeroActionsFB {
    justify-content: center;
  }

  .featuresHeroTrustRowFB {
    justify-content: center;
  }

  .featuresHeroMascotCenterFB {
    margin-left: 0;
    margin-top: 0;
  }

  .featuresHeroMascotFB {
    width: 340px;
  }

  .featuresHeroStatsWrapFB {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .featuresHeroSectionFB {
    padding: 120px 20px 64px;
  }

  .featuresHeroContentFB {
    gap: 28px;
  }

  .featuresHeroLeftFB {
    text-align: center;
    max-width: 100%;
  }

  

  .featuresHeroTitleFB {
    font-size: 46px;
    line-height: 0.95;
    margin: 16px 0 18px;
  }

  .featuresHeroDescriptionFB {
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 24px;
    max-width: 100%;
  }

  .featuresHeroActionsFB {
    flex-direction: column;
    gap: 12px;
  }

  .featuresHeroPrimaryBtnFB,
  .featuresHeroSecondaryBtnFB {
    width: 100%;
    height: 54px;
    font-size: 14px;
  }

  .featuresHeroTrustRowFB {
    justify-content: center;
    gap: 12px;
  }

  .featuresHeroTrustItemFB {
    font-size: 12px;
  }

  .featuresHeroMascotCenterFB {
    margin-top: 0;
    bottom:20px
  }

  .featuresHeroMascotFB {
    width: 280px;
  }

  .featuresHeroStatsWrapFB {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 100%;
  }

  .featuresHeroStatCardFB {
    padding: 20px;
    border-radius: 22px;
    min-height: 120px;
  }

  .featuresHeroStatCardFB.largeFB {
    grid-column: span 2;
    min-height: auto;
  }

  .featuresHeroStatValueFB {
    font-size: 48px;
  }

  .featuresHeroStatValueSmallFB {
    font-size: 32px;
  }

  .featuresHeroStatLabelFB {
    font-size: 13px;
  }
}

@media (max-width: 480px) {

  .featuresHeroSectionFB {
    padding: 110px 16px 56px;
  }

  .featuresHeroTitleFB {
    font-size: 38px;
  }

  .featuresHeroDescriptionFB {
    font-size: 14px;
  }

  .featuresHeroTrustRowFB {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .featuresHeroTrustItemFB {
    font-size: 11px;
  }

  .featuresHeroMascotFB {
    width: 240px;
  }

  .featuresHeroStatsWrapFB {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .featuresHeroStatCardFB.largeFB {
    grid-column: span 1;
  }

  .featuresHeroStatCardFB {
    min-height: auto;
    padding: 18px;
    border-radius: 20px;
  }

  .featuresHeroStatValueFB {
    font-size: 40px;
  }

  .featuresHeroStatValueSmallFB {
    font-size: 26px;
    margin-bottom: 8px;
  }

  .featuresHeroStatLabelFB {
    font-size: 12px;
  }
}

@media (max-width: 360px) {

  .featuresHeroSectionFB {
    padding: 130px 12px 48px;
  }

  .featuresHeroTitleFB {
    font-size: 35px;
  }

  .featuresHeroDescriptionFB {
    font-size: 13px;
  }

  .featuresHeroMascotFB {
    width: 210px;
    
  }

  .featuresHeroStatValueFB {
    font-size: 34px;
  }

  .featuresHeroStatValueSmallFB {
    font-size: 22px;
  }

  .featuresHeroStatLabelFB {
    font-size: 10px;
  }

  .featuresHeroTrustItemFB {
    font-size: 10px;
  }
}
      `}</style>
    </section>
  );
}