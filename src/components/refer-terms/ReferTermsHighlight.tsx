import {
  UserCheck,
  Gift,
  Users,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: UserCheck,
    title: "Eligibility",
    description:
      "Understand who can participate in the referral program and qualify for rewards.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    description:
      "Learn how rewards are earned, tracked and distributed to eligible participants.",
  },
  {
    icon: Users,
    title: "Qualified Referrals",
    description:
      "See what actions a referred user must complete for a referral to qualify.",
  },
  {
    icon: ShieldCheck,
    title: "Program Rules",
    description:
      "Review the guidelines that help ensure fair and transparent participation.",
  },
];

export default function ReferTermsHighlight() {
  return (
    <>
      <section className="ReferTermsHighlights">

        <div className="ReferTermsHighlightsHeader">

          <div className="section-label">
            PROGRAM OVERVIEW
          </div>

          <h2 className="section-title">
            Referral terms.
            <br />
            <span>Made simple.</span>
          </h2>

          <p className="section-subtitle">
            Everything you need to understand
            before participating in the Refer & Earn
            program.
          </p>

        </div>

        <div className="ReferTermsHighlightsGrid">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="ReferTermsHighlightCard"
              >

                <div className="ReferTermsHighlightIcon">
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

      .ReferTermsHighlights{
        max-width:1280px;
        margin:auto;
        padding:48px 24px 140px;
      }

      .ReferTermsHighlightsHeader{
        text-align:center;
        max-width:820px;
        margin:0 auto 70px;
      }

      .ReferTermsHighlightsGrid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:24px;
      }

      .ReferTermsHighlightCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:30px;
        transition:.3s ease;
      }

      .ReferTermsHighlightCard:hover{
        transform:translateY(-8px);

        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 20px 50px rgba(11,59,54,.08);
      }

      .ReferTermsHighlightIcon{
        width:58px;
        height:58px;

        border-radius:18px;

        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:
        var(--color-dark-green);

        margin-bottom:22px;
      }

      .ReferTermsHighlightCard h3{
        margin:0 0 12px;

        font-size:24px;
        line-height:1.15;
        font-weight:800;

        color:#111;
      }

      .ReferTermsHighlightCard p{
        margin:0;

        color:#667085;

        line-height:1.8;
      }

      @media(max-width:1100px){

        .ReferTermsHighlightsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .ReferTermsHighlights{
          padding:48px 20px 90px;
        }

        .ReferTermsHighlightsHeader{
          margin-bottom:40px;
        }

        .ReferTermsHighlightsGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .ReferTermsHighlightCard{
          padding:24px;
          border-radius:24px;
        }

        .ReferTermsHighlightCard h3{
          font-size:22px;
        }

        .ReferTermsHighlightIcon{
          width:52px;
          height:52px;
          margin-bottom:18px;
        }

      }

      `}</style>
    </>
  );
}