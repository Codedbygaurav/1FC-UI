import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PPFCalculator() {

    const [yearlyDeposit, setYearlyDeposit] = useState(150000);
const [interest, setInterest] = useState(7.1);
const [years, setYears] = useState(15);

const maturityValue =
  yearlyDeposit *
  ((Math.pow(1 + interest / 100, years) - 1) /
    (interest / 100));

const totalDeposits =
  yearlyDeposit * years;

const interestEarned =
  maturityValue - totalDeposits;

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
        TAX SAVING CALCULATOR
      </div>

      <h1 className="sipTitle">
        PPF Calculator
      </h1>

      <p className="sipDescription">
        Estimate your Public Provident Fund
        maturity value and understand your
        long-term tax-free wealth creation.
      </p>

    </div>

    <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>PPF GROWTH FORMULA</span>
      <strong>
        A = P × [(1 + r)n − 1] / r
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Yearly Deposit</span>
        <strong>
          ₹{formatCurrency(yearlyDeposit)}
        </strong>
      </div>

      <input
        type="range"
        min={500}
        max={150000}
        step={500}
        value={yearlyDeposit}
        onChange={(e) =>
          setYearlyDeposit(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Interest Rate</span>
        <strong>
          {interest}%
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={15}
        step={0.1}
        value={interest}
        onChange={(e) =>
          setInterest(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Duration</span>
        <strong>
          {years} Years
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={25}
        step={1}
        value={years}
        onChange={(e) =>
          setYears(
            Number(e.target.value)
          )
        }
      />
    </div>

  </div>

  <div className="CalculatorResults">

    <div className="ResultLabel">
      Estimated Maturity Value
    </div>

    <h2>
      ₹{formatCurrency(maturityValue)}
    </h2>

    <div className="Growth">
      + ₹{formatCurrency(interestEarned)}
      {" "}earned
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Total Deposits</span>
      <strong>
        ₹{formatCurrency(totalDeposits)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Interest Earned</span>
      <strong>
        ₹{formatCurrency(interestEarned)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Maturity Value</span>
      <strong>
        ₹{formatCurrency(maturityValue)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Duration</span>
      <strong>
        {years} Years
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



@media(max-width:768px){

  .sipPage{
    padding:110px 16px 30px;
  }

  .sipCard{
    padding:20px;
    border-radius:24px;
  }

  
}`}</style>
</div>
  )
}
