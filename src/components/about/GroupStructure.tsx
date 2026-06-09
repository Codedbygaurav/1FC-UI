"use client";

export default function GroupStructure() {
  const companies = [
    {
      logo: "/logo.png",
      title: "1FC Code",
      tag: "TECHNOLOGY",
    },
    {
      logo: "1FC-Trade.jpg",
      title: "1FC Trade",
      tag: "SECURITIES",
    },
    {
      logo: "1FC",
      title: "1FC Investments",
      tag: "FINANCIAL ADVISORY",
    },
    {
      logo: "1FC",
      title: "1FC Insurance",
      tag: "INSURANCE",
    },
  ];

  return (
    <section className="groupStructureSectionGS">
      <div className="container-main groupStructureContainerGS">
        <div className="groupStructureTopGS">
          <div className="groupStructureBadgeGS text-label">
            1FC GROUP STRUCTURE
          </div>

          <h2 className="groupStructureTitleGS text-section">
            One parent company.
            <br />
            Multiple financial
            <span className="text-serif-accent"> verticals.</span>
          </h2>
        </div>

        <div className="groupTreeGS">
          <div className="parentWrapGS">
            <div className="parentCardGS">
              <div className="logoBoxGS overflow-hidden">
                <img src="/1FC-Group.jpg" alt="" />
              </div>

              <div className="parentContentGS">
                <h3 className="text-card-title-lg">
                  1FC Group
                </h3>

                <p className="text-label">
                  PARENT COMPANY
                </p>
              </div>
            </div>
          </div>

          <div className="treeLineVerticalGS" />
          <div className="treeLineHorizontalGS" />

          <div className="childrenGridGS">
            {companies.map((company) => (
              <div
                key={company.title}
                className="childWrapGS"
              >
                <div className="childLineGS" />

                <div className="childCardGS">
                  <div className="logoBoxGS smallGS overflow-hidden">
                    <img src={company.logo} alt="" />
                  </div>

                  <div className="childContentGS">
                    <h4 className="text-card-title">
                      {company.title}
                    </h4>

                    <p className="text-label">
                      {company.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .groupStructureSectionGS {
  position: relative;
  overflow: hidden;

  max-width: 1280px;
  width: calc(100% - 48px);

  margin: 0 auto 100px;

  padding: 78px 24px 86px;

  background: var(--color-dark-green);

  border-radius: 28px;

  border: 1px solid rgba(255,255,255,.06);

  box-shadow:
    0 30px 80px rgba(0,0,0,.12),
    0 8px 24px rgba(0,0,0,.08);
}

        .groupStructureContainerGS {
          max-width: 1280px;
        }

        .groupStructureTopGS {
          max-width: 100%;
          margin-bottom: 48px;
        }

        .groupStructureBadgeGS {
          color: var(--color-accent-lime);
          margin-bottom: 16px;
          text-align:center;
        }

        .groupStructureTitleGS {
          color: #f5fff8;
          margin: 0;
          text-align:center;
        }

        .groupStructureTitleGS span {
          display: inline-block;
          color: var(--color-accent-lime);
          margin-left: 12px;
        }

        .groupTreeGS {
          position: relative;
          padding-top: 4px;
        }

        .parentWrapGS {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 3;
        }

        .parentCardGS {
          width: min(100%, 440px);
          min-height: 106px;
          padding: 22px 26px;
          border-radius: 28px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          box-shadow: 0 22px 60px rgba(0,0,0,0.12);
        }

        .logoBoxGS {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          background: #043a35;
          border: 1px solid rgba(216,243,93,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent-lime);
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .logoBoxGS.smallGS {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          font-size: 11px;
        }

        .parentCardGS h3 {
          color: white;
          margin: 0 0 9px;
        }

        .parentCardGS p,
        .childCardGS p {
          display: inline-flex;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(216,243,93,0.13);
          color: var(--color-accent-lime);
          margin: 0;
          white-space: nowrap;
        }

        .treeLineVerticalGS {
          width: 1px;
          height: 42px;
          background: rgba(216,243,93,0.28);
          margin: 0 auto;
        }

        .treeLineHorizontalGS {
          position: absolute;
          left: 12%;
          right: 12%;
          top: 158px;
          height: 1px;
          background: rgba(216,243,93,0.24);
        }

        .childrenGridGS {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .childWrapGS {
          position: relative;
          padding-top: 48px;
        }

        .childLineGS {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 48px;
          background: rgba(216,243,93,0.28);
        }

        .childCardGS {
          min-height: 118px;
          padding: 18px;
          border-radius: 24px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .childCardGS h4 {
          color: white;
          margin: 0 0 10px;
        }

  @media (max-width: 1024px) {

  .groupStructureSectionGS {
    padding: 88px 28px;
  }

  .groupStructureTopGS {
    max-width: 820px;
    margin: 0 auto 42px;
    text-align: center;
  }

  .groupStructureTitleGS {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
    text-align:center;
  }

  .parentCardGS {
    width: min(100%, 520px);
    padding: 24px;
  }

  .childrenGridGS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .treeLineHorizontalGS {
    display: none;
  }

  .childWrapGS {
    padding-top: 20px;
  }

  .childLineGS {
    display: none;
  }

  .childCardGS {
    min-height: 120px;
  }
}

@media (max-width: 768px) {

  .groupStructureSectionGS {
    padding: 72px 20px;
    width: calc(100% - 12px);
  }

  .groupStructureTopGS {
    margin-bottom: 32px;
  }

  .groupStructureTitleGS {
    font-size: 44px;
    line-height: 1;
  }

  .groupStructureBadgeGS {
    margin-bottom: 12px;
  }

  .parentCardGS {
    width: 100%;
    max-width: 560px;
    padding: 20px;
    border-radius: 24px;
    gap: 16px;
  }

  .logoBoxGS {
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }

  .logoBoxGS.smallGS {
    width: 46px;
    height: 46px;
    border-radius: 14px;
  }

  .treeLineVerticalGS {
    height: 28px;
  }

  .childrenGridGS {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .childCardGS {
    min-height: 110px;
    padding: 16px;
    border-radius: 20px;
    gap: 12px;
  }

  .childCardGS h4 {
    margin-bottom: 8px;
  }

  .parentCardGS p,
  .childCardGS p {
    font-size: 10px;
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {

  .groupStructureSectionGS {
    padding: 64px 16px;
  }

  .groupStructureTopGS {
    margin-bottom: 24px;
  }

  .groupStructureTitleGS {
    font-size: 36px;
  }

  .groupStructureTitleGS span {
    margin-left: 6px;
  }

  .parentCardGS {
    padding: 16px;
    border-radius: 20px;
    gap: 12px;
  }

  .logoBoxGS {
    width: 46px;
    height: 46px;
    border-radius: 12px;
  }

  .logoBoxGS.smallGS {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .parentCardGS p,
  .childCardGS p {
    font-size: 9px;
    padding: 5px 8px;
  }

  .childrenGridGS {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .childCardGS {
    min-height: auto;
    padding: 14px;
    border-radius: 18px;
  }

  .childCardGS h4 {
    margin-bottom: 6px;
  }
}

@media (max-width: 360px) {

  .groupStructureSectionGS {
    padding: 56px 12px;
  }

  .groupStructureTitleGS {
    font-size: 30px;
  }

  .parentCardGS {
    padding: 14px;
  }

  .childCardGS {
    padding: 12px;
  }

  .parentCardGS p,
  .childCardGS p {
    font-size: 8px;
  }
}
      `}</style>
    </section>
  );
}