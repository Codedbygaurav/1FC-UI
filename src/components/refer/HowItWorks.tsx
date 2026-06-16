import {
  Share2,
  UserPlus,
  Gift,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Share2,
    title: "Share Your Link",
    description:
      "Invite friends and family using your unique referral link.",
  },
  {
    icon: UserPlus,
    title: "Friend Joins 1FC",
    description:
      "Your referral signs up and completes the required actions.",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description:
      "Receive rewards directly after successful referral completion.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="HowItWorks">

        <div className="HowHeader">

          <div className="section-label">
            HOW IT WORKS
          </div>

          <h2 className="section-title">
            Simple.
            <span> Rewarding.</span>
            <br />
            Transparent.
          </h2>

          <p className="section-subtitle">
            Start referring in minutes and earn
            rewards every time someone joins through you.
          </p>

        </div>

        <div className="StepsWrapper">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="StepCard"
              >

                <div className="StepTop">

                  <div className="StepIcon">
                    <Icon size={24} />
                  </div>

                  <div className="StepNumber">
                    0{index + 1}
                  </div>

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="StepArrow">
                    <ArrowRight size={22} />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </section>

      <style>{`

      .HowItWorks{
        max-width:1280px;
        margin:auto;
        padding:0 24px 140px;
      }

      .HowHeader{
        text-align:center;
        max-width:850px;
        margin:0 auto 70px;
      }

      .StepsWrapper{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .StepCard{
        position:relative;
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:32px;
        min-height:260px;
        transition:.3s ease;
      }

      .StepCard:hover{
        transform:translateY(-8px);
        border-color:var(--color-accent-lime);
        box-shadow:
          0 20px 50px rgba(11,59,54,.08);
      }

      .StepTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:24px;
      }

      .StepIcon{
        width:60px;
        height:60px;
        border-radius:18px;
        background:#F5F7F1;
        display:flex;
        align-items:center;
        justify-content:center;
        color:var(--color-dark-green);
      }

      .StepNumber{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        font-size:14px;
        font-weight:800;
        color:#98A2B3;
      }

      .StepCard h3{
        font-size:30px;
        line-height:1.1;
        margin:0 0 16px;
        color:#111;
        font-weight:800;
      }

      .StepCard p{
        color:#667085;
        line-height:1.8;
        margin:0;
      }

      .StepArrow{
        position:absolute;
        right:-36px;
        top:50%;
        transform:translateY(-50%);
        width:48px;
        height:48px;
        border-radius:50%;
        background:#fff;
        border:1px solid #ECEFF3;
        display:flex;
        align-items:center;
        justify-content:center;
        color:var(--color-dark-green);
        z-index:2;
      }

      @media(max-width:1100px){

        .StepsWrapper{
          grid-template-columns:1fr;
          gap:18px;
        }

        .StepArrow{
          display:none;
        }

      }

      @media(max-width:768px){

        .HowItWorks{
          padding:0 20px 90px;
        }

        .HowHeader{
          margin-bottom:40px;
        }

        .StepCard{
          min-height:auto;
          padding:24px;
          border-radius:24px;
        }

        .StepIcon{
          width:52px;
          height:52px;
        }

        .StepCard h3{
          font-size:24px;
        }

      }

      `}</style>
    </>
  );
}