import {
  TrendingUp,
  Clock3,
} from "lucide-react";

export default function GoldMarketData() {
  return (
    <>
      <section className="GoldPriceChart">

        <div className="GoldPriceChartContainer">

          <div className="GoldPriceChartHeader">

            <div className="section-label">
              PRICE TREND
            </div>

            <h2 className="section-title">
              Gold performance.
              <br />
              <span>Over time.</span>
            </h2>

            <p className="section-subtitle">
              Track how gold prices have moved
              and monitor market performance.
            </p>

          </div>

          <div className="GoldChartCard">

            <div className="GoldChartTop">

              <div>

                <div className="GoldChartLabel">
                  Current Gold Rate
                </div>

                <div className="GoldChartPrice">
                  ₹1,54,815
                </div>

                <div className="GoldChartSubtext">
                  24K Gold / 10 grams
                </div>

              </div>

              <div className="GoldChartLive">

                <TrendingUp size={16} />

                +₹125 Today

              </div>

            </div>

            {/* Replace with Recharts later */}

            <div className="GoldFakeChart">

              <svg
                viewBox="0 0 800 250"
                preserveAspectRatio="none"
              >

                <path
                  d="
                  M0,190
                  C100,185
                  140,175
                  220,165

                  C300,150
                  360,140
                  430,120

                  C500,105
                  560,90
                  630,70

                  C700,55
                  760,35
                  800,25
                  "
                  fill="none"
                  stroke="var(--color-accent-lime)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

              </svg>

            </div>

            <div className="GoldChartMonths">

              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>

            </div>

          </div>

          <div className="GoldMetricsGrid">

            <div className="GoldMetricCard">

              <span>Today's Change</span>

              <h3>+₹125</h3>

              <p>+1.29%</p>

            </div>

            <div className="GoldMetricCard">

              <span>Monthly Change</span>

              <h3>+₹525</h3>

              <p>+5.63%</p>

            </div>

            <div className="GoldMetricCard">

              <span>Yearly Change</span>

              <h3>+₹1,395</h3>

              <p>+16.5%</p>

            </div>

            <div className="GoldMetricCard">

              <span>Last Updated</span>

              <h3>11:45 AM</h3>

              <p>
                <Clock3 size={14} />
                Live Market
              </p>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .GoldPriceChart{
        padding:0 24px 140px;
      }

      .GoldPriceChartContainer{
        max-width:1280px;
        margin:auto;
      }

      .GoldPriceChartHeader{
        text-align:center;
        max-width:800px;
        margin:0 auto 60px;
      }

      .GoldChartCard{
        background:var(--color-dark-green);
        border-radius:32px;
        padding:40px;
        margin-bottom:30px;
        color:white;
      }

      .GoldChartTop{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        margin-bottom:40px;
      }

      .GoldChartLabel{
        color:rgba(255,255,255,.7);
        font-size:13px;
      }

      .GoldChartPrice{
        font-size:72px;
        line-height:1;
        font-weight:900;
        color:var(--color-accent-lime);
        margin:10px 0;
      }

      .GoldChartSubtext{
        color:rgba(255,255,255,.75);
      }

      .GoldChartLive{
        display:flex;
        align-items:center;
        gap:8px;

        background:
        rgba(234,226,106,.12);

        color:
        var(--color-accent-lime);

        padding:10px 14px;

        border-radius:999px;

        font-size:13px;
        font-weight:700;
      }

      .GoldFakeChart{
        height:260px;
      }

      .GoldFakeChart svg{
        width:100%;
        height:100%;
      }

      .GoldChartMonths{
        display:flex;
        justify-content:space-between;

        color:
        rgba(255,255,255,.6);

        margin-top:10px;

        font-size:13px;
      }

      .GoldMetricsGrid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:20px;
      }

      .GoldMetricCard{
      text-align:center;
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        padding:24px;
      }

      .GoldMetricCard span{
        color:#667085;
        font-size:13px;
      }

      .GoldMetricCard h3{
        margin:12px 0;
        font-size:36px;
        font-weight:900;
        color:var(--color-dark-green);
      }

      .GoldMetricCard p{
        margin:0;
        color:#667085;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:6px;
      }

      @media(max-width:1100px){

        .GoldMetricsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .GoldPriceChart{
          padding:0 20px 90px;
        }

        .GoldChartCard{
          padding:24px;
          border-radius:24px;
        }

        .GoldChartTop{
          flex-direction:column;
          gap:20px;
        }

        .GoldChartPrice{
          font-size:52px;
        }

        .GoldMetricsGrid{
          grid-template-columns:1fr;
        }

        .GoldMetricCard h3{
          font-size:30px;
        }

      }

      `}</style>
    </>
  );
}