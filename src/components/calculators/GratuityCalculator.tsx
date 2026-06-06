import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GratuityCalculator() {
    const [salary, setSalary] = useState(100000);
const [years, setYears] = useState(15);

const gratuity =
  (15 * salary * years) / 26;

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
        RETIREMENT PLANNING
      </div>

      <h1 className="sipTitle">
        Gratuity Calculator
      </h1>

      <p className="sipDescription">
        Estimate your gratuity amount based
        on your last drawn salary and years
        of service.
      </p>

    </div>

    <div className="CalculatorCard">

  <div className="CalculatorInputs">

    <div className="FormulaCard">
      <span>GRATUITY FORMULA</span>
      <strong>
        Gratuity = (15 × Salary × Years) / 26
      </strong>
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Last Drawn Salary</span>
        <strong>
          ₹{formatCurrency(salary)}
        </strong>
      </div>

      <input
        type="range"
        min={10000}
        max={1000000}
        step={10000}
        value={salary}
        onChange={(e) =>
          setSalary(
            Number(e.target.value)
          )
        }
      />
    </div>

    <div className="InputGroup">
      <div className="InputTop">
        <span>Years Worked</span>
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
      Estimated Gratuity Amount
    </div>

    <h2>
      ₹{formatCurrency(gratuity)}
    </h2>

    <div className="Growth">
      After {years} years of service
    </div>

    <div className="Divider" />

    <div className="StatRow">
      <span>Last Drawn Salary</span>
      <strong>
        ₹{formatCurrency(salary)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Years Worked</span>
      <strong>
        {years} Years
      </strong>
    </div>

    <div className="StatRow">
      <span>Estimated Gratuity</span>
      <strong>
        ₹{formatCurrency(gratuity)}
      </strong>
    </div>

    <div className="StatRow">
      <span>Monthly Salary Basis</span>
      <strong>
        ₹{formatCurrency(salary)}
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

 
}`}</style>
</div>
  )
}
