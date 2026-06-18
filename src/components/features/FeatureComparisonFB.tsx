const comparisonRows = [
  {
    feature:
      "Unified portfolio across all instruments",
    onefcode:
      "One unified ecosystem dashboard",
    other:
      "5–10 separate apps and spreadsheets",
  },

  {
    feature:
      "Succession code for family access",
    onefcode:
      "Secure nominee-ready access system",
    other:
      "No consolidated family access",
  },

  {
    feature:
      "Insurance premium renewal alerts",
    onefcode:
      "AI-powered multi-layer reminders",
    other:
      "Per-insurer apps only",
  },

  {
    feature:
      "Real-time net worth calculation",
    onefcode:
      "Live financial health visibility",
    other:
      "Manual Excel calculations",
  },

  {
    feature:
      "Year-round tax deduction tracking",
    onefcode:
      "Automated deduction optimisation",
    other:
      "Last-minute tax panic",
  },

  {
    feature:
      "Debt-to-income ratio monitoring",
    onefcode:
      "Continuous financial stress analysis",
    other:
      "No visibility until loan rejection",
  },

  {
    feature:
      "Estate planning & will guidance",
    onefcode:
      "Integrated estate intelligence",
    other:
      "Expensive legal consultations",
  },

  {
    feature:
      "Free financial calculators",
    onefcode:
      "Built into ecosystem",
    other:
      "Scattered unreliable websites",
  },
];

