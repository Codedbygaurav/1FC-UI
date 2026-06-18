"use client";

export default function CalculatorPreviewGrid() {
  return (
    <section className="calculatorPreviewSectionCP">

      <div className="calculatorPreviewContainerCP">

         

        <div className="calculatorPreviewTopCP">

          <div className="calculatorPreviewBadgeCP">
            FREE CALCULATORS
          </div>

          <h2 className="calculatorPreviewTitleCP">
            Smart financial tools
            <span> for everyday decisions.</span>
          </h2>

        </div>

         

        <div className="calculatorPreviewGridCP">

           

          <div className="calculatorCardCP darkCP">

            <div className="calculatorCardTopCP">
              <div>
                <div className="calculatorMiniTagCP">
                  SIP CALCULATOR
                </div>

                <h3 className="calculatorCardTitleCP">
                  Calculate future SIP wealth
                </h3>
              </div>

              <div className="calculatorLiveCP">
                LIVE
              </div>
            </div>

            <div className="calculatorInputWrapCP">

              <div className="calculatorInputRowCP">
                <span>Monthly SIP</span>
                <strong>₹5,000</strong>
              </div>

              <input type="range" />

              <div className="calculatorInputRowCP">
                <span>Expected Return</span>
                <strong>12%</strong>
              </div>

              <input type="range" />

              <div className="calculatorInputRowCP">
                <span>Investment Period</span>
                <strong>10 Years</strong>
              </div>

              <input type="range" />

            </div>

            <div className="calculatorResultCP">

              <div className="calculatorResultLabelCP">
                Estimated Corpus
              </div>

              <div className="calculatorResultValueCP">
                ₹11,61,695
              </div>

            </div>

          </div>

           

          <div className="calculatorCardCP">

            <div className="calculatorCardTopCP">
              <div>
                <div className="calculatorMiniTagCP">
                  EMI CALCULATOR
                </div>

                <h3 className="calculatorCardTitleCP darkTextCP">
                  Loan affordability preview
                </h3>
              </div>

              <div className="calculatorLiveLightCP">
                LIVE
              </div>
            </div>

            <div className="calculatorPreviewBoxCP">

              <div className="calculatorPreviewRowCP">
                <span>Loan Amount</span>
                <strong>₹25L</strong>
              </div>

              <div className="calculatorPreviewRowCP">
                <span>Interest Rate</span>
                <strong>8.5%</strong>
              </div>

              <div className="calculatorPreviewRowCP">
                <span>Tenure</span>
                <strong>20 Years</strong>
              </div>

            </div>

            <div className="calculatorBottomResultCP">

              <div>
                <span>Monthly EMI</span>
                <h4>₹21,695</h4>
              </div>

              <div>
                <span>Total Interest</span>
                <h4>₹27.1L</h4>
              </div>

            </div>

          </div>

           

          <div className="calculatorCardCP">

            <div className="calculatorCardTopCP">
              <div>
                <div className="calculatorMiniTagCP">
                  FD CALCULATOR
                </div>

                <h3 className="calculatorCardTitleCP darkTextCP">
                  Fixed deposit maturity
                </h3>
              </div>

              <div className="calculatorLiveLightCP">
                LIVE
              </div>
            </div>

            <div className="calculatorFDBoxCP">

              <div className="calculatorFDValueCP">
                ₹13,42,560
              </div>

              <div className="calculatorFDSubCP">
                Maturity Amount
              </div>

            </div>

            <div className="calculatorFDStatsCP">

              <div className="calculatorMiniStatCP">
                <span>Rate</span>
                <strong>7.4%</strong>
              </div>

              <div className="calculatorMiniStatCP">
                <span>Years</span>
                <strong>10Y</strong>
              </div>

              <div className="calculatorMiniStatCP">
                <span>Deposit</span>
                <strong>₹6L</strong>
              </div>

            </div>

          </div>

           

          <div className="calculatorCardCP">

            <div className="calculatorCardTopCP">
              <div>
                <div className="calculatorMiniTagCP">
                  GST TOOL
                </div>

                <h3 className="calculatorCardTitleCP darkTextCP">
                  GST invoice breakdown
                </h3>
              </div>

              <div className="calculatorLiveLightCP">
                LIVE
              </div>
            </div>

            <div className="gstPreviewBoxCP">

              <div className="gstRowCP">
                <span>Base Amount</span>
                <strong>₹10,000</strong>
              </div>

              <div className="gstRowCP">
                <span>GST (18%)</span>
                <strong>₹1,800</strong>
              </div>

              <div className="gstRowCP totalCP">
                <span>Total Invoice</span>
                <strong>₹11,800</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .calculatorPreviewSectionCP {
          padding: 72px 24px;

          background: #F5F4EF;
        }

        .calculatorPreviewContainerCP {
          max-width: 1280px;

          margin: 0 auto;
        }

         

        .calculatorPreviewTopCP {
          margin-bottom: 34px;
        }

        .calculatorPreviewBadgeCP {
          display: inline-flex;

          padding: 10px 16px;

          border-radius: 999px;

          background:
            rgba(11,59,54,0.06);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.14em;

          color: #315C55;

          margin-bottom: 18px;
        }

        .calculatorPreviewTitleCP {
          font-size:
            clamp(40px,4vw,56px);

          line-height: 0.95;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #111;
        }

        .calculatorPreviewTitleCP span {
          font-family:
            "Geist-Bold",
            serif;

          font-style: italic;

          font-weight: 400;

          color: var(--color-dark-green);
        }

         

        .calculatorPreviewGridCP {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0,1fr));

          gap: 18px;
        }

         

        .calculatorCardCP {
          min-height: 360px;

          padding: 24px;

          border-radius: 30px;

          background:
            rgba(255,255,255,0.82);

          border:
            1px solid rgba(0,0,0,0.05);

          backdrop-filter: blur(18px);

          display: flex;

          flex-direction: column;

          justify-content: space-between;
        }

        .calculatorCardCP.darkCP {
          background:
            linear-gradient(
              135deg,
              #032B28 0%,
              #07463D 100%
            );

          color: white;
        }

        .calculatorCardTopCP {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          margin-bottom: 22px;
        }

        .calculatorMiniTagCP {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.12em;

          color: #80908B;

          margin-bottom: 12px;
        }

        .darkCP .calculatorMiniTagCP {
          color: rgba(255,255,255,0.65);
        }

        .calculatorCardTitleCP {
          font-size: 28px;

          line-height: 1.05;

          letter-spacing: -0.05em;

          font-weight: 800;
        }

        .darkTextCP {
          color: #111;
        }

        .calculatorLiveCP,
        .calculatorLiveLightCP {
          padding: 8px 12px;

          border-radius: 999px;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;
        }

        .calculatorLiveCP {
          background:
            rgba(201,219,78,0.16);

          color: #D0F067;
        }

        .calculatorLiveLightCP {
          background:
            rgba(201,219,78,0.16);

          color: #8FA60E;
        }

         

        .calculatorInputWrapCP {
          display: flex;

          flex-direction: column;

          gap: 16px;
        }

        .calculatorInputRowCP {
          display: flex;

          align-items: center;

          justify-content: space-between;

          font-size: 13px;

          color: rgba(255,255,255,0.8);
        }

        .calculatorInputRowCP strong {
          font-size: 14px;

          color: white;
        }

        .calculatorInputWrapCP input {
          width: 100%;
        }

         

        .calculatorResultCP {
          margin-top: 28px;
        }

        .calculatorResultLabelCP {
          font-size: 12px;

          color: rgba(255,255,255,0.65);

          margin-bottom: 10px;
        }

        .calculatorResultValueCP {
          font-size: 52px;

          line-height: 0.9;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #D9F85B;
        }

         

        .calculatorPreviewBoxCP {
          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .calculatorPreviewRowCP {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 16px 18px;

          border-radius: 16px;

          background: #F6F7F2;
        }

        .calculatorPreviewRowCP span {
          font-size: 13px;

          color: #69716D;
        }

        .calculatorPreviewRowCP strong {
          font-size: 15px;

          color: #111;
        }

        .calculatorBottomResultCP {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 14px;

          margin-top: 24px;
        }

        .calculatorBottomResultCP div {
          padding: 18px;

          border-radius: 18px;

          background: #F6F7F2;
        }

        .calculatorBottomResultCP span {
          font-size: 12px;

          color: #68706C;
        }

        .calculatorBottomResultCP h4 {
          font-size: 28px;

          line-height: 1;

          letter-spacing: -0.05em;

          font-weight: 900;

          margin-top: 10px;
        }

         

        .calculatorFDBoxCP {
          padding: 28px;

          border-radius: 24px;

          background:
            linear-gradient(
              135deg,
              rgba(11,59,54,0.08),
              rgba(201,219,78,0.12)
            );

          margin-bottom: 22px;
        }

        .calculatorFDValueCP {
          font-size: 46px;

          line-height: 0.9;

          letter-spacing: -0.06em;

          font-weight: 900;

          color: var(--color-dark-green);

          margin-bottom: 10px;
        }

        .calculatorFDSubCP {
          font-size: 13px;

          color: #5F6764;
        }

        .calculatorFDStatsCP {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;
        }

        .calculatorMiniStatCP {
          padding: 16px;

          border-radius: 18px;

          background: #F6F7F2;
        }

        .calculatorMiniStatCP span {
          display: block;

          font-size: 11px;

          color: #68706C;

          margin-bottom: 10px;
        }

        .calculatorMiniStatCP strong {
          font-size: 20px;

          line-height: 1;

          letter-spacing: -0.04em;
        }

         

        .gstPreviewBoxCP {
          display: flex;

          flex-direction: column;

          gap: 14px;
        }

        .gstRowCP {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 18px;

          border-radius: 18px;

          background: #F6F7F2;
        }

        .gstRowCP span {
          font-size: 13px;

          color: #68706C;
        }

        .gstRowCP strong {
          font-size: 18px;

          font-weight: 800;
        }

        .gstRowCP.totalCP {
          background:
            linear-gradient(
              135deg,
              rgba(11,59,54,0.08),
              rgba(201,219,78,0.14)
            );
        }

         

        @media (max-width: 1000px) {
          .calculatorPreviewGridCP {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .calculatorPreviewSectionCP {
            padding: 60px 18px;
          }

          .calculatorPreviewTitleCP {
            font-size: 42px;
          }

          .calculatorCardCP {
            min-height: auto;

            padding: 20px;
          }

          .calculatorCardTitleCP {
            font-size: 24px;
          }

          .calculatorResultValueCP {
            font-size: 40px;
          }

          .calculatorBottomResultCP {
            grid-template-columns: 1fr;
          }

          .calculatorFDStatsCP {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </section>
  );
}