import {
  ShieldCheck,
  Gift,
  FileText,
  Landmark,
  ArrowRight,
} from "lucide-react";

const legalDocuments = [
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    description:
      "Learn how we collect, use and protect your personal and financial information.",
    button: "Read Policy",
    href: "/privacy-policy",
  },
  {
    icon: Gift,
    title: "Refer & Earn Terms",
    description:
      "Terms governing referrals, rewards, eligibility and program usage.",
    button: "Read Terms",
    href: "/refer-and-earn-terms",
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description:
      "The rules, obligations and agreements that apply to platform usage.",
    button: "Read Terms",
    href: "/terms-and-conditions",
  },
  {
    icon: Landmark,
    title: "FD Terms",
    description:
      "Important disclosures, conditions and policies for fixed deposits.",
    button: "Read Terms",
    href: "/fd-terms",
  },
];

export default function LegalDocuments() {
  return (
    <>
      <section className="LegalDocs">

        <div className="SectionHeading">

          <div className="section-label">
            LEGAL DOCUMENTS
          </div>

          <h2 className="section-title">
            Everything important. <br className="desktop-only"/>
            <span> Nothing hidden.</span>
          </h2>

          <p className="section-subtitle">
            Quick access to the documents that define
            our policies, commitments and responsibilities.
          </p>

        </div>

        <div className="DocsGrid">

          {legalDocuments.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="DocCard"
            >

              <div className="DocIcon">
                <doc.icon size={26} strokeWidth={2.2} />
              </div>

              <h3>{doc.title}</h3>

              <p>{doc.description}</p>

              <button className="DocButton">
  {doc.button}
  <ArrowRight size={16} />
</button>

            </a>
          ))}

        </div>

      </section>

      <style>{`

      .LegalDocs{
        max-width:1280px;
        margin:auto;
        padding:0 20px 140px;
      }

      .SectionHeading{
        text-align:center;
        max-width:850px;
        margin:0 auto 70px;
      }

      

      

      

      

      

      .DocsGrid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:24px;
      }

      .DocCard{
        background:white;
        border-radius:24px;
        border:1px solid #ECEFF3;
        padding:26px;
        text-decoration:none;
        color:inherit;
        transition:.3s;
        display:flex;
        flex-direction:column;
      }

      .DocCard:hover{
        transform:translateY(-6px);
        box-shadow:0 20px 50px rgba(0,0,0,.05);
      }

      .DocIcon{
  width:56px;
  height:56px;
  border-radius:16px;
  background:#F4F7F0;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  color:var(--color-dark-green);
  flex-shrink:0;
}

.DocCard:hover .DocIcon{
  background:var(--color-dark-green);
  color:var(--color-accent-lime);
  transition:.3s ease;
}

      .DocCard h3{
        margin:0;
        font-size:28px;
        line-height:1.15;
        color:#111;
        font-weight:700;
      }

      .DocCard p{
        margin-top:14px;
        color:#667085;
        line-height:1.7;
        flex:1;
      }

      .DocButton{
  margin-top:26px;
  height:52px;
  border:none;
  border-radius:14px;
  background:var(--color-dark-green);
  color:white;
  font-weight:700;
  cursor:pointer;
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;

  transition:.3s ease;
}

.DocCard:hover .DocButton{
  transform:translateY(-2px);
}

      @media(max-width:1100px){

        .DocsGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .LegalDocs{
          padding:0 20px 90px;
        }

        .SectionHeading{
          margin-bottom:40px;
        }

        .SectionHeading h2{
          font-size:42px;
        }

        .SectionHeading p{
          font-size:16px;
        }

        .DocsGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .DocCard{
          padding:22px;
        }

        .DocCard h3{
          font-size:24px;
        }

      }

      `}</style>
    </>
  );
}