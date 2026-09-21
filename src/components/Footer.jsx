import {
  Building2,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* FOOTER TOP */}

        <div className="footer-top">
          {/* BRAND */}

          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo"
            >
              <span className="footer-logo-icon">
                <Building2 size={21} />
              </span>

              <span className="footer-logo-text">
                <strong>CHHATARPUR</strong>
                <span>RENT</span>
              </span>
            </Link>

            <p>
              A local property marketplace built
              to help people discover, rent, buy
              and list properties across
              Chhatarpur, Madhya Pradesh.
            </p>

            <div className="footer-socials">
              <a
                href="#"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>

              <a
                href="https://wa.me/919074755317"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* PROPERTY */}

          <div className="footer-column">
            <h3>Property</h3>

            <Link to="/buy">
              Buy Property
            </Link>

            <Link to="/rent">
              Rent Property
            </Link>

            <Link to="/sell">
              Sell Property
            </Link>

            <Link to="/buy?type=Plot">
              Plots & Land
            </Link>

            <Link to="/buy?type=Commercial">
              Commercial
            </Link>
          </div>

          {/* COMPANY */}

          <div className="footer-column">
            <h3>Company</h3>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              How It Works
            </button>

            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Create Account
            </Link>

            <Link to="/dashboard">
              Seller Dashboard
            </Link>
          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href="tel:+919074755317">
              <Phone size={16} />

              <span>
                +91 90747 55317
              </span>
            </a>

            <a href="mailto:hello@chhatarpurrent.com">
              <Mail size={16} />

              <span>
                hello@chhatarpurrent.com
              </span>
            </a>

            <div className="footer-contact-item">
              <MapPin size={16} />

              <span>
                Chhatarpur, Madhya Pradesh, India
              </span>
            </div>

            <Link
              to="/sell"
              className="footer-post-btn"
            >
              Post Your Property

              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <p>
            © {currentYear} Chhatarpur Rent.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Use
            </a>

            <a href="#">
              Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;