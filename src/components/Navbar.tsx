import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowRight,
  ChevronDown,
  GiftIcon,
} from "lucide-react";

export default function Navbar() {



  const location = useLocation();

  const pathname =
    location.pathname;

    const isPlatformActive =
  pathname.startsWith("/products") ||
  pathname.startsWith("/features");

const isToolsActive =
  pathname.startsWith("/tools");

const isResourcesActive =
  pathname.startsWith("/blog") ||
  pathname.startsWith("/gold-rates");

const isCompanyActive =
  pathname.startsWith("/about") ||
  pathname.startsWith("/contact") ||
  pathname.startsWith("/legal");

  const [openSection, setOpenSection] =
  useState<string | null>(null);



  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

    const toggleSection = (
  section: string
) => {
  setOpenSection(
    openSection === section
      ? null
      : section
  );
};

const handleNavigate = () => {
  setMenuOpen(false);
  setOpenSection(null);
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  



  return (
    <>
   
      <header className="navbar-wrap">
        
        <nav
          className={`navbar ${
            scrolled
              ? "navbar-scrolled"
              : ""
          }`}
        >
         
          {/* LOGO */}

          <Link
            to="/"
            className="nav-logo"
          >
            <div className="logo-box">
              <img
                src="/logo.png"
                alt="F1Code"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}

         <div className="nav-links">
  <Link
    to="/"
    className={
      pathname === "/"
        ? "active-link"
        : ""
    }
  >
    Home
  </Link>

  <div className="nav-item">
    <button
  className={`nav-trigger ${
    isPlatformActive
      ? "active-nav-item"
      : ""
  }`}
>
      Platform
      <ChevronDown size={16} />
    </button>

    <div className="platform-dropdown">

  <Link
    to="/products"
    className="platform-overview-card">
    <span className="platform-card-label">
      PRODUCTS
    </span>

    <h3>Products Overview</h3>

    <p>
      Explore investments, insurance,
      loans, tax planning and more.
    </p>

    <ArrowRight size={18} />
  </Link>

  <Link
    to="/features"
    className="platform-overview-card"
  >
    <span className="platform-card-label">
      FEATURES
    </span>

    <h3>Features Overview</h3>

    <p>
      Discover dashboard, AI insights,
      alerts and family access.
    </p>

    <ArrowRight size={18} />
  </Link>

</div>
  </div>

  <div className="nav-item">
    <button
  className={`nav-trigger ${
    isToolsActive
      ? "active-nav-item"
      : ""
  }`}
>
      Tools
      <ChevronDown size={16} />
    </button>

    <div className="grid-dropdown">
      <Link
        to="/tools/sip-calculator"
        className="grid-card"
      >
        SIP Calculator
      </Link>

      <Link
        to="/tools/fd-calculator"
        className="grid-card"
      >
        FD Calculator
      </Link>

      <Link
        to="/tools/ppf-calculator"
        className="grid-card"
      >
        PPF Calculator
      </Link>

      <Link
        to="/tools/loan-calculator"
        className="grid-card"
      >
        Loan Calculator
      </Link>

      <Link
        to="/Tools/net-worth"
        className="grid-card"
      >
        Net Worth
      </Link>

      <Link
        to="/Tools"
        className="grid-card"
      >
        View All
      </Link>
    </div>
  </div>

  <div className="nav-item">
    <button
  className={`nav-trigger ${
    isResourcesActive
      ? "active-nav-item"
      : ""
  }`}
>
      Resources
      <ChevronDown size={16} />
    </button>

    <div className="grid-dropdown">
      <Link
        to="/blog"
        className="grid-card"
      >
        Blogs
      </Link>

      <Link
        to="/gold-rates"
        className="grid-card"
      >
        Gold Rates
      </Link>

      <Link
  to="#"
  className="grid-card coming-soon-card"
>
  Credit Cards
  <span className="soon-dot" />
</Link>

<Link
  to="#"
  className="grid-card coming-soon-card"
>
  Lounges
  <span className="soon-dot" />
</Link>

<Link
  to="#"
  className="grid-card coming-soon-card"
>
  Guides
  <span className="soon-dot" />
</Link>
<div className="dropdown-footer">
  <span className="footer-dot" />
  Upcoming features
</div>

    </div>
    
  </div>

  <div className="nav-item">
    <button
  className={`nav-trigger ${
    isCompanyActive
      ? "active-nav-item"
      : ""
  }`}
>
      Company
      <ChevronDown size={16} />
    </button>

    <div className="company-dropdown">
      <Link
        to="/about"
        className="company-link"
      >
        About Us
      </Link>

      <Link
        to="/contact"
        className="company-link"
      >
        Contact Us
      </Link>

      <Link
        to="/legal"
        className="company-link"
      >
        Legal
      </Link>
    </div>
  </div>
</div>

<Link
  to="/refer-and-earn"
  className="refer-pill"
>
  <GiftIcon size={16} />
  Refer & Earn
</Link>

<div className="nav-actions">
  <button className="cta-btn">
    Login
    <ArrowRight size={16} />
  </button>
</div>




  

          {/* MOBILE MENU BUTTON */}

          <button
  className={`mobile-menu ${
    menuOpen
      ? "mobile-menu-open"
      : ""
  }`}
  onClick={() =>
    setMenuOpen(!menuOpen)
  }
>
  <span />
  <span />
</button>
        </nav>


{/* MOBILE NAV */}

<div
  className={`mobile-nav ${
    menuOpen
      ? "mobile-nav-open"
      : ""
  } lg:hidden`}
>
  <div className="mobile-grid">
    <div
  className={`mobile-nav-card ${
    openSection === "platform"
      ? "active expanded"
      : ""
  }`}
>
  <button
    className="mobile-nav-header"
    onClick={() =>
      toggleSection("platform")
    }
  >
    <div className="mobile-nav-content">
      <span>Platform</span>
      <small>2 sections</small>
    </div>

    <ChevronDown
      size={18}
      className={`mobile-chevron ${
        openSection === "platform"
          ? "rotated"
          : ""
      }`}
    />
  </button>

  {openSection === "platform" && (
    <div className="mobile-card-submenu">
      <Link
        to="/products"
        onClick={handleNavigate}
      >
        <span>Products Overview</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/features"
        onClick={handleNavigate}
      >
        <span>Features Overview</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )}
</div>

    <div
  className={`mobile-nav-card ${
    openSection === "tools"
      ? "active expanded"
      : ""
  }`}
>
  <button
    className="mobile-nav-header"
    onClick={() => toggleSection("tools")}
  >
    <div className="mobile-nav-content">
      <span>Tools</span>
      <small>6 sections</small>
    </div>

    <ChevronDown
      size={18}
      className={`mobile-chevron ${
        openSection === "tools"
          ? "rotated"
          : ""
      }`}
    />
  </button>

  {openSection === "tools" && (
    <div className="mobile-card-submenu">
      <Link
        to="/tools/"
        onClick={handleNavigate}
      >
        <span>All Calculator</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/tools/sip-calculator"
        onClick={handleNavigate}
      >
        <span>SIP Calculator</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/tools/ppf-calculator"
        onClick={handleNavigate}
      >
        <span>PPF Calculator</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/tools/fd-calculator"
        onClick={handleNavigate}
      >
        <span>FD Calculator</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/tools/net-worth-calculator"
        onClick={handleNavigate}
      >
        <span>Net Worth Calculator</span>
        <ArrowRight size={14} />
      </Link>
      <Link
        to="/tools//tools/sukanya-yojana"
        onClick={handleNavigate}
      >
        <span>Sukanya Samriddhi Calculator</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/tools/loan-calculator"
        onClick={handleNavigate}
      >
        <span>Loan Calculator</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )}
</div>

    <div
  className={`mobile-nav-card ${
    openSection === "resources"
      ? "active expanded"
      : ""
  }`}
>
  <button
    className="mobile-nav-header"
    onClick={() => toggleSection("resources")}
  >
    <div className="mobile-nav-content">
      <span>Resources</span>
      <small>Blogs & rates</small>
    </div>

    <ChevronDown
      size={18}
      className={`mobile-chevron ${
        openSection === "resources"
          ? "rotated"
          : ""
      }`}
    />
  </button>

  {openSection === "resources" && (
    <div className="mobile-card-submenu">
      <Link
        to="/blog"
        onClick={handleNavigate}
      >
        <span>Blog</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/gold-rates"
        onClick={handleNavigate}
      >
        <span>Gold Rates</span>
        <ArrowRight size={14} />
      </Link>

      
      <Link
        to="#"
        onClick={handleNavigate}
      >

  Credit Cards
  <span className="mobile-soon-badge">
    Soon
  </span>
        <ArrowRight size={14} />
      </Link>
      <Link
        to="#"
        onClick={handleNavigate}
      >

   Lounges
  <span className="mobile-soon-badge">
    Soon
  </span>
        <ArrowRight size={14} />
      </Link>
      <Link
        to="#"
        onClick={handleNavigate}
      >

   Guides
  <span className="mobile-soon-badge">
    Soon
  </span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )}
</div>

    <div
  className={`mobile-nav-card ${
    openSection === "company"
      ? "active expanded"
      : ""
  }`}
>
  <button
    className="mobile-nav-header"
    onClick={() => toggleSection("company")}
  >
    <div className="mobile-nav-content">
      <span>Company</span>
      <small>3 sections</small>
    </div>

    <ChevronDown
      size={18}
      className={`mobile-chevron ${
        openSection === "company"
          ? "rotated"
          : ""
      }`}
    />
  </button>

  {openSection === "company" && (
    <div className="mobile-card-submenu">
      <Link
        to="/about"
        onClick={handleNavigate}
      >
        <span>About Us</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/contact"
        onClick={handleNavigate}
      >
        <span>Contact Us</span>
        <ArrowRight size={14} />
      </Link>

      <Link
        to="/legal"
        onClick={handleNavigate}
      >
        <span>Legal</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )}
</div>

  </div>



  <div className="mobile-secondary">
  <Link
    to="/"
    className="mobile-secondary-link"
  onClick={handleNavigate}>
    Home
  </Link>

  <Link
    to="/refer-and-earn"
    className="mobile-secondary-link"
  onClick={handleNavigate}>
    <span><GiftIcon size={16} />
    Refer & Earn</span>
  </Link>
</div>

  <div className="mobile-actions">
    <button className="mobile-cta">
      Login
      <ArrowRight size={16} />
    </button>
  </div>
</div>
      </header>

      <style>{`
      
      .coming-soon-card{
  position:relative;
}

.soon-dot{
  position:absolute;
  top:10px;
  right:10px;

  width:8px;
  height:8px;

  border-radius:50%;

  background:
    var(--color-accent-lime);

  box-shadow:
    0 0 0 4px rgba(220,235,99,.18);
}

.dropdown-footer{
  grid-column:1/-1;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;

  margin-top:4px;
  padding-top:12px;

  border-top:
    1px solid rgba(11,59,54,.08);

  color:#667085;

  font-size:12px;
  font-weight:600;
}

.footer-dot{
  width:8px;
  height:8px;

  border-radius:50%;

  background:
    var(--color-accent-lime);

  box-shadow:
    0 0 0 4px rgba(220,235,99,.18);
}

      .navbar-wrap {
  position: fixed;
  top: 18px;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  width: calc(100% - 40px);
  max-width: 1180px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 24px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(11,59,54,.06);
  box-shadow: 0 10px 40px rgba(0,0,0,.05);
  transition: .3s ease;
}
  .mobile-overlay {
  position: fixed;

  inset: 0;

  background:
    rgba(0,0,0,.15);

  backdrop-filter:
    blur(10px);

  -webkit-backdrop-filter:
    blur(10px);

  z-index: 998;

  animation:
    fadeIn .2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.navbar-scrolled {
  background: rgba(255,255,255,.78);
  backdrop-filter: blur(28px);
}

.nav-logo {
  text-decoration: none;
  flex-shrink: 0;
}

.logo-box {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #08342f,
    #0b3b36
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-box img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.nav-links {
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
}

.nav-links > a {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 14px;
  text-decoration: none;
  color: rgba(17,17,17,.75);
  font-size: 15px;
  font-weight: 600;
  transition: .25s ease;
}

.nav-links > a:hover {
  background: rgba(11,59,54,.05);
}

.active-link,
.active-nav-item{
  position:relative;

  background:rgba(11,59,54,.08) !important ; 
  color:#0B3B36 !important;

}

.active-link::after,
.active-nav-item::after{
  content:"";

  position:absolute;

  left:50%;
  bottom:8px;

  width:22px;
  height:2.2px;

  border-radius:999px;

  background:
    var(--color-dark-green);

  transform:
    translateX(-50%);
}

.nav-item {
  position: relative;
}

.nav-trigger {
  height: 42px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;
  border: none;
  background: transparent;
  border-radius: 14px;
  color: rgba(17,17,17,.75);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: .25s ease;
}

.nav-trigger:hover {
  background: rgba(11,59,54,.05);
}

.nav-trigger svg {
  transition: .25s ease;
}

.nav-item:hover .nav-trigger svg {
  transform: rotate(180deg);
}




.platform-dropdown{
  position:absolute;
  top:calc(100% + 18px);
  left:50%;
  transform:translateX(-50%);

  width:560px;

  background:white;

  border-radius:28px;

  padding:20px;

  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;

  border:1px solid rgba(11,59,54,.08);

  box-shadow:
    0 30px 90px rgba(0,0,0,.08);

  opacity:0;
  visibility:hidden;

  transition:.25s ease;
}

.platform-overview-card{
  text-decoration:none;

  background:
    rgba(11,59,54,.025);

  border:
    1px solid rgba(11,59,54,.08);

  border-radius:22px;

  padding:24px;

  transition:.25s ease;

  display:flex;
  flex-direction:column;
}

.platform-overview-card:hover{
  transform:translateY(-3px);

  border-color:
    var(--color-accent-lime);

  background:white;
}

.platform-card-label{
  font-size:11px;
  font-weight:800;

  letter-spacing:.12em;

  text-transform:uppercase;

  color:#0B3B36;

  margin-bottom:14px;
}

.platform-overview-card h3{
  margin:0 0 10px;

  font-size:24px;
  font-weight:800;

  color:#111;
}

.platform-overview-card p{
  margin:0;

  color:#667085;

  line-height:1.7;

  flex:1;
}

.platform-overview-card svg{
  margin-top:20px;

  color:#0B3B36;
}

.nav-item:hover .platform-dropdown{
  opacity:1;
  visibility:visible;
}



.grid-dropdown {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  background: white;
  border-radius: 24px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;
  border: 1px solid rgba(11,59,54,.08);
  box-shadow: 0 30px 90px rgba(0,0,0,.08);
  opacity: 0;
  visibility: hidden;
  transition: .25s ease;
}

.nav-item:hover .grid-dropdown {
  opacity: 1;
  visibility: visible;
}

.grid-card {
  text-decoration: none;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 18px 12px;
  border-radius: 16px;
  background: rgba(11,59,54,.02);
  transition: .25s ease;
}

.grid-card:hover {
  background: rgba(11,59,54,.07);
}

.company-dropdown {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  background: white;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid rgba(11,59,54,.08);
  box-shadow: 0 30px 90px rgba(0,0,0,.08);
  opacity: 0;
  visibility: hidden;
  transition: .25s ease;
}

.nav-item:hover .company-dropdown {
  opacity: 1;
  visibility: visible;
}

.company-link {
  display: block;
  text-decoration: none;
  text-align:center;
  background: rgba(11,59,54,.02);
  color: #111;
  font-weight: 600;
  padding: 14px 16px;
  margin-bottom:10px;
  border-radius: 12px;
}

.company-link:hover {
  background: rgba(11,59,54,.05);
}

.refer-pill {
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  text-decoration: none;
  background: rgba(11,59,54,.06);
  color: #0B3B36;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition: .25s ease;
}

.refer-pill:hover {
  background: rgba(11,59,54,.12);
}

.nav-actions {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.cta-btn {
font-family:"Geist-Bold";
      letter-spacing:1px;
  height: 46px;
  padding: 0 18px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    #08342f,
    #0b3b36
  );
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

.mobile-nav {
  display: none;
}

.mobile-nav-open {
  display: flex;
  flex-direction: column;

  width: calc(100% - 24px);

  margin-top: 12px;

  padding: 16px;

  border-radius: 24px;

  background: white;

  box-shadow:
    0 20px 60px rgba(0,0,0,.08);

  max-height:
    calc(100vh - 150px);

  overflow-y: auto;

  overscroll-behavior:
    contain;
}

.mobile-grid {
  display: grid;

  grid-template-columns:
    repeat(2,1fr);

  gap: 10px;
}

.mobile-nav-card {
  min-height: 72px;

   display:flex;
  align-items:center;
  justify-content:space-around;

  background: white;

  border: 1px solid rgba(11,59,54,.08);

  border-radius: 18px;

  font-weight: 700;

  font-size: 15px;

  color: #111;

  box-shadow:
    0 4px 12px rgba(0,0,0,.03);
}

.mobile-chevron{
  transition:.25s ease;
  opacity:.65;
}

.mobile-chevron.rotated{
  transform:rotate(180deg);
}

.mobile-nav-card.active {

border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  background:#f8fafb;
  border-color:#d9e4e2;

  color:#0B3B36;
}

.mobile-nav-content{
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}

.mobile-nav-content small{

  font-size:11px;
  opacity:.6;
  margin-top:2px;
}
  .mobile-nav-card.expanded {
  display: block;
  grid-column: 1 / -1;
}

.mobile-nav-header{
  width:100%;
  background:none;
  border:none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding:16px;
}

    .mobile-submenu-label{
  grid-column:1/-1;
  

  margin-top:6px;

  padding-left:16px;
  border-left:2px solid #e5eceb;

  font-size:11px;

  font-weight:700;

  text-transform:uppercase;

  letter-spacing:.12em;

  color:#0B3B36;
}

.mobile-submenu {

  margin-top:-8px;
  border-top:1px solid rgba(0,0,0,.06);

  display: grid;

  grid-template-columns:
    repeat(2,1fr);

  gap: 8px;
}
  

.mobile-card-submenu a{
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:14px 16px;

   background: transparent;
  border: none;
  border-radius: 0;

  text-decoration:none;
  color:inherit;

  font-size:14px;
  font-weight:500;
}

.mobile-card-submenu a:not(:last-child) {
  border-bottom: 1px solid #ececec;
}

.mobile-soon-badge{
  flex-shrink:0;

  padding:4px 8px;
  margin-left:10px;

  border-radius:999px;

  background:
    rgba(220,235,99,.18);

  color:#0B3B36;

  font-size:10px;
  font-weight:800;

  text-transform:uppercase;

  letter-spacing:.04em;
}

.mobile-secondary {
  margin-top: 14px;

  padding-top: 14px;

  border-top:
    1px solid
    rgba(11,59,54,.08);

  display: flex;

  flex-direction: column;

  gap: 8px;
}

.mobile-secondary-link {
font-family:"Geist-SemiBold";
      letter-spacing:1px;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 56px;

  text-decoration: none;

  color: #111;

  font-size: 15px;

  font-weight: 700;

  border-radius: 16px;

  background: white;

  border: 1px solid rgba(11,59,54,.08);

  box-shadow:
    0 4px 12px rgba(0,0,0,.03);

  transition: .25s ease;
}
  .mobile-secondary-link span{
  display: inline-flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  }

.mobile-secondary-link:hover {
  background:
    rgba(11,59,54,.04);
}

@media (min-width: 992px) {
  .mobile-nav {
    display: none;
  }
}

@media (max-width: 768px) {
  .nav-links,
  .refer-pill,
  .nav-actions {
    display: none;
  }

   .mobile-menu{
    display:flex;

    position:relative;

    width:46px;
    height:46px;

    border:none;

    background:
      rgba(11,59,54,.06);

    border-radius:14px;

    align-items:center;
    justify-content:center;

    cursor:pointer;
  }

  .mobile-menu span{
    position:absolute;

    width:18px;
    height:2px;

    border-radius:999px;

    background:#0B3B36;

    transition:
      transform .25s ease,
      opacity .25s ease;
  }

  .mobile-menu span:first-child{
    transform:
      translateY(-4px);
  }

  .mobile-menu span:last-child{
    transform:
      translateY(4px);
  }

  .mobile-menu.mobile-menu-open
  span:first-child{
    transform:
      rotate(45deg);
  }

  .mobile-menu.mobile-menu-open
  span:last-child{
    transform:
      rotate(-45deg);
  }

  .mobile-nav {
    width: calc(100% - 24px);
    margin-top: 12px;
    padding: 18px;
    border-radius: 24px;
    background: white;
    flex-direction: column;
    gap: 6px;
    box-shadow: 0 20px 60px rgba(0,0,0,.08);
  }

  .mobile-nav a {
    text-decoration: none;
    color: #111;
    font-weight: 600;
    padding: 14px 16px;
    border-radius: 14px;
  }

  .mobile-nav a:hover {
    background: rgba(11,59,54,.05);
  }

  .mobile-actions {
    margin-top: 12px;
  }

  .mobile-cta {
  font-family:"Geist-Bold";
      letter-spacing:1px;
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      #08342f,
      #0b3b36
    );
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .navbar {
    width: calc(100% - 24px);
    height: 72px;
    padding: 0 18px;
  }

  .logo-box {
    width: 50px;
    height: 50px;
  }
}`}</style>
    </>
  );
}