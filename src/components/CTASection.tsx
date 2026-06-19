import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  BarChart3,
  IndianRupee,
  Users,
  ArrowRight,
  PhoneCall,
  PieChart,
  TrendingUp,
} from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");

            reveals.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: "linear-gradient(180deg, #F5F6F2 0%, #FAFAF7 100%)",

        padding: "clamp(56px, 6vw, 96px) 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
       

        <div
          className="reveal"
          style={{
            background: "#FFFFFF",

            border: "1px solid rgba(0,0,0,0.06)",

            borderRadius: "22px",

            padding: "clamp(24px, 4vw, 42px)",

            boxShadow: "0 10px 40px rgba(0,0,0,0.04)",

            marginBottom: "22px",

            position: "relative",

            overflow: "hidden",
          }}
        >
          

          <div className="stats-grid-overlay" />

          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
           

            <div className="section-labelCTAHero">
              <span />
              <p>India's Financial Revolution</p>
            </div>

            

            <h2 className="stats-title">
              India’s financial future is finally <span>accessible</span>
            </h2>

            

            <p className="stats-subtext">
              Millions of Indians still manage investments, insurance, taxes and
              planning in fragmented ways. FCode unifies everything into one
              intelligent financial operating system.
            </p>

           

            <div className="revolution-stats">
              {[
                {
                  value: "14.7M",
                  label: "families financially vulnerable",
                },

                {
                  value: "₹137T",
                  label: "assets still untracked",
                },

                {
                  value: "10.01Cr",
                  label: "investments unmanaged",
                },

                {
                  value: "3.67%",
                  label: "with proper planning",
                },
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>

                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

        <div className="reveal cta-wrapper">
          <div className="cta-noise" />

          <div className="cta-inner">
            

            <div className="cta-content">
  <div className="cta-pill">
    <span />
    <p>Built for every Indian investor</p>
  </div>

  <h3 className="cta-title">
    Financial clarity,
    <br />
    finally <span>simplified.</span>
    
  </h3>

  <p className="cta-text">
    Track investments, insurance, taxes and planning from one intelligent
    dashboard with real human advisory — without wealth-management fees.
  </p>

  <div className="cta-points">
    <div>
      <ShieldCheck size={18} />
      <span>SEBI-aligned guidance</span>
    </div>

    <div>
      <BarChart3 size={18} />
      <span>Unified dashboard</span>
    </div>

    <div>
      <ShieldCheck size={18} />
      <span>₹365/year membership</span>
    </div>

    <div>
      <Users size={18} />
      <span>Human-first support</span>
    </div>
  </div>

  <div className="cta-buttons">
    <a href="#" className="cta-primary">
      <span>Get Started</span>
      <ArrowRight size={18} />
    </a>

    <a href="#" className="cta-secondary">
      <span>Talk to Advisor</span>
      <PhoneCall size={18} />
    </a>
  </div>
</div>

            

           <div className="cta-visual">


  <div className="price-card">

    <div className="price-pill">
      <ShieldCheck size={16} />
      <span>AFFORDABLE ACCESS</span>
    </div>

    <div className="price-value">₹365</div>

    <div className="price-year">per year</div>

    <div className="price-divider" />

    <div className="price-sub">
      Full financial operating
      <br />
      system access
    </div>

    <div className="price-tag">
      <ShieldCheck size={14} />
      <span>≈ ₹1/day</span>
    </div>

  </div>

  <img
    src="/heroCTA.png"
    alt="Mascot"
    className="cta-mascot"
  />

</div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;

          transform: translateY(20px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;

          transform: translateY(0);
        }

       

        .stats-grid-overlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.025) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          pointer-events: none;
        }

       

        .section-labelCTAHero {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 18px;
        }

        .section-labelCTAHero span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--color-dark-green);
        }

        .section-labelCTAHero p {
          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          color: #5E5E5E;
        }

      

        .stats-title {
        font-family:"Geist-Bold";
       
          font-size:50px;

          line-height: 1.02;


          font-weight: 800;

          color: #111111;

          margin-bottom: 16px;

          max-width: 760px;
        }

        .stats-title span {
          font-style: italic;

          

          font-weight: 400;

          color: var(--color-dark-green);
        }

        .stats-subtext {
          max-width: 640px;

          font-size: 16px;

          line-height: 1.7;

          color: #5E5E5E;

          margin-bottom: 28px;
        }

       

        .revolution-stats {
        ;
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 14px;
        }

        .stat-card {
        
          background: #FAFAF7;

          border:
            1px solid rgba(0,0,0,0.05);

          border-radius: 16px;

          padding: 18px;
          text-align:center;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 24px rgba(0,0,0,0.04);
        }

        .stat-value {
        font-family:"Geist-Bold";
        letter-spacing: 1px;
          font-size:
            clamp(24px, 4vw, 38px);

          font-weight: 900;

          line-height: 1;


          color: var(--color-dark-green);

          margin-bottom: 8px;
        }

        .stat-label {
        font-family:"Geist-SemiBold";
        letter-spacing: 1px;
          font-size: 12px;

          line-height: 1.6;

          color: #5E5E5E;
        }

        

        .cta-wrapper {
          position: relative;

          overflow: hidden;

          background:var(--color-dark-green);

          border-radius: 24px;

          padding:
            clamp(28px, 4vw, 48px);

          border:
            1px solid rgba(255,255,255,0.06);

          box-shadow:
            0 24px 60px rgba(11,59,54,0.12);
        }

        .cta-noise {
          position: absolute;
          inset: 0;

          opacity: 0.025;

          background-image:
            radial-gradient(
              rgba(255,255,255,0.6) 1px,
              transparent 1px
            );

          background-size: 20px 20px;

          pointer-events: none;
        }

        .cta-inner {
          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns: 58% 42%;

          align-items: center;

          gap: 34px;
        }

 .cta-content{
  max-width:455px;
  position:relative;
  z-index:10;
}

