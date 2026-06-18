import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SukanyaCalculator() {
    const [yearlyDeposit, setYearlyDeposit] = useState(150000);
const [interest, setInterest] = useState(8.2);
const [years, setYears] = useState(21);

const maturityValue =
  yearlyDeposit *
  ((Math.pow(1 + interest / 100, years) - 1) /
    (interest / 100));

const totalDeposits =
  yearlyDeposit * years;

const wealthCreated =
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
        CHILD FUTURE PLANNING
      </div>

      <h1 className="sipTitle">
        Sukanya Samriddhi Calculator
      </h1>

      <p className="sipDescription">
        Estimate the maturity value of your
        Sukanya Samriddhi Yojana investment
        and plan for your daughter's future.
      </p>

    </div>

    <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>SSY GROWTH FORMULA</span>
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
        min={1000}
        max={150000}
        step={1000}
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
        max={21}
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
      + ₹{formatCurrency(wealthCreated)}
      {" "}wealth created
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Total Deposits</span>
      <strong>
        ₹{formatCurrency(totalDeposits)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Wealth Created</span>
      <strong>
        ₹{formatCurrency(wealthCreated)}
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
font-family: "Geist-Bold";
  letter-spacing: 1px;
  display:inline-flex;
  align-items:center;
  gap:8px;
  text-decoration:none;
  color:var(--color-dark-green);
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
  color:var(--color-dark-green);
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
