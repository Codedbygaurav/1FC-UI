import { Grid2X2, Clock3, Crosshair } from "lucide-react";

const problems = [
  {
    icon: <Grid2X2 size={18} />,
    title: "No centralised financial record",
    description:
      "Investments, policies and taxes remain scattered across platforms with no unified visibility or ownership structure.",
    featured: true,
    stat: "72%",
    statText:
      "of families cannot locate all financial assets during emergencies",
  },

  {
    icon: <span className="letter-icon">A</span>,
    title: "Financial literacy gap",
    description:
      "Most people still lack access to affordable and trustworthy financial guidance.",
  },

  {
    icon: <Clock3 size={18} />,
    title: "Products sold aggressively",
    description:
      "Financial products are pushed for commissions instead of explained with clarity.",
  },

  {
    icon: <Crosshair size={18} />,
    title: "Families left unprepared",
    description:
      "During emergencies, families struggle locating investments, insurance and documents.",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">

      <div className="problem-grid" />

      <div className="problem-container">

        <div className="section-label ">problem</div>


        
          <h2 className="section-title">
            India’s financial system is still<br/>
            <span>fragmented</span>
          </h2>

          <p className="section-subtitle">
            Families manage investments,
            insurance, taxes and planning
            across disconnected platforms —
            creating confusion, dependency and
            risk during critical moments.
          </p>
        


        <div className="problem-layout">

          <div className="featured-card">
            <div className="featured-glow" />


            <div className="featured-top">
              <div className="featured-icon">
                <Grid2X2 size={20} />
              </div>

              <span className="featured-badge">
                Most Common Issue
              </span>
            </div>


            <div className="featured-content">
              <h3>
                No centralised financial
                record
              </h3>

              <p>
                Investments, policies and
                taxes remain scattered across
                platforms with no unified
                visibility or ownership
                structure.
              </p>
            </div>


            <div className="featured-stat">
              <div className="featured-line" />

              <div className="featured-stat-row">
                <span className="featured-number">
                  72%
                </span>

                <span className="featured-text">
                  of families cannot locate
                  all financial assets during
                  emergencies
                </span>
              </div>
            </div>
          </div>


          <div className="secondary-column">
            {problems
              .filter((item) => !item.featured)
              .map((item, index) => (
                <div
                  key={item.title}
                  className={`secondary-card stagger-${index}`}
                >
                  <div className="secondary-card-bg" />

                  <div className="secondary-icon">
                    {item.icon}
                  </div>

                  <div className="secondary-content">
                    <h4>{item.title}</h4>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style>{`
        .problem-section {
          position: relative;

          overflow: hidden;

          padding:
            clamp(72px, 8vw, 110px)
            20px;

          background:
            linear-gradient(
              180deg,
              #f6f6f2 0%,
              #fafaf7 100%
            );
        }

        

        .problem-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.018) 1px,
              transparent 1px
            );

          background-size: 44px 44px;

          pointer-events: none;
        }

        .problem-container {
          position: relative;
          z-index: 2;
          
          max-width: 1280px;
          margin: 0 auto;
        }

        .problem-layout {
          display: grid;

          grid-template-columns:
            1.05fr 0.95fr;

          gap: 24px;

          align-items: stretch;
        }

       

        .featured-card {
          position: relative;

          overflow: hidden;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          min-height: 500px;

          padding: 34px;

          border-radius: 34px;

          background:
            linear-gradient(
              145deg,
              var(--color-dark-green) 0%,
              #062f2b 58%,
              #031f1d 100%
            );

          box-shadow:
            0 30px 70px
              rgba(11,59,54,0.14);

          isolation: isolate;
        }

        .featured-glow {
          position: absolute;

          width: 420px;
          height: 420px;

          right: -140px;
          top: -140px;

          border-radius: 50%;

          background:
            radial-gradient(
              rgba(220,235,99,0.1),
              transparent 72%
            );

          filter: blur(10px);

          pointer-events: none;
        }

        .featured-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .featured-icon {
          width: 56px;
          height: 56px;

          border-radius: 18px;

          background:
            rgba(220,235,99,0.1);

          border:
            1px solid
            rgba(220,235,99,0.08);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #EAE26A;
        }

        .featured-badge {
        font-family:"Geist-SemiBold";
        letter-spacing: 1px;
          font-size: 11px;
          font-weight: 700;


          text-transform: uppercase;

          color:
            rgba(250,250,247,0.42);
        }

        

        .featured-content {
          padding-top: 18px;
        }

        .featured-content h3 {
        font-family:"Geist-Bold";
        letter-spacing: 1px;
          max-width: 420px;

          font-size:50px;

          line-height: 0.94;

          

          font-weight: 850;

          color: #fafaf7;

          margin-bottom: 18px;
        }

        .featured-content p {
          max-width: 500px;

          font-size: 16px;

          line-height: 1.6;

          color:
            rgba(250,250,247,0.72);
        }

        

        .featured-stat {
        
          padding-top: 32px;
          padding-bottom: 8px;
        }

        .featured-line {
          width: 100%;
          height: 1px;

          background:
            rgba(255,255,255,0.08);

          margin-bottom: 22px;
        }

        .featured-stat-row {
          display: flex;
          align-items: flex-end;

          gap: 16px;
        }

        .featured-number {
        font-family:"Geist-SemiBold";
        letter-spacing: 1px;
          font-size:
            clamp(58px, 7vw, 84px);

          line-height: 0.88;

          font-weight: 900;


          color: #EAE26A;
        }

        .featured-text {
          max-width: 250px;

          font-size: 15px;

          line-height: 1.6;

          color:
            rgba(250,250,247,0.68);

          padding-bottom: 10px;
        }

        

        .secondary-column {
          display: flex;
          flex-direction: column;

          gap: 14px;
        }

        

        .secondary-card {
          position: relative;

          overflow: hidden;

          display: flex;
          align-items: flex-start;

          gap: 18px;

          padding: 28px;

          border-radius: 28px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.95),
              rgba(255,255,255,0.88)
            );

          border:
            1px solid
            rgba(11,59,54,0.05);

          box-shadow:
            0 12px 34px
              rgba(0,0,0,0.03);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .secondary-card-bg {
          position: absolute;
          inset: 0;

          border-radius: inherit;

          background:
            linear-gradient(
              135deg,
              rgba(11,59,54,0.03),
              transparent 60%
            );

          opacity: 0;

          transition: opacity 0.3s ease;

          pointer-events: none;
        }

        .secondary-card:hover {
          transform:
            translateY(-4px)
            translateX(2px);

          border-color:
            rgba(11,59,54,0.08);

          box-shadow:
            0 20px 44px
              rgba(0,0,0,0.05);
        }

        .secondary-card:hover
          .secondary-card-bg {
          opacity: 1;
        }

        

        .stagger-0 {
          margin-left: 0;
        }

        .stagger-1 {
          margin-left: 18px;
        }

        .stagger-2 {
          margin-left: 36px;
        }

        

        .secondary-icon {
          position: relative;
          z-index: 2;

          width: 46px;
          height: 46px;

          min-width: 46px;

          border-radius: 15px;

          background:
            rgba(11,59,54,0.05);

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--color-dark-green);

          box-shadow:
            inset 0 1px 0
              rgba(255,255,255,0.7),
            0 4px 10px
              rgba(11,59,54,0.04);
        }

        .letter-icon {
          font-size: 22px;
          font-weight: 500;
        }

       

        .secondary-content {
          position: relative;
          z-index: 2;
        }

        .secondary-content h4 {
        font-family:"Geist-Bold";
        letter-spacing: 1px;
          font-size: 20px;

          line-height: 1.15;

          font-weight: 760;

          color: #111;

          margin-bottom: 12px;
        }

        .secondary-content p {
          font-size: 14px;

          line-height: 1.55;

          color: #666;

          max-width: 400px;
        }

        
@media (max-width: 1024px) {

  .problem-section {
    padding: 88px 28px;
  }

  .problem-container {
    max-width: 100%;
  }

  .problem-heading-wrap {
    margin-bottom: 44px;
  }

 

  .problem-layout {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .featured-card {
    min-height: auto;
    padding: 36px;
  }

  .featured-content h3 {
    max-width: 520px;
  }

  .featured-content p {
    max-width: 620px;
  }

  .featured-stat-row {
    align-items: center;
  }

  .secondary-column {
    gap: 16px;
  }

  .secondary-card {
    padding: 28px;
  }

  .stagger-0,
  .stagger-1,
  .stagger-2 {
    margin-left: 0;
  }
}

@media (max-width: 768px) {

  .problem-section {
    padding: 72px 20px;
  }

  

  .problem-layout {
    gap: 16px;
  }

  .featured-card {
    padding: 28px;
    border-radius: 28px;
  }

  .featured-top {
    gap: 14px;
    flex-wrap: wrap;
  }

  .featured-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
  }

  .featured-content {
    padding-top: 18px;
  }

  .featured-content h3 {
    font-size: 46px;
    line-height: 0.95;
    margin-bottom: 16px;
  }

  .featured-content p {
    font-size: 15px;
    line-height: 1.8;
  }

  .featured-stat {
    padding-top: 26px;
  }

  .featured-line {
    margin-bottom: 18px;
  }

  .featured-stat-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .featured-number {
    font-size: 64px;
  }

  .featured-text {
    max-width: 100%;
    font-size: 14px;
    line-height: 1.75;
    padding-bottom: 0;
  }

  .secondary-column {
    gap: 12px;
  }

  .secondary-card {
    padding: 22px;
    gap: 14px;
    border-radius: 22px;
  }

  .secondary-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
  }

  .secondary-content h4 {
    font-size: 19px;
    margin-bottom: 8px;
  }

  .secondary-content p {
    font-size: 14px;
    line-height: 1.55;
    max-width: 100%;
  }
}

@media (max-width: 480px) {

  .problem-section {
    padding: 64px 16px;
  }

  

  .problem-heading {
    font-size: 36px;
  }

  .problem-subtext {
    font-size: 14px;
  }

  .featured-card {
    padding: 22px;
    border-radius: 22px;
  }

  .featured-icon {
    width: 46px;
    height: 46px;
    border-radius: 14px;
  }

  .featured-badge {
    font-size: 10px;
  }

  .featured-content h3 {
    font-size: 34px;
  }

  .featured-content p {
    font-size: 14px;
  }

  .featured-number {
    font-size: 52px;
  }

  .featured-text {
    font-size: 13px;
  }

  .secondary-card {
    padding: 18px;
    border-radius: 18px;
    gap: 12px;
  }

  .secondary-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 12px;
  }

  .secondary-content h4 {
    font-size: 17px;
  }

  .secondary-content p {
    font-size: 13px;
  }
}

@media (max-width: 360px) {

  .problem-section {
    padding: 56px 12px;
  }

  .problem-heading {
    font-size: 30px;
  }

  .problem-subtext {
    font-size: 13px;
  }

  .featured-card {
    padding: 18px;
  }

  .featured-content h3 {
    font-size: 28px;
  }

  .featured-number {
    font-size: 44px;
  }

  .featured-text {
    font-size: 12px;
  }

  .secondary-card {
    padding: 16px;
  }

  .secondary-content h4 {
    font-size: 15px;
  }

  .secondary-content p {
    font-size: 12px;
  }
}
      `}</style>
    </section>
  );
}