.cta-pill{
  display:inline-flex;
  align-items:center;
  gap:7px;

  padding:10px 20px;

  border-radius:999px;

  background:rgba(234,226,106,.08);

  border:1px solid rgba(234,226,106,.12);

  margin-bottom:28px;
}

.cta-pill span{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--color-accent-lime);
}

.cta-pill p{
  color:var(--color-accent-lime);
  font-size:10px;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
}

.cta-title{
font-family:"Geist-Bold";
        letter-spacing: 1px;
  font-size:50px;
line-height:.95;
  font-weight:800;
  color:#FAFAF7;
  margin-bottom:24px;
}

.cta-title span{
  color:var(--color-accent-lime);
  font-style:italic;
  font-weight:500;
}



.cta-text{
  font-size:13px;
max-width:500px;
  line-height:1.7;
  color:rgba(250,250,247,.8);
  margin-bottom:32px;
}

.cta-points{
  display:grid;
  grid-template-columns:repeat(2,minmax(220px,1fr));
  gap:10px;
  margin-bottom:30px;
}

.cta-points div{
  display:flex;
  align-items:center;
  gap:10px;

  height:50px;
padding:0 10px;
font-size:12px;
border-radius:16px;

  background:rgba(255,255,255,.05);

  border:1px solid rgba(255,255,255,.08);

  color:#FAFAF7;
  font-weight:600;
}

.cta-points svg{
  color:var(--color-accent-lime);
  flex-shrink:0;
}

.cta-buttons{
  display:flex;
  justify-content:center;
  gap:10px;
}

.cta-primary{
font-family:"Geist-Bold";
        letter-spacing:1px;
  height:50px;
min-width:200px;
font-size:15px;

  padding:0 40px;

  border-radius:22px;

  background:var(--color-accent-lime);

  color:var(--color-dark-green);

  display:flex;
  align-items:center;
  justify-content:center;
  
gap:10px;

  text-decoration:none;

  font-weight:700;
}

.cta-secondary{
font-family:"Geist-Bold";
        letter-spacing:1px;
  height:50px;
  min-width:200px;

  padding:0 40px;

  border-radius:22px;

  background:rgba(255,255,255,.06);

  border:1px solid rgba(255,255,255,.08);

  color:#FAFAF7;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  text-decoration:none;

  font-size:13px;
  font-weight:600;
}

.cta-visual{
  position:relative;
  min-height:420px;
}


.price-card{
  position:absolute;

  width:240px;
  height:300px;

  left:-40px;
  top:130px;

  z-index:3;

  border-radius:28px;

  padding:18px;

  background: color-mix(
  in srgb,
  black 10%,
  transparent
);

  border:1px solid rgba(255,255,255,.12);

  backdrop-filter:blur(16px);

  box-shadow:
    0 25px 60px rgba(0,0,0,.35);
}

