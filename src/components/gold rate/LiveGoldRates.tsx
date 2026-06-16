import {
  Coins,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const rates = [
  {
    purity: "24K Gold",
    rate: "₹1,54,815",
    change: "+1.8%",
    positive: true,
  },
  {
    purity: "22K Gold",
    rate: "₹1,46,000",
    change: "+1.4%",
    positive: true,
  },
  {
    purity: "18K Gold",
    rate: "₹1,13,920",
    change: "-0.3%",
    positive: false,
  },
];

export default function LiveGoldRates() {
  return (
    <>
      <section className="LiveGoldRates">

        <div className="RatesHeader">

          <div className="section-label">
            LIVE MARKET DATA
          </div>

          <h2 className="section-title">
            Gold prices.
            <br />
            <span>Updated daily.</span>
          </h2>

          <p className="section-subtitle">
            Compare gold rates across purity levels
            and track recent market movements.
          </p>

        </div>

        <div className="RatesGrid">

          {rates.map((rate, index) => (
            <div
              key={index}
              className="RateCard"
            >

              <div className="RateTop">

                <div className="RateIcon">
                  <Coins size={22} />
                </div>

                <div
                  className={`RateChange ${
                    rate.positive
                      ? "positive"
                      : "negative"
                  }`}
                >
                  {rate.positive ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}

                  {rate.change}
                </div>

              </div>

              <h3>{rate.purity}</h3>

              <div className="RateValue">
                {rate.rate}
              </div>

              <p>
                Current market rate per 10 grams.
              </p>

            </div>
          ))}

        </div>

      </section>

      <style>{`

      .LiveGoldRates{
        max-width:1280px;
        margin:auto;
        padding:48px 24px 140px;
      }

      .RatesHeader{
        text-align:center;
        max-width:800px;
        margin:0 auto 70px;
      }

      .RatesGrid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .RateCard{
      
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        padding:30px;
        transition:.3s ease;
      }

      .RateCard:hover{
        transform:translateY(-8px);

        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 20px 50px rgba(11,59,54,.08);
      }

      .RateTop{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        display:flex;
        justify-content:space-between;
        align-items:center;

        margin-bottom:24px;
      }

      .RateIcon{
        width:56px;
        height:56px;

        border-radius:16px;

        background:#F5F7F1;

        display:flex;
        align-items:center;
        justify-content:center;

        color:var(--color-dark-green);
      }

      .RateChange{
      
        display:flex;
        align-items:center;
        gap:6px;

        padding:8px 12px;

        border-radius:999px;

        font-size:12px;
        font-weight:700;
      }

      .RateChange.positive{
        background:
        rgba(16,185,129,.1);

        color:#059669;
      }

      .RateChange.negative{
        background:
        rgba(239,68,68,.1);

        color:#DC2626;
      }

      .RateCard h3{
      font-family:"Geist-SemiBold";
      letter-spacing:1px;
        margin:0 0 12px;

        font-size:28px;
        font-weight:800;
      }

      .RateValue{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:48px;
        font-weight:900;

        color:
        var(--color-dark-green);

        letter-spacing:-.04em;

        margin-bottom:12px;
      }

      .RateCard p{
        margin:0;
        color:#667085;
        line-height:1.8;
      }

      @media(max-width:1100px){

        .RatesGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .LiveGoldRates{
          padding:48px 20px 90px;
        }

        .RatesHeader{
          margin-bottom:40px;
        }

        .RatesGrid{
          grid-template-columns:1fr;
        }

        .RateCard{
          padding:24px;
          border-radius:24px;
        }

        .RateValue{
          font-size:40px;
        }

      }

      `}</style>
    </>
  );
}