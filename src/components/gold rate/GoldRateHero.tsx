import {
  Coins,
  TrendingUp,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function GoldRatesHero() {
  return (
    <>
      <section className="GoldHero">

        <div className="GoldHeroGrid" />

        <div className="GoldHeroContainer">

          <div className="GoldHeroLeft">

            <div className="hero-label">
              <Coins size={14} />
              Gold Rates
            </div>

            <h1 className="hero-title">
              Track gold prices.
              <br />
              Make better
              <span>{" "}decisions.</span>
            </h1>

            <p className="hero-subtext">
              Monitor live gold rates, compare purity
              levels and understand market movements
              with real-time updates and insights.
            </p>

            <div className="hero-actions">

              <button className="btn-primary">
                View Rates
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Learn More
              </button>

            </div>

            <div className="GoldHeroPills">

              <div className="tag-pill">
                <TrendingUp size={14} />
                Live Updates
              </div>

              <div className="tag-pill">
                <Coins size={14} />
                24K & 22K
              </div>

              <div className="tag-pill">
                <Clock3 size={14} />
                Daily Tracking
              </div>

            </div>

          </div>

          <div className="GoldHeroRight">

            <div className="GoldCard">

              <div className="GoldCardTop">

                <span className="GoldCardHeading">
                  Live Gold Rates
                </span>

                <div className="GoldLivePill">
                  LIVE
                </div>

              </div>

              <div className="GoldRateMain">
                ₹1,54,815
              </div>

              <div className="GoldRateLabel">
                24K Gold / 10g
              </div>

              <div className="GoldProgress" />

              <div className="GoldStats">

                <div className="GoldStat">
                  <h4>₹1,46,000</h4>
                  <p>22K Gold</p>
                </div>

                <div className="GoldStat">
                  <h4>+1.8%</h4>
                  <p>Today</p>
                </div>

                <div className="GoldStat">
                  <h4>Updated</h4>
                  <p>11:45 AM</p>
                </div>

                <div className="GoldStat">
                  <h4>India</h4>
                  <p>Market</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .GoldHero{
        position:relative;
        overflow:hidden;
        min-height:90vh;
        display:flex;
        align-items:center;
        padding:170px 20px 90px;
        background:linear-gradient(
          180deg,
          #f7f7f2 0%,
          #f4f4ee 100%
        );
      }

      .GoldHeroGrid{
        position:absolute;
        inset:0;
        opacity:.35;

        background-image:
          linear-gradient(
            rgba(11,59,54,.05) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(11,59,54,.05) 1px,
            transparent 1px
          );

        background-size:56px 56px;
      }

      .GoldHeroContainer{
        position:relative;
        z-index:2;
        max-width:1280px;
        width:100%;
        margin:auto;

        display:grid;
        grid-template-columns:1.1fr .9fr;
        gap:64px;
        align-items:center;
      }

      

      .GoldHeroPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .GoldCard{
        background:var(--color-dark-green);
        border-radius:28px;
        padding:28px;
        color:#fff;
        max-width:420px;
        margin:auto;
      }

      .GoldCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .GoldCardHeading{
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .GoldLivePill{
        background:rgba(234,226,106,.15);
        color:var(--color-accent-lime);
        padding:6px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
      }

      .GoldRateMain{
        font-size:64px;
        font-weight:900;
        color:var(--color-accent-lime);
        margin-top:18px;
      }

      .GoldRateLabel{
        font-size:18px;
        margin-top:8px;
      }

      .GoldProgress{
        height:6px;
        background:var(--color-accent-lime);
        border-radius:999px;
        margin:22px 0;
      }

      .GoldStats{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .GoldStat{
        background:rgba(255,255,255,.08);
        padding:16px;
        border-radius:16px;
      }

      .GoldStat h4{
        margin:0;
        font-size:18px;
      }

      .GoldStat p{
        margin-top:4px;
        font-size:12px;
        color:rgba(255,255,255,.7);
      }

      @media(max-width:1100px){

        .GoldHeroContainer{
          grid-template-columns:1fr;
        }

      }

      @media(max-width:768px){

        .GoldHero{
          padding:120px 20px 70px;
        }

        .GoldHeroLeft{
         max-width:100%;
          text-align:center;
        }

        .GoldHeroTitle{
          font-size:46px;
        }

        .GoldHeroActions{
          flex-direction:column;
        }

        .GoldRateMain{
        font-size:40px;
        }

        

      }

      `}</style>
    </>
  );
}