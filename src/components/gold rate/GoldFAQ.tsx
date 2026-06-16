"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const faqs = [
  {
    question:
      "How are gold rates calculated?",
    answer:
      "Gold rates are influenced by international gold prices, currency exchange rates, demand and supply conditions, government duties and local market factors.",
  },
  {
    question:
      "What is the difference between 24K and 22K gold?",
    answer:
      "24K gold is considered pure gold, while 22K gold contains a small percentage of other metals for increased durability and jewellery making.",
  },
  {
    question:
      "Why do gold prices change daily?",
    answer:
      "Gold prices fluctuate due to global economic conditions, inflation expectations, interest rates, currency movements and investor sentiment.",
  },
  {
    question:
      "Is gold a good long-term investment?",
    answer:
      "Gold is often used as a diversification asset and store of value. Investment suitability depends on individual goals, risk tolerance and financial circumstances.",
  },
  {
    question:
      "How often are gold rates updated?",
    answer:
      "Gold rates can change multiple times throughout the day based on market activity and pricing updates from various sources.",
  },
];

export default function GoldFAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <>
      <section className="GoldFAQ">

        <div className="GoldFAQHeader">

          <div className="section-label">
            FAQs
          </div>

          <h2 className="section-title">
            Frequently asked.
            <br />
            <span>Clearly answered.</span>
          </h2>

          <p className="section-subtitle">
            Everything you need to know about
            gold rates and market movements.
          </p>

        </div>

        <div className="GoldFAQWrapper">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`GoldFAQItem ${
                openIndex === index
                  ? "GoldFAQActive"
                  : ""
              }`}
            >

              <button
                className="GoldFAQQuestion"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}

              </button>

              <div
                className={`GoldFAQAnswer ${
                  openIndex === index
                    ? "GoldFAQOpen"
                    : ""
                }`}
              >
                <p>
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <style>{`

      .GoldFAQ{
        max-width:1000px;
        margin:auto;
        padding:0 24px 140px;
      }

      .GoldFAQHeader{
        text-align:center;
        margin-bottom:60px;
      }

      .GoldFAQWrapper{
        display:flex;
        flex-direction:column;
        gap:16px;
      }

      .GoldFAQItem{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        overflow:hidden;
        transition:.3s ease;
      }

      .GoldFAQItem:hover{
        border-color:
        var(--color-accent-lime);
      }

      .GoldFAQActive{
        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 10px 30px rgba(11,59,54,.05);
      }

      .GoldFAQQuestion{
      font-family:"Geist-Bold";
      letter-spacing:1px;
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

      .GoldFAQAnswer{
        max-height:0;
        overflow:hidden;
        transition:.35s ease;
        font-size:16px;
      }

      .GoldFAQOpen{
        max-height:300px;
      }

      .GoldFAQAnswer p{
        margin:0;

        padding:
        0 30px 28px;

        color:#667085;

        line-height:1.9;
      }

      @media(max-width:768px){

        .GoldFAQ{
          padding:0 20px 90px;
        }

        .GoldFAQHeader{
          margin-bottom:40px;
        }

        .GoldFAQQuestion{
          padding:22px;
          font-size:15px;
          gap:20px;
        }

        .GoldFAQAnswer p{
          padding:
          0 22px 22px;
          font-size:14px;
        }

      }

      `}</style>
    </>
  );
}