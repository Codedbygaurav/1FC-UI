import { ArrowRight, Check, LayoutDashboard, Mail, Phone, Scale, Send } from "lucide-react";

export default function LegalHero() {
  const pills = [
    { icon: Check, text: "Transparent" },
    { icon: Check, text: "Secure" },
    { icon: Check, text: "Compliant" },
    { icon: Check, text: "Customer First" },
  ];
  return (
    <>
      <section className="LegalHero">
        <div className="hero-left">
          <div className="hero-label">
            <Scale size={14} />
            Legal Center
          </div>

          <h1 className="hero-title">
            Policies, terms
            <br />
            and disclosures
            <br />
            made <span>clear</span>
          </h1>

          <p className="hero-subtext">
            Everything you need to understand how 1FC operates, protects your
            data and governs its products and services.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Explore Documents
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              <Mail size={18} />
              Contact Us
            </button>
          </div>
          <div className="ph-hero-pills">
  {pills.map((pill) => (
    <div key={pill.text} className="tag-pill">
      <pill.icon size={14} />
      {pill.text}
    </div>
  ))}
</div>
          
        </div>

        <div className="HeroCardWrap">
          <div className="HeroCard">
            <div className="CardHeader">
              <span>Legal Overview</span>
              <div className="LiveTag">Active</div>
            </div>

            <div className="BigStat">4</div>

            <div className="StatLabel">Legal Documents</div>

            <div className="ProgressBar">
              <span />
            </div>

            <div className="StatsGrid">
              <div className="StatItem">
                <h3>100%</h3>
                <p>Transparency</p>
              </div>

              <div className="StatItem">
                <h3>24h</h3>
                <p>Response SLA</p>
              </div>

              <div className="StatItem">
                <h3>SEBI</h3>
                <p>Aligned</p>
              </div>

              <div className="StatItem">
                <h3>Safe</h3>
                <p>Data Handling</p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <style>{`

      .LegalHero{
        max-width:1280px;
        margin:auto;
        padding:150px 20px 140px;
        display:grid;
        grid-template-columns:1fr 520px;
        gap:80px;
        align-items:center;
      }

      .ph-hero-pills{
  display:flex;
  flex-wrap:wrap;
  width:1000px;
  gap:16px;
  margin-bottom:28px;
  margin-top:28px;
}
      

      .HeroCardWrap{
        position:relative;
      }

      .HeroCard{
        background:#0B3B36;
        border-radius:28px;
        padding:32px;
        color:white;
        position:relative;
        z-index:1;
      }

      .CardHeader{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .CardHeader span{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:13px;
        color:Var(--color-accent-lime);
      }

      .LiveTag{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        background:#EAE26A;
        color:#0B3B36;
        font-size:11px;
        font-weight:700;
        padding:6px 10px;
        border-radius:999px;
      }

      .BigStat{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:92px;
        font-weight:800;
        line-height:1;
        margin-top:20px;
        color:var(--color-accent-lime);
      }

      .StatLabel{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        font-size:22px;
        font-weight:600;
      }

      .ProgressBar{
        height:6px;
        background:rgba(255,255,255,.15);
        border-radius:999px;
        margin:26px 0;
        overflow:hidden;
      }

      .ProgressBar span{
        display:block;
        width:100%;
        height:100%;
        background:#EAE26A;
      }

      .StatsGrid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:14px;
      }

      .StatItem{
        background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:18px;
      }

      .StatItem h3{
        margin:0;
        font-size:28px;
      }

      .StatItem p{
        margin:6px 0 0;
        font-size:13px;
        color:rgba(255,255,255,.7);
      }

      

      @media(max-width:991px){

        .LegalHero{
          grid-template-columns:1fr;
          gap:50px;
          padding:140px 20px 90px;
        }

        .HeroContent h1{
          font-size:56px;
          letter-spacing:-2px;
        }

        .HeroCardWrap{
          max-width:520px;
          margin:auto;
          width:100%;
        }

      }

      @media(max-width:768px){

        .HeroContent h1{
          font-size:46px;
        }
           .ph-hero-pills {
    justify-content: center;
    width:auto;
    gap: 8px;
  }

        .HeroActions{
          flex-direction:column;
        }

        .PrimaryBtn,
        .SecondaryBtn{
          width:100%;
        }

        .HeroTrustRow{
          gap:12px;
        }

        .HeroCard{
          padding:24px;
        }

        .BigStat{
          font-size:64px;
        }

        

      }

      `}</style>
    </>
  );
}
