export default function Footer() {
  const footerLinks = {
    Platform: [
      "Investments",
      "Insurance",
      "Loans & Accounts",
      "Tax Planning",
      "Legal & Estate",
      "Risk Profiling",
    ],

    Resources: [
      "Calculators",
      "Blog & Insights",
      "Market Updates",
      "Financial Glossary",
      "Tax Calendar",
      "Webinars",
    ],

    Company: [
      "About Us",
      "Careers",
      "Press",
      "Partners",
      "Contact",
      "Sitemap",
    ],

    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Disclaimer",
      "SEBI Disclosure",
      "Grievance Policy",
    ],
  };

  return (
    <footer className="footer">

      <div className="footer-grid" />

      <div className="footer-container">

        <div className="footer-main">
          {Object.entries(
            footerLinks
          ).map(([category, links]) => (
            <div
              key={category}
              className="footer-column"
            >
              <h4>{category}</h4>

              <nav>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>


        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>
              © 2026 1FCode-1FC Technology Private Limited
            </span>

            <span>
              Built for long-term
              financial continuity.
            </span>
          </div>

          <div className="footer-bottom-right">
            <a href="/privacy-policy">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;

          overflow: hidden;

          background: var(--color-dark-green);

          border-top: 1px solid
            rgba(255, 255, 255, 0.05);

          padding: 0 20px;
        }


        .footer-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.015)
                1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.015)
                1px,
              transparent 1px
            );

          background-size: 42px 42px;

          opacity: 0.25;

          pointer-events: none;
        }

      

        .footer-container {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;

          padding:
            clamp(70px, 8vw, 110px)
            0
            24px;
        }






        .footer-main {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 42px;


         
        }

        .footer-column h4 {
          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.14em;

          text-transform: uppercase;

          color: var(--color-accent-lime);

          margin-bottom: 20px;
        }

        .footer-column nav {
          display: flex;

          flex-direction: column;

          gap: 14px;
        }

        .footer-column a {
          position: relative;

          width: fit-content;

          text-decoration: none;

          font-size: 14px;

          line-height: 1.5;

          color: rgba(
            248,
            248,
            244,
            0.5
          );

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-column a:hover {
          color: #f8f8f4;

          transform: translateX(2px);
        }


        .footer-bottom {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          flex-wrap: wrap;

          gap: 18px;

          margin-top: 72px;

          padding-top: 24px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.06);
        }

        .footer-bottom-left {
          display: flex;

          flex-direction: column;

          gap: 6px;
        }

        .footer-bottom-left span:first-child {
          font-size: 12px;

          color: rgba(
            248,
            248,
            244,
            0.34
          );
        }

        .footer-bottom-left span:last-child {
          font-size: 12px;

          color: rgba(
            248,
            248,
            244,
            0.22
          );
        }

        .footer-bottom-right {
          display: flex;

          align-items: center;

          gap: 22px;
        }

        .footer-bottom-right a {
          text-decoration: none;

          font-size: 12px;

          color: rgba(
            248,
            248,
            244,
            0.34
          );

          transition: color 0.25s ease;
        }

        .footer-bottom-right a:hover {
          color: rgba(
            248,
            248,
            244,
            0.72
          );
        }


        @media (max-width: 980px) {
          .footer-brand {
            flex-direction: column;
            align-items: flex-start;
          gap: 40px;
          }
            

          .footer-main {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 34px;
          }

          .footer-logo {
          width: 84px;
          height: 84px;
        }

          
        }


        @media (max-width: 640px) {
          .footer {
            padding: 0 16px;
          }

          .footer-container {
            padding:
              68px 0 24px;
          }

          .footer-brand-content h2 {
            font-size: 42px;
          }
            .footer-logo {
          width: 64px;
          height: 64px;
        }

          .footer-brand-content p {
            font-size: 14px;
          }

          .footer-main {
            grid-template-columns:
              1fr 1fr;

            gap: 28px;
          }

          .footer-column a {
            font-size: 13px;
          }

          .footer-bottom {
            flex-direction: column;

            align-items: flex-start;
          }

          .footer-bottom-right {
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}