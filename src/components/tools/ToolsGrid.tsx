"use client";

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { toolsData } from "@/data/ToolsData";

export default function ToolsGrid() {
  return (
    <section className="toolsGridSectionTG">
      <div className="toolsGridContainerTG">
        <div className="toolsGridTopTG">
          <div className="section-label">
            LIVE TOOLS
          </div>

          <h2 className="toolsGridTitleTG">
            Financial tools built<br className="mobile-only"/>
            <span> for real life.</span>
          </h2>
        </div>

        <div className="toolsGridWrapTG">
          {toolsData?.map((tool, index) => (
            <div
              key={index}
              className="toolsGridCardTG"
            >
              <div>
                <div className="toolsGridCardTopTG">
                  <div className="toolsGridIconTG ">
                    {tool.icon}
                  </div>

                  <div className="toolsGridLiveTG">
                    <Sparkles size={12} />
                    LIVE
                  </div>
                </div>

                <div>
                  <h3 className="toolsGridCardTitleTG">
                    {tool.title}
                  </h3>

                  <p className="toolsGridCardDescTG">
                    {tool.description}
                  </p>
                </div>

                <div className="toolsGridInputsTG">
                  {tool.inputs
                    ?.slice(0, 2)
                    .map((input) => (
                      <div
                        key={input.label}
                        className="toolsGridInputRowTG"
                      >
                        <span>
                          {input.label}
                        </span>

                        <strong>
                          {input.prefix || ""}
                          {input.value}
                          {input.suffix || ""}
                        </strong>
                      </div>
                    ))}
                </div>

                
              </div>

              <Link
                to={`/tools/${tool.slug}`}
                className="toolsGridBtnTG"
              >
                Open Calculator
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .toolsGridSectionTG {
          padding: 72px 24px;
          background: #F5F4EF;
        }
          

        .toolsGridContainerTG {
          max-width: 1280px;
          margin: 0 auto;
        }

        .toolsGridTopTG {
          text-align: center;
          margin-bottom: 42px;
        }

        .toolsGridTitleTG {
          font-size:
            clamp(42px,4vw,58px);

          line-height: 0.95;

          letter-spacing: -0.07em;

          font-weight: 900;

          color: #111;
        }

        .toolsGridTitleTG span {
          font-family:
            "DM Serif Display",
            serif;

          font-style: italic;

          font-weight: 400;

          color: #0B544B;
        }

        .toolsGridWrapTG {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0,1fr));

          gap: 18px;
        }

        .toolsGridCardTG {
          position: relative;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          min-height: 420px;

          padding: 22px;

          border-radius: 24px;

          background:
            rgba(255,255,255,0.84);

          border:
            1px solid rgba(0,0,0,0.05);

          backdrop-filter: blur(16px);

          transition: 0.25s ease;

          overflow: hidden;
        }

        

        .toolsGridCardTG:hover {
          transform: translateY(-4px);

          box-shadow:
            0 16px 30px
            rgba(0,0,0,0.05);
        }

        .toolsGridCardTopTG {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 18px;
        }

        .toolsGridIconTG {
  width: 52px;
  height: 52px;

  border-radius: 16px;

  background:
    rgba(11,59,54,0.06);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0B544B;

  flex-shrink: 0;
}

.toolsGridIconTG svg {
  width: 22px;
  height: 22px;

  stroke: #0B544B;

  color: #0B544B;

  stroke-width: 2.2;
}

        .toolsGridLiveTG {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 8px 12px;

          border-radius: 999px;

          background:
            rgba(201,219,78,0.18);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.08em;

          color: #8FA60E;
        }

        .toolsGridCardTitleTG {
          font-size: 22px;

          line-height: 1.1;

          font-weight: 800;

          color: #111;

          margin-bottom: 12px;
        }

        .toolsGridCardDescTG {
          font-size: 14px;

          line-height: 1.7;

          color: #66706B;

          margin-bottom: 20px;
        }

        .toolsGridInputsTG {
          display: flex;

          flex-direction: column;

          gap: 10px;

          margin-bottom: 18px;
        }

        .toolsGridInputRowTG {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 14px 16px;

          border-radius: 16px;

          background: #F7F7F3;
        }

        .toolsGridInputRowTG span {
          font-size: 12px;

          color: #68706C;
        }

        .toolsGridInputRowTG strong {
          font-size: 13px;

          color: #111;
        }




        .toolsGridBtnTG {
          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          text-decoration: none;

          border-radius: 16px;

          background: #0B3B36;

          color: white;

          font-size: 14px;

          font-weight: 700;

          transition: 0.25s ease;
        }

        .toolsGridBtnTG:hover {
          transform: translateY(-2px);

          background: #095149;
        }
@media (max-width: 1100px) {

  .toolsGridSectionTG {
    padding: 80px 28px;
  }

  .toolsGridTopTG {
    margin-bottom: 42px;
  }

  .toolsGridTitleTG {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .toolsGridWrapTG {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .toolsGridCardTG {
    min-height: 420px;
    padding: 24px;
  }

  .toolsGridCardTitleTG {
    font-size: 24px;
  }

  .toolsGridCardDescTG {
    font-size: 15px;
    line-height: 1.8;
  }
}

@media (max-width: 768px) {

  .toolsGridSectionTG {
    padding: 72px 20px;
  }

  .toolsGridTopTG {
    margin-bottom: 34px;
  }

  .toolsGridTitleTG {
    font-size: 44px;
    line-height: 1;
  }

  .toolsGridWrapTG {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .toolsGridCardTG {
    min-height: auto;
    padding: 22px;
    border-radius: 22px;
  }

  .toolsGridCardTopTG {
    margin-bottom: 18px;
  }

  .toolsGridIconTG {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }

  .toolsGridIconTG svg {
    width: 20px;
    height: 20px;
  }

  .toolsGridLiveTG {
    padding: 7px 11px;
    font-size: 10px;
  }

  .toolsGridCardTitleTG {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .toolsGridCardDescTG {
    font-size: 14px;
    line-height: 1.75;
    margin-bottom: 18px;
  }

  .toolsGridInputsTG {
    gap: 8px;
    margin-bottom: 18px;
  }

  .toolsGridInputRowTG {
    padding: 14px 16px;
  }

  .toolsGridInputRowTG span {
    font-size: 12px;
  }

  .toolsGridInputRowTG strong {
    font-size: 13px;
  }

  .toolsGridBtnTG {
    height: 50px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {

  .toolsGridSectionTG {
    padding: 64px 16px;
  }

  .toolsGridTitleTG {
    font-size: 36px;
  }

  .toolsGridCardTG {
    padding: 18px;
    border-radius: 20px;
  }

  .toolsGridIconTG {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .toolsGridIconTG svg {
    width: 18px;
    height: 18px;
  }

  .toolsGridCardTitleTG {
    font-size: 20px;
  }

  .toolsGridCardDescTG {
    font-size: 13px;
  }

  .toolsGridInputRowTG {
    padding: 12px 14px;
  }

  .toolsGridInputRowTG span {
    font-size: 11px;
  }

  .toolsGridInputRowTG strong {
    font-size: 12px;
  }

  .toolsGridBtnTG {
    height: 48px;
    font-size: 13px;
  }
}

@media (max-width: 360px) {

  .toolsGridSectionTG {
    padding: 56px 12px;
  }

  .toolsGridTitleTG {
    font-size: 30px;
  }

  .toolsGridCardTG {
    padding: 16px;
  }

  .toolsGridCardTitleTG {
    font-size: 18px;
  }

  .toolsGridCardDescTG {
    font-size: 12px;
  }

  .toolsGridInputRowTG span {
    font-size: 10px;
  }

  .toolsGridInputRowTG strong {
    font-size: 11px;
  }
}
      `}</style>
    </section>
  );
}