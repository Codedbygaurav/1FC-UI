import {
  Gift,
  Users,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const rewards = [
  {
    icon: Gift,
    title: "Referral Bonus",
    amount: "₹500",
    description:
      "Earn rewards for every successful referral that completes the required journey.",
  },
  {
    icon: Trophy,
    title: "Milestone Rewards",
    amount: "₹5,000+",
    featured: true,
    description:
      "Unlock larger rewards and exclusive benefits as your referral network grows.",
  },
  {
    icon: Users,
    title: "Friend Reward",
    amount: "Bonus Benefits",
    description:
      "Your friends also receive special benefits when joining through your referral.",
  },
];

export default function RewardsSection() {
  return (
    <>
      <section className="RewardsSection">

        <div className="RewardsHeader">

          <div className="section-label">
            REWARDS
          </div>

          <h2 className="section-title">
            Rewards that grow
            <br/>
            <span>with your network.</span>
          </h2>

          <p className="section-subtitle">
            The more people you help discover 1FC,
            the more opportunities you unlock.
          </p>

        </div>

        <div className="RewardsGrid">

          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <div
                key={index}
                className={`RewardCard ${
                  reward.featured ? "FeaturedReward" : ""
                }`}
              >

                <div className="RewardIcon">
                  <Icon size={24} />
                </div>

                <div className="RewardAmount">
                  {reward.amount}
                </div>

                <h3>
                  {reward.title}
                </h3>

                <p>
                  {reward.description}
                </p>

                <div className="RewardAction">
                  <ArrowUpRight size={18} />
                </div>

              </div>
            );
          })}

        </div>

      </section>

      <style>{`

      .RewardsSection{
        max-width:1280px;
        margin:auto;
        padding:0 24px 140px;
      }

      .RewardsHeader{
        text-align:center;
        max-width:850px;
        margin:0 auto 70px;
      }

      .RewardsGrid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .RewardCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:30px;
        padding:36px;
        min-height:360px;
        display:flex;
        flex-direction:column;
        position:relative;
        transition:.3s ease;
      }

      .RewardCard:hover{
        transform:translateY(-8px);
        border-color:var(--color-accent-lime);
        box-shadow:
          0 20px 50px rgba(11,59,54,.08);
      }

      .FeaturedReward{
        background:var(--color-dark-green);
        border:none;
        color:#fff;
        transform:scale(1.03);
      }

      .FeaturedReward::before{
        content:"MOST POPULAR";
        position:absolute;
        top:20px;
        right:20px;

        background:var(--color-accent-lime);
        color:var(--color-dark-green);

        font-size:10px;
        font-weight:800;
        letter-spacing:.08em;

        padding:8px 12px;
        border-radius:999px;
      }

      .RewardIcon{
        width:64px;
        height:64px;
        border-radius:18px;
        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:var(--color-dark-green);

        margin-bottom:28px;
      }

      .FeaturedReward .RewardIcon{
        background:
          rgba(220,235,99,.15);

        color:
          var(--color-accent-lime);
      }

      .RewardAmount{
        font-size:56px;
        line-height:1;
        font-weight:900;
        margin-bottom:18px;
      }

      .RewardCard h3{
        margin:0 0 14px;
        font-size:30px;
        line-height:1.1;
        font-weight:800;
      }

      .RewardCard p{
        margin:0;
        flex:1;
        color:#667085;
        line-height:1.8;
      }

      .FeaturedReward p{
        color:rgba(255,255,255,.75);
      }

      .RewardAction{
        margin-top:24px;

        width:44px;
        height:44px;

        border-radius:12px;

        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:var(--color-dark-green);
      }

      .FeaturedReward .RewardAction{
        background:
          rgba(220,235,99,.15);

        color:
          var(--color-accent-lime);
      }

      @media(max-width:1100px){

        .RewardsGrid{
          grid-template-columns:1fr;
        }

        .FeaturedReward{
          transform:none;
        }

      }

      @media(max-width:768px){

        .RewardsSection{
          padding:0 20px 90px;
        }

        .RewardsHeader{
          margin-bottom:40px;
        }

        .RewardCard{
          min-height:auto;
          padding:26px;
          border-radius:24px;
        }

        .RewardAmount{
          font-size:42px;
        }

        .RewardCard h3{
          font-size:24px;
        }

        .RewardIcon{
          width:56px;
          height:56px;
          margin-bottom:20px;
        }

      }

      `}</style>
    </>
  );
}