import { useState } from "react";
import { ArrowLeft,Lock } from "lucide-react";
import { Link } from "react-router-dom";


export default function FDCalculator() {
   const [deposit, setDeposit] = useState(600000);
  const [interest, setInterest] = useState(7.4);
  const [years, setYears] = useState(10);

  const maturityAmount = deposit * Math.pow(1 + interest / 100, years);
  const interestEarned = maturityAmount - deposit;
  const growth = ((interestEarned / deposit) * 100).toFixed(1);

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
        FD CALCULATOR
      </div>

      <h1 className="sipTitle">
        Fixed Deposit Calculator
      </h1>

      <p className="sipDescription">
        Estimate maturity amount and total
        returns from your fixed deposit
        investment.
      </p>

    </div>

    <div className="CalculatorCard">
            <div className="Inputs">
              <div className="FormulaCard">
                <span>COMPOUND INTEREST FORMULA</span>
                <strong>A = P × (1 + r/n)nt</strong>
              </div>

              <div className="InputGroup">
                <div className="InputTop">
                  <span>Deposit Amount</span>
                  <strong>₹{formatCurrency(deposit)}</strong>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={5000000}
                  step={10000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                />
              </div>

              <div className="InputGroup">
                <div className="InputTop">
                  <span>Interest Rate</span>
                  <strong>{interest}%</strong>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.1}
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                />
              </div>

              <div className="InputGroup">
                <div className="InputTop">
                  <span>Duration</span>
                  <strong>{years} Years</strong>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="ResultCard">
              <div className="ResultLabel">Estimated Maturity Value</div>
              <h2>₹{formatCurrency(maturityAmount)}</h2>

              <div className="Growth">
                + ₹{formatCurrency(interestEarned)} earned
              </div>

              <div className="Divider" />

              <div className="StatRow">
                <span>Investment</span>
                <strong>₹{formatCurrency(deposit)}</strong>
              </div>

              <div className="StatRow">
                <span>Interest Earned</span>
                <strong>₹{formatCurrency(interestEarned)}</strong>
              </div>

              <div className="StatRow">
                <span>Growth</span>
                <strong>{growth}%</strong>
              </div>
            </div>
          </div>
          <div className="vaultCard">
  <div className="vaultGlow" />

  <div className="vaultTop">
    <div className="vaultIcon">
      <Lock size={20}/>
    </div>

    <div className="vaultBadge">
      ONLY ON 1FCODE
    </div>
  </div>

  <h2 className="vaultTitle">
    Your <span>₹{formatCurrency(maturityAmount)}</span> is sitting silently.
    <br />
    Does your family know where to find it?
  </h2>

  <p className="vaultDescription">
    Most Indian families spend months searching for FDs after a loved one
    passes. 1FCode lets you register this FD in your vault — so the right
    person always has access, at the right time.
  </p>

  <div className="vaultSteps">

    <div className="vaultStep">
      <span>Step 01</span>
      <p>
        Add this FD to your 1FCode
        vault in 30 seconds
      </p>
    </div>

    <div className="vaultStep">
      <span>Step 02</span>
      <p>
        Assign a nominee with a
        secure succession code
      </p>
    </div>

    <div className="vaultStep">
      <span>Step 03</span>
      <p>
        Get renewal alerts
        30 days before maturity
      </p>
    </div>

  </div>

  <div className="vaultActions">
    <button className="vaultPrimary">
      Add this FD to my vault →
    </button>

    <button className="vaultSecondary">
      What is a vault?
    </button>
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

 

  
  
}`}</style>
</div>
  )
}
