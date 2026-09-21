import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PropertySection from "./components/PropertySection.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Buy from "./pages/Buy.jsx";
import Rent from "./pages/Rent.jsx";
import Sell from "./pages/Sell.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";

// Data
import { properties } from "./data/properties.js";

function Home() {
  const featuredProperties = properties.slice(0, 4);

  const rentProperties = properties.filter(
    (item) => item.listingType === "rent"
  );

  const saleProperties = properties.filter(
    (item) => item.listingType === "sale"
  );

  const plotProperties = properties.filter(
    (item) => item.type === "Plot"
  );

  const commercialProperties = properties.filter(
    (item) => item.type === "Commercial"
  );

  return (
    <>
      <Hero />

      <PropertySection
        id="properties"
        eyebrow="FEATURED PROPERTIES"
        title="Properties worth exploring."
        description="Explore sample property listings. Verification status will be shown only after the actual review process is completed."
        buttonText="View All Properties"
        buttonLink="/buy"
        properties={featuredProperties}
      />

      <PropertySection
        id="rent"
        eyebrow="FOR RENT"
        title="Find your next rental."
        description="Explore houses and flats available for rent across Chhatarpur."
        buttonText="View Rental Properties"
        buttonLink="/rent"
        properties={rentProperties}
      />

      <PropertySection
        id="buy"
        eyebrow="FOR SALE"
        title="Properties available to buy."
        description="Browse houses, villas and plots listed for sale."
        buttonText="View Properties for Sale"
        buttonLink="/buy"
        properties={saleProperties}
      />

      <PropertySection
        id="plots"
        eyebrow="PLOTS & LAND"
        title="Find the right piece of land."
        description="Explore residential plot listings across Chhatarpur."
        buttonText="View Plots"
        buttonLink="/buy?type=Plot"
        properties={plotProperties}
      />

      <PropertySection
        id="commercial"
        eyebrow="COMMERCIAL"
        title="Spaces for your business."
        description="Explore commercial property listings for your next business move."
        buttonText="View Commercial"
        buttonLink="/buy?type=Commercial"
        properties={commercialProperties}
      />

      <section id="how-it-works" className="how-section">
        <div className="container">
          <span className="section-eyebrow">
            HOW IT WORKS
          </span>

          <h2>Simple & Secure Property Listing</h2>

          <div className="how-grid">
            <div className="how-card">
              <h3>1. Post Property</h3>
              <p>
                Owner submits property details, photos and contact information.
              </p>
            </div>

            <div className="how-card">
              <h3>2. Verification Review</h3>
              <p>
                Documents and property details are reviewed before approval.
              </p>
            </div>

            <div className="how-card">
              <h3>3. Listing Approved</h3>
              <p>
                After the review is completed, the listing can become visible with its review status.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-home-section">
        <div className="container">
          <span className="section-eyebrow">
            ABOUT CHHATARPUR RENT
          </span>

          <h2>Trusted Local Property Marketplace</h2>

          <p>
            CHHATARPUR RENT is being built to help buyers,
            renters and property owners connect through a
            transparent property marketplace focused on
            Chhatarpur, Madhya Pradesh.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-home-section">
        <div className="container">
          <span className="section-eyebrow">
            CONTACT
          </span>

          <h2>Looking for a Property?</h2>

          <p>
            Browse available listings or post your own
            property for review and verification.
          </p>

          <div className="contact-home-buttons">
            <a
              href="/buy"
              className="primary-btn"
            >
              Browse Properties
            </a>

            <a
              href="/sell"
              className="secondary-btn"
            >
              Post Property
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/buy"
          element={<Buy />}
        />

        <Route
          path="/rent"
          element={<Rent />}
        />

        <Route
          path="/sell"
          element={<Sell />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<SellerDashboard />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;