import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* LEFT CONTENT */}

          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-icon">
                <ShieldCheck size={15} />
              </span>

              <span>Trusted Property Marketplace</span>

              <span className="eyebrow-dot" />

              <span>Chhatarpur, MP</span>
            </div>

            <h1>
              Find a place
              <br />
              you can <span>call home.</span>
            </h1>

            <p className="hero-description">
              Explore houses, flats, plots and commercial
              properties for rent, buy and sale across
              Chhatarpur. Property information is reviewed
              before verification is shown.
            </p>

            {/* SEARCH BOX */}

            <div className="property-search">
              <div className="search-tabs">
                <Link
                  to="/rent"
                  className="search-tab active"
                >
                  Rent
                </Link>

                <Link
                  to="/buy"
                  className="search-tab"
                >
                  Buy
                </Link>

                <Link
                  to="/sell"
                  className="search-tab"
                >
                  Sell
                </Link>
              </div>

              <div className="search-fields">
                {/* LOCATION */}

                <div className="search-field location-field">
                  <div className="search-field-icon">
                    <MapPin size={18} />
                  </div>

                  <div className="search-field-content">
                    <span>Location</span>

                    <strong>Chhatarpur</strong>
                  </div>
                </div>

                {/* PROPERTY TYPE */}

                <div className="search-field">
                  <div className="search-field-icon">
                    <Building2 size={18} />
                  </div>

                  <div className="search-field-content">
                    <span>Property Type</span>

                    <select
                      className="search-select"
                      defaultValue="all"
                    >
                      <option value="all">
                        All Properties
                      </option>

                      <option value="house">
                        House
                      </option>

                      <option value="flat">
                        Flat
                      </option>

                      <option value="villa">
                        Villa
                      </option>

                      <option value="plot">
                        Plot
                      </option>

                      <option value="commercial">
                        Commercial
                      </option>
                    </select>
                  </div>
                </div>

                {/* BUDGET */}

                <div className="search-field">
                  <div className="search-field-icon">
                    <span className="rupee-symbol">₹</span>
                  </div>

                  <div className="search-field-content">
                    <span>Budget</span>

                    <select
                      className="search-select"
                      defaultValue="any"
                    >
                      <option value="any">
                        Any Budget
                      </option>

                      <option value="10">
                        Under ₹10 Lakh
                      </option>

                      <option value="25">
                        Under ₹25 Lakh
                      </option>

                      <option value="50">
                        Under ₹50 Lakh
                      </option>

                      <option value="100">
                        Under ₹1 Crore
                      </option>
                    </select>
                  </div>
                </div>

                {/* SEARCH BUTTON */}

                <Link
                  to="/buy"
                  className="search-button"
                >
                  <Search size={19} />

                  <span>Search</span>
                </Link>
              </div>
            </div>

            {/* TRUST POINTS */}

            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle2 size={16} />

                <span>
                  Listing review before verification
                </span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <MapPin size={16} />

                <span>
                  Local Chhatarpur properties
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}

          <div className="hero-visual">
            <div className="hero-house-card">
              <div className="house-card-top">
                <div className="property-live">
                  <span />
                  Local Listing
                </div>

                <button
                  type="button"
                  className="visual-menu"
                  aria-label="Property options"
                >
                  •••
                </button>
              </div>

              <div className="house-illustration">
                <div className="sky">
                  <div className="cloud cloud-one" />
                  <div className="cloud cloud-two" />
                </div>

                <div className="tree tree-one">
                  <div className="tree-leaves" />
                  <div className="tree-trunk" />
                </div>

                <div className="tree tree-two">
                  <div className="tree-leaves" />
                  <div className="tree-trunk" />
                </div>

                <div className="house">
                  <div className="house-roof" />

                  <div className="house-body">
                    <div className="house-window window-one">
                      <span />
                      <span />
                    </div>

                    <div className="house-window window-two">
                      <span />
                      <span />
                    </div>

                    <div className="house-door">
                      <span className="door-handle" />
                    </div>

                    <div className="house-balcony" />
                  </div>
                </div>

                <div className="ground" />
              </div>

              <div className="house-card-info">
                <div>
                  <span className="property-type-label">
                    Chhatarpur Property
                  </span>

                  <strong>
                    Find your next home
                  </strong>
                </div>

                <div className="visual-icon">
                  <ArrowRight size={17} />
                </div>
              </div>
            </div>

            {/* FLOATING VERIFICATION CARD */}

            <div className="floating-card verification-card">
              <div className="floating-icon">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>Verification Process</strong>

                <span>Shown after review</span>
              </div>
            </div>

            {/* FLOATING LOCATION CARD */}

            <div className="floating-card location-card">
              <div className="floating-location-icon">
                <MapPin size={17} />
              </div>

              <div>
                <strong>Chhatarpur, MP</strong>

                <span>
                  Local property search
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}

        <div className="hero-bottom">
          <div className="hero-bottom-inner">
            <Link
              to="/buy"
              className="bottom-stat"
            >
              <strong>Buy</strong>

              <span>Find your property</span>

              <ArrowRight size={15} />
            </Link>

            <div className="bottom-stat-divider" />

            <Link
              to="/rent"
              className="bottom-stat"
            >
              <strong>Rent</strong>

              <span>
                Move into your next home
              </span>

              <ArrowRight size={15} />
            </Link>

            <div className="bottom-stat-divider" />

            <Link
              to="/sell"
              className="bottom-stat"
            >
              <strong>Sell</strong>

              <span>
                List your property
              </span>

              <ArrowRight size={15} />
            </Link>

            <div className="bottom-stat-divider" />

            <div className="bottom-stat highlight">
              <strong>Review First</strong>

              <span>
                Verification-focused marketplace
              </span>

              <ShieldCheck size={17} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;