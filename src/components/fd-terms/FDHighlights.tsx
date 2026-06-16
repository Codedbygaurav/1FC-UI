import {
  UserCheck,
  PiggyBank,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

const highlights = [
  {
    icon: UserCheck,
    title: "Eligibility",
    description:
      "Requirements and conditions for opening Fixed Deposits through 1FC.",
  },
  {
    icon: PiggyBank,
    title: "Deposit Rules",
    description:
      "Minimum deposit amounts, tenure options and account requirements.",
  },
  {
    icon: TrendingUp,
    title: "Interest & Returns",
    description:
      "How interest is calculated, credited and displayed across FD products.",
  },
  {
    icon: CircleDollarSign,
    title: "Premature Withdrawal",
    description:
      "Conditions, penalties and implications of withdrawing before maturity.",
  },
];

export default function FDHighlights() {
  return (
    <>
      <section className="FDHighlights">

        <div className="FDHighlightsHeader">

          <div className="section-label">
            KEY HIGHLIGHTS
          </div>

          <h2 className="section-title">
            Everything important.
            <br />
            <span>At a glance.</span>
          </h2>

          <p className="section-subtitle">
            A quick summary of the most important
            Fixed Deposit terms and disclosures.
          </p>

        </div>

        <div className="FDHighlightsGrid">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="FDHighlightCard"
              >

                <div className="FDHighlightIcon">
                  <Icon size={24} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      <style>{`

      .FDHighlights{
        max-width:1280px;
        margin:auto;
        padding:48px 24px 140px;
      }

      .FDHighlightsHeader{
        text-align:center;
        max-width:820px;
        margin:0 auto 70px;
      }

      .FDHighlightsGrid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:24px;
      }

      .FDHighlightCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:30px;
        transition:.3s ease;
      }

      .FDHighlightCard:hover{
        transform:translateY(-8px);
        border-color:var(--color-accent-lime);
        box-shadow:
          0 20px 50px rgba(11,59,54,.08);
      }

      .FDHighlightIcon{
        width:58px;
        height:58px;

        border-radius:18px;

        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:var(--color-dark-green);

        margin-bottom:22px;
      }

      .FDHighlightCard h3{
      font-family:"Geist-Bold";
      letter-spacing:1px;
      color:var(--color-dark-green);
        margin:0 0 12px;
        font-size:24px;
        line-height:1.15;
        font-weight:800;
        color:#111;
      }

      .FDHighlightCard p{
        margin:0;
        color:#667085;
        line-height:1.8;
      }

      @media(max-width:1100px){

        .FDHighlightsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .FDHighlights{
          padding:48px 20px 90px;
        }

        .FDHighlightsHeader{
          margin-bottom:40px;
        }

        .FDHighlightsGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .FDHighlightCard{
          padding:24px;
          border-radius:24px;
        }

        .FDHighlightCard h3{
          font-size:22px;
        }

        .FDHighlightIcon{
          width:52px;
          height:52px;
          margin-bottom:18px;
        }

      }

      `}</style>
    </>
  );
}