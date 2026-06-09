import {
  Gift,
  ArrowRight,
  Users,
  Clock3,
} from "lucide-react";

export default function ReferEarnCTA() {
  return (
    <>
      <section className="referCTA">

        <div className="referCTAContent">

          <div className="referCTALabel">
            REFER & EARN
          </div>

          <h2 className="referCTATitle">
            Start earning
            <br />
            by sharing.
          </h2>

          <p className="referCTAText">
            Invite friends and family to
            1FC and earn rewards when
            they begin their financial
            journey.
          </p>

          <div className="referCTAButtons">

            <button className="referPrimaryBtn">
              <Gift size={18} />
              Refer Now
            </button>

            <button className="referSecondaryBtn">
              Learn More
            </button>

          </div>

          <div className="referStats">

            <div>
              <Users size={16} />
              ₹500+ Rewards
            </div>

            <div>
              <Clock3 size={16} />
              24h Tracking
            </div>

            <div>
              <ArrowRight size={16} />
              Instant Updates
            </div>

          </div>

        </div>

        <img
          src="/mascotFull.png"
          alt="1FC Mascot"
          className="referMascot"
        />

      </section>
      <style>{`.referCTA{
  max-width:1280px;
  margin:48px auto;

  background:
  linear-gradient(
    135deg,
    #0B3B36 0%,
    #0D4B43 100%
  );

  border-radius:32px;

  padding:60px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  gap:40px;

  color:white;

  overflow:hidden;
}

.referCTAContent{
  max-width:620px;
}

.referCTALabel{
  color:
  var(--color-accent-lime);

  font-size:11px;
  font-weight:800;

  letter-spacing:.14em;

  margin-bottom:16px;
}

.referCTATitle{
  font-size:64px;
  line-height:.95;

  font-weight:900;

  letter-spacing:-.06em;

  margin:0 0 18px;
}

.referCTAText{
  color:
  rgba(255,255,255,.72);

  line-height:1.9;

  max-width:520px;

  margin-bottom:32px;
}

.referCTAButtons{
  display:flex;
  gap:14px;
  margin-bottom:30px;
}

.referPrimaryBtn{
  height:56px;

  border:none;

  padding:0 22px;

  border-radius:16px;

  display:flex;
  align-items:center;
  gap:8px;

  background:
  var(--color-accent-lime);

  color:
  var(--color-dark-green);

  font-weight:800;

  cursor:pointer;
}

.referSecondaryBtn{
  height:56px;

  padding:0 22px;

  border-radius:16px;

  background:
  rgba(255,255,255,.08);

  border:
  1px solid rgba(255,255,255,.12);

  color:white;

  font-weight:700;

  cursor:pointer;
}

.referStats{
  display:flex;
  gap:24px;
  flex-wrap:wrap;
}

.referStats div{
  display:flex;
  align-items:center;
  gap:8px;

  color:
  rgba(255,255,255,.75);

  font-size:14px;
}

.referMascot{
  height:450px;
  object-fit:cover;
}

@media(max-width:900px){

  .referCTA{
    padding:32px 24px;
    flex-direction:column;
    text-align:center;
  }

  .referCTATitle{
    font-size:44px;
  }

  .referCTAButtons{
    flex-direction:column;
  }

  .referPrimaryBtn,
  .referSecondaryBtn{
    width:100%;
    justify-content:center;
  }

  .referStats{
    justify-content:center;
  }

  .referMascot{
    height:280px;
  }

}`}</style>
      
    </>
  );
}