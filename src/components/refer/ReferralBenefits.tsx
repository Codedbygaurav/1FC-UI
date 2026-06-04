import {
  Activity,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Bell,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Track Every Referral",
    description:
      "Monitor every referral from invitation to successful reward completion.",
    featured: true,
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description:
      "Receive notifications whenever referral milestones are achieved.",
  },
  {
    icon: Clock3,
    title: "Fast Reward Processing",
    description:
      "Rewards are processed quickly after successful referral verification.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Sharing",
    description:
      "Share referral links safely with built-in fraud prevention measures.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Terms",
    description:
      "Clear eligibility requirements with no hidden surprises.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is available whenever you need referral assistance.",
  },
];

export default function ReferralBenefits() {
  return (
    <>
      <section className="ReferralBenefits">

        <div className="BenefitsHeader">

          <div className="section-label">
            WHY REFER
          </div>

          <h2 className="section-title">
            Built for trust.
            <br/>
            <span>Designed for growth.</span>
          </h2>

          <p className="section-subtitle">
            A referral program should be simple,
            transparent and rewarding for everyone.
          </p>

        </div>

        <div className="BenefitsGrid">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className={`BenefitCard ${
                  benefit.featured ? "FeaturedBenefit" : ""
                }`}
              >

                <div className="BenefitIcon">
                  <Icon size={24} />
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      <style>{`

      .ReferralBenefits{
        max-width:1280px;
        margin:auto;
        padding:0 24px 140px;
      }

      .BenefitsHeader{
        text-align:center;
        max-width:850px;
        margin:0 auto 70px;
      }

      .BenefitsGrid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .BenefitCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:32px;
        min-height:260px;
        transition:.3s ease;
      }

      .BenefitCard:hover{
        transform:translateY(-8px);
        border-color:var(--color-accent-lime);
        box-shadow:
          0 20px 50px rgba(11,59,54,.08);
      }

      .FeaturedBenefit{
        background:var(--color-dark-green);
        color:#fff;
        border:none;
      }

      .BenefitIcon{
        width:60px;
        height:60px;
        border-radius:18px;
        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:var(--color-dark-green);

        margin-bottom:24px;
      }

      .FeaturedBenefit .BenefitIcon{
        background:
          rgba(220,235,99,.15);

        color:
          var(--color-accent-lime);
      }

      .BenefitCard h3{
        margin:0 0 14px;
        font-size:28px;
        line-height:1.1;
        font-weight:800;
      }

      .BenefitCard p{
        margin:0;
        color:#667085;
        line-height:1.8;
      }

      .FeaturedBenefit p{
        color:rgba(255,255,255,.75);
      }

      @media(max-width:1100px){

        .BenefitsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .ReferralBenefits{
          padding:0 20px 90px;
        }

        .BenefitsHeader{
          margin-bottom:40px;
        }

        .BenefitsGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .BenefitCard{
          min-height:auto;
          padding:24px;
          border-radius:24px;
        }

        .BenefitCard h3{
          font-size:24px;
        }

        .BenefitIcon{
          width:52px;
          height:52px;
          margin-bottom:18px;
        }

      }

      `}</style>
    </>
  );
}