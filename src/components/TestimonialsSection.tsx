"use client";

import {
  ShieldCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

const trustPrinciples = [
  {
    icon: <Users size={16} />,

    title:
      "Unified family visibility",

    description:
      "Your investments, insurance, loans and estate records stay connected in one secure financial layer.",

    className: "card-primary",
  },

  {
    icon: (
      <HeartHandshake size={16} />
    ),

    title:
      "Built around clarity, not commissions",

    description:
      "Advice is designed to simplify financial decisions instead of pushing unnecessary products.",

    className: "card-middle",
  },

  {
    icon: (
      <ShieldCheck size={16} />
    ),

    title:
      "Long-term financial continuity",

    description:
      "Critical financial information remains accessible during emergencies, transitions and family events.",

    className: "card-compact",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section">
       

      <div className="trust-blur" />

      <div className="trust-container">
         

        <div className="trust-label reveal">
          <div className="trust-line" />

          <span>User Trust</span>
        </div>

         

        <div className="trust-layout">
           

          <div className="trust-left reveal">

            <h2 className="trust-heading">
              Families deserve{" "}
              <span>
                one clear
              </span>{" "}
              financial picture.
            </h2>

            <p className="trust-description">
              F1Code brings
              investments,
              insurance, taxes,
              loans and long-term
              planning into one
              connected financial
              operating system for
              Indian families.
            </p>

             

            <div className="trust-pills">
              <div className="trust-pill">
                <div className="pill-dot" />

                <p>
                  SEBI-aligned ecosystem
                </p>
              </div>

              <div className="trust-pill">
                <div className="pill-dot" />

                <p>
                  Bank-grade infrastructure
                </p>
              </div>

              <div className="trust-pill">
                <div className="pill-dot" />

                <p>
                  Human-first financial guidance
                </p>
              </div>
            </div>
          </div>

           

          <div className="trust-right">
            {trustPrinciples.map(
              (item, index) => (
                <div
                  key={item.title}
                  className={`trust-card ${item.className} reveal`}
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="trust-card-icon">
                    {item.icon}
                  </div>

                  <div className="trust-card-content">
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {
                        item.description
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .trust-section {
          position: relative;

          overflow: hidden;

          padding:
            clamp(60px, 7vw, 88px)
            20px;

          background:
            linear-gradient(
              180deg,
              #f6f6f2 0%,
              #fafaf7 100%
            );
        }

         

        .trust-blur {
          position: absolute;

          left: -120px;
          bottom: -120px;

          width: 320px;
          height: 320px;

          border-radius: 999px;

          background:
            radial-gradient(
              circle,
              rgba(11, 59, 54, 0.05),
              transparent 72%
            );

          filter: blur(30px);

          pointer-events: none;
        }

        .trust-container {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;
        }

         

        .trust-label {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-bottom: 28px;
        }

        .trust-line {
          width: 34px;
          height: 1px;

          background: #0b3b36;

          opacity: 0.2;
        }

        .trust-label span {
          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.14em;

          text-transform: uppercase;

          color: #666;
        }

         

        .trust-layout {
          display: grid;

          grid-template-columns:
            0.95fr 1.05fr;

          gap: 56px;

          align-items: center;
        }

         

        .trust-left {
          max-width: 560px;
        }

        .trust-kicker {
          display: inline-block;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          color: #0b3b36;

          opacity: 0.72;

          margin-bottom: 18px;
        }

        .trust-heading {
        font-family:"Geist-Bold"
        letter-spacing:1px;
          font-size:
            clamp(42px, 4.5vw, 64px);

          line-height: 0.96;


          font-weight: 850;

          color: #111;

          margin-bottom: 22px;

          max-width: 560px;
        }

        .trust-heading span {
          font-style: italic;

          

          font-weight: 400;

          font-size: 0.92em;

          color: #0b3b36;
        }

        .trust-description {
          font-size: 16px;

          line-height: 1.6;

          color: #666;

          max-width: 500px;

          margin-bottom: 24px;
        }

         

        .trust-pills {
          display: flex;
          font-Family:"Geist-SemiBold";
            letter-Spacing: "1px";

          flex-wrap: wrap;

          gap: 10px;

          max-width: 520px;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;

          gap: 10px;

          padding: 11px 16px;

          border-radius: 999px;

          background: #ffffff;

          border:
            1px solid rgba(11,59,54,0.05);

          box-shadow:
            0 8px 20px rgba(0,0,0,0.025);

          white-space: nowrap;

          flex-shrink: 0;
        }

        .trust-pill p {
          margin: 0 !important;

          padding: 0 !important;

          font-size: 12px !important;

          font-weight: 600 !important;

          line-height: 1 !important;

          color: #2f2f2f !important;

          font-family: inherit !important;

          display: block !important;

          opacity: 1 !important;

          visibility: visible !important;
        }

        .pill-dot {
          width: 6px;
          height: 6px;

          border-radius: 999px;

          background: #0b3b36;

          flex-shrink: 0;
        }

         

        .trust-right {
          display: flex;

          flex-direction: column;

          gap: 18px;
        }

        .trust-card {
          position: relative;

          overflow: hidden;

          display: flex;
          align-items: flex-start;

          gap: 18px;

          padding: 24px;

          border-radius: 26px;

          background:
            rgba(255, 255, 255, 0.82);

          border:
            1px solid
            rgba(11, 59, 54, 0.05);

          box-shadow:
            0 12px 28px
            rgba(0, 0, 0, 0.03);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }

        .trust-card:hover {
          transform: translateY(-2px);

          background:
            rgba(255, 255, 255, 0.96);

          box-shadow:
            0 18px 42px
            rgba(0, 0, 0, 0.05);
        }

        .trust-card::before {
          content: "";

          position: absolute;

          right: -70px;
          top: -70px;

          width: 160px;
          height: 160px;

          border-radius: 999px;

          background:
            radial-gradient(
              circle,
              rgba(11, 59, 54, 0.03),
              transparent 72%
            );
        }

         

        .card-primary {
          margin-left: 0;
        }

        .card-middle {
          margin-left: 10px;

          max-width: 98%;
        }

        .card-compact {
          margin-left: 18px;

          max-width: 96%;
        }

         

        .trust-card-icon {
          width: 44px;
          height: 44px;

          min-width: 44px;

          border-radius: 14px;

          background:
            linear-gradient(
              180deg,
              rgba(11,59,54,0.08),
              rgba(11,59,54,0.04)
            );

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0b3b36;

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.4);
        }

         

        .trust-card-content h3 {
          font-size: 18px;

          line-height: 1.2;

          font-weight: 760;

          font-Family:"Geist-Bold";
            letter-Spacing: "1px";

          color: #111;

          margin-bottom: 8px;
        }

        .trust-card-content p {
          font-size: 14px;

          line-height: 1.6;

          color: #666;

          max-width: 420px;
        }

         

        .reveal {
          opacity: 0;

          transform:
            translateY(24px);

          animation:
            revealUp 0.9s ease
            forwards;
        }

        @keyframes revealUp {
          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

         

        /* ==========================================
   TABLET (769px - 1024px)
========================================== */
@media (max-width: 1024px) {

  .trust-section {
    padding: 80px 24px;
  }

  .trust-layout {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .trust-left {
    max-width: 100%;
  }

  .trust-heading {
    max-width: 720px;
    font-size: clamp(48px, 6vw, 60px);
  }

  .trust-description {
    max-width: 620px;
    font-size: 15px;
  }

  .card-middle,
  .card-compact {
    margin-left: 0;
    max-width: 100%;
  }

  .trust-right {
    gap: 16px;
  }

  .trust-card {
    padding: 24px;
  }
}

/* ==========================================
   MOBILE (≤768px)
========================================== */
@media (max-width: 768px) {

  .trust-section {
    padding: 68px 18px;
  }

  .trust-label {
    margin-bottom: 18px;
  }

  .trust-line {
    width: 24px;
  }

  .trust-label span {
    font-size: 10px;
  }

  .trust-kicker {
    font-size: 11px;
    margin-bottom: 14px;
  }

  .trust-heading {
    font-size: 35px;
    line-height: 1;
    margin-bottom: 16px;
    max-width: 100%;
  }

  .trust-description {
    font-size: 13px;
    line-height: 1.6;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .trust-pills {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    max-width: 100%;
  }

  .trust-pill {
    width: 100%;
    padding: 12px 14px;
  }

  .trust-pill p {
    white-space: normal;
  }

  .trust-right {
    gap: 12px;
  }

  .trust-card {
    flex-direction: column;
    gap: 14px;
    padding: 22px;
    border-radius: 22px;
  }

  .trust-card-icon {
    width: 42px;
    height: 42px;
    min-width: 42px;
  }

  .trust-card-content h3 {
    font-size: 17px;
    margin-bottom: 8px;
  }

  .trust-card-content p {
    font-size: 13px;
    line-height: 1.7;
    max-width: 100%;
  }
}




      `}</style>
    </section>
  );
}