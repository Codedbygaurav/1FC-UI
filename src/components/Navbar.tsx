import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowRight,
  X,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const pathname =
    location.pathname;

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

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

  const navItems = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Products",
      href: "/products",
    },

    {
      label: "Tools",
      href: "/tools",
    },

    {
      label: "Features",
      href: "/Features",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

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
            {navItems.map((item) => {
              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={
                    isActive
                      ? "active-link"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}

          <div className="nav-actions">
            <button className="login-btn">
              Log In
            </button>

            <button className="cta-btn">
              <span>
                Get Started
              </span>

              <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu"
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <>
                <span />
                <span />
              </>
            )}
          </button>
        </nav>

        {/* MOBILE NAV */}

        <div
          className={`mobile-nav ${
            menuOpen
              ? "mobile-nav-open"
              : ""
          }`}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={
                  isActive
                    ? "mobile-active"
                    : ""
                }
                onClick={() =>
                  setMenuOpen(
                    false
                  )
                }
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mobile-actions">
            <button className="mobile-login">
              Log In
            </button>

            <button className="mobile-cta">
              <span>
                Get Started
              </span>

              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <style>{`
        .navbar-wrap {
          position: fixed;

          top: 18px;

          left: 0;

          width: 100%;

          z-index: 1000;

          display: flex;
          flex-direction: column;
          align-items: center;

          pointer-events: none;
        }

        .navbar {
          position: relative;

          width: calc(100% - 40px);

          max-width: 1180px;

          height: 82px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 26px;

          border-radius: 28px;

          background: rgba(
            255,
            255,
            255,
            0.92
          );

          border: 1px solid
            rgba(
              11,
              59,
              54,
              0.04
            );

          transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            backdrop-filter 0.35s ease,
            border 0.35s ease,
            transform 0.3s ease;

          overflow: hidden;

          pointer-events: auto;
        }

        .navbar-scrolled {
          background: rgba(
            255,
            255,
            255,
            0.72
          );

          backdrop-filter: blur(18px);

          border: 1px solid
            rgba(
              11,
              59,
              54,
              0.06
            );

          box-shadow:
            0 10px 34px
              rgba(
                0,
                0,
                0,
                0.04
              ),
            inset 0 1px 0
              rgba(
                255,
                255,
                255,
                0.7
              );
        }

       


        .nav-logo {
          text-decoration: none;

          position: relative;

          z-index: 2;
        }

        .logo-box {
          width: 60px;
          height: 60px;
          overflow:hidden;
          border-radius: 18px;

          background: linear-gradient(
            135deg,
            #08342f,
            #0b3b36
          );

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow:
            0 10px 24px
              rgba(
                11,
                59,
                54,
                0.16
              );

          transition:
            transform 0.3s ease;
        }

        .logo-box:hover {
          transform: translateY(-2px);
        }

        .logo-box img {
          width: 58px;
          height: 58px;

          object-fit: contain;
        }

        /* NAV LINKS */

        .nav-links {
          position: absolute;

          left: 45%;
          transform: translateX(-50%);

          display: flex;
          align-items: center;

          gap: 14px;
        }

        .nav-links a {
          position: relative;

          text-decoration: none;

          padding: 12px 18px;

          border-radius: 14px;

          font-size: 15px;

          font-weight: 600;

          letter-spacing: -0.02em;

          color: rgba(
            17,
            17,
            17,
            0.68
          );

          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          background: rgba(
            11,
            59,
            54,
            0.05
          );

          color: #111;
        }

        /* ACTIVE */

        .nav-links a.active-link {
          background: rgba(
            11,
            59,
            54,
            0.08
          );

          color: #0b3b36;

          font-weight: 700;
        }

        .nav-links a.active-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 6px;

          transform: translateX(-50%);

          width: 18px;
          height: 2px;

          border-radius: 999px;

          background: #0b3b36;
        }

        /* ACTIONS */

        .nav-actions {
          display: flex;
          align-items: center;

          gap: 14px;
        }

        .login-btn {
          border: none;

          background: transparent;

          font-size: 15px;

          font-weight: 600;

          color: rgba(
            17,
            17,
            17,
            0.72
          );

          cursor: pointer;

          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .login-btn:hover {
          transform: translateY(-1px);

          color: #111;
        }

        .cta-btn {
          height: 54px;

          padding: 0 24px;

          border: none;

          border-radius: 18px;

          background: linear-gradient(
            135deg,
            #08342f,
            #0b3b36
          );

          color: white;

          display: flex;
          align-items: center;

          gap: 10px;

          font-size: 15px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 12px 24px
              rgba(
                11,
                59,
                54,
                0.18
              );

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 16px 34px
              rgba(
                11,
                59,
                54,
                0.24
              );
        }

        /* MOBILE BUTTON */

        .mobile-menu {
          display: none;

          width: 46px;
          height: 46px;

          border-radius: 14px;

          border: 1px solid
            rgba(
              11,
              59,
              54,
              0.08
            );

          background: rgba(
            255,
            255,
            255,
            0.7
          );

          align-items: center;
          justify-content: center;

          flex-direction: column;

          gap: 5px;

          cursor: pointer;
        }

        .mobile-menu span {
          width: 18px;
          height: 2px;

          border-radius: 999px;

          background: #0b3b36;
        }

        /* MOBILE NAV */

        .mobile-nav {
          width: calc(100% - 32px);

          margin-top: 12px;

          padding: 18px;

          border-radius: 24px;

          background: rgba(
            255,
            255,
            255,
            0.82
          );

          border: 1px solid
            rgba(
              11,
              59,
              54,
              0.06
            );

          box-shadow:
            0 14px 40px
              rgba(
                0,
                0,
                0,
                0.05
              );

          backdrop-filter: blur(18px);

          display: none;

          flex-direction: column;

          gap: 10px;

          pointer-events: auto;
        }

        .mobile-nav-open {
          display: flex;
        }

        .mobile-nav a {
          text-decoration: none;

          padding: 14px 16px;

          border-radius: 14px;

          font-size: 15px;

          font-weight: 600;

          color: rgba(
            17,
            17,
            17,
            0.72
          );

          transition: all 0.3s ease;
        }

        .mobile-nav a.mobile-active {
          background: rgba(
            11,
            59,
            54,
            0.08
          );

          color: #0b3b36;
        }

        /* MOBILE ACTIONS */

        .mobile-actions {
          display: flex;
          flex-direction: column;

          gap: 12px;

          margin-top: 12px;
        }

        .mobile-login,
        .mobile-cta {
          height: 52px;

          border: none;

          border-radius: 16px;

          font-size: 15px;

          font-weight: 700;

          cursor: pointer;
        }

        .mobile-login {
          background: rgba(
            11,
            59,
            54,
            0.05
          );

          color: #0b3b36;
        }

        .mobile-cta {
          background: linear-gradient(
            135deg,
            #08342f,
            #0b3b36
          );

          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;
        }

        /* TABLET */

        @media (max-width: 980px) {
          .nav-links {
            gap: 8px;
          }

          .navbar {
            height: 76px;
          }

          .nav-links a {
            padding: 10px 14px;

            font-size: 14px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .navbar-wrap {
            top: 14px;
          }

          .navbar {
            width: calc(100% - 24px);

            height: 72px;

            padding: 0 18px;

            border-radius: 22px;
          }

          .nav-links,
          .nav-actions {
            display: none;
          }

          .mobile-menu {
            display: flex;
          }

          .logo-box {
            width: 50px;
            height: 50px;

            border-radius: 15px;
          }

          .logo-box img {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>
    </>
  );
}