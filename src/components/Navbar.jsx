import { useState } from "react";

import {
  Building2,
  Menu,
  X,
  Plus,
  ChevronDown,
} from "lucide-react";

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  const goToHomeSection = (section) => {
    closeMenu();

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-icon">
            <Building2
              size={21}
              strokeWidth={2.2}
            />
          </div>

          <div className="brand-text">
            <strong>CHHATARPUR</strong>
            <span>RENT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="desktop-nav">
          <NavLink
            to="/"
            end
            className={navClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/buy"
            className={navClass}
            onClick={closeMenu}
          >
            Properties
          </NavLink>

          <NavLink
            to="/buy"
            className={navClass}
            onClick={closeMenu}
          >
            Buy
          </NavLink>

          <NavLink
            to="/rent"
            className={navClass}
            onClick={closeMenu}
          >
            Rent
          </NavLink>

          <button
            type="button"
            className="nav-link nav-section-button"
            onClick={() =>
              goToHomeSection("how-it-works")
            }
          >
            How It Works
          </button>

          {/* More Dropdown */}

          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link dropdown-button"
            >
              More
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">
              <NavLink
                to="/buy?type=Commercial"
                onClick={closeMenu}
              >
                Commercial
              </NavLink>

              <NavLink
                to="/buy?type=Plot"
                onClick={closeMenu}
              >
                Plots & Land
              </NavLink>

              <button
                type="button"
                onClick={() =>
                  goToHomeSection("about")
                }
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() =>
                  goToHomeSection("contact")
                }
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Actions */}

        <div className="nav-actions">
          <Link
            to="/login"
            className="login-link"
            onClick={closeMenu}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="signup-link"
            onClick={closeMenu}
          >
            Sign Up
          </Link>

          <Link
            to="/sell"
            className="post-property-btn"
            onClick={closeMenu}
          >
            <Plus size={17} />
            Post Property
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >
        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/buy"
          onClick={closeMenu}
        >
          Properties
        </NavLink>

        <NavLink
          to="/buy"
          onClick={closeMenu}
        >
          Buy Property
        </NavLink>

        <NavLink
          to="/rent"
          onClick={closeMenu}
        >
          Rent Property
        </NavLink>

        <NavLink
          to="/buy?type=Commercial"
          onClick={closeMenu}
        >
          Commercial
        </NavLink>

        <NavLink
          to="/buy?type=Plot"
          onClick={closeMenu}
        >
          Plots & Land
        </NavLink>

        <button
          type="button"
          onClick={() =>
            goToHomeSection("how-it-works")
          }
        >
          How It Works
        </button>

        <button
          type="button"
          onClick={() =>
            goToHomeSection("about")
          }
        >
          About Us
        </button>

        <button
          type="button"
          onClick={() =>
            goToHomeSection("contact")
          }
        >
          Contact
        </button>

        {/* Mobile Actions */}

        <div className="mobile-nav-actions">
          <Link
            to="/login"
            onClick={closeMenu}
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={closeMenu}
          >
            Sign Up
          </Link>

          <Link
            to="/sell"
            className="mobile-post-btn"
            onClick={closeMenu}
          >
            <Plus size={17} />
            Post Property
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;