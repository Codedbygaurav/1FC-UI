import {
  ArrowRight,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function FeaturedArticle() {
  return (
    <>
      <section className="FeaturedArticle">

        <div className="FeaturedCard">

          <div className="FeaturedImage">

            <img
              src="/blog/Featured.jpg"
              alt="Featured Article"
            />

            <div className="FeaturedBadge">
              Featured Article
            </div>

          </div>

          <div className="FeaturedContent">

            <div className="FeaturedCategory">
              <TrendingUp size={14} />
              Investing
            </div>

            <h2>
              How to Build Wealth Through
              Long-Term Investing
            </h2>

            <p>
              Discover proven investing principles,
              risk management strategies and long-term
              wealth building frameworks that can help
              you achieve your financial goals.
            </p>

            <div className="FeaturedMeta">

              <span>
                <Clock3 size={14} />
                5 min read
              </span>

              <span>
                June 2026
              </span>

            </div>

            <button className="FeaturedButton">

              Read Article

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

      <style>{`

      .FeaturedArticle{
        max-width:1280px;
        margin:auto;
        padding:48px 24px 140px;
      }

      .FeaturedCard{
        background:#fff;
        

        border:1px solid #ECEFF3;

        border-radius:32px;

        overflow:hidden;

        display:grid;
        grid-template-columns:1fr 1fr;

        box-shadow:
        0 20px 50px rgba(11,59,54,.05);
      }

      .FeaturedImage{
        position:relative;
        min-height:420px;
      }

      .FeaturedImage img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
      }

      .FeaturedBadge{
        position:absolute;
        font-family:"Geist-SemiBold";
      letter-spacing:1px;

        top:24px;
        left:24px;

        background:
        var(--color-dark-green);

        color:white;

        padding:10px 16px;

        border-radius:999px;

        font-size:12px;
        font-weight:700;
      }

      .FeaturedContent{
        padding:60px;

        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .FeaturedCategory{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        display:flex;
        align-items:center;
        gap:8px;

        color:var(--color-dark-green);

        font-weight:700;

        margin-bottom:18px;
      }

      .FeaturedContent h2{
      font-family: "Geist-Bold";
          letter-spacing:1px;
        font-size:52px;
        line-height:.95;
        
        font-weight:600;
        margin:0 0 24px;

        color:#111;
      }

      .FeaturedContent p{
        font-size:16px;
        line-height:1.6;
        font-weight:500;
        letter-spacing:-1px;
        color:#667085;
        margin:0 0 24px;

      }

      .FeaturedMeta{
        display:flex;
        gap:24px;

        margin-bottom:32px;

        color:#667085;
        font-size:14px;
      }

      .FeaturedMeta span{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        display:flex;
        align-items:center;
        gap:6px;
      }

      .FeaturedButton{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        width:fit-content;

        border:none;

        background:
        var(--color-dark-green);

        color:white;

        padding:16px 24px;

        border-radius:14px;

        font-weight:700;

        cursor:pointer;

        display:flex;
        align-items:center;
        gap:10px;
      }

      @media(max-width:1100px){

        .FeaturedCard{
          grid-template-columns:1fr;
        }

        .FeaturedImage{
          min-height:380px;
        }

      }

      @media(max-width:768px){

        .FeaturedArticle{
          padding:48px 20px 90px;
        }

        .FeaturedContent{
          padding:28px;
        }

        .FeaturedContent h2{
          font-size:34px;
        }

        .FeaturedMeta{
          flex-wrap:wrap;
          gap:12px;
        }

        .FeaturedButton{
          width:100%;
          justify-content:center;
        }

      }

      `}</style>
    </>
  );
}