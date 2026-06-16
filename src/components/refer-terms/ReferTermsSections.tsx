"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const referTerms = [
  {
    title: "Program Eligibility",
    content:
      "Users must maintain a valid account and comply with all applicable platform requirements to participate in the Refer & Earn program.",
  },
  {
    title: "How Referral Rewards Work",
    content:
      "Rewards may be issued when referred users successfully complete qualifying actions specified by the active referral campaign.",
  },
  {
    title: "Qualified Referral Requirements",
    content:
      "Referrals must meet eligibility criteria and complete all required actions before rewards become payable.",
  },
  {
    title: "Reward Distribution",
    content:
      "Reward timelines, limits and payout methods may vary depending on the referral campaign and applicable program rules.",
  },
  {
    title: "Prohibited Activities",
    content:
      "Fraudulent referrals, self-referrals, duplicate accounts, misleading promotions or abuse of the referral system may result in disqualification.",
  },
  {
    title: "Program Changes & Termination",
    content:
      "1FC reserves the right to modify, suspend or terminate referral programs, reward structures or eligibility requirements at any time.",
  },
];

export default function ReferTermsSections() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <>
      <section className="ReferTermsSections">

        <div className="ReferTermsHeader">

          <div className="section-label">
            REFERRAL TERMS
          </div>

          <h2 className="section-title">
            Everything you need.
            <br />
            <span>Nothing unnecessary.</span>
          </h2>

          <p className="section-subtitle">
            Explore the most important
            referral program terms in a
            simple and easy-to-understand format.
          </p>

        </div>

        <div className="ReferAccordion">

          {referTerms.map((item, index) => (
            <div
              key={index}
              className={`ReferAccordionItem ${
                openIndex === index
                  ? "ReferAccordionActive"
                  : ""
              }`}
            >

              <button
                className="ReferAccordionTrigger"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <span>
                  {item.title}
                </span>

                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}

              </button>

              <div
                className={`ReferAccordionContent ${
                  openIndex === index
                    ? "ReferAccordionOpen"
                    : ""
                }`}
              >

                <p>
                  {item.content}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      <style>{`

      .ReferTermsSections{
        max-width:1000px;
        margin:auto;
        padding:0 24px 140px;
      }

      .ReferTermsHeader{
        text-align:center;
        max-width:760px;
        margin:0 auto 60px;
      }

      .ReferAccordion{
        display:flex;
        flex-direction:column;
        gap:16px;
      }

      .ReferAccordionItem{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        overflow:hidden;
        transition:.3s ease;
      }

      .ReferAccordionItem:hover{
        border-color:
        var(--color-accent-lime);
      }

      .ReferAccordionActive{
        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 10px 30px rgba(11,59,54,.05);
      }

      .ReferAccordionTrigger{
      font-family:"Geist-Bold";
      letter-spacing:1px;
      color:var(--color-dark-green);
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

      .ReferAccordionContent{
        max-height:0;
        overflow:hidden;
        transition:.35s ease;
      }

      .ReferAccordionOpen{
        max-height:400px;
      }

      .ReferAccordionContent p{
        margin:0;

        padding:
        0 30px 28px;
        font-size:16px;

        color:#667085;

        line-height:1.9;
      }

      @media(max-width:768px){

        .ReferTermsSections{
          padding:0 20px 90px;
        }

        .ReferTermsHeader{
          margin-bottom:40px;
        }

        .ReferAccordionTrigger{
          padding:22px;
          font-size:15px;
          gap:20px;
        }

        .ReferAccordionContent p{
          padding:
          0 22px 22px;
          font-size:14px;
        }

      }

      `}</style>
    </>
  );
}