export default function FeatureComparisonFB() {
  return (
    <section className="featureComparisonSectionFB">
       
      <div className="featureComparisonGridFB" />

       
      <div className="featureComparisonGlowFB" />

      <div className="featureComparisonContainerFB">
         
        <div className="featureComparisonTopFB">
          <div className="featureComparisonEyebrowFB">
            1FCode vs Traditional Financial Management
          </div>

          <h2 className="featureComparisonTitleFB">
            Chaos without
            <br />
            visibility.
            <br />
            <span>
              Clarity with 1FCode.
            </span>
          </h2>

          <p className="featureComparisonDescFB">
            Most people manage their
            finances through disconnected
            apps, spreadsheets and memory.
            1FCode replaces that fragmented
            system with one intelligent
            financial operating layer.
          </p>
        </div>

         
        <div className="featureComparisonShellFB">
           
          <div className="featureComparisonSideFB badSideFB">
            <div className="featureComparisonSideTopFB">
              <div className="featureComparisonSideLabelFB">
                WITHOUT 1FCODE
              </div>

              <h3 className="featureComparisonSideTitleFB">
                Fragmented financial life
              </h3>

              <p className="featureComparisonSideDescFB">
                Multiple apps, forgotten
                policies, missed deadlines
                and no complete visibility.
              </p>
            </div>

            <div className="featureComparisonListFB">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="featureComparisonCardFB badCardFB"
                >
                  <div className="featureComparisonCardFeatureFB">
                    {row.feature}
                  </div>

                  <div className="featureComparisonCardValueFB badValueFB">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
          </div>

           
          <div className="featureComparisonSideFB goodSideFB">
            <div className="featureComparisonSideTopFB">
              <div className="featureComparisonSideLabelFB greenFB">
                WITH 1FCODE
              </div>

              <h3 className="featureComparisonSideTitleFB whiteFB">
                Unified financial ecosystem
              </h3>

              <p className="featureComparisonSideDescFB darkFB">
                One intelligent operating
                system connecting your
                investments, insurance,
                taxes, loans and family
                financial future.
              </p>
            </div>

            <div className="featureComparisonListFB">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="featureComparisonCardFB goodCardFB"
                >
                  <div className="featureComparisonCardFeatureFB whiteTextFB">
                    {row.feature}
                  </div>

                  <div className="featureComparisonCardValueFB goodValueFB">
                    ✓ {row.onefcode}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featureComparisonSectionFB {
          position: relative;

          overflow: hidden;

          padding:
            120px 24px;

          background:
            linear-gradient(
              180deg,
              #F8F7F2 0%,
              #F3F2EC 100%
            );
        }

         

        .featureComparisonGridFB {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.04) 1px,
              transparent 1px
            );

          background-size: 56px 56px;

          pointer-events: none;
        }

         

        .featureComparisonGlowFB {
          position: absolute;

          right: -140px;
          top: -120px;

          width: 380px;
          height: 380px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(220,235,99,0.16),
              transparent 72%
            );

          filter: blur(40px);
        }

        .featureComparisonContainerFB {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;
        }

         

        .featureComparisonTopFB {
          max-width: 760px;

          margin-bottom: 54px;
        }

        .featureComparisonEyebrowFB {
          margin-bottom: 16px;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          color: var(--color-dark-green);
        }

        .featureComparisonTitleFB {
          font-size:
            clamp(44px,5vw,78px);

          line-height: 0.9;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #111111;

          margin-bottom: 24px;
        }

        .featureComparisonTitleFB span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;

          font-weight: 400;

          color: var(--color-dark-green);
        }

        .featureComparisonDescFB {
          max-width: 620px;

          font-size: 15px;

          line-height: 1.9;

          color: #5E6763;
        }

         

        .featureComparisonShellFB {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 24px;
        }

         

        .featureComparisonSideFB {
          position: relative;

          overflow: hidden;

          border-radius: 36px;

          padding: 30px;
        }

        .badSideFB {
          background:
            rgba(255,255,255,0.74);

          border:
            1px solid rgba(0,0,0,0.05);

          backdrop-filter: blur(18px);
        }

        .goodSideFB {
          background:
            linear-gradient(
              135deg,
              var(--color-dark-green) 0%,
              #072522 100%
            );

          box-shadow:
            0 24px 60px
            rgba(0,0,0,0.08);
        }

        .goodSideFB::before {
          content: "";

          position: absolute;

          right: -100px;
          top: -100px;

          width: 280px;
          height: 280px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(220,235,99,0.18),
              transparent 70%
            );

          filter: blur(40px);
        }

         

        .featureComparisonSideTopFB {
          position: relative;
          z-index: 2;

          margin-bottom: 28px;
        }

        .featureComparisonSideLabelFB {
          margin-bottom: 14px;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          color: #727272;
        }

        .featureComparisonSideLabelFB.greenFB {
          color:
            rgba(220,235,99,0.84);
        }

        .featureComparisonSideTitleFB {
          font-size: 36px;

          line-height: 0.95;

          letter-spacing: -0.05em;

          font-weight: 900;

          color: #111111;

          margin-bottom: 16px;
        }

        .featureComparisonSideTitleFB.whiteFB {
          color: white;
        }

        .featureComparisonSideDescFB {
          font-size: 14px;

          line-height: 1.8;

          color: #6A726E;

          max-width: 420px;
        }

        .featureComparisonSideDescFB.darkFB {
          color:
            rgba(255,255,255,0.7);
        }

         

        .featureComparisonListFB {
          position: relative;
          z-index: 2;

          display: grid;

          gap: 14px;
        }

         

        .featureComparisonCardFB {
          padding: 20px;

          border-radius: 22px;
        }

        .badCardFB {
          background:
            rgba(248,247,242,0.92);

          border:
            1px solid rgba(0,0,0,0.05);
        }

        .goodCardFB {
          background:
            rgba(255,255,255,0.06);

          border:
            1px solid rgba(255,255,255,0.06);

          backdrop-filter: blur(14px);
        }

        .featureComparisonCardFeatureFB {
          font-size: 14px;

          line-height: 1.7;

          font-weight: 700;

          color: #111111;

          margin-bottom: 10px;
        }

        .featureComparisonCardFeatureFB.whiteTextFB {
          color: white;
        }

        .featureComparisonCardValueFB {
          font-size: 13px;

          line-height: 1.7;
        }

        .badValueFB {
          color: #777777;
        }

        .goodValueFB {
          color: #EAE26A;

          font-weight: 700;
        }

         

        @media (max-width: 980px) {
          .featureComparisonShellFB {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .featureComparisonSectionFB {
            padding:
              84px 18px;
          }

          .featureComparisonTitleFB {
            font-size: 48px;
          }

          .featureComparisonSideFB {
            padding: 22px;
          }

          .featureComparisonSideTitleFB {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}