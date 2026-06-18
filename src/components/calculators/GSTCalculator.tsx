import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GSTCalculator() {
    const [amount, setAmount] = useState(10000);
const [gstRate, setGstRate] = useState(18);

const gstAmount =
  (amount * gstRate) / 100;

const totalAmount =
  amount + gstAmount;

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
        TAX CALCULATOR
      </div>

      <h1 className="sipTitle">
        GST Calculator
      </h1>

      <p className="sipDescription">
        Calculate GST amount and total
        payable value instantly for any
        taxable transaction.
      </p>

    </div>

    <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>GST FORMULA</span>
      <strong>
        GST = (Amount × GST%) / 100
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Base Amount</span>
        <strong>
          ₹{formatCurrency(amount)}
        </strong>
      </div>

      <input
        type="range"
        min={100}
        max={1000000}
        step={100}
        value={amount}
        onChange={(e) =>
          setAmount(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>GST Rate</span>
        <strong>
          {gstRate}%
        </strong>
      </div>

      <input
        type="range"
        min={1}
        max={28}
        step={1}
        value={gstRate}
        onChange={(e) =>
          setGstRate(
            Number(e.target.value)
          )
        }
      />
    </div>

  </div>

  <div className="CalculatorResults">

    <div className="ResultLabel">
      Total Amount Including GST
    </div>

    <h2>
      ₹{formatCurrency(totalAmount)}
    </h2>

    <div className="Growth">
      + ₹{formatCurrency(gstAmount)}
      {" "}GST added
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Base Amount</span>
      <strong>
        ₹{formatCurrency(amount)}
      </strong>
    </div>

    <div className="StatRow">
      <span>GST Amount</span>
      <strong>
        ₹{formatCurrency(gstAmount)}
      </strong>
    </div>

    <div className="StatRow">
      <span>GST Rate</span>
      <strong>
        {gstRate}%
      </strong>
    </div>

    <div className="StatRow">
      <span>Total Amount</span>
      <strong>
        ₹{formatCurrency(totalAmount)}
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
