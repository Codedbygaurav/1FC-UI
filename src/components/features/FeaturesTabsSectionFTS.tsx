import { useState } from "react";
import {
  TrendingUp, Building2, ShieldCheck, Landmark, Scale, Leaf,
  ChartNoAxesColumn, Dna, HeartPulse, FileText, Users,
  Home, Car, CreditCard, Calendar, RefreshCcw, Zap,
  Clock3, CheckCircle2, ScrollText, FolderOpen,
  Building, Globe, CalendarClock
} from "lucide-react";

export default function FeaturesTabsFTS() {
  const tabs = [
    "Investments",
    "Insurance",
    "Loans",
    "Tax",
    "Legal",
  ] as const;

  type TabType = (typeof tabs)[number];

  const [activeTab, setActiveTab] =
    useState<TabType>("Investments");

  const data: Record<
    TabType,
    {
      icon: React.ReactNode;
      tag: string;
      title: string;
      desc: string;
    }[]
  > = {
    Investments: [
      {
        icon: <TrendingUp size={20} />,
        tag: "LIVE",
        title: "Stock Portfolio Tracker",
        desc:
          "Track equity holdings across brokers with live P&L, exposure and allocation monitoring.",
      },

      {
        icon: <Building2 size={20} />,
        tag: "LIVE",
        title: "IPO Application & Tracking",
        desc:
          "Apply for IPOs, monitor allotment status and get listing updates instantly.",
      },

      {
        icon: <ShieldCheck size={20} />,
        tag: "LIVE",
        title: "Pre-IPO Investment Tracker",
        desc:
          "Monitor unlisted investments with expected listing and valuation tracking.",
      },

      {
        icon: <Landmark size={20} />,
        tag: "LIVE",
        title: "AIF & PMS Monitoring",
        desc:
          "Track PMS and AIF investments alongside retail holdings in one dashboard.",
      },

      {
        icon: <Scale size={20} />,
        tag: "LIVE",
        title: "Asset Allocation Analyser",
        desc:
          "Analyze portfolio diversification against your target allocation in real time.",
      },

      {
        icon: <Leaf size={20} />,
        tag: "LIVE",
        title: "Tax-Loss Harvesting Signals",
        desc:
          "Identify portfolio positions that can reduce tax liability before year-end.",
      },

      {
        icon: <ChartNoAxesColumn size={20} />,
        tag: "LIVE",
        title: "LTCG Alert System",
        desc:
          "Receive alerts for holdings approaching long-term capital gains thresholds.",
      },
    ],

    Insurance: [
      {
        icon: <Dna size={20} />,
        tag: "LIVE",
        title: "Term Life Policy Vault",
        desc:
          "Track policies, nominees, premiums and family coverage from one secure place.",
      },

      {
        icon: <HeartPulse size={20} />,
        tag: "LIVE",
        title: "Health & Mediclaim Tracker",
        desc:
          "Manage health policies, claim history and cashless hospital eligibility.",
      },

      {
         icon: <TrendingUp size={20} />,
        tag: "LIVE",
        title: "ULIP Fund Value Monitor",
        desc:
          "Track ULIP NAV, insurance benefits and investment growth together.",
      },

      {
        icon: <FileText size={20} />,
        tag: "LIVE",
        title: "Claim Guidance Checklist",
        desc:
          "Step-by-step insurance claim filing guidance with timelines and documents.",
      },

      {
        icon: <Users size={20} />,
        tag: "LIVE",
        title: "Nominee Verification",
        desc:
          "Detect missing or outdated nominees across all insurance policies.",
      },
    ],

    Loans: [
      {
        icon: <Home size={20} />,
        tag: "LIVE",
        title: "Home Loan EMI Tracker",
        desc:
          "Track EMI payments, principal outstanding and prepayment savings.",
      },

      {
        icon: <Car size={20} />,
        tag: "LIVE",
        title: "Vehicle & Personal Loan Monitor",
        desc:
          "Monitor loans, refinancing opportunities and foreclosure costs.",
      },

      {
        icon: <CreditCard size={20} />,
        tag: "LIVE",
        title: "Credit Card Intelligence",
        desc:
          "Track dues, utilization ratio and payment reminders across cards.",
      },

      {
        icon: <TrendingUp size={20} />,
        tag: "LIVE",
        title: "Debt-to-Income Ratio Calculator",
        desc:
          "Analyze income vs liabilities with real-time financial stress scoring.",
      },

      {
        icon: <Landmark size={20} />,
        tag: "LIVE",
        title: "Multi-Bank Account Aggregator",
        desc:
          "View balances across banks and optimize idle savings efficiently.",
      },

      {
        icon: <Calendar size={20} />,
        tag: "LIVE",
        title: "FD Maturity Alert & Tracker",
        desc:
          "Track maturity dates, accrued interest and reinvestment options.",
      },

      {
        icon: <RefreshCcw size={20} />,
        tag: "LIVE",
        title: "Recurring Deposit Tracker",
        desc:
          "Monitor RD contributions and long-term disciplined savings growth.",
      },

      {
        icon: <Zap size={20} />,
        tag: "LIVE",
        title: "EMI Stress Test",
        desc:
          "Simulate the impact of new EMIs on financial health before borrowing.",
      },
    ],

    Tax: [
      {
        icon: <Clock3 size={20} />,
        tag: "LIVE",
        title: "Advance Tax Calculator",
        desc:
          "Estimate liabilities and receive reminders before quarterly deadlines.",
      },

      {
        icon: <FileText size={20} />,
        tag: "LIVE",
        title: "ITR Filing Support",
        desc:
          "Step-by-step filing assistance with pre-filled financial data.",
      },

      {
        icon: <TrendingUp size={20} />,
        tag: "LIVE",
        title: "Capital Gains Consolidation",
        desc:
          "Aggregate STCG and LTCG across investments into one statement.",
      },

      {
        icon: <CheckCircle2 size={20} />,
        tag: "LIVE",
        title: "TDS Credit Verification",
        desc:
          "Verify TDS credits and detect mismatches before return filing.",
      },

      {
        icon: <Scale size={20} />,
        tag: "LIVE",
        title: "Old vs New Regime Comparison",
        desc:
          "Compare tax regimes using your actual income and deductions.",
      },

      {
        icon: <CalendarClock size={20} />,
        tag: "LIVE",
        title: "Tax Deadline Calendar",
        desc:
          "Track every tax due date with smart reminders and alerts.",
      },
    ],

    Legal: [
      {
        icon: <ScrollText size={20} />,
        tag: "LIVE",
        title: "Will Creation Guidance",
        desc:
          "Create legally valid wills with structured planning and checklists.",
      },

      {
        icon: <FolderOpen size={20} />,
        tag: "LIVE",
        title: "Deed & Document Vault",
        desc:
          "Store legal papers securely and map them directly to assets.",
      },

      {
        icon: <Building size={20} />,
        tag: "LIVE",
        title: "Asset Inventory & Mapping",
        desc:
          "Map financial and physical assets with nominee and ownership details.",
      },

      {
        icon: <Scale size={20} />,
        tag: "LIVE",
        title: "HUF & Trust Advisory",
        desc:
          "Structured guidance for trusts, HUFs and wealth transfer planning.",
      },

      {
        icon: <Users size={20} />,
        tag: "LIVE",
        title: "Nominee Management & Alerts",
        desc:
          "Track nominees across insurance, investments and banking accounts.",
      },

      {
        icon: <Globe size={20} />,
        tag: "LIVE",
        title: "Estate Settlement Toolkit",
        desc:
          "Guided succession workflows for claims and asset transmission.",
      },
    ],
  };

  return (
    <>
      <section className="featuresTabsSectionFTS">
        <div className="featuresTabsContainerFTS">
          <div className="featuresTabsTopFTS">
  <div className="section-label">
    CONNECTED FEATURES
  </div>

  <h2 className="section-title">
    Everything works
    <span> together</span>
  </h2>

  <p className="section-subtitle">
    One intelligent ecosystem connecting investments,
    insurance, taxes, loans and legal planning.
  </p>
</div>

          <div className="featuresTabsNavWrapFTS">
            <div className="featuresTabsNavFTS">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`featuresTabBtnFTS ${
                    activeTab === tab ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="featuresTabsGridFTS">
            {data[activeTab].map((item, index) => (
              <div
                key={index}
                className="featuresTabCardFTS"
              >
                <div className="featuresTabCardTopFTS">
                  <div className="featuresTabLiveFTS">
                    <span className="featuresTabLiveDotFTS" />
                    {item.tag}
                  </div>

                  <div className="featuresTabIconFTS">
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="featuresTabTitleFTS">
                    {item.title}
                  </h3>

                  <p className="featuresTabDescFTS">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .featuresTabsSectionFTS {
          padding: 90px 0 80px;
          background: var(--color-bg-ivory);
        }

        .featuresTabsContainerFTS {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .featuresTabsTopFTS {
          text-align: center;
          margin-bottom: 48px;
        }

        .featuresTabsLabelFTS {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: #ecebdc;
          color: #0a5c50;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          margin-bottom: 18px;
        }

        .featuresTabsTopFTS {
  text-align: center;

  max-width: 1280px;

  margin: 0 auto 48px;
}

.featuresTabsHeadingFTS {
  font-size:
            clamp(42px, 4vw, 58px);

          line-height: 0.94;
          letter-spacing: -0.06em;
          font-weight: 900;
          color: #111111;
          max-width: 720px;
          margin: 18px auto 0;
}

.featuresTabsHeadingFTS span {
  font-family: "DM Serif Display", serif;

  font-style: italic;

  font-weight: 400;

  font-size: 0.9em;

  color: #0B544B;
}

.featuresTabsDescFTS {
  max-width: 890px;

  margin: 0 auto;

  font-size: 18px;

  line-height: 2.8;

  color: #5F6763;
}

        .featuresTabsNavWrapFTS {
          position: sticky;
          top: 108px;
          z-index: 30;
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .featuresTabsNavFTS {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding: 12px;
          width: fit-content;
          border-radius: 20px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .featuresTabBtnFTS {
          border: none;
          cursor: pointer;
          padding: 12px 20px;
          border-radius: 12px;
          background: #fff;
          color: #4e5551;
          font-size: 14px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .featuresTabBtnFTS.active {
          background: var(--color-dark-green);
          color: #fff;
        }

        .featuresTabsGridFTS {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 18px;
        }

        .featuresTabCardFTS {
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 26px;
          padding: 22px;
          min-height: 210px;
          transition: 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .featuresTabCardFTS:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.06);
        }

        .featuresTabCardTopFTS {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .featuresTabLiveFTS {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #0b6b5c;
        }

        .featuresTabLiveDotFTS {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-dark-green);
        }

        .featuresTabIconFTS {
  width: 52px;
  height: 52px;

  border-radius: 16px;

  background:
    rgba(11,84,75,0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0B544B;

  flex-shrink: 0;
}

.featuresTabIconFTS svg {
  width: 22px;
  height: 22px;

  color: #0B544B;
  stroke: #0B544B;
}

        .featuresTabTitleFTS {
          font-size: 18px;
          line-height: 1.2;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .featuresTabDescFTS {
          font-size: 14px;
          line-height: 1.7;
          color: #66706b;
        }

  @media (max-width: 1100px) {

  .featuresTabsSectionFTS {
    padding: 88px 0;
  }

  .featuresTabsContainerFTS {
    padding: 0 28px;
  }

  .featuresTabsTopFTS {
    margin-bottom: 42px;
  }

  .featuresTabsHeadingFTS {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
    max-width: 820px;
  }

  .featuresTabsDescFTS {
    max-width: 760px;
    font-size: 17px;
    line-height: 1.8;
  }

  .featuresTabsNavWrapFTS {
    top: 92px;
    margin-bottom: 34px;
  }

  .featuresTabsNavFTS {
    gap: 10px;
    padding: 10px;
  }

  .featuresTabBtnFTS {
    font-size: 13px;
    padding: 12px 18px;
  }

  .featuresTabsGridFTS {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .featuresTabCardFTS {
    min-height: 220px;
    padding: 22px;
  }
}

@media (max-width: 768px) {

  .featuresTabsSectionFTS {
    padding: 72px 0;
  }

  .featuresTabsContainerFTS {
    padding: 0 20px;
  }

  .featuresTabsTopFTS {
    margin-bottom: 30px;
  }

  .featuresTabsHeadingFTS {
    font-size: 44px;
    line-height: 1;
    margin-top: 14px;
  }

  .featuresTabsDescFTS {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .featuresTabsNavWrapFTS {
    top: 76px;
    margin-bottom: 24px;
    justify-content: flex-start;
  }

  .featuresTabsNavFTS {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 8px;
    border-radius: 18px;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .featuresTabsNavFTS::-webkit-scrollbar {
    display: none;
  }

  .featuresTabBtnFTS {
    flex-shrink: 0;
    white-space: nowrap;
    padding: 11px 16px;
    border-radius: 10px;
    font-size: 12px;
  }

  .featuresTabsGridFTS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .featuresTabCardFTS {
    min-height: 200px;
    padding: 20px;
    border-radius: 22px;
  }

  .featuresTabCardTopFTS {
    margin-bottom: 16px;
  }

  .featuresTabIconFTS {
    width: 46px;
    height: 46px;
    border-radius: 14px;
  }

  .featuresTabIconFTS svg {
    width: 20px;
    height: 20px;
  }

  .featuresTabTitleFTS {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .featuresTabDescFTS {
    font-size: 13px;
    line-height: 1.7;
  }

  .featuresTabLiveFTS {
    font-size: 10px;
  }
}

@media (max-width: 480px) {

  .featuresTabsSectionFTS {
    padding: 64px 0;
  }

  .featuresTabsContainerFTS {
    padding: 0 16px;
  }

  .featuresTabsHeadingFTS {
    font-size: 36px;
  }

  .featuresTabsDescFTS {
    font-size: 14px;
  }

  .featuresTabsNavWrapFTS {
    margin-bottom: 20px;
  }

  .featuresTabsGridFTS {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .featuresTabCardFTS {
    min-height: auto;
    padding: 18px;
    border-radius: 20px;
  }

  .featuresTabCardTopFTS {
    margin-bottom: 14px;
  }

  .featuresTabIconFTS {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .featuresTabTitleFTS {
    font-size: 16px;
  }

  .featuresTabDescFTS {
    font-size: 12px;
  }

  .featuresTabBtnFTS {
    font-size: 11px;
    padding: 10px 14px;
  }
}

@media (max-width: 360px) {

  .featuresTabsSectionFTS {
    padding: 56px 0;
  }

  .featuresTabsContainerFTS {
    padding: 0 12px;
  }

  .featuresTabsHeadingFTS {
    font-size: 30px;
  }

  .featuresTabsDescFTS {
    font-size: 13px;
  }

  .featuresTabCardFTS {
    padding: 16px;
  }

  .featuresTabTitleFTS {
    font-size: 15px;
  }

  .featuresTabDescFTS {
    font-size: 11px;
  }

  .featuresTabBtnFTS {
    font-size: 10px;
  }
}
      `}</style>
    </>
  );
}