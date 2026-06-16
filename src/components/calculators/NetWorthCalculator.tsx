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

    <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>NET WORTH FORMULA</span>
      <strong>
        Net Worth = Assets − Liabilities
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Total Assets</span>
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

    <div className="InputGroup">
      <div className="InputTop">
        <span>Total Liabilities</span>
        <strong>
          ₹{formatCurrency(liabilities)}
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

  </div>

  <div className="CalculatorResults">

    <div className="ResultLabel">
      Current Net Worth
    </div>

    <h2>
      ₹{formatCurrency(netWorth)}
    </h2>

    <div className="Growth">
      {netWorth >= 0
        ? "Healthy Financial Position"
        : "Negative Net Worth"}
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Total Assets</span>
      <strong>
        ₹{formatCurrency(assets)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Total Liabilities</span>
      <strong>
        ₹{formatCurrency(liabilities)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Net Worth</span>
      <strong>
        ₹{formatCurrency(netWorth)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Financial Status</span>
      <strong>
        {netWorth >= 0
          ? "Positive"
          : "Negative"}
      </strong>
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
  max-width:1280px;
  margin:0 auto;
}

.sipBack{
font-family: "Geist-Bold";
  letter-spacing: 1px;
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
font-family: "Geist-SemiBold";
  letter-spacing: 1px;
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



@media(max-width:768px){

  .sipPage{
    padding:110px 16px 30px;
  }

}`}</style>
</div>
  )
}
