import { useEffect, useRef } from "react";

export default function PricingSection() {
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
                    setTimeout(
                      () =>
                        el.classList.add(
                          "visible"
                        ),
                      i * 100
                    );
                  }
                );
              }
            }
          );
        },
        { threshold: 0.1 }
      );

    if (sectionRef.current)
      observer.observe(
        sectionRef.current
      );

    return () =>
      observer.disconnect();
  }, []);

  const features = [
    "Complete financial dashboard",
    "Investment tracking & analysis",
    "Insurance policy management",
    "Tax filing & advisory",
    "Estate & legal planning",
    "Risk profiling & net worth",
    "Expert CA/CFP advisory calls",
    "Bank-grade security & encryption",
    "Family financial vault",
    "Priority support",
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        background:
          "var(--color-bg-ivory)",

        padding:
          "clamp(64px, 7vw, 110px) 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >

        <div
          style={{
            textAlign: "center",

            marginBottom:
              "clamp(40px, 5vw, 64px)",
          }}
        >
          <div
            className="reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",

              gap: "12px",

              marginBottom: "20px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "24px",

                background:
                  "var(--color-dark-green)",

                opacity: 0.3,
              }}
            />

            <span
              style={{
                fontSize: "11px",

                fontWeight: "700",

                letterSpacing:
                  "1px",

                color: "#5E5E5E",

                textTransform:
                  "uppercase",
              }}
            >
              Pricing
            </span>

            <div
              style={{
                height: "1px",
                width: "24px",

                background:
                  "var(--color-dark-green)",

                opacity: 0.3,
              }}
            />
          </div>

          <h2
            className="reveal"
            style={{
              fontSize:
                "clamp(30px, 4vw, 52px)",

              fontWeight: "800",

              letterSpacing:
                "1px",
                fontFamily:"Geist-Bold",

              lineHeight: "1.05",

              color: "#111111",

              marginBottom: "16px",
            }}
          >
            Professional financial
            guidance,<br/> priced{" "}
            <span
              style={{
                fontStyle: "italic",


                fontWeight: "400",

                color: "var(--color-dark-green)",
              }}
            >
              honestly
            </span>
          </h2>

          <p
            className="reveal"
            style={{
              fontSize: "15px",

              color: "#5E5E5E",

              maxWidth: "460px",

              margin: "0 auto",

              lineHeight: "1.8",
            }}
          >
            Everything you need.
            Nothing unnecessary.
            One transparent annual
            plan.
          </p>
        </div>


        <div
          className="reveal"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "var(--color-dark-green)",

              borderRadius: "28px",

              overflow: "hidden",

              boxShadow:
                "0 30px 80px rgba(11,59,54,0.14)",
            }}
          >
            <div
              className="pricing-inner"
              style={{
                display: "grid",

                gridTemplateColumns:
                  "0.92fr 1.08fr",
              }}
            >


              <div
                style={{
                  padding:
                    "clamp(28px, 3vw, 42px)",

                  display: "flex",

                  flexDirection:
                    "column",

                  justifyContent:
                    "space-between",

                  borderRight:
                    "1px solid rgba(255,255,255,0.08)",

                  position:
                    "relative",

                  overflow:
                    "hidden",

                  minHeight: "420px",
                }}
              >

                <div
                  style={{
                    position:
                      "absolute",

                    bottom: "-60px",
                    right: "-60px",

                    width: "220px",
                    height: "220px",


                    pointerEvents:
                      "none",
                  }}
                />


                <div>

                  <div
                    style={{
                      display:
                        "inline-flex",

                      alignItems:
                        "center",

                      gap: "8px",

                      background:
                        "rgba(220,235,99,0.1)",

                      border:
                        "1px solid rgba(220,235,99,0.18)",

                      borderRadius:
                        "999px",

                      padding:
                        "5px 12px",

                      marginBottom:
                        "26px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",

                        background:
                          "var(--color-accent-lime)",

                        borderRadius:
                          "50%",
                      }}
                    />

                    <span
                      style={{
                        fontSize:
                          "11px",

                        fontWeight:
                          "600",

                        color:
                          "var(--color-accent-lime)",

                        letterSpacing:
                          "0.04em",
                      }}
                    >
                      Everything included
                    </span>
                  </div>


                  <div
                    style={{
                      display: "flex",

                      alignItems:
                        "flex-start",

                      marginBottom:
                        "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize:
                          "30px",

                        fontWeight:
                          "700",

                        color:
                          "var(--color-accent-lime)",

                        marginTop:
                          "10px",

                        lineHeight: 1,
                      }}
                    >
                      ₹
                    </span>

                    <span
                      style={{
                        fontSize:
                          "60px",
                          letterSpacing:"-6px",

                        fontWeight:
                          "900",

                        color:
                          "var(--color-accent-lime)",

                        

                        lineHeight:
                          "0.9",
                      }}
                    >
                      365
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize:
                        "15px",

                      color:
                        "rgba(250,250,247,0.58)",

                      lineHeight:
                        "1.7",

                      maxWidth:
                        "280px",

                      marginBottom:
                        "30px",
                    }}
                  >
                    Complete financial
                    operating system for
                    modern Indian
                    families.
                  </p>


                  <div
                    style={{
                      display: "flex",

                      gap: "12px",

                      flexWrap:
                        "wrap",
                    }}
                  >
                    {[
                      "Investments",
                      "Taxes",
                      "Insurance",
                    ].map(
                      (item) => (
                        <div
                          key={item}
                          style={{
                            padding:
                              "8px 12px",

                            borderRadius:
                              "999px",

                            background:
                              "rgba(255,255,255,0.05)",

                            border:
                              "1px solid rgba(255,255,255,0.06)",

                            fontSize:
                              "12px",

                            color:
                              "rgba(250,250,247,0.72)",
                          }}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>


                <div>
                  <a
                    href="#"
                    className="margin-Top"
                    style={{
                      marginTop:"20px",
                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      gap: "10px",

                      background:
                        "var(--color-accent-lime)",

                      color:
                        "var(--color-dark-green)",

                      height: "54px",

                      borderRadius:
                        "14px",

                      fontSize:
                        "15px",

                      fontWeight:
                        "700",

                      textDecoration:
                        "none",

                      letterSpacing:
                        "1px",
                        fontFamily:"Geist-Bold",

                      transition:
                        "all 0.25s ease",
                    }}
                  >
                    Start Free Trial

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p
                    style={{
                      fontSize:
                        "12px",

                      color:
                        "rgba(250,250,247,0.36)",

                      textAlign:
                        "center",

                      marginTop:
                        "14px",

                      lineHeight:
                        "1.6",
                    }}
                  >
                    30-day free trial ·
                    Cancel anytime
                  </p>
                </div>
              </div>


              <div
                style={{
                  padding:
                    "clamp(26px, 3vw, 40px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "12px",

                    fontWeight: "700",

                    color:
                      "rgba(250,250,247,0.42)",

                    letterSpacing:
                      "0.08em",

                    textTransform:
                      "uppercase",

                    marginBottom:
                      "22px",
                  }}
                >
                  Everything included
                </h3>

                <div
                  style={{
                    display: "flex",

                    flexDirection:
                      "column",

                    gap: "14px",
                  }}
                >
                  {features.map(
                    (feature) => (
                      <div
                        key={feature}
                        style={{
                          display:
                            "flex",

                          alignItems:
                            "center",

                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "18px",
                            height: "18px",

                            background:
                              "rgba(220,235,99,0.12)",

                            borderRadius:
                              "50%",

                            display:
                              "flex",

                            alignItems:
                              "center",

                            justifyContent:
                              "center",

                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5L4 7L8 3"
                              stroke="var(--color-accent-lime)"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        <span
                          style={{
                            fontSize:
                              "14px",

                            color:
                              "rgba(250,250,247,0.76)",

                            lineHeight:
                              "1.6",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className="reveal"
          style={{
            margin: "22px auto 0",

            textAlign: "center",

            padding: "16px 18px",

            fontFamily:"Geist-SemiBold",
            letterSpacing:"1px",

            background:
              "rgba(255,255,255,0.72)",

            borderRadius: "14px",

            border:
              "1px solid rgba(11,59,54,0.05)",

            maxWidth: "620px",
          }}
        >
          <p
            style={{
              fontSize: "13px",

              color: "#5E5E5E",

              lineHeight: "1.8",
            }}
          >
            A single consultation
            with a CA or CFP often
            costs ₹2,000–10,000.
            <br />

            <strong
              style={{
                color: "var(--color-dark-green)",
              }}
            >
              #FCode gives you an
              entire financial
              ecosystem for ₹365.
            </strong>
          </p>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;

          transform: translateY(20px);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;

          transform: translateY(0);
        }

   @media (max-width: 1024px) {

  .pricing-inner {
    grid-template-columns: 1fr !important;
  }

  .pricing-inner > div:first-child {
    border-right: none !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    min-height: auto !important;
  }

  .pricing-inner > div {
    padding: 34px !important;
  }
}

@media (max-width: 768px) {

#pricing {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .pricing-inner {
    grid-template-columns: 1fr !important;
  }

  .pricing-inner > div:first-child {
    border-right: none !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    min-height: auto !important;
  }

  .pricing-inner > div {
    padding: 28px !important;
  }

  .pricing-inner {
    border-radius: 24px;
  }

  .pricing-inner h3 {
    font-size: 13px !important;
    margin-bottom: 18px !important;
  }

  .pricing-inner span {
    line-height: 1.7;
  }
}

@media (max-width: 480px) {

  .pricing-inner > div {
    padding: 22px !important;
  }

  .pricing-inner {
    border-radius: 20px;
  }

  .pricing-inner h3 {
    font-size: 12px !important;
  }
}

@media (max-width: 360px) {

  .pricing-inner > div {
    padding: 18px !important;
  }
}
      `}</style>
    </section>
  );
}