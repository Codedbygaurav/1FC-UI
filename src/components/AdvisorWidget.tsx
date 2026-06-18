"use client";

import { useState } from "react";

export default function AdvisorWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`advisor-widget ${
          expanded ? "expanded" : ""
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
         
        <div className="advisor-glow" />

         
        <div className="advisor-avatar-wrap">
          <img
            src="/mascotHead.png"
            alt="Advisor"
            className="advisor-avatar"
          />

          <div className="advisor-status" />
        </div>

         
        <div className="advisor-content">

          <div className="advisor-title">
            Need help?
          </div>

          <button className="advisor-btn">
            Talk to an advisor
          </button>
        </div>
      </div>

      <style>{`
        .advisor-widget {
          position: fixed;

          right: 18px;
          bottom: 18px;

          z-index: 999;

          display: flex;
          align-items: center;

          gap: 12px;

          width: 74px;
          height: 78px;

          padding: 12px 14px;

          border-radius: 999px;

          overflow: hidden;

          background:
            var(--color-dark-green);

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter: blur(18px);

          box-shadow:
            0 18px 40px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.04);

          cursor: pointer;

          transition:
            width 0.38s cubic-bezier(0.22,1,0.36,1),
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .advisor-widget:hover {
          transform: translateY(-3px);

          box-shadow:
            0 24px 50px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .advisor-widget.expanded {
          width: 290px;
        }

         

        .advisor-glow {
          position: absolute;

          width: 120px;
          height: 120px;

          border-radius: 50%;

          background:
            radial-gradient(
              rgba(220,235,99,0.14),
              transparent 70%
            );

          right: -40px;
          top: -40px;

          pointer-events: none;
        }

         

        .advisor-avatar-wrap {
          position: relative;

          right:2px;
          height: 50px;

          min-width: 50px;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.06);

          border:
            1px solid rgba(255,255,255,0.06);

          display: flex;
          align-items: center;
          justify-content: center;

          

          flex-shrink: 0;

          z-index: 2;
        }

        .advisor-avatar {
          width: 88%;
          height: 88%;

          object-fit: cover;

          object-position: center 12%;

          border-radius: 50%;
        }

        .advisor-status {
          position: absolute;

          right: 2px;
          bottom: 2px;

          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #EAE26A;

          border:
            2px solid var(--color-dark-green);

          box-shadow:
            0 0 10px rgba(220,235,99,0.5);
        }

         

        .advisor-content {
          opacity: 0;

          transform: translateX(8px);

          transition:
            opacity 0.25s ease,
            transform 0.3s ease;

          white-space: nowrap;

          pointer-events: none;

          display: flex;
          flex-direction: column;
          justify-content: center;

          height: 100%;
        }

        .advisor-widget.expanded .advisor-content {
          opacity: 1;

          transform: translateX(0);
        }

        .advisor-label {
          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          color:
            rgba(220,235,99,0.72);

          margin-bottom: 2px;
        }

        .advisor-title {
          font-size: 15px;

          font-weight: 600;

          line-height: 1.15;

          letter-spacing: -0.01em;

          color: #FAFAF7;

          margin-bottom: 4px;
        }

        .advisor-btn {
          border: none;

          background: transparent;

          color: #EAE26A;

          font-size: 12px;

          font-weight: 600;

          opacity: 0.92;

          padding: 0;

          cursor: pointer;

          text-align: left;

          transition: opacity 0.2s ease;
        }

        .advisor-btn:hover {
          opacity: 0.78;
        }

         

        @media (max-width: 768px) {
          .advisor-widget {
            right: 14px;
            bottom: 14px;

            width: auto;
            max-width: 155px;

            height: 54px;

            padding: 10px 12px;

            gap: 10px;

            border-radius: 999px;
          }

          .advisor-widget.expanded {
            width: auto;
          }

          .advisor-avatar-wrap {
            width: 36px;
            height: 36px;

            min-width: 36px;
          }

          .advisor-content {
            opacity: 1 !important;

            transform: none !important;

            white-space: nowrap;
          }

          .advisor-label {
            display: none;
          }

          .advisor-title {
            font-size: 9px;

            font-weight: 600;

            margin-bottom: 2px;

            color: #FAFAF7;
          }

          .advisor-btn {
            font-size: 8px;

            line-height: 1;
          }
        }
      `}</style>
    </>
  );
}