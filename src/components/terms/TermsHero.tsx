"use client";

import {
  FileText,
  ShieldCheck,
  Scale,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function TermsHero() {
  return (
    <>
      <section className="TermsHero">

        <div className="TermsHeroGrid" />

        <div className="TermsHeroContainer">

          <div className="TermsHeroLeft">

            <div className="hero-label">
              <FileText size={14} />
              Terms & Conditions
            </div>

            <h1 className="hero-title">
              Clear terms.
              <br />
              Transparent
              <br />
              <span>relationships.</span>
            </h1>

            <p className="hero-subtext">
              The rules, responsibilities and guidelines
              that govern your use of 1FC products,
              services and digital experiences.
            </p>

            <div className="hero-actions">

              <button className="btn-primary">
                Read Terms
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Contact Us
              </button>

            </div>

            <div className="TermsHeroPills">

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Transparent
              </div>

              <div className="tag-pill">
                <Scale size={14} />
                Fair Usage
              </div>

              <div className="tag-pill">
                <BadgeCheck size={14} />
                Customer First
              </div>

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Secure Platform
              </div>

            </div>

          </div>

          <div className="TermsHeroRight">

            <div className="TermsCard">

              <div className="TermsCardTop">

                <span className="TermsCardHeading">
                  <FileText size={15} />
                  Terms Overview
                </span>

                <div className="TermsLivePill">
                  Active
                </div>

              </div>

              <div className="TermsMainValue">
                12
              </div>

              <div className="TermsMainLabel">
                Key Sections
              </div>

              <div className="TermsProgressBar" />

              <div className="TermsStatsGrid">

                <div className="TermsStatCard">
                  <h4>Secure</h4>
                  <p>Platform</p>
                </div>

                <div className="TermsStatCard">
                  <h4>Fair</h4>
                  <p>Usage</p>
                </div>

                <div className="TermsStatCard">
                  <h4>Updated</h4>
                  <p>Regularly</p>
                </div>

                <div className="TermsStatCard">
                  <h4>User</h4>
                  <p>Protection</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .TermsHero{
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

      .TermsHeroGrid{
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

      .TermsHeroContainer{
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

      .TermsHeroLeft{
        max-width:650px;
      }


     

      .TermsHeroPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .TermsHeroRight{
        display:flex;
        justify-content:center;
      }

      .TermsCard{
        width:100%;
        max-width:420px;

        background:var(--color-dark-green);

        border-radius:28px;

        padding:28px;

        color:white;

        box-shadow:
        0 24px 70px rgba(11,59,54,.18);
      }

      .TermsCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .TermsCardHeading{
        display:flex;
        align-items:center;
        gap:8px;
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .TermsLivePill{
        background:
        rgba(220,235,99,.12);

        color:
        var(--color-accent-lime);

        padding:6px 10px;

        border-radius:999px;

        font-size:11px;
        font-weight:700;
      }

      .TermsMainValue{
        font-size:72px;
        font-weight:900;
        color:var(--color-accent-lime);
        margin-top:18px;
        line-height:1;
      }

      .TermsMainLabel{
        font-size:20px;
        margin-top:8px;
      }

      .TermsProgressBar{
        height:6px;
        border-radius:999px;
        background:var(--color-accent-lime);
        margin:22px 0;
      }

      .TermsStatsGrid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .TermsStatCard{
        background:
        rgba(255,255,255,.08);

        border-radius:16px;

        padding:16px;
      }

      .TermsStatCard h4{
        margin:0;
        font-size:18px;
      }

      .TermsStatCard p{
        margin-top:4px;
        color:rgba(255,255,255,.7);
        font-size:12px;
      }

      @media(max-width:1100px){

        .TermsHero{
          min-height:auto;
          padding:140px 20px 90px;
        }

        .TermsHeroContainer{
          grid-template-columns:1fr;
        }

        .TermsHeroLeft{
          max-width:100%;
          text-align:center;
        }

        

        .TermsHeroPills{
          justify-content:center;
        }

      }

      @media(max-width:768px){

        .TermsHero{
          padding:120px 20px 70px;
        }

       

        .TermsCard{
          padding:22px;
        }

      }

      `}</style>
    </>
  );
}