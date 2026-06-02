"use client";

import {
  Brain,
  TrendingUp,
  Home,
  Coins,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function ComingSoonTools() {
  const upcoming = [
    {
      icon: Brain,
      title: "AI Tax Assistant",
    },

    {
      icon: TrendingUp,
      title: "Retirement Planner",
    },

    {
      icon: Home,
      title: "Home Affordability",
    },

    {
      icon: Coins,
      title: "Crypto Tax Tool",
    },

    {
      icon: Target,
      title: "Goal Planner",
    },

    {
      icon: BarChart3,
      title: "Expense Analyzer",
    },
  ];

  return (
    <section className="comingSoonSectionCS">
      <div className="comingSoonContainerCS">
        <div className="comingSoonTopCS">
          <div className="section-label">
            COMING SOON
          </div>

          <h2 className="comingSoonTitleCS">
            More tools already<br className="mobile-only"/>
            <span> in development.</span>
          </h2>
        </div>

        <div className="comingSoonWrapCS">
          {upcoming.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="comingSoonCardCS"
              >
                <div className="comingSoonIconCS">
                  <Icon
                    size={24}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="comingSoonCardTitleCS">
                  {tool.title}
                </h3>

                <div className="comingSoonPillCS">
                  <Sparkles size={12} />
                  Upcoming
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .comingSoonSectionCS {
          padding: 72px 24px;
          background: #F5F4EF;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .comingSoonContainerCS {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .comingSoonTopCS {
          text-align: center;
          margin-bottom: 42px;
        }

        .comingSoonTitleCS {
          font-size:
            clamp(42px,4vw,58px);

          line-height: 0.95;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #111;
        }

        .comingSoonTitleCS span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;

          font-weight: 400;

          color: #0B544B;
        }

        .comingSoonWrapCS {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0,1fr));

          gap: 18px;

          width: 100%;
        }

        .comingSoonCardCS {
          width: 100%;
          min-width: 0;

          position: relative;
          overflow: hidden;

          padding: 22px;

          border-radius: 24px;

          background:
            rgba(255,255,255,0.84);

          border:
            1px solid rgba(0,0,0,0.05);

          backdrop-filter: blur(16px);

          transition: 0.25s ease;

          box-sizing: border-box;
        }


        .comingSoonCardCS:hover {
          transform: translateY(-4px);

          box-shadow:
            0 14px 28px
            rgba(0,0,0,0.05);
        }

        .comingSoonIconCS {
          width: 56px;
          height: 56px;

          border-radius: 18px;

          background:
            rgba(11,59,54,0.06);

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 18px;

          color: #0B544B;
        }

        .comingSoonIconCS svg {
          color: #0B544B;
          stroke: #0B544B;
        }

        .comingSoonCardTitleCS {
          font-size: 18px;

          line-height: 1.3;

          font-weight: 700;

          color: #111;

          margin-bottom: 18px;
        }

        .comingSoonPillCS {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          height: 34px;

          padding: 0 14px;

          border-radius: 999px;

          background:
            rgba(201,219,78,0.18);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.08em;

          color: #8FA60E;
        }

    @media (max-width: 900px) {

  .comingSoonSectionCS {
    padding: 80px 28px;
  }

  .comingSoonTopCS {
    margin-bottom: 42px;
  }

  .comingSoonTitleCS {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .comingSoonWrapCS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .comingSoonCardCS {
    padding: 24px;
  }

  .comingSoonCardTitleCS {
    font-size: 20px;
  }
}

@media (max-width: 768px) {

  .comingSoonSectionCS {
    padding: 72px 20px;
  }

  .comingSoonTopCS {
    margin-bottom: 34px;
  }

  .comingSoonTitleCS {
    font-size: 44px;
    line-height: 1;
  }

  .comingSoonWrapCS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .comingSoonCardCS {
    padding: 18px;
    border-radius: 22px;
  }

  .comingSoonIconCS {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    margin-bottom: 16px;
  }

  .comingSoonIconCS svg {
    width: 20px;
    height: 20px;
  }

  .comingSoonCardTitleCS {
    font-size: 16px;
    margin-bottom: 14px;
  }

  .comingSoonPillCS {
    height: 30px;
    padding: 0 12px;
    font-size: 10px;
  }
}

@media (max-width: 480px) {

  .comingSoonSectionCS {
    padding: 64px 16px;
  }

  .comingSoonTitleCS {
    font-size: 36px;
  }

  .comingSoonWrapCS {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .comingSoonCardCS {
    padding: 18px;
    border-radius: 20px;
  }

  .comingSoonIconCS {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .comingSoonIconCS svg {
    width: 18px;
    height: 18px;
  }

  .comingSoonCardTitleCS {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .comingSoonPillCS {
    font-size: 9px;
    height: 28px;
  }
}

@media (max-width: 360px) {

  .comingSoonSectionCS {
    padding: 56px 12px;
  }

  .comingSoonTitleCS {
    font-size: 30px;
  }

  .comingSoonCardCS {
    padding: 16px;
  }

  .comingSoonCardTitleCS {
    font-size: 16px;
  }

  .comingSoonPillCS {
    font-size: 8px;
    padding: 0 10px;
  }
}
      `}</style>
    </section>
  );
}