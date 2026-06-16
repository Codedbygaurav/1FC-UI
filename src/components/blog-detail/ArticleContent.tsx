import { Quote, Lightbulb } from "lucide-react";

export default function ArticleContent() {
  return (
    <>
      <section className="ArticleContent">

        <div className="ArticleContentContainer">

          <h2>Introduction</h2>

          <p>
            Building wealth is rarely the result of a
            single investment decision. Instead, it is
            often the outcome of consistent habits,
            disciplined investing and a long-term mindset.
          </p>

          <p>
            While market movements can be unpredictable
            in the short term, investors who stay focused
            on long-term goals often benefit from the
            power of compounding and sustained growth.
          </p>

          <div className="TakeawayCard">

            <div className="TakeawayIcon">
              <Lightbulb size={22} />
            </div>

            <div>
              <span>Key Takeaway</span>

              <h3>
                Consistency beats timing the market.
              </h3>
            </div>

          </div>

          <h2>Why Long-Term Investing Matters</h2>

          <p>
            Long-term investing allows capital to grow
            over time while reducing the impact of
            short-term market volatility. Investors who
            stay invested during market cycles are often
            better positioned to capture growth.
          </p>

          <p>
            Compounding returns can significantly
            accelerate wealth creation when investments
            remain invested for extended periods.
          </p>

          <div className="QuoteBlock">

            <Quote size={36} />

            <p>
              Time in the market is more important
              than timing the market.
            </p>

          </div>

          <h2>Common Mistakes Investors Make</h2>

          <ul>
            <li>Trying to predict short-term market movements.</li>
            <li>Making emotional investment decisions.</li>
            <li>Ignoring diversification.</li>
            <li>Investing without clear financial goals.</li>
            <li>Frequently switching strategies.</li>
          </ul>

          <h2>Building a Sustainable Strategy</h2>

          <p>
            Successful investors focus on creating a
            repeatable process. This includes regular
            investing, maintaining diversification and
            periodically reviewing long-term objectives.
          </p>

          <p>
            A sustainable strategy helps reduce emotional
            decision-making and creates a framework that
            can endure changing market conditions.
          </p>

          <h2>Conclusion</h2>

          <p>
            Wealth creation is a journey rather than a
            destination. Investors who remain disciplined,
            patient and focused on long-term goals are
            often best positioned to benefit from the
            opportunities that markets provide.
          </p>

        </div>

      </section>

      <style>{`

      .ArticleContent{
        padding:0 24px 140px;
      }

      .ArticleContentContainer{
        max-width:850px;
        margin:auto;
      }

      .ArticleContentContainer h2{
        font-size:42px;
        line-height:1;
        letter-spacing:1px;

        margin:
        70px 0 24px;

        color:#111;

        font-weight:900;
      }

      .ArticleContentContainer h2:first-child{
        margin-top:0;
      }

      .ArticleContentContainer p{
        font-size:18px;
        line-height:2;

        color:#4B5563;

        margin:0 0 24px;
      }

      .ArticleContentContainer ul{
        padding-left:22px;
        margin:0;
      }

      .ArticleContentContainer li{
        font-size:18px;
        line-height:2;
        color:#4B5563;
        margin-bottom:10px;
      }

      .TakeawayCard{
        margin:50px 0;

        background:
        var(--color-dark-green);

        color:white;

        border-radius:28px;

        padding:32px;

        display:flex;
        gap:20px;
        align-items:flex-start;
      }

      .TakeawayIcon{
        width:60px;
        height:60px;

        flex-shrink:0;

        border-radius:18px;

        background:
        rgba(220,235,99,.15);

        color:
        var(--color-accent-lime);

        display:flex;
        align-items:center;
        justify-content:center;
      }

      .TakeawayCard span{
        color:
        var(--color-accent-lime);

        font-size:12px;

        font-weight:800;

        letter-spacing:.12em;

        text-transform:uppercase;
      }

      .TakeawayCard h3{
      font-family:"Geist-Bold";
          letter-spacing: 1px;
        margin:10px 0 0;

        font-size:34px;
        line-height:1.1;

        font-weight:800;
      }

      .QuoteBlock{
        margin:60px 0;

        padding:40px;

        border-left:
        5px solid var(--color-accent-lime);

        background:#F8FAF7;

        border-radius:0 24px 24px 0;
      }

      .QuoteBlock svg{
        color:
        var(--color-dark-green);

        margin-bottom:16px;
      }

      .QuoteBlock p{
        font-size:32px;
        line-height:1.3;
        font-weight:700;

        color:#111;

        margin:0;
      }

      @media(max-width:768px){

        .ArticleContent{
          padding:0 20px 90px;
        }

        .ArticleContentContainer h2{
          font-size:30px;
          margin:50px 0 18px;
        }

        .ArticleContentContainer p,
        .ArticleContentContainer li{
          font-size:16px;
          line-height:1.9;
        }

        .TakeawayCard{
          padding:24px;
          border-radius:24px;
          flex-direction:column;
        }

        .TakeawayCard h3{
          font-size:26px;
        }

        .QuoteBlock{
          padding:24px;
        }

        .QuoteBlock p{
          font-size:24px;
        }

      }

      `}</style>
    </>
  );
}