import {
  Gift,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ReferTermsHero() {
  return (
    <>
      <section className="ReferTermsHero">

        <div className="ReferTermsGrid" />

        <div className="ReferTermsContainer">

          <div className="ReferTermsLeft">

            <div className="hero-label">
              <Gift size={14} />
              Refer & Earn Terms
            </div>

            <h1 className="hero-title">
              Understand the rules.
              <br />
              Earn with
              <span>{" "}confidence.</span>
            </h1>

            <p className="hero-subtext">
              Learn how referrals, rewards,
              eligibility requirements and
              payouts work within the 1FC
              referral program.
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

            <div className="ReferTermsPills">

              <div className="tag-pill">
                <Gift size={14} />
                Reward Tracking
              </div>

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Transparent Rules
              </div>

              <div className="tag-pill">
                <Users size={14} />
                Fair Usage
              </div>

              <div className="tag-pill">
                <ShieldCheck size={14} />
                Secure Rewards
              </div>

            </div>

          </div>

          <div className="ReferTermsRight">

            <div className="ReferTermsCard">

              <div className="ReferTermsCardTop">

                <span className="ReferTermsCardHeading">
                  Referral Program
                </span>

                <div className="ReferTermsLivePill">
                  Active
                </div>

              </div>

              <div className="ReferTermsMainValue">
                Earn
              </div>

              <div className="ReferTermsMainLabel">
                Invite & Reward
              </div>

              <div className="ReferTermsProgress" />

              <div className="ReferTermsStats">

                <div className="ReferTermsStat">
                  <h4>Invite</h4>
                  <p>Friends</p>
                </div>

                <div className="ReferTermsStat">
                  <h4>Earn</h4>
                  <p>Rewards</p>
                </div>

                <div className="ReferTermsStat">
                  <h4>Track</h4>
                  <p>Referrals</p>
                </div>

                <div className="ReferTermsStat">
                  <h4>Simple</h4>
                  <p>Rules</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .ReferTermsHero{
        position:relative;
        overflow:hidden;
        min-height:90vh;
        display:flex;
        align-items:center;
        padding:170px 20px 90px;
        background:
        linear-gradient(
          180deg,
          #f7f7f2 0%,
          #f4f4ee 100%
        );
      }

      .ReferTermsGrid{
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

      .ReferTermsContainer{
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

      .ReferTermsTitle{
        font-size:clamp(48px,5vw,72px);
        line-height:.92;
        letter-spacing:-.06em;
        font-weight:900;
        margin:18px 0;
      }

      .ReferTermsTitle span{
        font-family:"Geist-Bold", serif;
        font-style:italic;
        color:var(--color-dark-green);
        font-weight:400;
      }

      .ReferTermsSubtitle{
        max-width:560px;
        color:#667085;
        line-height:1.8;
        margin-bottom:24px;
      }

      .ReferTermsActions{
        display:flex;
        gap:12px;
        margin-bottom:24px;
      }

      .ReferTermsPills{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .ReferTermsCard{
        background:var(--color-dark-green);
        border-radius:28px;
        padding:28px;
        color:white;
        max-width:420px;
        margin:auto;
      }

      .ReferTermsCardTop{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .ReferTermsCardHeading{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        color:var(--color-accent-lime);
        font-weight:700;
      }

      .ReferTermsLivePill{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        background:rgba(220,235,99,.12);
        color:var(--color-accent-lime);
        padding:6px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
      }

      .ReferTermsMainValue{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:72px;
        line-height:1;
        margin-top:18px;
        font-weight:900;
        color:var(--color-accent-lime);
      }

      .ReferTermsMainLabel{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        margin-top:8px;
        font-size:20px;
      }

      .ReferTermsProgress{
        height:6px;
        border-radius:999px;
        background:var(--color-accent-lime);
        margin:22px 0;
      }

      .ReferTermsStats{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px;
      }

      .ReferTermsStat{
        background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:16px;
      }

      .ReferTermsStat h4{
        margin:0;
        font-size:18px;
      }

      .ReferTermsStat p{
        margin-top:4px;
        font-size:12px;
        color:rgba(255,255,255,.7);
      }

      @media(max-width:1100px){

        .ReferTermsContainer{
          grid-template-columns:1fr;
        }

        .ReferTermsLeft{
          text-align:center;
        }

        .ReferTermsSubtitle{
          margin-inline:auto;
        }

        .ReferTermsActions{
          justify-content:center;
        }

        .ReferTermsPills{
          justify-content:center;
        }

      }

      @media(max-width:768px){

        .ReferTermsHero{
          min-height:auto;
          padding:120px 20px 70px;
        }

        .ReferTermsTitle{
          font-size:46px;
        }

        .ReferTermsActions{
          flex-direction:column;
        }

      }

      `}</style>
    </>
  );
}