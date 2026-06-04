import {
  Database,
  Workflow,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Information We Collect",
    description:
      "The information required to provide services, improve experiences and maintain account security.",
  },
  {
    icon: Workflow,
    title: "How We Use Data",
    description:
      "How collected information helps us deliver products, support users and improve our platform.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "The safeguards and security measures we use to protect personal information.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    description:
      "The controls and choices available to you regarding your personal information.",
  },
];

export default function PrivacyHighlights() {
  return (
    <>
      <section className="PrivacyHighlights">

        <div className="PrivacyHighlightsHeader">

          <div className="section-label">
            KEY HIGHLIGHTS
          </div>

          <h2 className="section-title">
            Privacy.
            <br />
            <span>Without the jargon.</span>
          </h2>

          <p className="section-subtitle">
            A simple overview of how we handle,
            protect and respect your information.
          </p>

        </div>

        <div className="PrivacyHighlightsGrid">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="PrivacyHighlightCard"
              >

                <div className="PrivacyHighlightIcon">
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

      .PrivacyHighlights{
        max-width:1280px;
        margin:auto;
        padding:48px 24px 40px;
      }

      .PrivacyHighlightsHeader{
        text-align:center;
        max-width:820px;
        margin:0 auto 70px;
      }

      .PrivacyHighlightsGrid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:24px;
      }

      .PrivacyHighlightCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:30px;
        transition:.3s ease;
      }

      .PrivacyHighlightCard:hover{
        transform:translateY(-8px);
        border-color:var(--color-accent-lime);
        box-shadow:
          0 20px 50px rgba(11,59,54,.08);
      }

      .PrivacyHighlightIcon{
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

      .PrivacyHighlightCard h3{
        margin:0 0 12px;
        font-size:24px;
        line-height:1.15;
        font-weight:800;
        color:#111;
      }

      .PrivacyHighlightCard p{
        margin:0;
        color:#667085;
        line-height:1.8;
      }

      @media(max-width:1100px){

        .PrivacyHighlightsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .PrivacyHighlights{
          padding:48px 20px 20px;
        }

        .PrivacyHighlightsHeader{
          margin-bottom:40px;
        }

        .PrivacyHighlightsGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .PrivacyHighlightCard{
          padding:24px;
          border-radius:24px;
        }

        .PrivacyHighlightCard h3{
          font-size:22px;
        }

        .PrivacyHighlightIcon{
          width:52px;
          height:52px;
          margin-bottom:18px;
        }

      }

      `}</style>

    </>
  );
}