import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NetWorthCalculator() {
    const [assets, setAssets] = useState(24000000);
const [liabilities, setLiabilities] = useState(5800000);

const netWorth =
  assets - liabilities;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
  return (
    <div className="sipPage">
  <div className="sipWrapper">

    <Link
      to="/tools"
      className="sipBack"
    >
      <ArrowLeft size={16} />
      Back to Tools
    </Link>

    <div className="sipHeader">

      <div className="sipBadge">
        FINANCIAL PLANNING
      </div>

      <h1 className="sipTitle">
        Net Worth Calculator
      </h1>

      <p className="sipDescription">
        Calculate your net worth by
        comparing total assets against
        total liabilities.
      </p>

    </div>

    <div className="sipCard">

      <div className="sipFormulaBlock">

        <div className="sipFormulaLabel">
          Net Worth Formula
        </div>

        <div className="sipFormula">
          Net Worth = Assets − Liabilities
        </div>

      </div>

      <div className="sipInputGroup">

        <div className="sipInputTop">

          <span>
            Total Assets
          </span>

          <strong>
            ₹{formatCurrency(assets)}
          </strong>

        </div>

        <input
          type="range"
          min={100000}
          max={100000000}
          step={100000}
          value={assets}
          onChange={(e) =>
            setAssets(
              Number(e.target.value)
            )
          }
        />

      </div>

      <div className="sipInputGroup">

        <div className="sipInputTop">

          <span>
            Total Liabilities
          </span>

          <strong>
            ₹{formatCurrency(
              liabilities
            )}
          </strong>

        </div>

        <input
          type="range"
          min={0}
          max={100000000}
          step={100000}
          value={liabilities}
          onChange={(e) =>
            setLiabilities(
              Number(e.target.value)
            )
          }
        />

      </div>

      <div className="sipDivider" />

      <div className="sipResults">

        <span className="sipResultLabel">
          Net Worth
        </span>
        <div className="netWorthStatus">

  {netWorth > 0
    ? "Healthy Financial Position"
    : "Negative Net Worth"}

</div>

        <h2 className="sipResultValue">
          ₹
          {formatCurrency(
            netWorth
          )}
        </h2>

        <div className="sipStats">

          <div className="sipStat">

            <span>
              Total Assets
            </span>

            <strong>
              ₹
              {formatCurrency(
                assets
              )}
            </strong>

          </div>

          <div className="sipStat">

            <span>
              Total Liabilities
            </span>

            <strong>
              ₹
              {formatCurrency(
                liabilities
              )}
            </strong>

          </div>

        </div>

      </div>

    </div>

  </div>
  <style>{`.sipPage{
  min-height:100vh;
  background:#FAFAF7;
  padding:120px 20px 40px;
}

.sipWrapper{
  max-width:820px;
  margin:0 auto;
}

.sipBack{
  display:inline-flex;
  align-items:center;
  gap:8px;
  text-decoration:none;
  color:#0B3B36;
  font-size:14px;
  font-weight:600;
  margin-bottom:28px;
}

.sipHeader{
  margin-bottom:28px;
}

.sipBadge{
  display:inline-flex;
  padding:8px 14px;
  border-radius:999px;
  background:#F1F3EE;
  color:#0B3B36;
  font-size:10px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  margin-bottom:18px;
}

.sipTitle{
  font-size:clamp(42px,5vw,64px);
  line-height:.95;
  letter-spacing:-0.05em;
  font-weight:850;
  color:#111;
  margin-bottom:16px;
}

.sipDescription{
  max-width:620px;
  font-size:15px;
  line-height:1.8;
  color:#5E5E5E;
}

.sipCard{
  background:#FFFFFF;
  border-radius:32px;
  border:1px solid rgba(0,0,0,.06);
  padding:28px;
}

.sipFormulaBlock{
  background:
    linear-gradient(
      180deg,
      #0B3B36,
      #082D29
    );

  border-radius:24px;
  padding:20px 22px;
  margin-bottom:28px;
}

.sipFormulaLabel{
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:#DCEB63;
  margin-bottom:10px;
}

.sipFormula{
  color:#FAFAF7;
  font-size:18px;
  font-weight:700;
  line-height:1.6;
}

.sipInputGroup{
  margin-bottom:28px;
}

.sipInputTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}

.sipInputTop span{
  font-size:14px;
  color:#5E5E5E;
}

.sipInputTop strong{
  font-size:16px;
  font-weight:700;
  color:#111;
}

.sipInputGroup input{
  width:100%;
  appearance:none;
  height:6px;
  border-radius:999px;
  background:#E7EAE4;
}

.sipInputGroup input::-webkit-slider-thumb{
  appearance:none;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#0B3B36;
  cursor:pointer;
}
  .netWorthStatus{
  margin-top:16px;
  display:inline-flex;
  padding:10px 14px;
  border-radius:999px;
  background:#F1F3EE;
  color:#0B3B36;
  font-size:12px;
  font-weight:700;
}

.sipDivider{
  height:1px;
  background:rgba(0,0,0,.06);
  margin:8px 0 28px;
}

.sipResultLabel{
  display:block;
  color:#5E5E5E;
  margin-bottom:10px;
}

.sipResultValue{
  font-size:clamp(42px,6vw,68px);
  line-height:.95;
  letter-spacing:-0.05em;
  color:#0B3B36;
  margin-bottom:24px;
  font-weight:700;
}

.sipStats{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
  

.sipStat{
  background:#F6F7F3;
  border-radius:18px;
  padding:18px;
}

.sipStat span{
  display:block;
  font-size:12px;
  color:#5E5E5E;
  margin-bottom:8px;
}

.sipStat strong{
  font-size:18px;
  color:#111;
}
  .emiStats{
  grid-template-columns:
    repeat(3,1fr);
}



@media(max-width:768px){

  .sipPage{
    padding:110px 16px 30px;
  }

  .sipCard{
    padding:20px;
    border-radius:24px;
  }

  .sipStats{
    grid-template-columns:1fr;
  }

  .sipResultValue{
    font-size:44px;
  }
    .emiStats{
    grid-template-columns:1fr;
  }
}`}</style>
</div>
  )
}
