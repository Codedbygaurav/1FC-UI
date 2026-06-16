"use client";

import {
  ArrowRight,
  Mail,
  Sparkles,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

export default function ToolsCTA() {
  return (
    <section className="toolsCTASectionTC">
      <div className="toolsCTAContainerTC">
        <div className="toolsCTAGlowTC" />

        <div className="toolsCTAContentTC">
          <div className="section-label section-label-dark">
            BUILT FOR MODERN FINANCES
          </div>

          <h2 className="toolsCTATitleTC">
            One platform.
            <br />
            <span>Every calculation.</span>
          </h2>

          <p className="toolsCTADescTC">
            Investments, taxes, insurance,
            loans and net-worth tools —
            all designed with a clean,
            intelligent financial experience.
          </p>

          <div className="toolsCTAButtonsTC">
            <button className="toolsCTAPrimaryTC">
              Explore Platform
              <ArrowRight size={16} />
            </button>

            <button className="toolsCTASecondaryTC">
              <Mail size={16} />
              Contact Team
            </button>
          </div>
        </div>

        <div className="toolsCTACardTC">
          <div className="toolsCTACardTopTC">
            <div>
              <div className="toolsCTAMiniLabelTC">
                Active Tools
              </div>

              <div className="toolsCTAValueTC">
                24+
              </div>
            </div>

            <div className="toolsCTAPillTC">
              <Sparkles size={12} />
              LIVE
            </div>
          </div>

          <div className="toolsCTAItemsTC">
            <div className="toolsCTAItemTC">
              <span>SIP Calculator</span>

              <strong>
                <CheckCircle2 size={14} />
                Ready
              </strong>
            </div>

            <div className="toolsCTAItemTC">
              <span>Loan EMI Calculator</span>

              <strong>
                <CheckCircle2 size={14} />
                Ready
              </strong>
            </div>

            <div className="toolsCTAItemTC">
              <span>GST Calculator</span>

              <strong>
                <CheckCircle2 size={14} />
                Ready
              </strong>
            </div>

            <div className="toolsCTAItemTC">
              <span>Net Worth Tracker</span>

              <strong>
                <CheckCircle2 size={14} />
                Ready
              </strong>
            </div>

            <div className="toolsCTAItemTC">
              <span>Retirement Planner</span>

              <strong>
                <LayoutDashboard size={14} />
                Beta
              </strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .toolsCTASectionTC {
          position: relative;
          overflow: hidden;
          padding: 80px 24px 100px;
          
        }

        .toolsCTAContainerTC {
          position: relative;

          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1fr 460px;

          gap: 24px;

          align-items: center;

          padding: 42px;

          border-radius: 32px;

          background: var(--color-dark-green);

          overflow: hidden;
        }

        .toolsCTAGlowTC {
          position: absolute;

          width: 420px;
          height: 420px;

          right: -120px;
          top: -120px;

          border-radius: 999px;

          background:
            radial-gradient(
              circle,
              rgba(201,219,78,0.18),
              transparent 70%
            );

          pointer-events: none;
        }

        .toolsCTAContentTC {
          position: relative;
          z-index: 2;
          max-width: 560px;
        }

        .toolsCTATitleTC {
        
          font-size:
            60px;

          line-height: 0.92;

          font-family:"Geist-Bold";
      letter-spacing:1px;

          font-weight: 900;

          color: white;

          margin: 18px 0 20px;
        }

        .toolsCTATitleTC span {

          font-style: italic;

          font-weight: 400;

          color: var(--color-accent-lime);
        }

        .toolsCTADescTC {
        
          font-size: 16px;

          line-height: 1.6;

          color:
            rgba(255,255,255,0.72);

          margin-bottom: 32px;
        }

        .toolsCTAButtonsTC {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .toolsCTAPrimaryTC,
        .toolsCTASecondaryTC {
        font-family:"Geist-Bold";
      letter-spacing:1px;
          height: 52px;

          padding: 0 22px;

          border-radius: 16px;

          font-size: 14px;

          font-weight: 700;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          cursor: pointer;

          transition: 0.25s ease;
        }

        .toolsCTAPrimaryTC {
          border: none;

          background: var(--color-accent-lime);

          color: #052F2B;
        }

        .toolsCTASecondaryTC {
          border:
            1px solid rgba(255,255,255,0.14);

          background:
            rgba(255,255,255,0.06);

          color: white;

          backdrop-filter: blur(12px);
        }

        .toolsCTAPrimaryTC:hover,
        .toolsCTASecondaryTC:hover {
          transform: translateY(-2px);
        }

        .toolsCTACardTC {
          position: relative;

          z-index: 2;

          padding: 26px;

          border-radius: 28px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter: blur(20px);
        }

        .toolsCTACardTopTC {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          margin-bottom: 28px;
        }

        .toolsCTAMiniLabelTC {
          font-size: 12px;

          color:
            rgba(255,255,255,0.6);

          margin-bottom: 10px;
        }

        .toolsCTAValueTC {
          font-size: 64px;

          line-height: 0.9;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: white;
        }

        .toolsCTAPillTC {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 10px 14px;

          border-radius: 999px;

          background:
            rgba(201,219,78,0.16);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.08em;

          color: var(--color-accent-lime);
        }

        .toolsCTAItemsTC {
          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .toolsCTAItemTC {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 16px 18px;

          border-radius: 18px;

          background:
            rgba(255,255,255,0.06);
        }

        .toolsCTAItemTC span {
          font-size: 14px;

          color:
            rgba(255,255,255,0.8);
        }

        .toolsCTAItemTC strong {
          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 13px;

          color: var(--color-accent-lime);
        }

  @media (max-width: 1000px) {

  .toolsCTASectionTC {
    padding: 80px 28px 96px;
  }

  .toolsCTAContainerTC {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 42px;
    border-radius: 32px;
  }

  .toolsCTAContentTC {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .toolsCTATitleTC {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .toolsCTADescTC {
    max-width: 680px;
    margin: 0 auto 30px;
    font-size: 17px;
    line-height: 1.8;
  }

  .toolsCTAButtonsTC {
    justify-content: center;
  }

  .toolsCTACardTC {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .toolsCTASectionTC {
    padding: 72px 20px 84px;
  }

  .toolsCTAContainerTC {
    padding: 32px 24px;
    border-radius: 28px;
    gap: 28px;
  }

  .toolsCTAContentTC {
    text-align: center;
    max-width: 100%;
  }

  .toolsCTATitleTC {
    font-size: 44px;
    line-height: 1;
    margin: 14px 0 16px;
  }

  .toolsCTADescTC {
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .toolsCTAButtonsTC {
    flex-direction: column;
    gap: 12px;
  }

  .toolsCTAPrimaryTC,
  .toolsCTASecondaryTC {
    width: 100%;
    height: 54px;
    font-size: 14px;
  }

  .toolsCTACardTC {
    padding: 22px;
    border-radius: 24px;
  }

  .toolsCTACardTopTC {
    margin-bottom: 22px;
  }

  .toolsCTAValueTC {
    font-size: 52px;
  }

  .toolsCTAMiniLabelTC {
    font-size: 12px;
  }

  .toolsCTAPillTC {
    padding: 8px 12px;
    font-size: 10px;
  }

  .toolsCTAItemTC {
    padding: 14px 16px;
    border-radius: 16px;
  }

  .toolsCTAItemTC span {
    font-size: 13px;
  }

  .toolsCTAItemTC strong {
    font-size: 12px;
  }
}

@media (max-width: 480px) {

  .toolsCTASectionTC {
    padding: 64px 16px 76px;
  }

  .toolsCTAContainerTC {
    padding: 22px 18px;
    border-radius: 22px;
  }

  .toolsCTATitleTC {
    font-size: 36px;
  }

  .toolsCTADescTC {
    font-size: 14px;
  }

  .toolsCTAPrimaryTC,
  .toolsCTASecondaryTC {
    height: 50px;
    font-size: 13px;
  }

  .toolsCTACardTC {
    padding: 18px;
    border-radius: 20px;
  }

  .toolsCTAValueTC {
    font-size: 42px;
  }

  .toolsCTAPillTC {
    font-size: 9px;
    padding: 7px 10px;
  }

  .toolsCTAItemsTC {
    gap: 8px;
  }

  .toolsCTAItemTC {
    padding: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .toolsCTAItemTC span {
    font-size: 12px;
  }

  .toolsCTAItemTC strong {
    font-size: 11px;
  }
}

@media (max-width: 360px) {

  .toolsCTASectionTC {
    padding: 56px 12px 68px;
  }

  .toolsCTAContainerTC {
    padding: 18px 14px;
  }

  .toolsCTATitleTC {
    font-size: 30px;
  }

  .toolsCTADescTC {
    font-size: 13px;
  }

  .toolsCTAValueTC {
    font-size: 36px;
  }

  .toolsCTAItemTC span {
    font-size: 11px;
  }

  .toolsCTAItemTC strong {
    font-size: 10px;
  }
}     `}</style>
    </section>
  );
}