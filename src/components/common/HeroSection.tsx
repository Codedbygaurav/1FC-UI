// components/common/HeroSection.tsx

"use client";

import React from "react";

type HeroCard = {
  title: string;
  value?: string;
  sub?: string;

  type?:
    | "insurance"
    | "networth"
    | "tax"
    | "portfolio"
    | "advisor";

  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  badge: string;

  title: React.ReactNode;

  description: string;

  primaryButton: string;

  secondaryButton?: string;

  stats: HeroStat[];

  cards: HeroCard[];

  mascotSrc?: string;
};

export default function HeroSection({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  stats,
  cards,
  mascotSrc = "/mascotFull.png",
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      {/* BACKGROUND */}

      <div className="hero-bg-glow" />
      <div className="hero-grid-pattern" />

      <div className="hero-container">
        {/* LEFT */}

        <div className="hero-content">
          <div className="hero-badge">
            {badge}
          </div>

          <h1 className="hero-title">
            {title}
          </h1>

          <p className="hero-description">
            {description}
          </p>

          <div className="hero-actions">
            <button className="btn-primary hero-btn-primary">
              {primaryButton}

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {secondaryButton && (
              <button className="btn-secondary hero-btn-secondary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />

                  <path
                    d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z"
                    fill="currentColor"
                  />
                </svg>

                {secondaryButton}
              </button>
            )}
          </div>

          <div className="hero-stats">
            {stats.map((item) => (
              <div
                key={item.label}
                className="hero-stat"
              >
                <div className="hero-stat-number">
                  {item.value}
                </div>

                <div className="hero-stat-label">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-visual">
          <div className="hero-main-glow" />

          {/* MASCOT */}

          <div className="hero-mascot-wrap">
            <img
              src={mascotSrc}
              alt="Mascot"
              className="hero-mascot"
            />
          </div>

          {/* FLOATING CARDS */}

          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`hero-floating-card card-${index} ${card.type}`}
              style={{
                top: card.top,
                right: card.right,
                left: card.left,
                bottom: card.bottom,
              }}
            >
              {/* INSURANCE */}

              {card.type ===
                "insurance" && (
                <>
                  <div className="hero-card-label">
                    {card.title}
                  </div>

                  <div className="hero-card-value">
                    {card.value}
                  </div>

                  <div className="hero-card-sub success">
                    {card.sub}
                  </div>
                </>
              )}

              {/* NETWORTH */}

              {card.type ===
                "networth" && (
                <>
                  <div className="hero-card-label">
                    {card.title}
                  </div>

                  <div className="hero-card-value">
                    {card.value}
                  </div>

                  <div className="hero-card-sub growth">
                    {card.sub}
                  </div>
                </>
              )}

              {/* TAX */}

              {card.type === "tax" && (
                <>
                  <div className="hero-card-label">
                    {card.title}
                  </div>

                  <div className="hero-card-value dark-green">
                    {card.value}
                  </div>
                </>
              )}

              {/* PORTFOLIO */}

              {card.type ===
                "portfolio" && (
                <>
                  <div className="hero-card-label">
                    Portfolio Split
                  </div>

                  <div className="portfolio-wrap">
                    {[
                      ["Equity", "62%"],

                      ["Debt", "25%"],

                      ["Gold", "13%"],
                    ].map(
                      (
                        [label, value],
                        i
                      ) => (
                        <div
                          key={label}
                          className="portfolio-item"
                        >
                          <div className="portfolio-row">
                            <span>
                              {label}
                            </span>

                            <span>
                              {value}
                            </span>
                          </div>

                          <div className="portfolio-bar">
                            <div
                              className={`portfolio-fill fill-${i}`}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}

              {/* ADVISOR */}

              {card.type ===
                "advisor" && (
                <>
                  <div className="hero-card-label">
                    {card.title}
                  </div>

                  <div className="advisor-pill">
                    {card.value}
                  </div>
                </>
              )}

              <div className="hero-card-glow" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;

          overflow: hidden;

          padding: 110px 24px 42px;

          background: #F8F7F2;
        }

        .hero-container {
          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1.05fr 0.95fr;

          gap: 28px;

          align-items: center;

          position: relative;

          z-index: 2;
        }

        .hero-bg-glow {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle at 72% 35%,
              rgba(220,235,99,0.18),
              transparent 38%
            );

          pointer-events: none;
        }

        .hero-grid-pattern {
          position: absolute;

          inset: 0;

          opacity: 0.04;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.08) 1px,
              transparent 1px
            );

          background-size: 80px 80px;
        }

        /* LEFT */

        .hero-content {
          position: relative;

          z-index: 2;
        }

        .hero-badge {
          width: fit-content;

          padding: 10px 16px;

          border-radius: 999px;

          background:
            rgba(11,59,54,0.08);

          color: #0B3B36;

          font-size: 13px;

          font-weight: 600;

          letter-spacing: 0.04em;

          margin-bottom: 22px;

          border:
            1px solid rgba(11,59,54,0.06);
        }

        .hero-title {
          font-size:
            clamp(44px, 5vw, 68px);

          line-height: 0.98;

          letter-spacing: -0.06em;

          font-weight: 850;

          color: #111111;

          margin-bottom: 18px;
        }

        .hero-description {
          font-size: 16px;

          line-height: 1.7;

          color: #5F6461;

          max-width: 620px;

          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;

          gap: 16px;

          flex-wrap: wrap;

          margin-bottom: 36px;
        }

        .hero-btn-primary,
        .hero-btn-secondary {
          height: 52px;

          padding: 0 22px;

          border-radius: 16px;
        }

        .hero-stats {
          display: flex;

          gap: 32px;

          flex-wrap: wrap;

          padding-top: 20px;

          border-top:
            1px solid rgba(11,59,54,0.08);
        }

        .hero-stat-number {
          font-size: 32px;

          font-weight: 850;

          color: #0B3B36;

          line-height: 1;

          margin-bottom: 6px;
        }

        .hero-stat-label {
          font-size: 13px;

          color: #6D726F;
        }

        /* RIGHT */

        .hero-visual {
          position: relative;

          min-height: 470px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-main-glow {
          position: absolute;

          width: 420px;
          height: 420px;

          border-radius: 999px;

          background:
            radial-gradient(
              circle,
              rgba(11,59,54,0.12),
              transparent 72%
            );

          filter: blur(40px);
        }

        .hero-mascot-wrap {
          position: relative;

          z-index: 2;
        }

        .hero-mascot {
          height: 430px;

          object-fit: contain;

          filter:
            drop-shadow(
              0 28px 60px rgba(0,0,0,0.18)
            );
        }

        /* CARDS */

        .hero-floating-card {
          position: absolute;

          width: 165px;

          padding: 16px;

          border-radius: 22px;

          background:
            rgba(255,255,255,0.82);

          backdrop-filter: blur(16px);

          border:
            1px solid rgba(255,255,255,0.7);

          box-shadow:
            0 18px 50px rgba(0,0,0,0.08);

          z-index: 3;

          overflow: hidden;
        }

        .hero-floating-card.portfolio {
          width: 190px;
        }

        .hero-card-label {
          font-size: 12px;

          color: #6A6F6B;

          margin-bottom: 8px;
        }

        .hero-card-value {
          font-size: 26px;

          font-weight: 850;

          line-height: 1;

          color: #111111;

          position: relative;

          z-index: 2;
        }

        .hero-card-sub {
          margin-top: 8px;

          font-size: 12px;

          font-weight: 600;
        }

        .hero-card-sub.success,
        .hero-card-sub.growth {
          color: #2FAE60;
        }

        .hero-card-value.dark-green {
          color: #0B3B36;
        }

        .portfolio-wrap {
          display: flex;

          flex-direction: column;

          gap: 8px;

          margin-top: 8px;
        }

        .portfolio-item {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }

        .portfolio-row {
          display: flex;

          align-items: center;

          justify-content: space-between;

          font-size: 11px;

          font-weight: 600;

          color: #5F6461;
        }

        .portfolio-bar {
          width: 100%;

          height: 5px;

          border-radius: 999px;

          background:
            rgba(11,59,54,0.08);

          overflow: hidden;
        }

        .portfolio-fill {
          height: 100%;

          border-radius: 999px;

          background: #0B3B36;
        }

        .fill-0 {
          width: 62%;
        }

        .fill-1 {
          width: 25%;
        }

        .fill-2 {
          width: 13%;
        }

        .advisor-pill {
          margin-top: 10px;

          background: #0B3B36;

          color: #DCEB63;

          height: 40px;

          border-radius: 12px;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 16px;

          font-weight: 850;
        }

        .hero-card-glow {
          position: absolute;

          inset: auto -40px -40px auto;

          width: 120px;
          height: 120px;

          background:
            radial-gradient(
              circle,
              rgba(220,235,99,0.24),
              transparent 70%
            );

          filter: blur(25px);
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;

            gap: 30px;
          }

          .hero-content {
            text-align: center;

            display: flex;

            flex-direction: column;

            align-items: center;
          }

          .hero-actions,
          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            min-height: 420px;
          }

          .hero-mascot {
            height: 360px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .hero-section {
            padding: 110px 20px 60px;
          }

          .hero-container {
            gap: 24px;
          }

          .hero-title {
            text-align: center;

            font-size:
              clamp(38px, 10vw, 52px);
          }

          .hero-description {
            text-align: center;

            font-size: 14px;
          }

          .hero-content {
            display: flex;

            flex-direction: column;

            align-items: center;
          }

          .hero-actions {
            width: 100%;

            flex-direction: column;
          }

          .hero-actions button {
            width: 100%;
          }

          .hero-stats {
            width: 100%;

            justify-content: space-between;

            gap: 18px;
          }

          /* VISUAL */

          .hero-visual {
            min-height: 300px;
          }

          .hero-mascot {
            height: 210px;
          }

          /* CARDS */

          .hero-floating-card {
            width: 108px;

            padding: 10px;

            border-radius: 16px;
          }

          .hero-floating-card.portfolio {
            width: 150px;
          }

          .hero-card-label {
            font-size: 9px;

            margin-bottom: 5px;
          }

          .hero-card-value {
            font-size: 16px;
          }

          .hero-card-sub {
            font-size: 9px;

            margin-top: 6px;
          }

          .portfolio-row {
            font-size: 9px;
          }

          .portfolio-bar {
            height: 4px;
          }

          .advisor-pill {
            height: 30px;

            font-size: 12px;

            border-radius: 8px;

            margin-top: 8px;
          }

          /* REMOVE TAX CARD */

          .card-2 {
            display: none;
          }

          /* POSITIONING */

          .card-0 {
            top: 2% !important;
            left: 0% !important;
          }

          .card-1 {
            top: 0% !important;
            right: 0% !important;
          }

          .card-3 {
            bottom: 0% !important;
            left: 2% !important;
          }

          .card-4 {
            bottom: 10% !important;
            right: 0% !important;
          }
        }

        @media (max-width: 560px) {
          .hero-visual {
            min-height: 270px;
          }

          .hero-mascot {
            height: 185px;
          }

          .hero-floating-card {
            width: 96px;

            padding: 8px;
          }

          .hero-floating-card.portfolio {
            width: 138px;
          }

          .hero-card-value {
            font-size: 14px;
          }

          .hero-card-sub {
            font-size: 8px;
          }

          .advisor-pill {
            height: 26px;

            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}