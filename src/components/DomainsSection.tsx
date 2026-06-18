import { useEffect, useRef } from "react";

const domains = [
  {
    id: "01",
    category: "Wealth",
    title: "Investments",
    description:
      "Track, trade and grow your wealth across all investment instruments in one unified dashboard.",
    tags: ["Stocks", "MFs", "PF", "FDs"],
    stat: {
      value: "₹2.4Cr",
      label: "avg portfolio tracked",
    },
    featured: true,

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M3 16L8 10L12 13L19 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    id: "02",
    category: "Protection",
    title: "Insurance",
    description:
      "Know every policy you hold and when premiums are due.",
    tags: ["Term", "Mediclaim"],
    stat: {
      value: "4.2x",
      label: "coverage awareness",
    },

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M11 3L18 6.5V11C18 15.4 14.9 19.1 11 20C7.1 19.1 4 15.4 4 11V6.5L11 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    id: "03",
    category: "Credit",
    title: "Loans & Accounts",
    description:
      "Monitor loans, cards and deposits across banks.",
    tags: ["Cards", "Loans"],
    stat: {
      value: "₹18K",
      label: "interest saved",
    },

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <rect
          x="3"
          y="6"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    id: "04",
    category: "Compliance",
    title: "Tax Planning",
    description:
      "Optimize deductions and file smarter every year.",
    tags: ["ITR", "Advisory"],
    stat: {
      value: "₹1.5L",
      label: "avg tax saved",
    },

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M6 4h10a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    id: "05",
    category: "Legacy",
    title: "Legal & Estate",
    description:
      "Protect your family with estate planning.",
    tags: ["Wills", "Assets"],
    stat: {
      value: "98%",
      label: "families unprepared",
    },

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M11 3L4 7v5c0 4 3.1 7.7 7 8.9C15 19.7 18 16 18 12V7L11 3z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    id: "06",
    category: "Intelligence",
    title:
      "Risk Profiling & Net Worth",
    description:
      "Understand your financial DNA, goals and total net worth.",
    tags: ["Net Worth", "Goals", "Risk"],
    stat: {
      value: "360°",
      label:
        "financial visibility",
    },

    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export default function DomainsSection() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                const reveals =
                  entry.target.querySelectorAll(
                    ".reveal"
                  );

                reveals.forEach(
                  (el, i) => {
                    setTimeout(() => {
                      el.classList.add(
                        "visible"
                      );
                    }, i * 70);
                  }
                );
              }
            }
          );
        },
        { threshold: 0.05 }
      );

    if (sectionRef.current) {
      observer.observe(
        sectionRef.current
      );
    }

    return () =>
      observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="domains-section"
    >
      
      <div className="domains-blur" />

      <div className="domains-grid-bg" />

      <div className="domains-container">
        
        <div className="domains-header reveal">
          <div className="domains-label">
            <div className="domains-line" />

            <span>
              What We Offer
            </span>
          </div>

          <h2 className="domains-title">
            One ecosystem.<br/>
            <span>
              Six
            </span>{" "}
            intelligent layers.
          </h2>

          <p className="domains-subtitle">
            Investing, taxes,
            insurance, loans and
            long-term planning —
            unified into one
            intelligent financial
            operating system.
          </p>
        </div>

        
        <div className="domains-layout">
          
          <div className="featured-shell reveal">
            <DomainCardFeatured
              domain={domains[0]}
            />
          </div>

          
          <div className="side-grid">
            {domains
              .slice(1, 5)
              .map((domain, i) => (
                <div
                  key={domain.id}
                  className={`compact-shell reveal compact-${i}`}
                >
                  <DomainCompact
                    domain={domain}
                  />
                </div>
              ))}
          </div>
        </div>

        
        <div className="dark-shell reveal">
          <DomainCardDark
            domain={domains[5]}
          />
        </div>

        
        <div className="mobile-stack">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className={`mobile-shell ${
                domain.featured
                  ? "mobile-featured"
                  : ""
              }`}
            >
              {domain.featured ? (
                <DomainCardFeatured
                  domain={domain}
                  mobile
                />
              ) : domain.id ===
                "06" ? (
                <DomainCardDark
                  domain={domain}
                  mobile
                />
              ) : (
                <DomainCompact
                  domain={domain}
                  mobile
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .domains-section {
          position: relative;

          overflow: hidden;

          padding:
            clamp(70px, 8vw, 110px)
            20px;

          background:
            linear-gradient(
              180deg,
              #F7F7F3 0%,
              #FAFAF7 45%,
              #FFFFFF 100%
            );
        }

       

        .domains-blur {
          position: absolute;

          right: -140px;
          top: 12%;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(11,59,54,0.05),
              transparent 72%
            );

          filter: blur(40px);

          pointer-events: none;
        }

        .domains-grid-bg {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(11,59,54,0.012) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,59,54,0.012) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image:
            radial-gradient(
              circle at center,
              black 28%,
              transparent 82%
            );

          pointer-events: none;
        }

        .domains-container {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;
        }

        

        .domains-header {
          max-width: 720px;

          margin-bottom: 34px;
        }

        .domains-label {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 14px;
        }

        .domains-line {
          width: 30px;
          height: 1px;

          background: var(--color-dark-green);

          opacity: 0.25;
        }

        .domains-label span {
          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.14em;

          text-transform: uppercase;

          color: #666;
        }

        .domains-title {
        font-family:"Geist-Bold"
        letter-spacing:1px;
          font-size:
            clamp(34px, 4.8vw, 58px);

          line-height: 0.96;


          font-weight: 820;

          color: #111;

          margin-bottom: 16px;

          max-width: 680px;
        }

        .domains-title span {
          font-style: italic;

          

          font-weight: 400;

          color: var(--color-dark-green);
        }

        .domains-subtitle {
          font-size: 15px;

          line-height: 1.8;

          color: #666;

          max-width: 560px;
        }

        

        .domains-layout {
          display: grid;

          grid-template-columns:
            1.08fr 0.92fr;

          gap: 14px;

          align-items: stretch;

          margin-bottom: 14px;
        }

        .side-grid {
        
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 14px;
        }

        

        .featured-shell,
        .compact-shell,
        .dark-shell {
        
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .featured-shell:hover,
        .compact-shell:hover,
        .dark-shell:hover {
          transform: translateY(-4px);
        }

        .featured-shell {
          background:
            rgba(255,255,255,0.78);

          border:
            1px solid rgba(11,59,54,0.05);

          border-radius: 24px;

          overflow: hidden;

          box-shadow:
            0 10px 28px rgba(0,0,0,0.035);
        }

        .compact-shell {
          position: relative;

          background:
            rgba(255,255,255,0.78);

          border:
            1px solid rgba(11,59,54,0.05);

          border-radius: 24px;

          overflow: hidden;

          box-shadow:
            0 8px 22px rgba(0,0,0,0.025);
        }

        .compact-1 {
          margin-top: 12px;
        }

        .compact-2 {
          margin-top: -12px;
        }

        .compact-shell:nth-child(2) {
          background:
            rgba(248,248,245,0.9);
        }

        .compact-shell:nth-child(3) {
          background:
            rgba(252,252,250,0.88);
        }

        .dark-shell {
          border-radius: 28px;

          overflow: hidden;
        }

       

        .mobile-stack {
          display: none;
        }

        

        .reveal {
          opacity: 0;

          transform: translateY(24px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;

          transform: translateY(0);
        }

        
@media (max-width: 1024px) {

  .domains-section {
    padding: 88px 28px;
  }

  .domains-container {
    max-width: 100%;
  }

  .domains-header {
    max-width: 820px;
    margin-bottom: 40px;
  }

  .domains-title {
    font-size: clamp(50px, 6vw, 62px);
    line-height: 0.98;
    max-width: 100%;
  }

  .domains-subtitle {
    font-size: 17px;
    line-height: 1.8;
    max-width: 680px;
  }

  .domains-layout {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 18px;
  }

  .side-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .compact-1,
  .compact-2 {
    margin-top: 0;
  }

  .featured-shell,
  .compact-shell,
  .dark-shell {
    border-radius: 24px;
  }

  .domains-blur {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 768px) {

  .domains-section {
    padding: 72px 20px;
  }

  .domains-layout,
  .dark-shell {
    display: none;
  }

  .mobile-stack {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .mobile-shell {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(11,59,54,0.06);
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.03);
  }

  .domains-header {
    margin-bottom: 28px;
  }

  .domains-label {
    margin-bottom: 12px;
  }

  .domains-line {
    width: 24px;
  }

  .domains-title {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 14px;
    max-width: 100%;
  }

  .domains-subtitle {
    font-size: 14px;
    line-height: 1.6;
    max-width: 100%;
  }

  .domains-blur {
    display: none;
  }

  .domains-grid-bg {
    opacity: 0.45;
  }

  .mobile-stack > * {
    width: 100%;
  }
}




      `}</style>
    </section>
  );
}



function DomainCardFeatured({
  domain,
  mobile = false,
}: {
  domain: any;
  mobile?: boolean;
}) {
  return (
    <div
      style={{
        padding: mobile
          ? "22px"
          : "26px",
      }}
    >
      <div
        style={{
          width: mobile
            ? "42px"
            : "48px",

          height: mobile
            ? "42px"
            : "48px",

          borderRadius: "14px",

          background:
            "rgba(11,59,54,0.08)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "var(--color-dark-green)",

          marginBottom: "18px",
        }}
      >
        {domain.icon}
      </div>

      <span
        style={{
          fontSize: "10px",
          
            fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",
            

          fontWeight: 700,


          textTransform: "uppercase",

          color: "var(--color-dark-green)",

          opacity: 0.58,

          display: "block",

          marginBottom: "12px",
        }}
      >
        {domain.category}
      </span>

      <h3
        style={{
          fontSize: mobile
            ? "34px"
            : "48px",

          lineHeight: "0.92",

          fontFamily:"Geist-Bold",
            letterSpacing: "1px",

          fontWeight: 820,

          color: "#111",

          marginBottom: "14px",
        }}
      >
        {domain.title}
      </h3>

      <p
        style={{
          fontSize: "14px",

          lineHeight: "1.6",

          color: "#666",

          maxWidth: "520px",

          marginBottom: "20px",
        }}
      >
        {domain.description}
      </p>

      

      <div
        style={{
          position: "relative",

          height: mobile
            ? "150px"
            : "180px",

          marginBottom: "18px",

          overflow: "hidden",
        }}
      >
        

        <div
          style={{
            position: "absolute",
            inset: 0,

            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)
            `,

            backgroundSize:
              "28px 28px",

            opacity: 0.8,
          }}
        />

        

        <div
          style={{
            position: "absolute",

            left: "0",
            top: "10px",

            fontSize: "10px",

            color: "#888",
          }}
        >
          Jan
        </div>

        <div
          style={{
            position: "absolute",

            right: "18px",
            bottom: "6px",

            fontSize: "10px",

            color: "#888",
          }}
        >
          Dec
        </div>

        

        <svg
          viewBox="0 0 700 240"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,

            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <linearGradient
              id="areaGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="rgba(11,59,54,0.18)"
              />

              <stop
                offset="100%"
                stopColor="rgba(11,59,54,0)"
              />
            </linearGradient>
          </defs>

          

          <path
            d="
              M0 200
              C120 182, 180 170, 260 146
              C340 120, 430 128, 520 84
              C600 52, 650 44, 700 36
            "
            fill="none"
            stroke="rgba(11,59,54,0.12)"
            strokeWidth="2"
          />

          

          <path
            d="
              M0 214
              C80 198, 130 178, 200 154
              C260 136, 320 96, 380 110
              C460 128, 520 70, 700 22
            "
            fill="none"
            stroke="var(--color-dark-green)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          

          <path
            d="
              M0 214
              C80 198, 130 178, 200 154
              C260 136, 320 96, 380 110
              C460 128, 520 70, 700 22
              L700 240
              L0 240
              Z
            "
            fill="url(#areaGradient)"
          />
        </svg>

        

        <div
          style={{
            position: "absolute",

            right: mobile
              ? "0"
              : "10px",

            top: mobile
              ? "12px"
              : "18px",

            background:
              "rgba(255,255,255,0.82)",

            backdropFilter:
              "blur(10px)",

            border:
              "1px solid rgba(11,59,54,0.05)",

            borderRadius: "14px",

            padding: mobile
              ? "10px"
              : "12px",

            boxShadow:
              "0 10px 26px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              fontSize: mobile
                ? "18px"
                : "22px",
                fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",

              fontWeight: 800,

              color: "var(--color-dark-green)",

              marginBottom: "2px",
            }}
          >
            +18.4%
          </div>

          <div
            style={{
              fontSize: "9px",

              color: "#666",
            }}
          >
            annual growth
          </div>
        </div>
      </div>

     

      <div
        style={{
          display: "flex",

          alignItems: "flex-end",

          justifyContent:
            "space-between",

          gap: "14px",

          flexWrap: "wrap",

          paddingTop: "16px",

          borderTop:
            "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: mobile
                ? "40px"
                : "56px",
                fontFamily:"Geist-Bold",

              lineHeight: "0.9",

              fontWeight: 820,

              letterSpacing:
                "1px",

              color: "var(--color-dark-green)",

              marginBottom: "4px",
            }}
          >
            {domain.stat.value}
          </div>

          <div
            style={{
              fontSize: "12px",

              color: "#666",
            }}
          >
            {domain.stat.label}
          </div>
        </div>

        <div
          style={{
            display: "flex",

            gap: "8px",
          }}
        >
          {[
            ["12", "Assets"],
            ["4Y", "Tracking"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                padding:
                  "9px 11px",
                  fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",

                borderRadius:
                  "12px",

                background:
                  "rgba(0,0,0,0.03)",

                border:
                  "1px solid rgba(0,0,0,0.05)",

                minWidth:
                  "68px",
              }}
            >
              <div
                style={{
                  fontSize:
                    "16px",

                  fontWeight:
                    800,

                  color:
                    "#111",

                  marginBottom:
                    "2px",
                }}
              >
                {value}
              </div>

              <div
                style={{
                  fontSize:
                    "8px",

                  color:
                    "#666",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function DomainCompact({
  domain,
  mobile = false,
}: {
  domain: any;
  mobile?: boolean;
}) {
  return (
    <div
      style={{
        padding: mobile
          ? "20px"
          : "20px",

        position: "relative",

        overflow: "hidden",

        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",

          right: "-30px",
          bottom: "-30px",

          width: "120px",
          height: "120px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(11,59,54,0.04), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "flex-start",

            marginBottom:
              "14px",
          }}
        >
          <span
            style={{
              fontSize: "9px",

              fontWeight: 700,
              fontFamily:"Geist-SemiBold",

              letterSpacing:
                "1px",

              textTransform:
                "uppercase",

              color:
                "var(--color-dark-green)",

              opacity: 0.6,
            }}
          >
            {domain.category}
          </span>

          <div
            style={{
              width: "38px",
              height: "38px",
              

              borderRadius:
                "12px",

              background:
                "rgba(11,59,54,0.07)",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              color:
                "var(--color-dark-green)",
            }}
          >
            {domain.icon}
          </div>
        </div>

        <h3
          style={{
            fontSize: mobile
              ? "22px"
              : "18px",

            lineHeight:
              "1.05",

            fontWeight: 760,

           fontFamily:"Geist-Bold",
            letterSpacing: "1px",

            color: "#111",

            marginBottom:
              "10px",
          }}
        >
          {domain.title}
        </h3>

        <p
          style={{
            fontSize: mobile
              ? "13px"
              : "12px",

            lineHeight:
              "1.6",

            color: "#666",

            marginBottom:
              "18px",
          }}
        >
          {domain.description}
        </p>

        <div
          style={{
            display: "flex",

            flexWrap:
              "wrap",

            gap: "6px",

            marginBottom:
              "18px",
          }}
        >
          {domain.tags.map(
            (tag: string) => (
              <span
                key={tag}
                style={{
                  fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",
                  fontSize:
                    "9px",

                  padding:
                    "5px 10px",

                  borderRadius:
                    "999px",

                  background:
                    "rgba(0,0,0,0.04)",

                  border:
                    "1px solid rgba(0,0,0,0.05)",

                  color:
                    "#555",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div
          style={{
            paddingTop:
              "14px",
              fontFamily:"Geist-Bold",
            letterSpacing: "1px",

            borderTop:
              "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              fontSize: mobile
                ? "24px"
                : "18px",

              fontWeight:
                800,

              color:
                "var(--color-dark-green)",

              marginBottom:
                "3px",
            }}
          >
            {domain.stat.value}
          </div>

          <div
            style={{
              fontSize:
                "10px",

              color:
                "#666",
            }}
          >
            {domain.stat.label}
          </div>
        </div>
      </div>
    </div>
  );
}



function DomainCardDark({
  domain,
  mobile = false,
}: {
  domain: any;
  mobile?: boolean;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#041B18 0%,var(--color-dark-green) 100%)",

        padding: mobile
          ? "24px"
          : "30px",

        position: "relative",

        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",

          right: "-80px",
          top: "-80px",

          width: "240px",
          height: "240px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(220,235,99,0.14), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          

          display: "grid",

          gridTemplateColumns:
            mobile
              ? "1fr"
              : "1.2fr auto",

          gap: "24px",

          alignItems:
            "center",
        }}
      >
        <div>
          <div
            style={{
              width: "48px",
              height: "48px",

              borderRadius:
                "14px",

              background:
                "rgba(220,235,99,0.12)",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              color:
                "#EAE26A",

              marginBottom:
                "16px",
            }}
          >
            {domain.icon}
          </div>

          <span
            style={{
              fontSize: "10px",

              fontWeight: 700,

              fontFamily:"Geist-Bold",
            letterSpacing: "1px",

              textTransform:
                "uppercase",

              color:
                "rgba(220,235,99,0.75)",

              display:
                "block",

              marginBottom:
                "12px",
            }}
          >
            {domain.category}
          </span>

          <h3
            style={{
              fontSize: mobile
                ? "30px"
                : "42px",

              lineHeight:
                "0.95",

              fontWeight:
                820,

              fontFamily:"Geist-Bold",
            letterSpacing: "1px",

              color:
                "#FAFAF7",

              marginBottom:
                "14px",
            }}
          >
            {domain.title}
          </h3>

          <p
            style={{
              fontSize: "14px",

              lineHeight:
                "1.6",

              color:
                "rgba(250,250,247,0.68)",

              maxWidth:
                "520px",

              marginBottom:
                "20px",
            }}
          >
            {domain.description}
          </p>

          <div
            style={{
              display: "flex",

              flexWrap:
                "wrap",

              gap: "7px",
              fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",
            }}
          >
            {domain.tags.map(
              (tag: string) => (
                <span
                  key={tag}
                  style={{
                    fontSize:
                      "9px",
                      

                    padding:
                      "5px 10px",

                    borderRadius:
                      "999px",

                    color:
                      "rgba(250,250,247,0.75)",

                    border:
                      "1px solid rgba(255,255,255,0.12)",

                    background:
                      "rgba(255,255,255,0.06)",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: mobile
                ? "52px"
                : "72px",
                fontFamily:"Geist-Bold",
            letterSpacing: "1px",

              lineHeight:
                "0.9",

              fontWeight:
                820,

              

              color:
                "#EAE26A",
            }}
          >
            {domain.stat.value}
          </div>

          <div
            style={{
              fontSize: "12px",

              color:
                "rgba(250,250,247,0.55)",

              marginTop:
                "6px",
                fontFamily:"Geist-SemiBold",
            letterSpacing: "1px",
            }}
          >
            {domain.stat.label}
          </div>
        </div>
      </div>
    </div>
  );
}