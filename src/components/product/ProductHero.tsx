"use client";

import {
  ArrowRight,
  Activity,
  Shield,
  Wallet,
  Landmark,
  Sparkles,
  Users,
  LayoutDashboard,
  Brain,
  Boxes,
  ShieldCheck,
} from "lucide-react";

export default function ProductHero() {
  const pills = [
    { icon: ShieldCheck, text: "SEBI-aligned" },
    { icon: Sparkles, text: "AI-powered insights" },
    { icon: LayoutDashboard, text: "Unified dashboard" },
    { icon: Users, text: "Family-first access" },
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Users" },
    { icon: Wallet, value: "₹250Cr+", label: "Assets Tracked" },
    { icon: ShieldCheck, value: "99.9%", label: "Platform Uptime" },
  ];

  return (
    <section className="ph-product-hero">
      <div className="ph-hero-grid" />

      <div className="ph-product-hero-container">
        <div className="ph-hero-left">
          <div className="hero-label">
            <LayoutDashboard size={14} />
            Unified Financial Operating System
          </div>

          <h1 className="hero-title">
            One platform.
            <br />
            Every financial
            <br />
            workflow <span>connected.</span>
          </h1>

          <p className="hero-subtext">
            Investments, insurance, taxes, loans and planning — managed through
            one intelligent operating system built for modern Indian families.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Explore Products
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              <LayoutDashboard size={18} />
              View Dashboard
            </button>
          </div>
          <div className="ph-hero-pills">
            {pills.map((pill) => (
              <div key={pill.text} className="tag-pill">
                <pill.icon size={14} />
                {pill.text}
              </div>
            ))}
          </div>
        </div>

        <div className="ph-hero-right">
          <div className="ph-dashboard-card">
            <div className="ph-dashboard-top">
              <span className="ph-dashboard-heading">
                <LayoutDashboard size={16} />
                Unified Dashboard
              </span>
              <p className="ph-health-text">Portfolio Health • 92%</p>

              <div className="ph-live-pill">
                <span />
                <p>Live</p>
              </div>
            </div>

            <div className="ph-dashboard-value">₹12.4Cr</div>

            <div className="ph-dashboard-bar" />

            <div className="ph-modules-grid">
              {[
                { icon: Activity, label: "Investments", value: "₹48.3L" },
                { icon: Shield, label: "Insurance", value: "12 Policies" },
                { icon: Landmark, label: "Tax Saving", value: "80C Active" },
              ].map((item) => (
                <div key={item.label} className="ph-module-card">
                  <div className="ph-module-icon">
                    <item.icon size={15} />
                  </div>
                  <p>{item.label}</p>
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="ph-hero-mascot">
            <img src="/ProductHero.png" alt="1FC Mascot" />
          </div>
        </div>
      </div>

      <style>{`.ph-product-hero {
  position: relative;
  overflow: hidden;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 170px 20px 80px;
  background: linear-gradient(180deg, #f7f7f2 0%, #f4f4ee 100%);
}

.ph-hero-grid {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(11, 59, 54, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 59, 54, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
}
  .ph-health-text{
  margin-top:8px;
  font-size:9px;
  color:#666;
}
  .ph-hero-pills{
  display:flex;
  flex-wrap:wrap;
  width:1000px;
  gap:6px;
  margin-bottom:28px;
}

.ph-product-hero-container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns:1.15fr .85fr;
  gap: 64px;
  align-items: center;
}

.ph-hero-title {
  font-size: clamp(46px, 5vw, 68px);
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: -0.06em;
  margin: 18px 0;
}
  .ph-hero-left{
  max-width:640px;
}

.ph-hero-title span {
  font-family: "Geist-Bold", serif;
  font-style: italic;
  color: var(--color-dark-green);
  font-weight: 400;
}

.ph-hero-subtext {
  max-width: 540px;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 24px;
  color: #5d5d5d;
}

.ph-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}




.ph-hero-right {
  position: relative;
  
  display: flex;
  justify-content: center;
}

.ph-dashboard-card {
  position: relative;
  margin-top: 0;
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background:var(--color-dark-green);
        border-radius:28px;
        padding:28px;
        color:white;
        box-shadow:
        0 24px 70px rgba(11,59,54,.18);
     z-index:2;
}


.ph-dashboard-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--color-accent-lime)
}

.ph-dashboard-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}
  .ph-dashboard-top p{
  color: var(--color-bg-ivory);
  }

.ph-hero-right{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.ph-hero-mascot{
  position:absolute;
  right:-170px;
  bottom:110px;

  width:300px;
  height:300px;
  pointer-events:none;
  z-index:3;

  
}

.ph-hero-mascot img{
  width:100%;
  height:auto;
  display:block;
}

.ph-live-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(214, 230, 74, 0.12);
}

.ph-live-pill span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #EAE26A;
}
  .ph-live-pill p{
        font-size:11px;
  }

.ph-dashboard-value {
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 900;
  color: #EAE26A;
  margin-bottom: 14px;
}

.ph-dashboard-bar {
  height: 6px;
  background: #EAE26A;
  border-radius: 999px;
  margin-bottom: 18px;
}

.ph-modules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.ph-module-card {
 
  background:rgba(255,255,255,.08);
        border-radius:16px;
        padding:16px;
}

.ph-module-card:hover {
  transform: translateY(-2px);
}

.ph-module-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(214, 230, 74, 0.14);
  margin-bottom: 10px;
}

.ph-module-card p {
  font-size: 12px;
  color: #666;
}

.ph-module-card h4 {
  font-size: 15px;
  font-weight: 900;
}

.ph-floating-card {
  position: absolute;
  padding: 16px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 5;
}

.ph-top-card {
  top: 90px;
  left: -60px;
  width: 180px;
}

.ph-top-card h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}

.ph-top-card p {
  margin: 0;
  font-size: 13px;
  color: #666;
}

@media (max-width: 1100px) {

  .ph-product-hero {
    min-height: auto;
    padding: 145px 28px 85px;
  }

  .ph-product-hero-container {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .ph-hero-left {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .ph-hero-title {
    font-size: clamp(56px, 7vw, 68px);
  }

  .ph-hero-subtext {
    max-width: 680px;
    margin-inline: auto;
    font-size: 17px;
    line-height: 1.8;
  }

  .ph-hero-actions {
    justify-content: center;
  }

  .ph-hero-pills {
    width: auto;
    justify-content: center;
    gap: 8px;
  }

  .ph-hero-right {
    order: 2;
  }

  .ph-dashboard-card {
    max-width: 560px;
  }

  .ph-hero-mascot {
    right: -15px;
    bottom: 220px;
  }
}

@media (max-width: 768px) {

  .ph-product-hero {
    padding: 130px 20px 64px;
  }

  .ph-product-hero-container {
    gap: 40px;
  }

  .ph-hero-left {
    text-align: center;
    max-width: 100%;
  }

  

  .ph-hero-title {
    font-size: 46px;
    line-height: 0.95;
    margin: 18px 0;
  }

  .ph-hero-subtext {
    font-size: 15px;
    line-height: 1.8;
    max-width: 100%;
  }

  .ph-hero-actions {
    flex-direction: column;
    gap: 12px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .ph-hero-pills {
    justify-content: center;
    gap: 8px;
  }

  .tag-pill {
    font-size: 11px;
  }

  .ph-dashboard-card {
    width: 100%;
    max-width: 100%;
    padding: 22px;
    border-radius: 24px;
  }

  .ph-dashboard-top {
    gap: 10px;
    flex-wrap: wrap;
  }

  .ph-dashboard-value {
    font-size: 42px;
  }

  .ph-modules-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .ph-module-card {
    padding: 12px;
  }

  .ph-module-card h4 {
    font-size: 14px;
  }

  .ph-hero-mascot {
    display: none;
  }
}

@media (max-width: 480px) {

  .ph-product-hero {
    padding: 130px 16px 56px;
  }

  .ph-hero-title {
    font-size: 38px;
  }

  .ph-hero-subtext {
    font-size: 14px;
  }

  

  .ph-hero-pills {
    gap: 6px;
  }

  .tag-pill {
    font-size: 10px;
    padding: 7px 10px;
  }

  .ph-dashboard-card {
    padding: 18px;
    border-radius: 20px;
  }

  .ph-dashboard-heading {
    font-size: 13px;
  }

  .ph-live-pill p {
    font-size: 10px;
  }

  .ph-dashboard-value {
    font-size: 34px;
  }

  .ph-modules-grid {
    grid-template-columns: 1fr 1fr;
  }

  .ph-module-icon {
    width: 30px;
    height: 30px;
  }

  .ph-module-card p {
    font-size: 11px;
  }

  .ph-module-card h4 {
    font-size: 13px;
  }
}

@media (max-width: 360px) {

  .ph-product-hero {
    padding: 130px 12px 48px;
  }

  .ph-hero-title {
    font-size: 35px;
  }

  .ph-hero-subtext {
    font-size: 13px;
  }

  .tag-pill {
    font-size: 9px;
  }

  .ph-dashboard-card {
    padding: 14px;
  }

  .ph-dashboard-value {
    font-size: 28px;
  }

  .ph-module-card h4 {
    font-size: 12px;
  }
}`}</style>
    </section>
  );
}
