import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Check, LayoutDashboard } from "lucide-react";
import { products } from "../../data/products";

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const product = products[activeIndex];

  const nextProduct = () => {
    setActiveIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setActiveIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <section className="showcase-section">
     
      <div className="showcase-glow" />

      <div className="showcase-container">
        
        <div className="product-tabs desktop-tabs">
          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`product-tab ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        
        <div className="showcase-shell">
          
          <div className="showcase-left">
            
            <div className="showcase-badge">
              {product.badge}
            </div>

            
            <div className="mobile-navPS">
              <button
                onClick={prevProduct}
                className="mobile-navPS-btn"
              >
                <ChevronLeft size={18} />
              </button>

              <h2 className="mobile-title">
                {product.title}
              </h2>

              <button
                onClick={nextProduct}
                className="mobile-navPS-btn active"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            
            <div className="desktop-heading">
              <h2 className="showcase-title">
                {product.title}
              </h2>

              <div className="desktop-navPS">
                <button
                  onClick={prevProduct}
                  className="desktop-navPS-btn"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextProduct}
                  className="desktop-navPS-btn active"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            
            <p className="showcase-subtitle">
              {product.subtitle}
            </p>

            
            <p className="showcase-description">
              {product.description}
            </p>

            
            <div className="showcase-mainContainer">
              <div className="stats-row">
              {product.stats.map((stat: any) => (
                <div
                  key={stat.label}
                  className="stat-card"
                >
                  <div className="stat-value">
                    {stat.value}
                  </div>

                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            
            <div className="benefits-grid">
              {product.benefits
                .slice(0, 4)
                .map((item: string) => (
                  <div
                    key={item}
                    className="benefit-item"
                  >
                    <div className="benefit-dot"><Check size={10} /></div>

                    <span>{item}</span>
                  </div>
                ))}
            </div>
            </div>

            
            <div className="audience-row">
              {product.audience.map((item: string) => (
                <div
                  key={item}
                  className="audience-pill"
                >
                  {item}
                </div>
              ))}
            </div>

            
            <button className="explore-btn">
              Explore {product.title} <ArrowRight size={16} />
            </button>
          </div>

          
          <div className="dashboard-shell">
            
            <div className="dashboard-glow" />

            
            <div className="dashboard-header">
              <div>
                <div className="dashboard-label"><LayoutDashboard size={12} /> 1FCode Intelligence</div>

                <div className="dashboard-title">
                  {product.title}
                </div>
              </div>

              <div className="dashboard-live">
                <div className="live-dot" />
                <span>LIVE</span>
              </div>
            </div>

            
            <div className="dashboard-main-card">
              <div className="dashboard-main-top">
                <div>
                  <div className="dashboard-main-label">
                    Primary Insight
                  </div>

                  <div className="dashboard-main-value">
                    {product.dashboard.cards[0].value}
                  </div>
                </div>

                <div className="dashboard-chip">
                  AI Active
                </div>
              </div>

              <div className="dashboard-progress">
                <div className="dashboard-progress-fill" />
              </div>

              <div className="dashboard-main-desc">
                AI continuously monitoring and
                optimizing your financial ecosystem.
              </div>
            </div>

            
            <div className="dashboard-grid">
              {product.dashboard.cards
                .slice(1)
                .map((card: any) => (
                  <div
                    key={card.title}
                    className="dashboard-card"
                  >
                    <div className="dashboard-card-label">
                      {card.title}
                    </div>

                    <div className="dashboard-card-value">
                      {card.value}
                    </div>
                  </div>
                ))}
            </div>

           
            <div className="dashboard-bottom">
              <div className="dashboard-bottom-label">
                AI Recommendation
              </div>

              <div className="dashboard-bottom-title">
                {product.benefits[0]}
              </div>

              <div className="dashboard-bottom-desc">
                Smart monitoring actively tracking
                opportunities and financial risks.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
.showcase-section {
  position: relative;
  overflow: hidden;

  padding: 64px 24px 72px;

  background: #F8F7F2;
}

.showcase-glow {
  position: absolute;

  top: -180px;
  right: -160px;

  width: 460px;
  height: 460px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(220,235,99,0.10),
      transparent 72%
    );

  filter: blur(40px);
}

.showcase-container {
  max-width: 1280px;
  margin: 0 auto;

  position: relative;
  z-index: 2;
}



.product-tabs {
font-family:"Geist-SemiBold";
letter-spacing: 1px;
  display: flex;
  gap: 10px;

  overflow-x: auto;

  margin-bottom: 24px;

  scrollbar-width: none;
}

.product-tabs::-webkit-scrollbar {
  display: none;
}

.product-tab {
  border: none;
  cursor: pointer;

  white-space: nowrap;

  padding: 10px 14px;

  border-radius: 999px;

  background: rgba(255,255,255,0.82);

  color: #0B3B36;

  font-size: 11px;
  font-weight: 700;

  transition: 0.25s ease;
}

.product-tab.active {
  background: #0B3B36;
  color: white;

  box-shadow:
    0 8px 20px rgba(11,59,54,0.14);
}



.showcase-shell {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 40px;
  align-items: center;
}



.showcase-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.showcase-badge {
font-family:"Geist-Bold";
letter-spacing: 1px;
  width: fit-content;

  padding: 8px 13px;

  border-radius: 999px;

  background: rgba(11,59,54,0.08);

  color: #0B3B36;

  font-size: 10px;
  font-weight: 700;

  margin-bottom: 16px;
}

.desktop-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 18px;

  margin-bottom: 12px;
}

.showcase-title {
  font-size: clamp(34px, 3.5vw, 48px);

  line-height: 0.94;


letter-spacing: 1px;

  font-weight: 850;

  color: #111111;
}

.desktop-navPS {
  display: flex;
  gap: 8px;
}

.desktop-navPS-btn,
.mobile-navPS-btn {
  border: none;
  cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
  transition: 0.25s ease;
}

.desktop-navPS-btn {
  width: 42px;
  height: 42px;
   
  border-radius: 50%;

  background: rgba(255,255,255,0.9);

  font-size: 16px;
  font-weight: 700;
}

.desktop-navPS-btn.active,
.mobile-navPS-btn.active {
  background: #0B3B36;
  color: white;
}

.showcase-subtitle {
font-family:"Geist-SemiBold";
letter-spacing:1px;
  font-size: 15px;

  line-height: 1.6;

  color: #0B3B36;

  font-weight: 500;

  max-width: 540px;

  margin-bottom: 10px;
}

.showcase-description {
  font-size: 13px;

  line-height: 1.75;

  color: #6A6F6B;

  max-width: 540px;

  margin-bottom: 20px;
}



.stats-row {
  display: flex;
  justify-content:center;
  align-items:center;
  

  gap: 12px;

  margin-bottom: 18px;
}

.stat-card {
  flex: 1;

  padding: 15px;

  border-radius: 18px;

  background: rgba(255,255,255,0.78);

  border: 1px solid rgba(255,255,255,0.72);

  backdrop-filter: blur(12px);

  box-shadow:
    0 8px 18px rgba(0,0,0,0.03);
}

.stat-value {
font-family:"Geist-Bold";
letter-spacing: 1px;
text-align:center;
  font-size: 22px;

  font-weight: 850;

  line-height: 1;

  color: #0B3B36;

  margin-bottom: 6px;
}

.stat-label {
text-align:center;
font-family:"Geist-SemiBold";
letter-spacing: 1px;
  font-size: 10px;

  line-height: 1.4;

  color: #6A6F6B;
}



.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;



  margin-bottom: 10px;
}

.benefit-item {

  font-family:"Geist-SemiBold";
letter-spacing: 1px;
  display: flex;
  gap: 9px;
  margin-bottom:10px;

  align-items: flex-start;

  font-size: 12px;

  line-height: 1.45;

  color: #232323;
}

.benefit-dot {
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background: rgba(11,59,54,0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 9px;

  color: #0B3B36;
}

.benefit-item span{
      
  font-weight:600;
}



.audience-row {
font-family:"Geist-Bold";
letter-spacing: 1px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  margin-bottom: 20px;
}

.audience-pill {
  padding: 7px 11px;

  border-radius: 999px;

  background: rgba(255,255,255,0.82);

  border: 1px solid rgba(0,0,0,0.05);

  font-size: 10px;
  font-weight: 700;

  color: #0B3B36;
}



.explore-btn {
font-family:"Geist-Bold";
letter-spacing: 1px;
  width: fit-content;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:5px;
  height: 48px;

  padding: 0 22px;

  border: none;

  border-radius: 14px;

  background:var(--color-dark-green);

  color: white;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 10px 24px rgba(11,59,54,0.14);

  transition: 0.25s ease;
}

.explore-btn:hover {
  transform: translateY(-2px);
}


.dashboard-shell {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 20px 22px;

  border-radius: 28px;

  overflow: hidden;

  background:var(--color-dark-green);

  box-shadow:
    0 20px 50px rgba(0,0,0,0.08);

  min-height: auto;
}

.dashboard-glow {
  position: absolute;

  top: -90px;
  right: -90px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(220,235,99,0.14),
      transparent 70%
    );

  filter: blur(30px);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4px;

  position: relative;
  z-index: 2;
}

.dashboard-label {
font-family:"Geist-SemiBold";
letter-spacing: 1px;
  font-size: 10px;

  color: rgba(255,255,255,0.55);

  margin-bottom: 4px;
}

.dashboard-title {
font-family:"Geist-Bold";
letter-spacing: 1px;
  font-size: 19px;

  font-weight: 800;

  color: white;
}

.dashboard-live {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dashboard-live span {
  font-size: 10px;
  font-weight: 700;
  color: var(--color-accent-lime);
}

.live-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--color-accent-lime);

  box-shadow:
    0 0 8px rgba(220,235,99,0.4);
}



.dashboard-main-card {

  position: relative;
  z-index: 2;

  padding: 16px;

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.08),
      rgba(255,255,255,0.03)
    );

  border: 1px solid rgba(255,255,255,0.06);
}

.dashboard-main-top {
font-family:"Geist-Bold";
letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 14px;
}

.dashboard-main-label {
  font-size: 10px;

  color: rgba(255,255,255,0.55);

  margin-bottom: 6px;
}

.dashboard-main-value {
  font-size: 32px;

  font-weight: 850;

  line-height: 1;

  letter-spacing: -0.05em;

  color: white;
}

.dashboard-chip {

  padding: 7px 10px;

  border-radius: 999px;

  background: rgba(220,235,99,0.14);

  color: var(--color-accent-lime);

  font-size: 9px;
  font-weight: 700;
}

.dashboard-progress {
  height: 6px;

  border-radius: 999px;

  overflow: hidden;

  background: rgba(255,255,255,0.06);

  margin-bottom: 12px;
}

.dashboard-progress-fill {
  width: 74%;
  height: 100%;

  border-radius: 999px;

  background:
    var(--color-accent-lime)
}

.dashboard-main-desc {
  font-size: 11px;

  line-height: 1.6;

  color: rgba(255,255,255,0.7);
}



.dashboard-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;

  position: relative;
  z-index: 2;
}

.dashboard-card {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  padding: 10px;

  border-radius: 18px;

  min-height: 90px;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.06),
      rgba(255,255,255,0.03)
    );

  border: 1px solid rgba(255,255,255,0.05);
}

.dashboard-card-label {
font-family:"Geist-SemiBold";
letter-spacing: 1px;
  font-size: 10px;

  color: rgba(255,255,255,0.55);

  margin-bottom: 10px;
}

.dashboard-card-value {
font-family:"Geist-Bold";
letter-spacing: 1px;
  font-size: 18px;

  font-weight: 800;

  line-height: 1.25;
text-align:center;

  color: white;

  word-break: break-word;
}



.dashboard-bottom {

  position: relative;
  z-index: 2;
margin-top:12px;
  padding: 10px;

  border-radius: 18px;

  background: rgba(255,255,255,0.05);

  border: 1px solid rgba(255,255,255,0.05);
}

.dashboard-bottom-label {
font-family:"Geist-SemiBold";
letter-spacing: 1px;
  font-size: 9px;

  color: rgba(255,255,255,0.5);

  margin-bottom: 6px;
}

.dashboard-bottom-title {
font-family:"Geist-Bold";
letter-spacing: 1px;
  font-size: 14px;

  font-weight: 700;

  color: white;

  margin-bottom: 6px;
}

.dashboard-bottom-desc {
  font-size: 11px;

  line-height: 1.6;

  color: rgba(255,255,255,0.68);
}



.mobile-navPS {
  display: none;
}



@media (max-width: 1100px) {

  .showcase-section {
    padding: 80px 28px;
  }

  .showcase-shell {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .showcase-left {
    text-align: center;
    align-items: center;
  }

  .desktop-heading {
    justify-content: center;
  }

  .showcase-title {
    font-size: clamp(52px, 6vw, 62px);
    line-height: 0.98;
  }

  .showcase-subtitle {
    max-width: 700px;
    font-size: 17px;
    line-height: 1.8;
    margin-inline: auto;
  }

  .showcase-description {
    max-width: 700px;
    font-size: 15px;
    line-height: 1.8;
    margin-inline: auto;
  }

  .showcase-mainContainer {
    width: 100%;
    max-width: 760px;
  }

  .audience-row {
    justify-content: center;
  }

  .dashboard-shell {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .showcase-section {
    padding: 68px 20px;
  }

  .desktop-tabs,
  .desktop-heading {
    display: none;
  }

  .showcase-shell {
    gap: 28px;
  }

  .showcase-left {
    text-align: left;
    align-items: stretch;
  }

  .showcase-badge {
    margin-inline: auto;
    margin-bottom: 14px;
  }

  .mobile-navPS {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    margin-bottom: 18px;
  }

  .mobile-title {
    font-size: 28px;
    line-height: 1;
    font-weight: 850;
    text-align: center;
    flex: 1;
  }

  .mobile-navPS-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .showcase-subtitle {
    font-size: 15px;
    margin-bottom: 10px;
    line-height:1.6;
    text-align:center;
  }

  .showcase-description {

    font-size: 14px;
    margin-bottom: 20px;
    line-height:1.6;
    text-align:center;
  }

  .showcase-mainContainer {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .stats-row {
    justify-content:center;
  align-items:center;
  
    gap: 10px;
    margin-bottom: 0;
  }

  .stat-card {
    padding: 14px 10px;
    border-radius: 16px;
    text-align: center;
  }

  .stat-value {
  
    font-size: 22px;
  }

  .stat-label {
  font-family:"Geist-SemiBold";
letter-spacing: 1px;
    font-size: 9px;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .benefit-item {
  margin-bottom:5px;
    font-size: 12px;
  }

  .audience-row {
    gap: 8px;
    margin-bottom: 20px;
  }

  .audience-pill {
    font-size: 10px;
    padding: 7px 11px;
  }

  .explore-btn {
    width: 100%;
    height: 52px;
    font-size: 14px;
  }

  .dashboard-shell {
    border-radius: 24px;
    padding: 14px;
  }

  .dashboard-title {
    font-size: 20px;
  }

  .dashboard-main-card {
    padding: 16px;
  }

  .dashboard-main-value {
    font-size: 32px;
  }

  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .dashboard-card {
    min-height: 90px;
    padding: 12px;
  }

  .dashboard-card-value {
    font-size: 16px;
  }
}


`}</style>
    </section>
  );
}