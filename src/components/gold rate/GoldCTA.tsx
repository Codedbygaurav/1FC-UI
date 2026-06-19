import {
  Coins,
  ArrowRight,
} from "lucide-react";

export default function GoldCTA() {
  return (
    <>
      <section className="GoldCTA">

        <div className="GoldCTAContainer">

          <div className="GoldCTAContent">

            <div className="GoldCTALabel">
              GOLD INSIGHTS
            </div>

            <h2>
              Ready to make smarter
              <br />
              gold decisions?
            </h2>

            <p>
              Track market movements, compare rates
              and stay informed with reliable gold
              insights designed for modern investors.
            </p>

            <button className="GoldCTAButton">

              <Coins size={18} />

              Explore More

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

      <style>{`

      .GoldCTA{
        padding:0 24px 120px;
      }

      .GoldCTAContainer{
        max-width:1280px;
        margin:auto;
      }

      .GoldCTAContent{
        position:relative;
        overflow:hidden;

        background:
        var(--color-dark-green);

        border-radius:32px;

        padding:70px;

        text-align:center;

        color:white;

        box-shadow:
        0 30px 90px rgba(11,59,54,.15);
      }

      .GoldCTAContent::before{
        content:"";

        position:absolute;

        top:-120px;
        right:-120px;

        width:320px;
        height:320px;

        border-radius:50%;

        background:
        rgba(234,226,106,.08);
      }

      .GoldCTAContent::after{
        content:"";

        position:absolute;

        bottom:-100px;
        left:-80px;

        width:240px;
        height:240px;

        border-radius:50%;

        background:
        rgba(234,226,106,.05);
      }

      .GoldCTALabel{
        color:
        var(--color-accent-lime);

        font-size:11px;
        font-weight:800;

        letter-spacing:.14em;

        text-transform:uppercase;

        margin-bottom:18px;
      }

      .GoldCTAContent h2{
        font-size:
        clamp(40px,5vw,72px);

        line-height:.95;

        letter-spacing:-.05em;

        margin:0 0 18px;
      }

      .GoldCTAContent p{
        max-width:650px;

        margin:0 auto 36px;

        color:
        rgba(255,255,255,.75);

        line-height:1.9;
      }

      .GoldCTAButton{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        border:none;

        background:
        var(--color-accent-lime);

        color:
        var(--color-dark-green);

        padding:16px 24px;

        border-radius:16px;

        font-weight:800;

        cursor:pointer;

        display:inline-flex;
        align-items:center;
        gap:10px;
      }

      @media(max-width:768px){

        .GoldCTA{
          padding:0 20px 90px;
        }

        .GoldCTAContent{
          padding:40px 24px;
          border-radius:24px;
        }

        .GoldCTAContent h2{
          font-size:35px;
        }

        .GoldCTAButton{
          width:100%;
          justify-content:center;
        }

      }

      `}</style>
    </>
  );
}