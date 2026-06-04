"use client";

import {
  Landmark,
  ShieldCheck,
  PiggyBank,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function FDTermsHero() {
  return (
    <>
      <section className="FDHero">

        <div className="FDHeroGrid" />

        <div className="FDHeroContainer">

          <div className="FDHeroLeft">

            <div className="hero-label">
              <Landmark size={14} />
              Fixed Deposit Terms
            </div>

            <h1 className="hero-title">
              Fixed deposits.
              <br />
              Clear
              <br />
              <span>expectations.</span>
            </h1>

            <p className="hero-subtext">
              Important terms, disclosures and
              conditions related to Fixed Deposit
              products offered through 1FC.
            </p>

            <div className="hero-actions">

              <button className="btn-primary">
                View Terms
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                Contact Us
              </button>

            </div>

            <div className="FDHeroPills">

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Transparent
              </div>

              <div className="tag-pill">
                <Landmark size={14} />
                Partner Banks
              </div>

              <div className="tag-pill">
                <PiggyBank size={14} />
                Secure Deposits
              </div>

              <div className="tag-pill">
                <BadgeCheck size={14} />
                Clear Disclosures
              </div>

            </div>

          </div>

          <div className="FDHeroRight">

            <div className="FDCard">

              <div className="FDCardTop">

                <span className="FDCardHeading">
                  <Landmark size={15} />
                  FD Overview
                </span>

                <div className="FDLivePill">
                  Active
                </div>

              </div>

              <div className="FDMainValue">
                FD
              </div>

              <div className="FDMainLabel">
                Secure Savings
              </div>

              <div className="FDProgressBar" />

              <div className="FDStatsGrid">

                <div className="FDStatCard">
                  <h4>Flexible</h4>
                  <p>Tenures</p>
                </div>

                <div className="FDStatCard">
                  <h4>Partner</h4>
                  <p>Banks</p>
                </div>

                <div className="FDStatCard">
                  <h4>Transparent</h4>
                  <p>Returns</p>
                </div>

                <div className="FDStatCard">
                  <h4>Clear</h4>
                  <p>Disclosures</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .FDHero{
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

      .FDHeroGrid{
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

      .FDHeroContainer{
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

      .FDHeroLeft{
        max-width:650px;
      }



      .FDHeroPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .FDHeroRight{
        display:flex;
        justify-content:center;
      }

      .FDCard{
        width:100%;
        max-width:420px;

        background:var(--color-dark-green);

        border-radius:28px;

        padding:28px;

        color:white;

        box-shadow:
        0 24px 70px rgba(11,59,54,.18);
      }

      .FDCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .FDCardHeading{
        display:flex;
        align-items:center;
        gap:8px;
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .FDLivePill{
        background:rgba(220,235,99,.12);
        color:var(--color-accent-lime);
        padding:6px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
      }

      .FDMainValue{
        font-size:72px;
        font-weight:900;
        color:var(--color-accent-lime);
        margin-top:18px;
        line-height:1;
      }

      .FDMainLabel{
        font-size:20px;
        margin-top:8px;
      }

      .FDProgressBar{
        height:6px;
        border-radius:999px;
        background:var(--color-accent-lime);
        margin:22px 0;
      }

      .FDStatsGrid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .FDStatCard{
        background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:16px;
      }

      .FDStatCard h4{
        margin:0;
        font-size:18px;
      }

      .FDStatCard p{
        margin-top:4px;
        color:rgba(255,255,255,.7);
        font-size:12px;
      }

      @media(max-width:1100px){

        .FDHero{
          min-height:auto;
          padding:140px 20px 90px;
        }

        .FDHeroContainer{
          grid-template-columns:1fr;
        }

        .FDHeroLeft{
          max-width:100%;
          text-align:center;
        }

       

        .FDHeroPills{
          justify-content:center;
        }

      }

      @media(max-width:768px){

        .FDHero{
          padding:120px 20px 70px;
        }

        

        .FDCard{
          padding:22px;
        }

      }

      `}</style>
    </>
  );
}