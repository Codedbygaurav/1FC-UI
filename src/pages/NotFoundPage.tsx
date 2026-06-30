import { ArrowRight, Layout, LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function NotFoundPage() {
  return (
    <section className="NotFound">

  <div className="NotFoundGrid" />

  <div className="NotFoundContainer">

    <div className="NotFoundContent">

      <span className="hero-label">
        404 Error
      </span>

      <h1 className="hero-title">
        Looks like this page
        <span> went missing.</span>
      </h1>

      <p className="hero-subtext">
        The page you're looking for may have been moved,
        renamed, or is no longer available.
        Let's get you back on track.
      </p>

      <div className="hero-actions">

        <a href="/" className="btn-primary">
          Back to Home<ArrowRight/>
        </a>

        <a href="/resources" className="btn-secondary">
          <LayoutDashboard/> Explore Resources
        </a>

      </div>

    </div>

    <div className="NotFoundCard">

      <div className="status-pill">
        System Status
      </div>

      <div className="error-code">
        404
      </div>

      <div className="error-title">
        Missing Asset
      </div>

      <div className="status-bar" />

      <div className="quick-links">

        <div className="quick-item">
          ✓ Investments
        </div>

        <div className="quick-item">
          ✓ Insurance
        </div>

        <div className="quick-item">
          ✓ Tax Planning
        </div>

        <div className="quick-item">
          ✓ Estate Planning
        </div>

      </div>

    </div>

  </div>

  <style>
    {`
    .NotFound{
  position:relative;
  overflow:hidden;
  min-height:100vh;
  display:flex;
  align-items:center;
  padding:140px 20px 80px;
  background:var(--color-bg-ivory);
}

.NotFoundGrid{
  position:absolute;
  inset:0;
  opacity:.35;

  background-image:
    linear-gradient(
      rgba(11,59,54,.05) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(11,59,54,.05) 1px,
      transparent 1px
    );

  background-size:56px 56px;
}

.NotFoundContainer{
  position:relative;
  z-index:2;

  width:100%;
  max-width:1280px;
  margin:auto;

  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:70px;
  align-items:center;
}



.NotFoundCard{
  background:var(--color-dark-green);
  border-radius:32px;
  padding:32px;
  color:white;
  margin-bottom:30px;
  box-shadow:
    0 30px 70px rgba(11,59,54,.18);
}

.status-pill{
font-family:"Geist-SemiBold";
letter-spacing:1px;
  display:inline-flex;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(220,235,99,.12);
  color:var(--color-accent-lime);
  font-weight:700;
}

.error-code{
font-family:"Geist-Bold";
letter-spacing:1px;
  margin-top:22px;
  font-size:90px;
  font-weight:900;
  line-height:1;
  color:var(--color-accent-lime);
}

.error-title{
  margin-top:10px;
  font-size:22px;
  font-weight:600;
}

.status-bar{
  height:6px;
  border-radius:999px;
  margin:24px 0;
  background:var(--color-accent-lime);
}

.quick-links{
  display:grid;
  gap:12px;
}

.quick-item{
  padding:14px 16px;
  border-radius:14px;
  background:rgba(255,255,255,.08);
}

@media (max-width:1024px){

  .NotFound{
    padding:10px 20px 0;
  }

  .NotFoundContainer{
    grid-template-columns:1fr;
    gap:40px;
  }

  .NotFoundContent{
    text-align:center;
  }

  .hero-subtext{
    margin-inline:auto;
  }

  .hero-title{
    font-size:48px;
  }



  

  .error-code{
    font-size:70px;
  }

}

@media(max-width:768px){

  .NotFound{
    padding:170px 20px 0px;
  }

  .NotFoundContent h1{
    font-size:48px;
  }

  .error-code{
    font-size:70px;
  }

  .NotFoundActions{
    flex-direction:column;
  }

  

}
    `}
  </style>

</section>
  )
}
