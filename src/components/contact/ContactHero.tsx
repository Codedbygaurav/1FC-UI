import React from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  CalendarDays,
  Clock3,
} from "lucide-react";


export default function ContactHero() {
  return (
    <>
      <section className="contactHeroCH">
        <div className="contact-grid"/>
        <div className="contactContainerCH">

          <div className="contactContentCH">
            <div className="hero-label">
              <Mail size={14} />
              <span>CONTACT US</span>
            </div>

            <h1 className="contactTitleCH">
              Let's solve your
              <br />
              financial questions{" "}
              <span>together.</span>
            </h1>

            <p className="contactDescriptionCH">
              Whether you're exploring investments, insurance, tax planning,
              wealth management, or strategic partnerships, our team is ready
              to help.
            </p>

            <div className="contactActionsCH">
              <button className="btn-primary">
                Contact Sales
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Book a Demo
              </button>
            </div>

            <div className="contactFeaturesCH">
              <div className="contactFeatureItemCH">
                <Clock3 size={16} />
                <span>&lt; 24h Response</span>
              </div>

              <div className="contactFeatureItemCH">
                <Phone size={16} />
                <span>Advisor Support</span>
              </div>

              <div className="contactFeatureItemCH">
                <CalendarDays size={16} />
                <span>Demo Scheduling</span>
              </div>
            </div>
          </div>


          <div className="contactCardCH">
            <div className="contactCardLabelCH">
              Contact Overview
            </div>

            <div className="contactStatValueCH">
              24h
            </div>

            <div className="contactProgressCH">
              <div className="contactProgressFillCH" />
            </div>

            <div className="contactGridCH">
              <div className="contactGridCardCH">
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>

              <div className="contactGridCardCH">
                <h4>Mon-Sat</h4>
                <p>Availability</p>
              </div>

              <div className="contactGridCardCH">
                <h4>365</h4>
                <p>Days Support</p>
              </div>

              <div className="contactGridCardCH">
                <h4>Fast</h4>
                <p>Escalation</p>
              </div>
            </div>

            
            <img
              src="/contactHero.png"
              alt="Mascot"
              className="contactMascotCH"
            />
          </div>
        </div>
      </section>

      <style>{`
        .contactHeroCH {
          background: var(--color-bg-ivory);
          padding: 140px 24px 100px;
          overflow: hidden;
          position: relative;
        }

        .contactContainerCH {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }

        .contactBadgeCH {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: var(--color-soft-neutral);
          border: 1px solid var(--color-border);
          margin-bottom: 28px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-dark-green);
        }

        .contactTitleCH {
          font-size: clamp(46px, 5vw, 68px);
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: -0.06em;
  margin: 18px 0;
        }
        .contactTitleCH span {
          font-family: "DM Serif Display", serif;
  font-style: italic;
  color: #0b544b;
  font-weight: 400;
        }


        .contactDescriptionCH {
          max-width: 540px;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 24px;
  color: #5d5d5d;
        }

        .contactActionsCH {
          display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
        }

        .contact-grid {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(11, 59, 54, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 59, 54, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
}

        .contactFeaturesCH {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
        }

        .contactFeatureItemCH {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-muted);
          font-size: 14px;
          font-weight: 500;
        }

        .contactCardCH {
          background: linear-gradient(
            135deg,
            var(--color-dark-green),
            var(--color-secondary-green)
          );
          border-radius: 32px;
          padding: 36px;
          min-height: 500px;
          position: relative;
          overflow: visible;
        }

        .contactCardLabelCH {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .contactStatValueCH {
          font-size: 72px;
          line-height: 1;
          font-weight: 800;
          color: var(--color-accent-lime);
          margin-bottom: 28px;
        }

        .contactProgressCH {
          height: 6px;
          border-radius: 999px;
          background: rgba(220,235,99,0.2);
          overflow: hidden;
          margin-bottom: 28px;
        }

        .contactProgressFillCH {
          width: 82%;
          height: 100%;
          background: var(--color-accent-lime);
        }

        .contactGridCH {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .contactGridCardCH {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .contactGridCardCH h4 {
          color: white;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .contactGridCardCH p {
          margin: 0;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
        }

        .contactMascotCH {
          position: absolute;
          right: -70px;
          bottom: -25px;
          height: 430px;
          object-fit: contain;
          pointer-events: none;
        }

        @media (max-width:768px) {

  .contactHeroCH{
    padding:90px 16px 50px;
  }

  .contactContainerCH{
    gap:20px;
  }

  .contactTitleCH{
    font-size:2.2rem;
    line-height:0.95;
    margin:12px 0;
  }

  .contactDescriptionCH{
    font-size:14px;
    line-height:1.65;
    margin-bottom:18px;
  }

  .contactActionsCH{
    flex-direction:column;
    gap:10px;
    margin-bottom:18px;
  }

  .btn-primary,
  .btn-secondary{
    width:100%;
    justify-content:center;
    height:48px;
  }

  .contactFeaturesCH{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
  }

  .contactFeatureItemCH{
    font-size:12px;
    padding:10px 12px;
    background:#fff;
    border:1px solid var(--color-border);
    border-radius:12px;
  }

  .contactCardCH{
    padding:18px;
    border-radius:24px;
    min-height:auto;
  }

  .contactCardLabelCH{
    font-size:12px;
    margin-bottom:8px;
  }

  .contactStatValueCH{
    font-size:48px;
    margin-bottom:16px;
  }

  .contactProgressCH{
    margin-bottom:16px;
  }

  .contactGridCH{
    grid-template-columns:repeat(2,1fr);
    gap:10px;
  }

  .contactGridCardCH{
    padding:14px;
    border-radius:14px;
  }

  .contactGridCardCH h4{
    font-size:18px;
    margin-bottom:4px;
  }

  .contactGridCardCH p{
    font-size:11px;
  }

  .contactMascotCH{
    height:160px;
    margin:12px auto 0;
  }
}

@media (max-width:480px){

  .contactHeroCH{
    padding:82px 12px 40px;
  }

  .contactTitleCH{
    font-size:1.85rem;
  }

  .contactDescriptionCH{
    font-size:13px;
  }

  .contactFeaturesCH{
    grid-template-columns:1fr;
  }

  .contactCardCH{
    padding:16px;
  }

  .contactStatValueCH{
    font-size:40px;
  }

  .contactGridCH{
    gap:8px;
  }

  .contactGridCardCH{
    padding:12px;
  }

  .contactGridCardCH h4{
    font-size:16px;
  }

  .contactMascotCH{
    height:130px;
  }

  .contact-grid{
    display:none;
  }
}
      `}</style>
    </>
  )
}


