import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;        

  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));

  const investedAmount =
    monthlyInvestment * months;

  const estimatedReturns =
    futureValue - investedAmount;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="sipPage">
      <div className="sipWrapper">
  <Link to="/tools" className="sipBack">
    <ArrowLeft size={16} />
    Back to Tools
  </Link>

  <div className="sipHeader">
    <div className="sipBadge">
      INVESTMENT CALCULATOR
    </div>

    <h1 className="sipTitle">
      SIP Calculator
    </h1>

    <p className="sipDescription">
      Estimate the future value of your
      monthly investments and understand
      the power of long-term compounding.
    </p>
  </div>

  <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>FUTURE VALUE FORMULA</span>
      <strong>
        M = P × [((1 + r)n − 1) / r] × (1 + r)
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Monthly SIP</span>
        <strong>
          ₹{formatCurrency(monthlyInvestment)}
        </strong>
      </div>

      <input
        type="range"
        min={500}
        max={100000}
        step={500}
        value={monthlyInvestment}
        onChange={(e) =>
          setMonthlyInvestment(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Expected Return</span>
        <strong>
          {annualReturn}%
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={30}
        step={1}
        value={annualReturn}
        onChange={(e) =>
          setAnnualReturn(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Time Period</span>
        <strong>
          {years} Years
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={40}
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
      Estimated Future Value
    </div>

    <h2>
      ₹{formatCurrency(futureValue)}
    </h2>

    <div className="Growth">
      + ₹{formatCurrency(estimatedReturns)}
      {" "}returns generated
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Invested Amount</span>
      <strong>
        ₹{formatCurrency(investedAmount)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Estimated Returns</span>
      <strong>
        ₹{formatCurrency(estimatedReturns)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Total Value</span>
      <strong>
        ₹{formatCurrency(futureValue)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Investment Period</span>
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
  color:#EAE26A;
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
}`}</style>
    </div>
  );
}