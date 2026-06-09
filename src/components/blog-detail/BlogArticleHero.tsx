import {
  Calendar,
  Clock3,
  BookOpen,
} from "lucide-react";

export default function BlogArticleHero() {
  return (
    <>
      <section className="BlogArticleHero">

        <div className="BlogArticleGrid" />

        <div className="BlogArticleContainer">

          <div className="BlogArticleMeta">

            <span className="BlogCategory">
              <BookOpen size={14} />
              Investing
            </span>

            <span>
              <Clock3 size={14} />
              5 min read
            </span>

            <span>
              <Calendar size={14} />
              June 9, 2026
            </span>

          </div>

          <h1 className="BlogArticleTitle">
            How to Build Wealth
            Through Long-Term
            Investing
          </h1>

          <p className="BlogArticleSubtitle">
            Discover proven investment principles,
            long-term strategies and practical habits
            that can help you create sustainable wealth.
          </p>

          <div className="BlogAuthor">

            <div className="BlogAuthorAvatar">
              1FC
            </div>

            <div>
              <h4>1FC Insights Team</h4>
              <p>Financial Education</p>
            </div>

          </div>

        </div>

      </section>

      <style>{`

      .BlogArticleHero{
        position:relative;
        overflow:hidden;

        padding:180px 20px 90px;

        background:
        linear-gradient(
          180deg,
          #f7f7f2 0%,
          #f4f4ee 100%
        );
      }

      .BlogArticleGrid{
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

      .BlogArticleContainer{
        position:relative;
        z-index:2;

        max-width:1000px;
        margin:auto;
      }

      .BlogArticleMeta{
        display:flex;
        flex-wrap:wrap;
        gap:18px;

        margin-bottom:28px;
      }

      .BlogArticleMeta span{
        display:flex;
        align-items:center;
        gap:8px;

        color:#667085;

        font-size:13px;
        font-weight:600;
      }

      .BlogCategory{
        color:var(--color-dark-green)!important;
        font-weight:700!important;
      }

      .BlogArticleTitle{
        font-size:clamp(48px,7vw,96px);

        line-height:1;

        letter-spacing:-.06em;

        margin:0 0 24px;

        font-weight:900;

        color:#111;
      }

      .BlogArticleSubtitle{
        max-width:700px;

        color:#667085;

        font-size:18px;

        line-height:1.9;

        margin-bottom:36px;
      }

      .BlogAuthor{
        display:flex;
        align-items:center;
        gap:16px;
      }

      .BlogAuthorAvatar{
        width:56px;
        height:56px;

        border-radius:50%;

        background:
        var(--color-dark-green);

        color:white;

        display:flex;
        align-items:center;
        justify-content:center;

        font-weight:800;
      }

      .BlogAuthor h4{
        margin:0;
        font-size:16px;
      }

      .BlogAuthor p{
        margin-top:4px;
        color:#667085;
        font-size:13px;
      }

      @media(max-width:768px){

        .BlogArticleHero{
          padding:140px 20px 70px;
        }

        .BlogArticleTitle{
          font-size:48px;
        }

        .BlogArticleSubtitle{
          font-size:16px;
        }

        .BlogArticleMeta{
          gap:12px;
        }

      }

      `}</style>
    </>
  );
}