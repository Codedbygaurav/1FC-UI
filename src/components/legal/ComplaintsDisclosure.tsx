import {
  ShieldCheck,
  FileBadge,
  Users,
  Lock,
  Scale,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Grievance Redressal",
    description:
      "Raise complaints, track resolutions and connect with our support team.",
    featured: true,
  },
  {
    icon: FileBadge,
    title: "Regulatory Disclosures",
    description:
      "Important registrations, certifications and regulatory information.",
  },
  {
    icon: Users,
    title: "Customer Rights",
    description:
      "Understand your rights, protections and responsibilities as a user.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Responsible data handling and privacy practices.",
  },
  {
    icon: Scale,
    title: "Fair Practice Code",
    description:
      "Ethical and transparent customer interactions.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Standards",
    description:
      "Internal controls aligned with industry standards.",
  },
];

export default function ComplianceDisclosure() {
  return (
    <>
      <section className="ComplianceSection">

        <div className="ComplianceHeading">

          <div className="section-label">
            TRANSPARENCY
          </div>

          <h2 className="section-title">
            Transparency beyond <br className="desktop-only"/>
            <span> the documents.</span>
          </h2>

          <p className="section-subtitle">
            Legal information is only one part of trust.
            Here's how we uphold transparency and accountability.
          </p>

        </div>

        <div className="ComplianceGrid">

          {complianceItems.map((item, index) => (
            <div
              key={index}
              className={`ComplianceCard ${
                item.featured ? "FeaturedCard" : ""
              }`}
            >
              <div className="CardIcon">
  <item.icon size={22} strokeWidth={2.2} />
</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="CardAction">
  <ArrowUpRight size={18} />
</div>
            </div>
          ))}

        </div>

      </section>

      <style>{`.ComplianceSection{
  max-width:1280px;
  margin:auto;
  padding:0 20px 40px;
}

.ComplianceHeading{
  text-align:center;
  max-width:820px;
  margin:0 auto 40px;
}

.ComplianceStats{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:60px;
}

.ComplianceStats div{
  background:#F5F7F1;
  border:1px solid #ECEFF3;
  padding:12px 18px;
  border-radius:999px;
  font-size:14px;
  font-weight:700;
  color:var(--color-dark-green);
}

.ComplianceGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
}

.ComplianceCard{
  background:#fff;
  border:1px solid #ECEFF3;
  border-radius:28px;
  padding:32px;
  min-height:280px;
  display:flex;
  flex-direction:column;
  position:relative;
  overflow:hidden;
  transition:all .3s ease;
}

.ComplianceCard:hover{
  transform:translateY(-8px);
  border-color:#EAE26A;
  box-shadow:
    0 20px 40px rgba(11,59,54,.08);
}

.FeaturedCard{
  background:var(--color-dark-green);
  border:none;
  color:#fff;
}

.FeaturedCard::before{
  content:"";
  position:absolute;
  top:-60px;
  right:-60px;
  width:180px;
  height:180px;
  border-radius:50%;
  background:rgba(220,235,99,.08);
}

.CardIcon{
  width:56px;
  height:56px;
  border-radius:16px;
  background:#F4F7F0;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--color-dark-green);
  margin-bottom:24px;
  flex-shrink:0;
}

.FeaturedCard .CardIcon{
  background:rgba(220,235,99,.15);
  color:#EAE26A;
}

.ComplianceCard h3{
  margin:0 0 14px;
  font-size:28px;
  line-height:1.15;
  font-weight:700;
  color:#111;
}

.FeaturedCard h3{
  color:#fff;
}

.ComplianceCard p{
  color:#667085;
  line-height:1.8;
  flex:1;
  margin:0;
}

.FeaturedCard p{
  color:rgba(255,255,255,.78);
}

.CardAction{
  margin-top:24px;
  width:42px;
  height:42px;
  border-radius:12px;
  background:#F5F7F1;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--color-dark-green);
  transition:.3s ease;
}

.FeaturedCard .CardAction{
  background:rgba(220,235,99,.15);
  color:#EAE26A;
}

.ComplianceCard:hover .CardAction{
  transform:translateX(4px);
}

@media(max-width:1100px){

  .ComplianceGrid{
    grid-template-columns:repeat(2,1fr);
  }

}

@media(max-width:768px){

  .ComplianceSection{
    padding:0 20px 20px;
  }

  .ComplianceHeading{
    margin-bottom:30px;
  }

  .ComplianceHeading h2{
    font-size:42px;
    letter-spacing:-1px;
  }

  .ComplianceHeading p{
    font-size:16px;
  }

  .ComplianceStats{
    gap:10px;
    margin-bottom:36px;
  }

  .ComplianceStats div{
    font-size:12px;
    padding:10px 14px;
  }

  .ComplianceGrid{
    grid-template-columns:1fr;
    gap:18px;
  }

  .ComplianceCard{
    min-height:auto;
    padding:24px;
    border-radius:24px;
  }

  .ComplianceCard h3{
    font-size:24px;
  }

  .CardIcon{
    width:52px;
    height:52px;
    margin-bottom:18px;
  }

}

@media(max-width:480px){

  .ComplianceHeading h2{
    font-size:36px;
  }

  .ComplianceStats{
    flex-direction:column;
    align-items:stretch;
  }

  .ComplianceStats div{
    text-align:center;
  }

}`}</style>
    </>
  );
}