"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function PrivacyHero() {
  return (
    <>
      <section className="PrivacyHero">

        <div className="PrivacyHeroGrid" />

        <div className="PrivacyHeroContainer">

          <div className="PrivacyHeroLeft">

            <div className="hero-label">
              <ShieldCheck size={14} />
              Privacy Policy
            </div>

            <h1 className="hero-title">
              Your data.
              <br />
              Your
              <span>control.</span>
            </h1>

            <p className="hero-subtext">
              Learn how 1FC collects, uses and protects
              your personal information while providing
              secure and transparent financial experiences.
            </p>

            <div className="hero-actions">

              <button className="btn-primary">
                Read Policy
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Contact Us
              </button>

            </div>

            <div className="PrivacyHeroPills">

              <div className="tag-pill">
                <Lock size={14} />
                Encrypted
              </div>

              <div className="tag-pill">
                <Database size={14} />
                Secure Storage
              </div>

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Transparent Usage
              </div>

              <div className="tag-pill">
                <UserCheck size={14} />
                User Control
              </div>

            </div>

          </div>

          <div className="PrivacyHeroRight">

            <div className="PrivacyCard">

              <div className="PrivacyCardTop">

                <span className="PrivacyCardHeading">
                  <ShieldCheck size={15} />
                  Privacy Overview
                </span>

                <div className="PrivacyLivePill">
                  Protected
                </div>

              </div>

              <div className="PrivacyMainValue">
                Secure
              </div>

              <div className="PrivacyMainLabel">
                Data Protection
              </div>

              <div className="PrivacyProgressBar" />

              <div className="PrivacyStatsGrid">

                <div className="PrivacyStatCard">
                  <h4>Encrypted</h4>
                  <p>Storage</p>
                </div>

                <div className="PrivacyStatCard">
                  <h4>User</h4>
                  <p>Control</p>
                </div>

                <div className="PrivacyStatCard">
                  <h4>Protected</h4>
                  <p>Data</p>
                </div>

                <div className="PrivacyStatCard">
                  <h4>Clear</h4>
                  <p>Policies</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .PrivacyHero{
        position:relative;
        overflow:hidden;
        min-height:90vh;
        display:flex;
        align-items:center;
        padding:170px 20px 90px;
        background:linear-gradient(
          180deg,
          #f7f7f2 0%,
          #f4f4ee 100%
        );
      }

      .PrivacyHeroGrid{
        position:absolute;
        inset:0;
        opacity:.35;

        background-image:
          linear-gradient(
            rgba(11,59,54,.05) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(11,59,54,.05) 1px,
            transparent 1px
          );

        background-size:56px 56px;
      }

      .PrivacyHeroContainer{
        position:relative;
        z-index:2;

        max-width:1280px;
        width:100%;
        margin:auto;

        display:grid;
        grid-template-columns:1.1fr .9fr;
        gap:64px;
        align-items:center;
      }

      .PrivacyHeroLeft{
        max-width:650px;
      }

      

      .PrivacyHeroPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .PrivacyHeroRight{
        display:flex;
        justify-content:center;
      }

      .PrivacyCard{
        width:100%;
        max-width:420px;
        background:var(--color-dark-green);
        border-radius:28px;
        padding:28px;
        color:white;
        box-shadow:
        0 24px 70px rgba(11,59,54,.18);
      }

      .PrivacyCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .PrivacyCardHeading{
        display:flex;
        align-items:center;
        gap:8px;
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .PrivacyLivePill{
        background:rgba(220,235,99,.12);
        color:var(--color-accent-lime);
        padding:6px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
      }

      .PrivacyMainValue{
        font-size:72px;
        font-weight:900;
        color:var(--color-accent-lime);
        margin-top:18px;
        line-height:1;
      }

      .PrivacyMainLabel{
        font-size:20px;
        margin-top:8px;
      }

      .PrivacyProgressBar{
        height:6px;
        border-radius:999px;
        background:var(--color-accent-lime);
        margin:22px 0;
      }

      .PrivacyStatsGrid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .PrivacyStatCard{
        background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:16px;
      }

      .PrivacyStatCard h4{
        margin:0;
        font-size:18px;
      }

      .PrivacyStatCard p{
        margin-top:4px;
        color:rgba(255,255,255,.7);
        font-size:12px;
      }

      @media(max-width:1100px){

        .PrivacyHero{
          min-height:auto;
          padding:140px 20px 90px;
        }

        .PrivacyHeroContainer{
          grid-template-columns:1fr;
        }

        .PrivacyHeroLeft{
          max-width:100%;
          text-align:center;
        }

       

        .PrivacyHeroPills{
          justify-content:center;
        }

      }

      @media(max-width:768px){

        .PrivacyHero{
          padding:120px 20px 70px;
        }

        

      }

      `}</style>
    </>
  );
}