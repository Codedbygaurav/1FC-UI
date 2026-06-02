import {
  TrendingUp,
  ShieldCheck,
  Calculator,
  Briefcase,
  Headphones,
  Newspaper,
  ArrowUpRight,
} from "lucide-react";

export default function WhyContactUs() {

     const cards = [
    {
      icon: <TrendingUp size={28} />,
      title: "Investment Planning",
      description:
        "Discuss investment strategies, portfolio diversification, and long-term wealth creation.",
      dark: false,
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Insurance Guidance",
      description:
        "Get help selecting insurance plans that align with your financial goals.",
      dark: true,
    },
    {
      icon: <Calculator size={28} />,
      title: "Tax Consultation",
      description:
        "Understand deductions, planning opportunities, and tax-efficient decisions.",
      dark: false,
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business Partnerships",
      description:
        "Explore strategic collaborations, integrations, and partnership opportunities.",
      dark: false,
    },
    {
      icon: <Headphones size={28} />,
      title: "Technical Support",
      description:
        "Need platform assistance? Our support specialists are ready to help.",
      dark: false,
    },
    {
      icon: <Newspaper size={28} />,
      title: "Media & Press",
      description:
        "For interviews, press releases, and media enquiries, contact our communications team.",
      dark: false,
    },
  ];
  return (
    <>
      <section className="whyContactWC">
        <div className="whyContactContainerWC">
          <div className="whyContactHeaderWC">
            <span className="section-label">
              HOW CAN WE HELP?
            </span>

            <h2 className="whyContactTitleWC">
              More than support.
              <span> Real guidance.</span>
            </h2>

            <p className="whyContactDescWC">
              Whether you're an individual, family, business,
              or partner, our specialists are available to
              help you move forward with confidence.
            </p>
          </div>

          <div className="whyContactGridWC">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`whyContactCardWC ${
                  card.dark ? "darkWC" : ""
                }`}
              >
                <div className="whyContactIconWC">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <div className="whyContactArrowWC">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .whyContactWC{
          background:var(--color-bg-ivory);
          padding:0 24px 120px;
        }

        .whyContactContainerWC{
          max-width:1280px;
          margin:0 auto;
        }

        .whyContactHeaderWC{
        text-align:center;
          margin-bottom:48px;

        }

        

        .whyContactTitleWC{
          font-size: clamp(42px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
          color: #111111;
          margin-bottom: 18px;
        }

        .whyContactTitleWC span{
          font-style: italic;
          font-family:
            "DM Serif Display",
            serif;
          font-weight: 400;
          color: #0B3B36;
        }

        .whyContactDescWC{
          color:var(--color-muted);
          line-height:1.8;
          text-align:center;
        }

        .whyContactGridWC{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:20px;
}

        .whyContactCardWC{
  background:white;
  border:1px solid var(--color-border);
  border-radius:24px;
  padding:28px;
  min-height:220px;
  display:flex;
  flex-direction:column;
  transition:.3s ease;
  position:relative;
}

.whyContactCardWC:hover{
  transform:translateY(-4px);
  box-shadow:0 18px 40px rgba(0,0,0,.06);
}

    

        .darkWC{
          background:linear-gradient(
            135deg,
            var(--color-dark-green),
            var(--color-secondary-green)
          );
          border:none;
        }

        .darkWC h3{
          color:white !important;
        }

        .darkWC p{
          color:rgba(255,255,255,.75) !important;
        }

        .darkWC .whyContactIconWC{
          background:rgba(220,235,99,.15);
          color:var(--color-accent-lime);
        }

        .darkWC .whyContactArrowWC{
          color:var(--color-accent-lime);
        }

        .whyContactIconWC{
  width:58px;
  height:58px;
  border-radius:16px;
  background:rgba(11,59,54,.08);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#0B3B36;
  margin-bottom:20px;
}

        .whyContactCardWC h3{
          font-size:1.5rem;
          margin-bottom:14px;
          color:var(--color-text-primary);
          font-weight:700;
        }

        .whyContactCardWC p{
          color:var(--color-muted);
          line-height:1.8;
          flex:1;
        }

        .whyContactArrowWC{
          margin-top:24px;
          color:var(--color-dark-green);
        }

       @media(max-width:1024px){

  .whyContactGridWC{
    grid-template-columns:repeat(2,1fr);
  }

  .wideWC{
    grid-column:span 2;
  }
}

@media(max-width:768px){

  .whyContactWC{
    padding:0 20px 70px;
  }

  .whyContactGridWC{
    grid-template-columns:1fr;
    gap:14px;
  }



  .whyContactCardWC{
    min-height:auto;
    padding:22px;
  }

  .whyContactTitleWC{
    font-size:2.3rem;
  }
}

@media(max-width:480px){

  .whyContactWC{
    padding:0 16px 50px;
  }

  .whyContactTitleWC{
    font-size:1.9rem;
  }

  .whyContactCardWC{
    padding:18px;
    border-radius:20px;
  }

  .whyContactIconWC{
    width:48px;
    height:48px;
  }

  .whyContactCardWC h3{
    font-size:1.15rem;
  }

  .whyContactCardWC p{
    font-size:14px;
    line-height:1.6;
  }
}
      `}</style>
    </>
  )
}

    

