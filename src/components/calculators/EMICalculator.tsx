import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
const [interestRate, setInterestRate] = useState(8.5);

const [loanType, setLoanType] =
  useState("Home Loan");
  const loanConfigs = {
  "Home Loan": {
    rate: 8.5,
    years: 20,
    minAmount: 500000,
    maxAmount: 50000000,
  },
  "Personal Loan": {
    rate: 12.5,
    years: 5,
    minAmount: 50000,
    maxAmount: 5000000,
  },
  "Car Loan": {
    rate: 9.25,
    years: 7,
    minAmount: 100000,
    maxAmount: 2000000,
  },
};
const [years, setYears] = useState(20);

const monthlyRate = interestRate / 12 / 100;
const months = years * 12;

const emi =
  (loanAmount *
    monthlyRate *
    Math.pow(1 + monthlyRate, months)) /
  (Math.pow(1 + monthlyRate, months) - 1);

const totalPayment = emi * months;
const totalInterest = totalPayment - loanAmount;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
  return (
    <div className="emiPage">
  <div className="emiWrapper">

    <Link
      to="/tools"
      className="emiBack"
    >
      <ArrowLeft size={16} />
      Back to Tools
    </Link>

    <div className="emiHeader">

      <div className="emiBadge">
        LOAN CALCULATOR
      </div>

      <h1 className="emiTitle">
        EMI Calculator
      </h1>

      <p className="emiDescription">
        Calculate monthly loan repayments,
        total interest payable and overall
        repayment amount instantly.
      </p>

    </div>

    <div className="CalculatorCard">

  <div className="CalculatorInputs">
    <div className="LoanTypeSelector">

  {Object.keys(loanConfigs).map(
    (type) => (
      <button
        key={type}
        className={`LoanTypeBtn ${
          loanType === type
            ? "active"
            : ""
        }`}
        onClick={() => {
          setLoanType(type);

          setInterestRate(
            loanConfigs[
              type as keyof typeof loanConfigs
            ].rate
          );

          setYears(
            loanConfigs[
              type as keyof typeof loanConfigs
            ].years
          );
        }}
      >
        {type}
      </button>
    )
  )}

</div>

    <div className="FormulaCard">
      <span>LOAN EMI FORMULA</span>
      <strong>
        {loanType.toUpperCase()}
        {" "}EMI = [P × R × (1+R)^N] / [(1+R)^N − 1]
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Loan Amount</span>
        <strong>
          ₹{formatCurrency(loanAmount)}
        </strong>
      </div>

      <input
        type="range"
        min={
  loanConfigs[
    loanType as keyof typeof loanConfigs
  ].minAmount
}

max={
  loanConfigs[
    loanType as keyof typeof loanConfigs
  ].maxAmount
}
        step={50000}
        value={loanAmount}
        onChange={(e) =>
          setLoanAmount(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Interest Rate</span>
        <strong>
          {interestRate}%
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={20}
        step={0.1}
        value={interestRate}
        onChange={(e) =>
          setInterestRate(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Loan Tenure</span>
        <strong>
          {years} Years
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={35}
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
      Monthly EMI
    </div>

    <h2>
      ₹{formatCurrency(emi)}
    </h2>

    <div className="Growth">
      ₹{formatCurrency(totalInterest)}
      {" "}interest payable
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Principal Amount</span>
      <strong>
        ₹{formatCurrency(loanAmount)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Interest Payable</span>
      <strong>
        ₹{formatCurrency(totalInterest)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Total Payment</span>
      <strong>
        ₹{formatCurrency(totalPayment)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Loan Tenure</span>
      <strong>
        {years} Years
      </strong>
    </div>

  </div>

</div>

  </div>
  <style>{`.emiPage{
  min-height:100vh;
  background:#FAFAF7;
  padding:120px 20px 40px;
}

.emiWrapper{
  max-width:1280px;
  margin:0 auto;
}

.emiBack{
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

.emiHeader{
  margin-bottom:28px;
}

.emiBadge{
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

.emiTitle{
  font-size:clamp(42px,5vw,64px);
  line-height:.95;
  letter-spacing:-0.05em;
  font-weight:850;
  color:#111;
  margin-bottom:16px;
}

.emiDescription{
  max-width:620px;
  font-size:15px;
  line-height:1.8;
  color:#5E5E5E;
}

.emiCard{
  background:#FFFFFF;
  border-radius:32px;
  border:1px solid rgba(0,0,0,.06);
  padding:28px;
}

.LoanTypeSelector{
  display:flex;
  gap:12px;
  margin-bottom:24px;
  flex-wrap:wrap;
}

.LoanTypeBtn{
font-family: "Geist-Bold";
  letter-spacing: 1px;
  height:46px;
  padding:0 18px;

  border-radius:14px;

  border:1px solid #E5E7EB;
  background:#fff;

  color:#344054;
  font-size:14px;
  font-weight:700;

  cursor:pointer;

  transition:.25s ease;
}

.LoanTypeBtn:hover{
  border-color:
  var(--color-accent-lime);
}

.LoanTypeBtn.active{
  background:
  var(--color-dark-green);

  border-color:
  var(--color-dark-green);

  color:white;
}


.emiFormulaBlock{
  background:
    linear-gradient(
      180deg,
      var(--color-dark-green),
      #082D29
    );

  border-radius:24px;
  padding:20px 22px;
  margin-bottom:28px;
}

.emiFormulaLabel{
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:var(--color-accent-lime);
  margin-bottom:10px;
}

.emiFormula{
  color:#FAFAF7;
  font-size:18px;
  font-weight:700;
  line-height:1.6;
}

.emiInputGroup{
  margin-bottom:28px;
}

.emiInputTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}

.emiInputTop span{
  font-size:14px;
  color:#5E5E5E;
}

.emiInputTop strong{
  font-size:16px;
  font-weight:700;
  color:#111;
}

.emiInputGroup input{
  width:100%;
  appearance:none;
  height:6px;
  border-radius:999px;
  background:#E7EAE4;
}

.emiInputGroup input::-webkit-slider-thumb{
  appearance:none;
  width:18px;
  height:18px;
  border-radius:50%;
  background:var(--color-dark-green);
  cursor:pointer;
}

.emiDivider{
  height:1px;
  background:rgba(0,0,0,.06);
  margin:8px 0 28px;
}

.emiResultLabel{
  display:block;
  color:#5E5E5E;
  margin-bottom:10px;
}

.emiResultValue{
  font-size:clamp(42px,6vw,68px);
  line-height:.95;
  letter-spacing:-0.05em;
  color:var(--color-dark-green);
  margin-bottom:24px;
  font-weight:700;
}

.emiStats{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
  

.emiStat{
  background:#F6F7F3;
  border-radius:18px;
  padding:18px;
}

.emiStat span{
  display:block;
  font-size:12px;
  color:#5E5E5E;
  margin-bottom:8px;
}

.emiStat strong{
  font-size:18px;
  color:#111;
}
  .emiStats{
  grid-template-columns:
    repeat(3,1fr);
}



@media(max-width:768px){

  .emiPage{
    padding:110px 16px 30px;
  }

  .emiCard{
    padding:20px;
    border-radius:24px;
  }

  .emiStats{
    grid-template-columns:1fr;
  }

  .emiResultValue{
    font-size:44px;
  }
    .emiStats{
    grid-template-columns:1fr;
  }

  .LoanTypeSelector{
    display:grid;
    grid-template-columns:1fr;
  }

  .LoanTypeBtn{
    width:100%;
  }
}`}</style>
</div>
  )
}
