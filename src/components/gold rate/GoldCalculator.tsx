"use client";

import { useState } from "react";
import {
  Calculator,
  Coins,
  ChevronDown,
  Check,
} from "lucide-react";

export default function GoldCalculator() {
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState("24K");
  const [isOpen, setIsOpen] = useState(false);

  const rates = {
    "24K": 15481.5,
    "22K": 14300,
    "18K": 11392,
  };

  const currentRate =
    rates[purity as keyof typeof rates];

  const estimatedValue =
    currentRate * weight;

  return (
    <>
      <section className="GoldCalculator">

        <div className="GoldCalculatorContainer">

          <div className="GoldCalculatorHeader">

            <div className="section-label">
              GOLD CALCULATOR
            </div>

            <h2 className="section-title">
              Estimate value.
              <br />
              <span>Instantly.</span>
            </h2>

            <p className="section-subtitle">
              Calculate the approximate value of
              your gold based on weight and purity.
            </p>

          </div>

          <div className="CalculatorCard">

            <div className="CalculatorLeft">

              <div className="InputGroup">

                <label>
                  Gold Weight (grams)
                </label>

                <input
                  type="number"
                  value={weight}
                  onChange={(e) =>
                    setWeight(
                      Number(e.target.value)
                    )
                  }
                />

              </div>

              <div className="InputGroup">

                <label>
                  Gold Purity
                </label>

               <div className="CustomSelect">

  <button
    type="button"
    className="SelectTrigger"
    onClick={() =>
      setIsOpen(!isOpen)
    }
  >

    <span>{purity} Gold</span>

    <ChevronDown
      size={18}
      className={
        isOpen ? "rotate" : ""
      }
    />

  </button>

  {isOpen && (

    <div className="SelectDropdown">

      {["24K", "22K", "18K"].map(
        (option) => (

          <button
            key={option}
            type="button"
            className="SelectOption"
            onClick={() => {
              setPurity(option);
              setIsOpen(false);
            }}
          >

            <span>
              {option} Gold
            </span>

            {purity === option && (
              <Check size={16} />
            )}

          </button>

        )
      )}

    </div>

  )}

</div>

              </div>

            </div>

            <div className="CalculatorRight">

              <div className="ResultCard">

                <div className="ResultIcon">
                  <Coins size={28} />
                </div>

                <span>
                  Estimated Value
                </span>

                <h3>
                  ₹
                  {estimatedValue.toLocaleString()}
                </h3>

                <p>
                  Based on current market rates
                </p>

                <div className="CurrentRate">

                  <Calculator size={16} />

                  Current Rate:
                  ₹{currentRate}/g

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .GoldCalculator{
        padding:0 24px 140px;
      }

      .GoldCalculatorContainer{
        max-width:900px;
        margin:auto;
      }

      .GoldCalculatorHeader{
        text-align:center;
        max-width:800px;
        margin:0 auto 70px;
      }

      .CalculatorCard{
        display:grid;
        grid-template-columns:1fr 420px;
        gap:30px;

        background:#fff;

        border:1px solid #ECEFF3;

        border-radius:32px;

        padding:32px;
      }

      .CalculatorLeft{
        display:flex;
        flex-direction:column;
        gap:24px;
      }

      .InputGroup{
        display:flex;
        flex-direction:column;
        gap:12px;
      }

      .InputGroup label{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        font-size:14px;
        font-weight:700;
        color:#111;
      }

      .InputGroup input,
      .InputGroup select{
        height:60px;
        font-family:"Geist-SemiBold";
      letter-spacing:1px;

        border:1px solid #E5E7EB;

        border-radius:16px;

        padding:0 18px;

        font-size:15px;

        background:#fff;

        outline:none;
      }

      .InputGroup input:focus,
      .InputGroup select:focus{
        border-color:
        var(--color-accent-lime);
        
      }

      .ResultCard{
        background:
        var(--color-dark-green);

        color:white;

        border-radius:24px;

        padding:30px;

        height:100%;

        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .ResultIcon{
        width:64px;
        height:64px;

        border-radius:18px;

        background:
        rgba(220,235,99,.15);

        color:
        var(--color-accent-lime);

        display:flex;
        align-items:center;
        justify-content:center;

        margin-bottom:24px;
      }

      .ResultCard span{
        color:
        rgba(255,255,255,.7);

        font-size:13px;

        text-transform:uppercase;

        letter-spacing:.08em;
      }

      .ResultCard h3{
        margin:12px 0;

        font-size:56px;
        font-weight:600;

        line-height:1;

        color:
        var(--color-accent-lime);

        letter-spacing:-.04em;
      }

      .ResultCard p{
        margin:0;

        color:
        rgba(255,255,255,.7);
      }

      .CurrentRate{
        margin-top:24px;

        display:flex;
        align-items:center;
        gap:8px;

        padding-top:24px;

        border-top:
        1px solid rgba(255,255,255,.1);

        color:
        rgba(255,255,255,.85);

        font-size:14px;
      }

      .CustomSelect{
  position:relative;
}

.SelectTrigger{
  width:100%;
  height:60px;

  border:1px solid #E5E7EB;
  border-radius:16px;

  background:white;

  padding:0 18px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  cursor:pointer;

  font-size:15px;
  font-weight:600;

  transition:.25s ease;
}

.SelectTrigger:hover{
  border-color:
  var(--color-accent-lime);
}

.SelectTrigger .rotate{
  transform:rotate(180deg);
}

.SelectTrigger svg{
  transition:.25s ease;
}

.SelectDropdown{
  position:absolute;

  top:calc(100% + 10px);
  left:0;
  right:0;

  background:white;

  border:1px solid #ECEFF3;

  border-radius:18px;

  padding:8px;

  z-index:50;

  box-shadow:
  0 20px 50px rgba(11,59,54,.08);
}

.SelectOption{
  width:100%;

  border:none;
  background:none;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:14px 16px;

  border-radius:12px;

  cursor:pointer;

  font-size:14px;
  font-weight:600;

  transition:.2s ease;
}

.SelectOption:hover{
  background:#F7F8F4;
}

.SelectOption svg{
  color:
  var(--color-dark-green);
}

      @media(max-width:1100px){

        .CalculatorCard{
          grid-template-columns:1fr;
        }

      }

      @media(max-width:768px){

        .GoldCalculator{
          padding:0 20px 90px;
        }

        .GoldCalculatorHeader{
          margin-bottom:40px;
        }

        .CalculatorCard{
          padding:20px;
          border-radius:24px;
        }

        .ResultCard{
          padding:24px;
        }

        .ResultCard h3{
          font-size:42px;
        }

      }

      `}</style>
    </>
  );
}