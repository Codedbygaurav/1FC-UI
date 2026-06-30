import LegalCTA from "@/components/legal/LegalCTA";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyHighlights from "@/components/privacy/PrivacyHighlights";
import {
  Database,
  Eye,
  Lock,
  UserCog,
  Mail,
 
} from "lucide-react";



const sections = [
  {
    title: "Information We Collect",
    text: "1FC may collect personal information such as your name, phone number, email address, location, financial goals, investment preferences, and any other details you voluntarily provide through our website, forms, calls, or consultations.",
  },
  {
    title: "How We Use Your Information",
    text: "We use your information to understand your financial needs, provide suitable guidance, respond to enquiries, improve our services, send important updates, and maintain internal records.",
  },
  {
    title: "Sharing of Information",
    text: "We do not sell your personal information. Your data may only be shared with trusted service providers, legal authorities when required, or financial partners when necessary to deliver requested services.",
  },
  {
    title: "Data Security",
    text: "We use reasonable administrative, technical, and operational measures to protect your information. However, no digital platform can guarantee complete security, so users should also share information carefully.",
  },
  {
    title: "Cookies & Tracking",
    text: "Our website may use cookies or similar technologies to improve browsing experience, understand website performance, and personalize content. You may disable cookies through your browser settings.",
  },
  {
    title: "Data Retention",
    text: "We retain your information only for as long as required for business, legal, regulatory, or service-related purposes. Once no longer needed, data may be securely deleted or anonymized.",
  },
  {
    title: "Your Rights",
    text: "You may contact us to access, update, correct, or request deletion of your personal information, subject to applicable legal and regulatory requirements.",
  },
  {
    title: "Third-Party Links",
    text: "Our website may contain links to third-party websites. 1FC is not responsible for the privacy practices, content, or security of external websites.",
  },
  {
    title: "Children’s Privacy",
    text: "Our services are not intended for children. We do not knowingly collect personal information from minors without appropriate consent.",
  },
  {
    title: "Updates to This Policy",
    text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "Contact Us",
    text: "For privacy-related questions, corrections, or data requests, you can contact 1FC through the official contact details provided on our website.",
  },
];
export default function PrivacyPolicy() {
  return (
    <main className="privacyPagePVC">
      <style>{`
        .privacyPagePVC {
  background:
    linear-gradient(rgba(11, 59, 54, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 59, 54, 0.025) 1px, transparent 1px),
    var(--color-bg-ivory);

  background-size: 28px 28px;
  color: var(--color-text-primary);
  min-height: 100vh;

  
}
  .privacySideContentPVC{
  position:relative;
  z-index:3;
}

.privacySideTitlePVC{
  font-size:54px;
  line-height:.9;
  letter-spacing:-0.07em;
  font-weight:900;
  max-width:220px;
}

.privacySideTextPVC{
  max-width:220px;
  line-height:1.9;
}

        .privacyContainerPVC {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 30px 24px;
        }

        .privacyHeroContentPVC{
  max-width:320px;
  position:relative;
  z-index:2;
}
        
        .PVC-side{
  position:sticky;
  top:110px;
  align-self:start;
}

.privacyCtaButtonPVC{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}

.privacySidePVC{
  background:var(--color-dark-green);
  border-radius:28px;
  padding:32px;
  color:#fff;

  position:relative;
  overflow:visible;

  display:flex;
  flex-direction:column;

  height:auto;
}




.privacySideMascotPVC{
  position:absolute;
  bottom:-1px;
  left:50%;
  transform:translateX(-50%);

  width:340px;

  pointer-events:none;
  z-index:2;
}

.privacySideMascotPVC img{
  display:block;
  width:100%;
  height:auto;
}
        .privacyHeroPVC {
          padding: 120px 0 76px;
        }

        .privacyHeroGridPVC {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }

        .privacyBadgePVC {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(234,226,106, 0.35);
          color: var(--color-dark-green);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .PVC-hero-title{
        font-size:clamp(46px,5vw,68px);
        line-height:.92;
        font-weight:900;
        letter-spacing:-.08em;
        margin:18px 0;
        }
        .PVC-hero-title span{
        font-family:"Geist-Bold";
        font-style:italic;
        color:var(--color-dark-green);
        font-weight:400;
        }

        .privacyIntroPVC {
          max-width: 610px;
          font-size: 16px;
          line-height: 1.85;
          color: var(--color-muted);
          margin-bottom: 28px;
        }

        .privacyMetaRowPVC {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .privacyMetaPVC {
          padding: 12px 16px;
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-dark-green);
        }

        .privacyHeroCardPVC {
          background: var(--color-dark-green);
          color: #fff;
          border-radius: 28px;
          padding: 34px;
          min-height: 430px;
          position: relative;
          box-shadow: 0 30px 80px rgba(11, 59, 54, 0.22);
          
        }

        .privacyHeroCardPVC::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -70px;
          top: -70px;
          background: rgba(234,226,106, 0.18);
          border-radius: 999px;
          filter: blur(4px);
        }

        .privacyCardLabelPVC {
          color: var(--color-accent-lime);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .privacyBigNumberPVC {
          font-size: clamp(70px, 8vw, 112px);
          line-height: 0.85;
          letter-spacing: -0.08em;
          font-weight: 900;
          color: var(--color-accent-lime);
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
        }

        .privacyHeroCardTitlePVC {
          font-size: 28px;
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 850;
          margin-bottom: 14px;
          max-width: 360px;
          position: relative;
          z-index: 2;
        }
        .privacySummaryIconPVC{
  width:44px;
  height:44px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:14px;

  background:rgba(11,59,54,.08);
  color:var(--color-dark-green);

  margin-bottom:16px;
}
  
        .privacyHeroCardTextPVC {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          line-height: 1.8;
          max-width: 420px;
          position: relative;
          z-index: 2;
        }

        .privacySummaryPVC {
          padding: 20px 0 80px;
        }

        .privacySummaryGridPVC {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .privacySummaryCardPVC {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 22px;
          padding: 24px;
          min-height: 190px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.04);
        }

        .privacySummaryNumberPVC {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(234,226,106, 0.55);
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 30px;
        }

        .privacySummaryTitlePVC {
          font-size: 20px;
          line-height: 1.05;
          letter-spacing: -0.05em;
          font-weight: 850;
          margin-bottom: 10px;
        }

        .privacySummaryTextPVC {
          font-size: 13px;
          line-height: 1.75;
          color: var(--color-muted);
        }

        .privacyContentPVC {
          padding: 88px 0;
          background: rgba(245, 246, 242, 0.78);
        }

        .privacyContentGridPVC{
  display:grid;
  grid-template-columns:280px minmax(0,1fr);
  gap:32px;
  align-items:start;
}
  .privacySummaryCardPVC{
  transition:.25s ease;
}

.privacySummaryCardPVC:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 50px rgba(0,0,0,.08);
}
  .privacyCtaBoxPVC{
  min-height:220px;
}

        .privacySidePVC{
  background:var(--color-dark-green);
  border-radius:28px;
  padding:32px;
  color:#fff;

  display:flex;
  flex-direction:column;

  position:relative;
  

  min-height:600px;
}

        .privacySideSmallPVC {
          color: var(--color-accent-lime);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .privacySideTitlePVC {
          font-size: 25px;
          line-height: 1;
          letter-spacing: -0.02em;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .privacySideTextPVC {
          color: rgba(255,255,255,0.68);
          font-size: 12px;
  max-width:220px;
  line-height:1.5;
}

        .privacyLegalListPVC {
          display: grid;
          gap: 14px;
        }

        .privacyLegalCardPVC {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 26px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.035);
        }

        .privacyAccordionPVC{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.privacyAccordionItemPVC{
  background:#fff;
  border:1px solid var(--color-border);
  border-radius:18px;
  overflow:hidden;
}

.privacyAccordionHeaderPVC{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 24px;
  cursor:pointer;
  list-style:none;
}

.privacyAccordionHeaderPVC::-webkit-details-marker{
  display:none;
}

.privacyAccordionLeftPVC{
  display:flex;
  align-items:center;
  gap:16px;
  
  
}
 .PVC-questions{
  font-weight:700;
  color: var(--color-dark-green);
  font-size:15px;
  }

.privacyAccordionNumberPVC{
  width:36px;
  height:36px;
  border-radius:12px;
  background:rgba(220,235,99,.4);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  color:var(--color-dark-green);
}

.privacyAccordionContentPVC{
  padding:0 24px 24px;
  color:var(--color-muted);
  line-height:1.8;
  
}

.privacyAccordionPlusPVC{
  font-size:24px;
  font-weight:700;
}

        .privacyLegalTitlePVC {
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.045em;
          font-weight: 850;
          margin-bottom: 10px;
          color: var(--color-dark-green);
        }

        .privacyLegalTextPVC {
          font-size: 14px;
          line-height: 1.9;
          color: var(--color-muted);
        }

        .privacyCtaPVC {
          padding: 90px 0;
        }

        .privacyCtaBoxPVC {
          background: var(--color-dark-green);
          border-radius: 30px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          color: #fff;
          box-shadow: 0 30px 90px rgba(11,59,54,0.2);
        }

        .privacyCtaLabelPVC {
          color: var(--color-accent-lime);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .privacyCtaTitlePVC {
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.95;
          letter-spacing: -0.07em;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .privacyCtaTextPVC {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          line-height: 1.8;
          max-width: 620px;
        }

        .privacyCtaButtonPVC {
          border: none;
          background: var(--color-accent-lime);
          color: var(--color-dark-green);
          padding: 15px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 850;
          cursor: pointer;
          white-space: nowrap;
        }


@media (max-width: 1024px) {

  .privacyContainerPVC{
    padding:24px 18px;
    overflow:hidden;
  }

  .privacyHeroPVC{
    padding:95px 0 56px;
  }

  .privacyHeroGridPVC,
  .privacyContentGridPVC,
  .privacyCtaBoxPVC{
    grid-template-columns:1fr;
    gap:24px;
  }

  /* Remove the left sidebar on tablet & mobile */
  .PVC-side{
    display:none;
  }

  .privacyHeroContentPVC{
    max-width:100%;
  }

  .privacySummaryGridPVC{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:12px;
  }

  .PVC-hero-title{
    font-size:42px;
    line-height:.95;
    margin:14px 0 16px;
  }
}

/* ==========================================
   MOBILE (≤768px)
========================================== */
@media (max-width: 768px) {

  .privacyContainerPVC {
    padding: 24px 18px;
    overflow: hidden;
  }
    .PVC-questions{
  font-size:13px;
  }

  .privacyHeroPVC {
    padding: 95px 0 56px;
  }

  .privacyHeroGridPVC {
    gap: 24px;
  }

  .PVC-hero-title {
    font-size: 42px;
    line-height: 0.95;
    margin: 14px 0 16px;
  }

  .privacyIntroPVC {
    font-size: 14px;
    line-height: 1.75;
    margin-bottom: 22px;
  }

  .privacyMetaRowPVC {
    gap: 10px;
  }

  .privacyMetaPVC {
    font-size: 11px;
    padding: 10px 12px;
  }

  .privacyHeroCardPVC {
    min-height: auto;
    padding: 24px;
    border-radius: 24px;
  }

  .privacyCardLabelPVC {
    margin-bottom: 34px;
  }

  .privacyBigNumberPVC {
    font-size: 72px;
  }

  .privacyHeroCardTitlePVC {
    font-size: 24px;
    max-width: 100%;
  }

  .privacyHeroCardTextPVC {
    font-size: 13px;
  }

  .privacySummaryPVC {
    padding: 10px 0 64px;
  }

  .privacySummaryGridPVC {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .privacySummaryCardPVC {
    min-height: auto;
    padding: 18px;
    border-radius: 18px;
  }

  .privacySummaryIconPVC {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
  }

  .privacySummaryTitlePVC {
    font-size: 18px;
  }

  .privacySummaryTextPVC {
    font-size: 12px;
  }

  .privacyContentPVC {
    padding: 64px 0;
  }

  .privacySidePVC {
    padding: 24px;
    min-height: auto;
    overflow: hidden;
    border-radius: 24px;
  }

  .privacySideTitlePVC {
    font-size: 42px;
    max-width: none;
  }

  .privacySideTextPVC {
    max-width: 100%;
    font-size: 13px;
    line-height: 1.7;
  }

  .privacySideMascotPVC {
    width: 180px;
    position: relative;
    left: auto;
    bottom: -20px;
    transform: none;
    display: block;
    margin: 20px auto 0;
  }

  .privacyAccordionHeaderPVC {
    padding: 18px;
  }

  .privacyAccordionContentPVC {
    padding: 0 18px 18px;
    font-size: 13px;
  }

  .privacyAccordionLeftPVC {
    gap: 12px;
  }

  .privacyAccordionNumberPVC {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    flex-shrink: 0;
  }

  .privacyCtaPVC {
    padding: 70px 0;
  }

  .privacyCtaBoxPVC {
    padding: 30px;
    border-radius: 24px;
    gap: 22px;
  }

  .privacyCtaTitlePVC {
    font-size: 42px;
    line-height: 0.95;
  }

  .privacyCtaTextPVC {
    font-size: 13px;
  }
}

/* ==========================================
   SMALL MOBILE (≤480px)
========================================== */
@media (max-width: 480px) {

  .privacyContainerPVC {
    padding: 22px 14px;
  }
    .PVC-questions{
  font-size:13px; !important;
  }
  

  .privacyHeroPVC {
    padding: 88px 0 48px;
  }

  .PVC-hero-title {
    font-size: 34px;
  }

  .privacyIntroPVC {
    font-size: 13px;
  }

  .privacyMetaRowPVC {
    flex-direction: column;
    align-items: flex-start;
  }

  .privacyHeroCardPVC {
    padding: 20px;
    border-radius: 20px;
  }

  .privacyBigNumberPVC {
    font-size: 60px;
  }

  .privacyHeroCardTitlePVC {
    font-size: 20px;
  }

  .privacySummaryGridPVC {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .privacySummaryCardPVC {
    padding: 16px;
  }

  .privacySidePVC {
    padding: 20px;
    border-radius: 20px;
  }

  .privacySideTitlePVC {
    font-size: 34px;
    line-height: .95;
  }

  .privacySideMascotPVC {
    width: 150px;
    max-width: 150px;
    margin-top: 16px;
  }

  .privacyAccordionHeaderPVC {
    padding: 16px;
  }

  .privacyAccordionContentPVC {
    padding: 0 16px 16px;
  }

  

  .privacyCtaBoxPVC {
    padding: 24px 20px;
    border-radius: 20px;
  }

  .privacyCtaTitlePVC {
    font-size: 32px;
  }

  .privacyCtaButtonPVC {
    width: 100%;
    justify-content: center;
  }
}

/* ==========================================
   EXTRA SMALL (≤360px)
========================================== */
@media (max-width: 360px) {

  .privacyContainerPVC {
    padding: 20px 12px;
  }

  .PVC-hero-title {
    font-size: 28px;
  }

  .privacyIntroPVC {
    font-size: 12px;
  }

  .privacyBigNumberPVC {
    font-size: 50px;
  }

  .privacyHeroCardTitlePVC {
    font-size: 18px;
  }

  .privacySideTitlePVC {
    font-size: 28px;
  }

  .privacyCtaTitlePVC {
    font-size: 28px;
  }

  .privacyAccordionContentPVC {
    font-size: 12px;
  }
}
 `}</style>

      <PrivacyHero/>

      <PrivacyHighlights/>

      <section className="privacyContentPVC">
        <div className="privacyContainerPVC">
          <div className="privacyContentGridPVC">
            <div className="PVC-side">
              <aside className="privacySidePVC">
  <div className="privacySideContentPVC">
    <div className="privacySideSmallPVC">
      POLICY DETAILS
    </div>

    <h2 className="privacySideTitlePVC">
      Simple terms.
      <br />
      No hidden confusion.
    </h2>

    <p className="privacySideTextPVC">
      This page explains what information we collect,
      how we use it, when we may share it,
      and what choices you have.
    </p>
  </div>

  <div className="privacyMascotWrapPVC">
  <picture className="privacySideMascotPVC">
  <source
    media="(max-width:640px)"
    srcSet="/mascotHalf.png"
  />
  <img
    src="/PCV.png"
    alt=""
  />
</picture>
</div>
</aside>
            </div>

            <div className="privacyAccordionPVC">
  {sections.map((section, index) => (
    <details
      key={section.title}
      className="privacyAccordionItemPVC"
    >
      <summary className="privacyAccordionHeaderPVC">
        <div className="privacyAccordionLeftPVC">
          <span className="privacyAccordionNumberPVC">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <span className="PVC-questions">{section.title}</span>
        </div>

        <span className="privacyAccordionPlusPVC">+</span>
      </summary>

      <div className="privacyAccordionContentPVC">
        {section.text}
      </div>
    </details>
  ))}
</div>
          </div>
        </div>
      </section>

      <LegalCTA/>
    </main>
  );
}
