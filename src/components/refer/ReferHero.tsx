import {
  Gift,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";


export default function ReferHero() {
  return (
    <>
      <section className="ReferHero">

        <div className="ReferHeroContent">

          <div className="hero-label">
            <Gift size={14}/>
            REFER & EARN
          </div>

          <h1 className="hero-title">
            Share 1FC.
            <br />
            Earn <span>rewards.</span>
          </h1>

          <p className="hero-subtext">
            Invite friends and family to start
            their financial journey with 1FC.
            Earn exciting rewards when they join
            and complete eligible actions.
          </p>

          <div className="hero-actions">

            <button className="btn-primary">
              Start Referring
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              Learn More
            </button>

          </div>

          <div className="ReferTrustRow">

            <div>
              <BadgeCheck size={16} />
              Transparent Rewards
            </div>

            <div>
              <BadgeCheck size={16} />
              Instant Tracking
            </div>

            <div>
              <BadgeCheck size={16} />
              Secure Referrals
            </div>

            <div>
              <BadgeCheck size={16} />
              No Hidden Conditions
            </div>

          </div>

        </div>

        <div className="ReferDashboard">

          <div className="ReferralCard">

            <div className="CardTop">

              <span>
                Referral Overview
              </span>

              <div className="LiveTag">
                Active
              </div>

            </div>

            <div className="ReferralMainStat">
              ₹12,500
            </div>

            <div className="ReferralMainLabel">
              Total Rewards Earned
            </div>

            <div className="ReferralStats">

              <div className="ReferralStat">

                <Users size={18} />

                <h3>24</h3>

                <p>Referrals</p>

              </div>

              <div className="ReferralStat">

                <Gift size={18} />

                <h3>3</h3>

                <p>Pending</p>

              </div>

              <div className="ReferralStat">

                <BadgeCheck size={18} />

                <h3>94%</h3>

                <p>Success Rate</p>

              </div>

              <div className="ReferralStat">

                <Gift size={18} />

                <h3>₹500</h3>

                <p>Avg Reward</p>

              </div>

            </div>

          </div>

          

        </div>

      </section>

      <style>{`

      .ReferHero{
        max-width:1280px;
        margin:auto;
        padding:140px 24px 140px;
        display:grid;
        grid-template-columns:1fr 520px;
        gap:80px;
        align-items:center;
      }

      .ReferHeroTitle{
        font-size:82px;
        line-height:.92;
        letter-spacing:-3px;
        margin:0;
        color:#111;
      }

      .ReferHeroSubtitle{
        margin-top:24px;
        max-width:620px;
        color:#667085;
        font-size:18px;
        line-height:1.9;
      }

      .ReferHeroActions{
        display:flex;
        gap:14px;
        margin-top:34px;
      }

      .ReferPrimaryBtn{
        height:56px;
        padding:0 24px;
        border:none;
        border-radius:16px;
        background:var(--color-dark-green);
        color:#fff;
        font-weight:800;
        cursor:pointer;
        display:flex;
        align-items:center;
        gap:10px;
      }

      .ReferSecondaryBtn{
        height:56px;
        padding:0 24px;
        border-radius:16px;
        border:1px solid #E5E7EB;
        background:#fff;
        color:#111;
        font-weight:700;
        cursor:pointer;
      }

      .ReferTrustRow{
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        margin-top:28px;
        justify-content: center;
      }

      .ReferTrustRow div{
        display:flex;
        align-items:center;
        gap:8px;
        color:#667085;
        font-size:14px;
      }

      .ReferDashboard{
        position:relative;
      }

      .ReferralCard{
        background:var(--color-dark-green);
        border-radius:30px;
        padding:32px;
        color:#fff;
      }

      .CardTop{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .CardTop span{
        color:var(--color-accent-lime);
        font-size:13px;
      }

      .LiveTag{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        background:var(--color-accent-lime);
        color:var(--color-dark-green);
        font-size:11px;
        font-weight:800;
        padding:6px 10px;
        border-radius:999px;
      }

      .ReferralMainStat{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:64px;
        font-weight:900;
        margin-top:22px;
        line-height:1;
      }

      .ReferralMainLabel{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        margin-top:10px;
        color:rgba(255,255,255,.75);
      }

      .ReferralStats{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:14px;
        margin-top:30px;
      }

      .ReferralStat{
        background:rgba(255,255,255,.08);
        border-radius:18px;
        padding:18px;
      }

      .ReferralStat h3{
        margin:10px 0 4px;
        font-size:28px;
      }

      .ReferralStat p{
        margin:0;
        color:rgba(255,255,255,.7);
        font-size:13px;
      }

      

      @media (max-width:1024px){

  .ReferHero{
    grid-template-columns:1fr;
    padding:150px 20px;
    text-align:center;
  }

  


  

  .ReferralCard{
    padding:24px;
  }

  .ReferralMainStat{
    font-size:48px;
  }

}

      @media(max-width:768px){

        .ReferHero{
        text-align:center;
          padding:120px 20px;
        }

        .ReferHeroTitle{
          font-size:44px;
        }

        .ReferHeroSubtitle{
          font-size:16px;
        }

        .ReferHeroActions{
          flex-direction:column;
        }

        .ReferPrimaryBtn,
        .ReferSecondaryBtn{
          width:100%;
          justify-content:center;
        }

        .ReferTrustRow{
        display:grid;
        grid-template-columns:1fr 1fr;
        padding: 0 10px
        }

        .ReferralCard{
        
          padding:24px;
        }

        .ReferralMainStat{
          font-size:48px;
        }

        

      }

      `}</style>
    </>
  );
}