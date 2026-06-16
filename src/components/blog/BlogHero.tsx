import {
  BookOpen,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  ArrowRight,
} from "lucide-react";

export default function BlogHero() {
  return (
    <>
      <section className="BlogHero">

        <div className="BlogHeroGrid" />

        <div className="BlogHeroContainer">

          <div className="BlogHeroLeft">

            <div className="hero-label">
              <BookOpen size={14} />
              1FC Insights
            </div>

            <h1 className="hero-title">
              Financial knowledge.
              <br />
              Made
              <span>{" "}practical.</span>
            </h1>

            <p className="hero-subtext">
              Explore expert insights, practical guides and
              financial strategies designed to help you make
              smarter decisions with confidence.
            </p>

            <div className="hero-actions">

              <button className="btn-primary">
                Explore Articles
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Latest Updates
              </button>

            </div>

            <div className="BlogHeroPills">

              <div className="tag-pill">
                <TrendingUp size={14} />
                Investing
              </div>

              <div className="tag-pill">
                <PiggyBank size={14} />
                Savings
              </div>

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Insurance
              </div>

              <div className="tag-pill">
                <BookOpen size={14} />
                Planning
              </div>

            </div>

          </div>

          <div className="BlogHeroRight">

            <div className="BlogCard">

              <div className="BlogCardTop">

                <span className="BlogCardHeading">
                  <BookOpen size={15} />
                  Featured Topic
                </span>

                <div className="BlogLivePill">
                  Weekly
                </div>

              </div>

              <div className="BlogMainValue">
                Insights
              </div>

              <div className="BlogMainLabel">
                Financial Education
              </div>

              <div className="BlogProgressBar" />

              <div className="BlogStatsGrid">

                <div className="BlogStatCard">
                  <h4>12+</h4>
                  <p>Articles</p>
                </div>

                <div className="BlogStatCard">
                  <h4>Weekly</h4>
                  <p>Updates</p>
                </div>

                <div className="BlogStatCard">
                  <h4>Expert</h4>
                  <p>Insights</p>
                </div>

                <div className="BlogStatCard">
                  <h4>Practical</h4>
                  <p>Guides</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .BlogHero{
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

      .BlogHeroGrid{
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

      .BlogHeroContainer{
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

      .BlogHeroLeft{
        max-width:650px;
      }


      .BlogHeroPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .BlogHeroRight{
        display:flex;
        justify-content:center;
      }

      .BlogCard{
        width:100%;
        max-width:420px;
        background:var(--color-dark-green);
        border-radius:28px;
        padding:28px;
        color:white;
        box-shadow:
        0 24px 70px rgba(11,59,54,.18);
      }

      .BlogCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .BlogCardHeading{
      font-family:"Geist-SemiBold";
          letter-spacing: 1px;
        display:flex;
        align-items:center;
        gap:8px;
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .BlogLivePill{
        background:rgba(220,235,99,.12);
        color:var(--color-accent-lime);
        padding:6px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
      }

      .BlogMainValue{
      font-family:"Geist-Bold";
          letter-spacing: 1px;
        font-size:64px;
        font-weight:900;
        color:var(--color-accent-lime);
        margin-top:18px;
        line-height:1;
      }

      .BlogMainLabel{
        font-size:20px;
        margin-top:8px;
      }

      .BlogProgressBar{
        height:6px;
        border-radius:999px;
        background:var(--color-accent-lime);
        margin:22px 0;
      }

      .BlogStatsGrid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .BlogStatCard{
        background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:16px;
      }

      .BlogStatCard h4{
        margin:0;
        font-size:18px;
      }

      .BlogStatCard p{
        margin-top:4px;
        color:rgba(255,255,255,.7);
        font-size:12px;
      }

      @media(max-width:1100px){

        .BlogHero{
          min-height:auto;
          padding:140px 20px 90px;
        }

        .BlogHeroContainer{
          grid-template-columns:1fr;
        }

        .BlogHeroLeft{
          max-width:100%;
          text-align:center;
        }

        .BlogHeroSubtitle{
          margin-inline:auto;
        }

        .BlogHeroActions{
          justify-content:center;
        }

        .BlogHeroPills{
          justify-content:center;
        }

      }

      @media(max-width:768px){

        .BlogHero{
          padding:120px 20px 70px;
        }

        .BlogMainValue{
        font-size:40px;
        }

        .BlogHeroTitle{
          font-size:46px;
        }

        .BlogHeroActions{
          flex-direction:column;
        }

      }

      `}</style>
    </>
  );
}