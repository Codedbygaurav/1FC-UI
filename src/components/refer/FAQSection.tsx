import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const faqItems = [
  {
    question: "How does the referral program work?",
    answer:
      "Share your referral link with friends. When they join 1FC and complete the required actions, you'll become eligible for referral rewards.",
  },
  {
    question: "When will I receive my referral rewards?",
    answer:
      "Rewards are generally processed after successful verification of the referred user's eligibility and completion criteria.",
  },
  {
    question: "Can I refer multiple friends?",
    answer:
      "Yes. You can refer multiple eligible users and earn rewards for each successful referral subject to program terms.",
  },
  {
    question: "How can I track my referrals?",
    answer:
      "Your referral dashboard provides visibility into referral status, pending rewards and completed rewards.",
  },
  {
    question: "Are there any referral limits?",
    answer:
      "Specific limits, if applicable, will be mentioned in the Refer & Earn Terms and Conditions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="ReferralFAQ">

        <div className="FAQHeader">

          <div className="section-label">
            FAQs
          </div>

          <h2 className="section-title">
            Questions?<br/>
            <span> We've got answers.</span>
          </h2>

          <p className="section-subtitle">
            Everything you need to know about
            referrals, rewards and eligibility.
          </p>

        </div>

        <div className="FAQWrapper">

          {faqItems.map((faq, index) => (
            <div
              key={index}
              className={`FAQItem ${
                openIndex === index ? "ActiveFAQ" : ""
              }`}
            >

              <button
                className="FAQQuestion"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <span>{faq.question}</span>

                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}

              </button>

              <div
                className={`FAQAnswer ${
                  openIndex === index
                    ? "FAQOpen"
                    : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <style>{`

      .ReferralFAQ{
        max-width:1000px;
        margin:auto;
        padding:0 24px 140px;
      }

      .FAQHeader{
        text-align:center;
        margin-bottom:60px;
      }

      .FAQWrapper{
        display:flex;
        flex-direction:column;
        gap:16px;
      }

      .FAQItem{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        overflow:hidden;
        transition:.3s ease;
      }

      .FAQItem:hover{
        border-color:var(--color-accent-lime);
      }

      .ActiveFAQ{
        border-color:var(--color-accent-lime);
      }

      .FAQQuestion{
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

      .FAQAnswer{
        max-height:0;
        overflow:hidden;
        transition:.35s ease;
        
      }

      .FAQOpen{
        max-height:300px;
      }

      .FAQAnswer p{
        padding:0 30px 28px;
        margin:0;
        color:#667085;
        line-height:1.9;
        font-size:16px;
      }

      @media(max-width:768px){

        .ReferralFAQ{
          padding:0 20px 90px;
        }

        .FAQHeader{
          margin-bottom:40px;
        }

        .FAQQuestion{
          padding:22px;
          gap:20px;
          font-size:15px;
        }

        .FAQAnswer p{
          padding:0 22px 22px;
          font-size:14px;
        }

      }

      `}</style>
    </>
  );
}