.price-pill{
  display:inline-flex;
  align-items:center;
  gap:10px;

  padding:5px 8px;

  border-radius:999px;

  background: var(color--accent-lime);

  border:1px solid rgba(234,226,106,.1);

  color:var(--color-accent-lime);

  font-size:8px;
  font-weight:700;
}

.price-value{
  margin-top:20px;

  font-size:48px;
  line-height:.9;

  font-weight:900;

  color:var(--color-accent-lime);

  letter-spacing:-1px;
}

.price-year{
  margin-top:8px;

  color:#FAFAF7;

  font-size:14px;
  font-weight:600;
}

.price-divider{
  width:100%;
  height:1px;

  background:rgba(255,255,255,.08);

  margin:20px 0;
}

.price-sub{
  color:rgba(255,255,255,.8);

  font-size:14px;

  line-height:1.4;
}

.price-tag{
  margin-top:20px;

  display:inline-flex;
  align-items:center;
  gap:8px;

  padding:6px 14px;

  border-radius:999px;

  background:rgba(220,235,99,.1);

  color:var(--color-accent-lime);

  font-weight:700;
}

.cta-mascot{
  position:absolute;

  height:530px;

  right:-15px;

  bottom:-72px;

  z-index:5;

  object-fit:contain;

  filter:drop-shadow(
    0 20px 40px rgba(0,0,0,.25)
  );
}
@media (max-width: 1024px) {

  .revolution-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .stats-title {
    font-size: clamp(48px, 6vw, 60px);
    max-width: 100%;
  }

  .stats-subtext {
    max-width: 720px;
    font-size: 17px;
    line-height: 1.8;
  }

  .cta-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .cta-content {
    max-width: 100%;
    text-align: center;
  }

  .cta-pill {
    margin-inline: auto;
  }

  .cta-text {
    margin-inline: auto;
    max-width: 650px;
    font-size: 15px;
  }

  .cta-points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .cta-buttons {
    justify-content: center;
  }

  .cta-visual {
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .price-card {
    left: 130px;
    top: 90px;
  }

  .cta-mascot {
    position: relative;
    right: -120px;
    bottom: -30px;
    height: 420px;
  }
}

@media (max-width: 768px) {

section#about {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .section-labelCTAHero {
    margin-bottom: 14px;
    
  }

  .stats-title {
    font-size: 42px;
    line-height: 1;
  }

  .stats-subtext {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .revolution-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-card {
    padding: 16px;
  }

  .stat-value {
    font-size: 30px;
  }

  .stat-label {
    font-size: 12px;
  }

  .cta-wrapper {
    padding: 28px 22px;
  }

  .cta-title {
    font-size: 42px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .cta-text {
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .cta-points {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cta-points div {
    height: 52px;
    font-size: 13px;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    min-width: 100%;
    justify-content: center;
    gap: 10px;
  }

  .cta-visual {
    justify-content: center;
    align-items: flex-end;
    gap: 12px;
  }

  .price-card {
    width: 180px;
    height: auto;
    left: 15px;
    top: auto;
    padding: 14px;
  }

  .price-value {
    font-size: 42px;
  }

  .price-year {
    font-size: 12px;
  }

  .price-sub {
    font-size: 12px;
  }

  .price-tag {
    font-size: 11px;
  }

  .cta-mascot {
    height: 270px;
    bottom: -10px;
  }
}

@media (max-width: 560px) {

  .revolution-stats {
    grid-template-columns: 1fr;
  }

  .stats-title {
    font-size: 36px;
  }

  .stats-subtext {
    font-size: 14px;
  }

  .cta-wrapper {
    padding: 24px 16px 13px;
    
  }

  .cta-title {
    font-size: 34px;
  }

  .cta-text {
    font-size: 14px;
  }

  .cta-visual {
    gap: 8px;
  }

  .price-card {
    width: 155px;
    padding: 12px;
    bottom:-10px;
    left: 30px;
  }

  .price-pill {
    font-size: 7px;
  }

  .price-value {
    font-size: 34px;
  }

  .price-year {
    font-size: 11px;
  }

  .price-sub {
    font-size: 11px;
  }

  .price-tag {
    font-size: 9px;
    padding: 5px 8px;
  }

  .cta-mascot {
    height: 250px;
    right:-75px;
  }
}

      `}</style>
    </section>
  );
}
