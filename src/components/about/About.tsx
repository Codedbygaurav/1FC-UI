"use client";

import GroupStructure from "./GroupStructure";
import {Crown, Building2} from "lucide-react"

type PersonAP = {
  name: string;
  role: string;
  description: string;
  email: string;
  image: string;
  main?: boolean;
};

const peopleAP: PersonAP[] = [
  {
    name: "Mr. Rishabh M. Shah",
    role: "Founder & Group CEO 1FC Group of Companies",
    description:
      "Rishabh is a thorough finance professional with 16+ years of experience in banking and investment. He is a strong advocate of financial literacy and disciplined financial management in India, especially for youth. He is passionate about strengthening India’s financial systems and believes that with the right financial attitudes we can bring India to its topmost financial peak and glory.",
    email: "ceodesk@1fcode.com",
    image: "/rishabh.png",
    main: true,
  },
  {
    name: "Ms. Kinjal K. Mehta",
    role: "Director",
    description:
      "Kinjal brings strategic insight to business with her hands-on approach to marketing and operations at 1FC. With over a decade of experience in product marketing, educational program coordination, and financial management, she owns a robust skill set across cross functional collaboration, marketing strategy, and customer engagement.",
    email: "kinjal.mehta@1fcode.com",
    image: "/kinjal.webp",
  },
  {
    name: "Ms. Meghna M. Shah",
    role: "Director",
    description:
      "Meghna is a seasoned professional with extensive experience in programming, project management and marketing operations. She leads business and technology outcomes, stakeholder coordination, and ensures quality monitoring processes with academic foundation in sociology.",
    email: "meghna.shah@1fcode.com",
    image: "/meghana.webp",
  },
];

const supportPeopleAP = [
  {
    name: "Mr. Swaroop Panakkada",
    role: "Compliance & Regulatory Affairs",
    email: "swaroop.panakkada@1fcode.com",
    image: "/otSwaroopPanakkada.webp",
  },
  {
    name: "Mr. Utkarsh B. Shah",
    role: "Risk Management (RMS)",
    email: "utkarsh.shah@1fcode.com",
    image: "/otUtkarshShah.webp",
  },
  {
    name: "Mr. Pratik C. Shah",
    role: "Information Technology",
    email: "pratik.shah@1fcode.com",
    image: "/otPratikShah.webp",
  },
  {
    name: "Ms. Maitri J. Ghelani",
    role: "KYC & Client Onboarding",
    email: "maitri.ghelani@1fcode.com",
    image: "/otMaitriGhelani.webp",
  },
];

