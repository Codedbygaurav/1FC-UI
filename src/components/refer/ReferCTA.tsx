import {
  Gift,
  Users,
  ArrowRight,
  Bell,
} from "lucide-react";

export default function ReferCTA() {
  return (
    <>
      <section className="referCta">

        <div className="referCtaContent">

          <div className="referBadge">
            REFER & EARN
          </div>

          <h2 className="referTitle">
            Invite friends.
            <br />
            Earn rewards.
          </h2>

          <p className="referDescription">
            Share your referral link and earn
            rewards when friends and family
            start their financial journey with
            1FC.
          </p>

          <div className="referButtons">

            <button className="referPrimaryBtn">
              <Gift size={18} />
              Refer Now
            </button>

            <button className="referSecondaryBtn">
              Terms & Conditions
            </button>

          </div>

          <div className="referPills">

            <div className="referPill">
              ₹500 Reward
            </div>

            <div className="referPill">
              Live Tracking
            </div>

            <div className="referPill">
              Instant Updates
            </div>

          </div>

        </div>

        <div className="referVisual">

          <div className="floatingCard cardOne">

            <Users size={18} />

            <div>
              <span>Referrals</span>
              <strong>3 Joined</strong>
            </div>

          </div>

          <div className="floatingCard cardTwo">

            <Gift size={18} />

            <div>
              <span>Reward</span>
              <strong>₹500 Earned</strong>
            </div>

          </div>

          <div className="floatingCard cardThree">

            <Bell size={18} />

            <div>
              <span>Status</span>
              <strong>Reward Added</strong>
            </div>

          </div>

          <img
            src="/mascotHalf.png"
            alt="1FC Mascot"
            className="referMascot"
          />

        </div>

      </section>
    <style>{`.referCta{
  max-width:1280px;
  margin:48px auto;

  background:
    var(--color-dark-green);

  border-radius:36px;

  padding:70px 70px 0;

  display:grid;
  grid-template-columns:1fr 500px;

  gap:40px;

  overflow:hidden;

  position:relative;
}

.referCtaContent{
  padding-bottom:70px;
}

.referBadge{
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  color:var(--color-accent-lime);

  font-size:11px;
  font-weight:800;

  letter-spacing:.14em;
  text-transform:uppercase;

  margin-bottom:18px;
}

.referTitle{
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  color:var(--color-bg-ivory);

  font-size:clamp(54px,6vw,82px);

  line-height:.9;


  margin:0 0 24px;

  font-weight:900;
}

.referDescription{
  max-width:540px;

  color:
  rgba(255,255,255,.72);

  font-size:18px;

  line-height:1.6;

  margin-bottom:32px;
}

.referButtons{
font-family:"Geist-Bold";
      letter-spacing:1px;
  display:flex;
  gap:14px;

  margin-bottom:32px;
}

.referPrimaryBtn{
  height:58px;

  border:none;

  border-radius:16px;

  padding:0 24px;

  display:flex;
  align-items:center;
  gap:10px;

  background:
    var(--color-accent-lime);

  color:
    var(--color-dark-green);

  font-weight:800;

  cursor:pointer;
}

.referSecondaryBtn{
  height:58px;

  padding:0 24px;

  border-radius:16px;

  background:
    rgba(255,255,255,.08);

  border:
    1px solid rgba(255,255,255,.12);

  color:var(--color-bg-ivory);

  font-weight:700;

  cursor:pointer;
}

.referPills{
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.referPill{
  height:42px;

  padding:0 16px;

  border-radius:999px;

  display:flex;
  align-items:center;

  background:
    rgba(255,255,255,.08);

  border:
    1px solid rgba(255,255,255,.08);

  color: var(--color-bg-ivory);

  font-size:13px;
  font-weight:700;
}

.referVisual{
  position:relative;
  min-height:520px;
}

.referMascot{
  position:absolute;
  bottom:0;
  right:20px;

  height:560px;

  object-fit:contain;
}

.floatingCard{
  position:absolute;

  background:white;

  border-radius:18px;

  padding:16px;

  display:flex;
  align-items:center;
  gap:12px;

  box-shadow:
    0 20px 50px rgba(0,0,0,.15);

  min-width:190px;
}

.floatingCard span{
  display:block;

  color:#667085;

  font-size:12px;
}

.floatingCard strong{
  color:var(--color-dark-green);

  font-size:15px;
}

.cardOne{
  top:70px;
  right:240px;
  z-index:999;
}

.cardTwo{
  top:220px;
  left:10px;
  z-index:999;
}

.cardThree{
  bottom:120px;
  right:260px;
  z-index:999;
}

@media (max-width:1024px){

  .referCta{
    grid-template-columns:1fr 1fr;
    border-radius:24px;
    padding:48px 24px 0;
    width:95%;
    text-align:center;
  }

  .referTitle{
    font-size:40px;
  }

  .referDescription{
    font-size:15px;
    margin-left:auto;
    margin-right:auto;
  }

  .referButtons{
    justify-content:center;
  }

  

  .referPills{
    justify-content:center;
  }

  .referVisual{
    min-height:220px;
  }

  .referMascot{
    height:450px;
    right:50%;
    transform:translateX(50%);
  }

  .floatingCard{
    display:none;
  }

}

@media(max-width:768px){

.referCta{
    grid-template-columns: 1fr;
    
  }

  .referCta{
    border-radius:24px;
    padding:48px 24px 0;
   width:95%;
  }

  .referTitle{
    font-size:40px;
  }

  .referDescription{
    font-size:15px;
  }

  .referButtons{
    flex-direction:column;
  }

  .referPrimaryBtn,
  .referSecondaryBtn{
    width:100%;
    justify-content:center;
  }

  .referVisual{
    min-height:220px;
  }

  .referMascot{
    height:300px;
  }

  .floatingCard{
    display:none;
  }

}`}</style>
</>
)}