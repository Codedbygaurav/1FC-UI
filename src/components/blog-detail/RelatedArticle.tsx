import {
  ArrowRight,
  Clock3,
} from "lucide-react";

const relatedArticles = [
  {
    category: "Savings",
    title: "Creating an Emergency Fund That Actually Works",
    description:
      "A practical guide to building financial security step by step.",
    readTime: "4 min read",
    image:
      "/blog/secondCard.jpeg",
  },
  {
    category: "Insurance",
    title: "Choosing the Right Insurance Coverage",
    description:
      "Understand different insurance products and how to evaluate them.",
    readTime: "6 min read",
    image:
      "/blog/thirdCard.jpeg",
  },
  {
    category: "Tax Planning",
    title: "Smart Tax Saving Strategies for Professionals",
    description:
      "Optimize your finances while staying compliant with regulations.",
    readTime: "7 min read",
    image:
      "/blog/fourthCard.jpeg",
  }
];

export default function RelatedArticles() {
  return (
    <>
      <section className="RelatedArticles">

        <div className="RelatedHeader">

          <div className="section-label">
            CONTINUE READING
          </div>

          <h2 className="section-title">
            More insights.
            <br />
            <span>Worth exploring.</span>
          </h2>

        </div>

        <div className="RelatedGrid">

          {relatedArticles.map((article, index) => (
            <article
              key={index}
              className="RelatedCard"
            >

              <div className="RelatedImage">

                <img
                  src={article.image}
                  alt={article.title}
                />

                <div className="RelatedCategory">
                  {article.category}
                </div>

              </div>

              <div className="RelatedContent">

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.description}
                </p>

                <div className="RelatedFooter">

                  <div className="RelatedMeta">

                    <Clock3 size={14} />

                    {article.readTime}

                  </div>

                  <button className="RelatedButton">

                    Read

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      <style>{`

      .RelatedArticles{
        max-width:1280px;
        margin:auto;
        padding:0 24px 140px;
      }

      .RelatedHeader{
        text-align:center;
        margin-bottom:60px;
      }

      .RelatedGrid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .RelatedCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        overflow:hidden;
        transition:.3s ease;
      }

      .RelatedCard:hover{
        transform:translateY(-8px);

        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 20px 50px rgba(11,59,54,.08);
      }

      .RelatedImage{
        position:relative;
        height:220px;
      }

      .RelatedImage img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
      }

      .RelatedCategory{
        position:absolute;
        top:16px;
        left:16px;

        background:
        rgba(11,59,54,.92);

        color:white;

        padding:8px 12px;

        border-radius:999px;

        font-size:11px;
        font-weight:700;
      }

      .RelatedContent{
        padding:24px;
      }

      .RelatedContent h3{
        margin:0 0 14px;

        font-size:24px;
        line-height:1.15;

        font-weight:800;
      }

      .RelatedContent p{
        margin:0;

        color:#667085;

        line-height:1.8;
      }

      .RelatedFooter{
        margin-top:24px;

        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .RelatedMeta{
        display:flex;
        align-items:center;
        gap:8px;

        color:#667085;
        font-size:13px;
      }

      .RelatedButton{
        border:none;
        background:none;

        display:flex;
        align-items:center;
        gap:6px;

        color:var(--color-dark-green);

        font-weight:700;

        cursor:pointer;
      }

      @media(max-width:1100px){

        .RelatedGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .RelatedArticles{
          padding:0 20px 90px;
        }

        .RelatedGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .RelatedContent{
          padding:20px;
        }

        .RelatedContent h3{
          font-size:22px;
        }

        .RelatedImage{
          height:200px;
        }

      }

      `}</style>
    </>
  );
}