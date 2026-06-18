import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection(){
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer:
        "Most enquiries receive a response within 24 hours during business days. Priority requests are handled even faster whenever possible.",
    },
    {
      question: "Can I schedule a consultation with an advisor?",
      answer:
        "Yes. You can request a consultation through our contact form and our team will coordinate a suitable time for your discussion.",
    },
    {
      question: "Do you provide support for businesses?",
      answer:
        "Absolutely. We work with individuals, families, startups, and businesses seeking financial planning, tax assistance, and strategic guidance.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "The more context you provide, the faster our team can assist. Include your goals, questions, and any relevant details about your situation.",
    },
    {
      question: "Do you offer partnership opportunities?",
      answer:
        "Yes. We actively explore strategic partnerships, integrations, and collaboration opportunities with relevant organizations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <section className="faqSectionFQ">
        <div className="faqContainerFQ">
          <div className="faqHeaderFQ">
            <span className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="section-title">
              Questions we hear
              <span> often.</span>
            </h2>

            <p className="section-subtitle">
              Find quick answers to common questions before
              reaching out to our team.
            </p>
          </div>

          <div className="faqListFQ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faqItemFQ ${
                  active === index ? "activeFQ" : ""
                }`}
              >
                <button
                  className="faqQuestionFQ"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>

                  {active === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                <div
                  className={`faqAnswerWrapperFQ ${
                    active === index ? "showFQ" : ""
                  }`}
                >
                  <div className="faqAnswerFQ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .faqSectionFQ{
          background:var(--color-bg-ivory);
          padding:0 24px 120px;
        }

        .faqContainerFQ{
          max-width:1000px;
          margin:0 auto;
        }

        .faqHeaderFQ{
          text-align:center;
          margin-bottom:60px;
        }

        
        


        .faqTitleFQ{
          font-size: clamp(42px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
          color: #111111;
          margin-bottom: 18px;
        }

        .faqTitleFQ span{
          font-style: italic;
          font-family:
            "DM Serif Display",
            serif;
          font-weight: 400;
          color: var(--color-dark-green);
        }

        .faqDescFQ{
          max-width:600px;
          margin:0 auto;
          color:var(--color-muted);
          line-height:1.8;
        }

        .faqListFQ{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .faqItemFQ{
          background:white;
          border:1px solid var(--color-border);
          border-radius:24px;
          overflow:hidden;
          transition:.3s ease;
        }

        .faqItemFQ.activeFQ{
          border-color:rgba(11,59,54,.15);
          box-shadow:0 15px 35px rgba(0,0,0,.05);
        }

        .faqQuestionFQ{
        font-family:"Geist-Bold";
      letter-spacing:1px;
      color:var(--color-dark-green);
          width:100%;
          background:none;
          border:none;
          padding:28px 32px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          text-align:left;
          cursor:pointer;
          font-size:1.1rem;
          font-weight:700;
        }

        .faqAnswerWrapperFQ{
          max-height:0;
          overflow:hidden;
          transition:max-height .35s ease;
        }

        .faqAnswerWrapperFQ.showFQ{
          max-height:300px;
        }

        .faqAnswerFQ{
          padding:0 32px 28px;
          color:var(--color-muted);
          line-height:1.9;
        }

       @media(max-width:768px){

  .faqSectionFQ{
    padding:0 20px 70px;
  }

  .faqHeaderFQ{
    margin-bottom:32px;
  }

  .faqTitleFQ{
    font-size:2.4rem;
    line-height:1;
  }

  .faqDescFQ{
    font-size:14px;
    line-height:1.7;
  }

  .faqListFQ{
    gap:12px;
  }

  .faqItemFQ{
    border-radius:18px;
  }

  .faqQuestionFQ{
    padding:18px 20px;
    font-size:15px;
    line-height:1.5;
    gap:12px;
  }

  .faqQuestionFQ svg{
    width:18px;
    height:18px;
    flex-shrink:0;
  }

  .faqAnswerFQ{
    padding:0 20px 18px;
    font-size:14px;
    line-height:1.7;
  }
}

@media(max-width:480px){

  .faqSectionFQ{
    padding:0 16px 50px;
  }

  .faqHeaderFQ{
    margin-bottom:24px;
  }

  .faqTitleFQ{
    font-size:1.9rem;
    letter-spacing:-0.04em;
  }

  .faqDescFQ{
    font-size:13px;
  }

  .faqListFQ{
    gap:10px;
  }

  .faqItemFQ{
    border-radius:16px;
  }

  .faqQuestionFQ{
    padding:16px 18px;
    font-size:14px;
    font-weight:600;
  }

  .faqQuestionFQ svg{
    width:16px;
    height:16px;
  }

  .faqAnswerFQ{
    padding:0 18px 16px;
    font-size:13px;
    line-height:1.65;
  }
}
      `}</style>
    </>
  );
};
