"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const fdSections = [
  {
    title: "Eligibility Requirements",
    content:
      "Fixed Deposits may be available only to eligible users who satisfy identity verification, banking and regulatory requirements. Additional criteria may apply depending on the partner institution.",
  },
  {
    title: "Deposit Process",
    content:
      "Users can open Fixed Deposits through approved partner institutions. Deposit amounts, tenure options and available products may vary based on the selected offering.",
  },
  {
    title: "Interest Calculation",
    content:
      "Interest rates are determined by the issuing institution and may vary based on tenure, amount and prevailing market conditions. Applicable rates will be displayed before deposit confirmation.",
  },
  {
    title: "Premature Withdrawal",
    content:
      "Premature withdrawal requests may be subject to penalties, reduced interest earnings or other restrictions as determined by the issuing institution.",
  },
  {
    title: "Maturity & Renewal",
    content:
      "Upon maturity, Fixed Deposits may be paid out, renewed or reinvested depending on the selected instructions and product-specific policies.",
  },
  {
    title: "Risks & Disclosures",
    content:
      "Users should carefully review all disclosures, partner institution documentation and applicable regulations before investing in Fixed Deposit products.",
  },
];

export default function FDTermsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="FDTermsSections">

        <div className="FDTermsHeader">

          <div className="section-label">
            FD TERMS
          </div>

          <h2 className="section-title">
            Everything you need.
            <br />
            <span>Nothing unnecessary.</span>
          </h2>

          <p className="section-subtitle">
            Explore the most important Fixed Deposit
            terms in a simple and easy-to-understand format.
          </p>

        </div>

        <div className="FDAccordion">

          {fdSections.map((section, index) => (
            <div
              key={index}
              className={`FDAccordionItem ${
                openIndex === index
                  ? "FDAccordionActive"
                  : ""
              }`}
            >

              <button
                className="FDAccordionTrigger"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <span>
                  {section.title}
                </span>

                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}

              </button>

              <div
                className={`FDAccordionContent ${
                  openIndex === index
                    ? "FDAccordionOpen"
                    : ""
                }`}
              >

                <p>
                  {section.content}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      <style>{`

      .FDTermsSections{
        max-width:1000px;
        margin:auto;
        padding:0 24px 40px;
      }

      .FDTermsHeader{
        text-align:center;
        max-width:760px;
        margin:0 auto 60px;
      }

      .FDAccordion{
        display:flex;
        flex-direction:column;
        gap:16px;
      }

      .FDAccordionItem{
      
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        overflow:hidden;
        transition:.3s ease;
      }

      .FDAccordionItem span{
      font-family:"Geist-Bold";
      letter-spacing:1px;
      color:var(--color-dark-green);
      }

      .FDAccordionItem:hover{
        border-color:var(--color-accent-lime);
      }

      .FDAccordionActive{
        border-color:var(--color-accent-lime);
        box-shadow:
          0 10px 30px rgba(11,59,54,.05);
      }

      .FDAccordionTrigger{
      
        width:100%;
        border:none;
        background:none;
        cursor:pointer;

        display:flex;
        align-items:center;
        justify-content:space-between;

        padding:28px 30px;

        text-align:left;

        font-size:18px;
        font-weight:600;
        color:var(--color-dark-green);
      }

      

      .FDAccordionContent{
      
        max-height:0;
        overflow:hidden;
        transition:.35s ease;
      }

      .FDAccordionOpen{
        max-height:400px;
      }

      .FDAccordionContent p{
        margin:0;
        padding:0 30px 28px;
        font-size:16px;
        color:#667085;
        line-height:1.9;
      }

      @media(max-width:768px){

        .FDTermsSections{
          padding:0 20px 20px;
        }

        .FDTermsHeader{
          margin-bottom:40px;
        }

        .FDAccordionTrigger{
          padding:22px;
          font-size:15px;
          gap:20px;

        }

        .FDAccordionContent p{
          padding:0 22px 22px;
          font-size:14px;
        }

      }

      `}</style>
    </>
  );
}