export default function AboutPage() {
  const founderAP = peopleAP.find((p) => p.main);
  const directorsAP = peopleAP.filter((p) => !p.main);

  return (
    <>
      <style>{`
        .aboutPageAP {
          background: var(--color-bg-ivory);
          color: var(--color-text-primary);
          overflow: hidden;
        }

        .aboutContainerAP {
          max-width: 1280px;
        }

        .heroSectionAP {
          padding: 160px 0 72px;
          background:
            linear-gradient(rgba(11,59,54,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,59,54,0.04) 1px, transparent 1px),
            radial-gradient(circle at top right, rgba(220,235,99,0.10), transparent 28%),
            var(--color-bg-ivory);
          background-size: 42px 42px;
        }

        .heroGridAP {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 56px;
          align-items: center;
        }

        .eyebrowAP {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(11,59,54,0.05);
          border: 1px solid rgba(11,59,54,0.06);
          color: var(--color-dark-green);
          margin-bottom: 20px;
        }

        

        

        .heroVisualAP {
          display: grid;
          gap: 16px;
        }

        .heroVisualCardAP {
          padding: 24px;
          border-radius: 28px;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(11,59,54,0.08);
          box-shadow: 0 18px 50px rgba(11,59,54,0.05);
        }

        .heroVisualCardAP.mainAP {
          background: var(--color-dark-green);
          color: white;
        }

        .heroVisualCardAP span {
          display: block;
          color: var(--color-dark-green);
          margin-bottom: 12px;
        }

        .heroVisualCardAP.mainAP span {
          color: var(--color-accent-lime);
        }

        .heroVisualCardAP strong {
          display: block;
          color: var(--color-text-primary);
        }

        .heroVisualCardAP.mainAP strong {
          color: white;
        }

        .sectionAP {
          padding: 74px 0 82px;
        }

        .sectionEyebrowAP {
          margin: 0 0 12px;
          color: var(--color-dark-green);
        }

        

        

        

        .founderWrapAP {
          margin-top: 36px;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 34px;
          align-items: center;
          padding: 28px;
          border-radius: 28px;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(11,59,54,0.08);
          box-shadow: 0 18px 50px rgba(11,59,54,0.045);
        }

        .founderImageWrapAP {
          height: 340px;
          border-radius: 24px;
          overflow: hidden;
          background: #f2f3ef;
        }

        .founderImageAP {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .founderBadgeAP {
        font-family: "Geist-Bold";
          letter-spacing:1px;
          font-size:10px;
          display: inline-flex;
          align-items:center;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(11,59,54,0.06);
          color: var(--color-dark-green);
          margin-bottom: 4px;
        }
        .founderBadgeAP p{
        padding:0 8px; 
        }

        .founderNameAP {
          margin: 0;
          font-size:40px;
          font-family: "Geist-Bold";
          letter-spacing:1px;
        }

        .founderRoleAP {
        font-family:"Geist-SemiBold";
          margin: 12px 0 0;
          color: var(--color-secondary-green);
          font-weight: 700;
        }

        .founderDescAP {
        line-height: 1.6;
          margin: 18px 0 0;
        }

        .founderEmailAP,
        .supportEmailAP {
          color: var(--color-dark-green);
          font-weight: 700;
          text-decoration: none;
        }

        .founderEmailAP {
        font-family:"Geist-Bold"
          display: inline-flex;
          margin-top: 18px;
          font-size: 13px;
        }
          .directorEmailAP {
          font-family:"Geist-Bold"
  display: inline-flex;
  margin-top: 14px;
  color: var(--color-dark-green);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  word-break: break-word;
}


  .AboutHeading{
  font-size: 48px;
  }

        .directorGridAP {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
        }

        .directorCardAP {
          padding: 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.74);
          border: 1px solid rgba(11,59,54,0.08);
        }

        .directorTopAP {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .directorImageAP {
          width: 68px;
          height: 68px;
          border-radius: 16px;
          object-fit: cover;
        }

        .directorNameAP {
        font-family: "Geist-Bold";
          letter-spacing:1px;
          margin: 0;
          font-size:25px;
        }

        .directorRoleAP {
        font-family:"Geist-SemiBold";
          margin: 6px 0 0;
          color: var(--color-secondary-green);
          font-size: 15px;
          font-weight: 700;
        }

        .directorDescAP {
        line-height: 1.5;
          margin: 0;
        }

        .supportSectionAP {
          margin-top: 58px;
          padding-top: 36px;
          border-top: 1px solid rgba(11,59,54,0.08);
        }

        .supportGridAP {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          justify-items: center;
        }

        .supportCardAP {
          width: 100%;
          text-align: center;
          padding: 18px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.42);
          border: 1px solid rgba(11,59,54,0.06);
        }

        .supportImageAP {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 12px;
        }

        .supportNameAP {
        font-family: "Geist-Bold";
          letter-spacing:1px;
          margin: 0;
        }

        .supportRoleAP {
          margin: 7px 0 0;
          color: #666666;
          font-size: 11px;
          line-height: 1.5;
        }

        .supportEmailAP {
          display: inline-flex;
          margin-top: 12px;
          font-size: 10px;
          word-break: break-word;
        }
      

  @media (max-width: 1024px) {

  .heroSectionAP {
    padding: 145px 0 72px;
  }

  .heroGridAP {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .heroContentAP {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .heroTitleAP {
    font-size: clamp(52px, 6vw, 64px);
  }

  

  .heroVisualAP {
    max-width: 820px;
    margin: 0 auto;
    width: 100%;
  }

  .heroVisualCardAP {
    padding: 24px;
  }

  .founderWrapAP {
    grid-template-columns: 280px 1fr;
    gap: 28px;
  }

  .supportGridAP {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {

  .heroSectionAP {
    padding: 120px 0 64px;
    background-size: 32px 32px;
  }

  .aboutContainerAP {
    padding: 0 20px;
  }

  .heroGridAP {
    gap: 32px;
  }

  .heroContentAP {
    text-align: center;
  }

  .heroTitleAP {
    font-size: 46px;
    line-height: 0.95;
    margin: 16px 0;
  }

  .heroTitleDescAP,
  .heroTitleDesc {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .heroVisualCardAP {
    padding: 20px;
    border-radius: 24px;
  }

  .sectionAP {
    padding: 72px 0;
  }

  .AboutHeading {
    font-size: 44px;
    line-height: 1;
  }

  .founderWrapAP {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 22px;
    border-radius: 24px;
  }
    .founderNameAP{
    line-height:1;
    font-size:25px;
    margin-top:4px;
    }

  .founderImageWrapAP {
    height: 320px;
  }

  .founderRoleAP {
    font-size: 10px;
    
  }

  .founderDescAP {
    font-size: 14px;
    line-height: 1.6;
  }

  .directorGridAP {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .directorCardAP {
    padding: 20px;
    border-radius: 20px;
  }

  .directorImageAP {
    width: 60px;
    height: 60px;
  }
    .directorNameAP{
    font-size:17px;
    }

  .directorDescAP {
    font-size: 13px;
    line-height: 1.6;
  }

  .directorEmailAP{
    font-size: 13px;
  }
  .directorRoleAP{
  font-size:14px;
  }

  .supportSectionAP {
    margin-top: 48px;
    padding-top: 32px;
  }

  .supportGridAP {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .supportCardAP {
    padding: 18px;
    border-radius: 18px;
  }
}



      `}</style>

      <main className="aboutPageAP">
        <section className="heroSectionAP">
          <div className="container-main aboutContainerAP">
            <div className="heroGridAP">
              <div className="heroContentAP">
                <div className="hero-label">
                  <Building2 size={14}/>
                   About Us
                   
                   </div>

                <h1 className="hero-title">
                  Building financial clarity for modern Indian{" "}
                  <span>
                    families.
                  </span>
                </h1>

                <p className="hero-subtext">
                  1FC brings together financial literacy, disciplined planning
                  and trusted leadership to help families and businesses make
                  clearer long-term decisions.
                </p>
              </div>

              <div className="heroVisualAP">
                <div className="heroVisualCardAP mainAP">
                  <span className="text-label">16+ Years</span>
                  <strong className="text-card-title-lg">
                    Finance leadership
                  </strong>
                </div>

                <div className="heroVisualCardAP">
                  <span className="text-label">1FC Group</span>
                  <strong className="text-card-title-lg">
                    Technology + advisory ecosystem
                  </strong>
                </div>

                <div className="heroVisualCardAP">
                  <span className="text-label">Focus</span>
                  <strong className="text-card-title-lg">
                    Indian families & businesses
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionAP">
           <div
  style={{
    textAlign: "center",
    marginBottom: "42px",
  }}
>
  <div className="section-label">
    Leadership Team
  </div>

  <h2 className="section-title">
    People driving the
    <span>
     {" "} vision.
    </span>
  </h2>
</div>
          <div className="container-main aboutContainerAP">
           

            {founderAP && (
              <article className="founderWrapAP">
                <div className="founderImageWrapAP">
                  <img
                    src={founderAP.image}
                    alt={founderAP.name}
                    className="founderImageAP"
                  />
                </div>

                <div>
                  <div className="founderBadgeAP text-label">
  <Crown size={14}/>
  <p>Founder & Group CEO</p>
</div>
                  <h2 className="founderNameAP text-section-sm">
                    {founderAP.name}
                  </h2>

                  <p className="founderRoleAP text-body-sm">{founderAP.role}</p>

                  <p className="founderDescAP text-body-sm">
                    {founderAP.description}
                  </p>

                  <a
                    href={`mailto:${founderAP.email}`}
                    className="founderEmailAP"
                  >
                    {founderAP.email}
                  </a>
                </div>
              </article>
            )}

            <div className="directorGridAP">
              {directorsAP.map((personAP) => (
                <article key={personAP.email} className="directorCardAP">
                  <div className="directorTopAP">
                    <img
                      src={personAP.image}
                      alt={personAP.name}
                      className="directorImageAP"
                    />

                    <div>
                      <h3 className="directorNameAP text-card-title-lg">
                        {personAP.name}
                      </h3>

                      <p className="directorRoleAP">{personAP.role}</p>
                    </div>
                  </div>

                  <p className="directorDescAP text-body-sm">
                    {personAP.description}
                  </p>
                  <a
  href={`mailto:${personAP.email}`}
  className="directorEmailAP"
>
  {personAP.email}
</a>
                </article>
              ))}
            </div>

            <div className="supportSectionAP">
              <div
  style={{
    textAlign: "center",
    marginBottom: "42px",
  }}
>
  <div className="section-label">
    Extended Team
  </div>

  <h2 className="section-title">
    Specialists supporting the
    <span>
      {" "}ecosystem
    </span>
  </h2>
</div>

              <div className="supportGridAP">
                {supportPeopleAP.map((personAP) => (
                  <article key={personAP.email} className="supportCardAP">
                    <img
                      src={personAP.image}
                      alt={personAP.name}
                      className="supportImageAP"
                    />

                    <div>
                      <h4 className="supportNameAP text-card-title">
                        {personAP.name}
                      </h4>

                      <p className="supportRoleAP">{personAP.role}</p>

                      <a
                        href={`mailto:${personAP.email}`}
                        className="supportEmailAP"
                      >
                        {personAP.email}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GroupStructure />
      </main>
    </>
  );
}