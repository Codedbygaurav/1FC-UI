"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const sections = [
  {
    title: "Eligibility & Accounts",
    content:
      "Users must provide accurate information when creating an account and are responsible for maintaining the confidentiality of their credentials. Access to certain services may require additional verification.",
  },
  {
    title: "Platform Usage",
    content:
      "The platform must be used only for lawful purposes. Users may not misuse services, attempt unauthorized access, or engage in activities that disrupt the operation of the platform.",
  },
  {
    title: "Payments & Transactions",
    content:
      "Certain products and services may involve payments, fees or third-party processing. Users are responsible for reviewing product-specific terms before proceeding.",
  },
  {
    title: "Privacy & Data",
    content:
      "The collection, processing and storage of personal information is governed by our Privacy Policy. By using the platform, users acknowledge these practices.",
  },
  {
    title: "Limitation of Liability",
    content:
      "1FC shall not be liable for indirect, incidental or consequential losses arising from the use of the platform, except where prohibited by applicable law.",
  },
  {
    title: "Updates to Terms",
    content:
      "These Terms may be updated periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.",
  },
];

export default function TermsSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="TermsSections">

        <div className="TermsSectionsHeader">

          <div className="section-label">
            TERMS DETAILS
          </div>

          <h2 className="section-title">
            Everything you need.
            <br />
            <span>Nothing unnecessary.</span>
          </h2>

          <p className="section-subtitle">
            Explore the key sections of our Terms &
            Conditions in a simple, readable format.
          </p>

        </div>

        <div className="TermsAccordion">

          {sections.map((section, index) => (
            <div
              key={index}
              className={`TermsAccordionItem ${
                openIndex === index
                  ? "TermsAccordionActive"
                  : ""
              }`}
            >

              <button
                className="TermsAccordionTrigger"
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
                className={`TermsAccordionContent ${
                  openIndex === index
                    ? "TermsAccordionOpen"
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

      .TermsSections{
        max-width:1000px;
        margin:auto;
        padding:48px 24px 40px;
      }

      .TermsSectionsHeader{
        text-align:center;
        max-width:760px;
        margin:0 auto 60px;
      }

      .TermsAccordion{
        display:flex;
        flex-direction:column;
        gap:16px;
      }

      .TermsAccordionItem{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:24px;
        overflow:hidden;
        transition:.3s ease;
      }

      .TermsAccordionItem:hover{
        border-color:var(--color-accent-lime);
      }

      .TermsAccordionActive{
        border-color:var(--color-accent-lime);
        box-shadow:
          0 10px 30px rgba(11,59,54,.05);
      }

      .TermsAccordionTrigger{
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

      .TermsAccordionContent{
        max-height:0;
        overflow:hidden;
        transition:.35s ease;
      }

      .TermsAccordionOpen{
        max-height:400px;
      }

      .TermsAccordionContent p{
        margin:0;
        padding:0 30px 28px;
        font-size:16px;
        color:#667085;
        line-height:1.9;
      }

      @media(max-width:768px){

        .TermsSections{
          padding:48px 20px 90px;
        }

        .TermsSectionsHeader{
          margin-bottom:40px;
        }

        .TermsAccordionTrigger{
          padding:22px;
          font-size:15px;
          gap:20px;
        }

        .TermsAccordionContent p{
          padding:0 22px 22px;
          font-size:14px;
        }

      }

      `}</style>
    </>
  );
}