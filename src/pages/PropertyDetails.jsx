import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Heart,
  MapPin,
  Maximize,
  MessageCircle,
  Phone,
  ShieldCheck,
  Share2,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { properties } from "../data/properties.js";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) {
    return (
      <main className="property-details-page">
        <section className="property-not-found">
          <div className="container">
            <div className="property-not-found-card">
              <div className="property-not-found-icon">
                <Building2 size={30} />
              </div>

              <span className="section-eyebrow">
                PROPERTY NOT FOUND
              </span>

              <h1>
                We couldn't find this property.
              </h1>

              <p>
                The property may have been removed,
                or the listing ID may not exist.
              </p>

              <Link
                to="/buy"
                className="primary-btn"
              >
                Browse Properties
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const isRent =
    property.listingType === "rent";

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in this property: ${property.title} - ${property.location}`
  );

  const relatedProperties = properties
    .filter(
      (item) =>
        item.id !== property.id &&
        item.listingType === property.listingType
    )
    .slice(0, 3);

  return (
    <main className="property-details-page">
      {/* TOP BAR */}

      <section className="property-details-topbar">
        <div className="container">
          <div className="details-topbar-inner">
            <Link
              to={
                isRent
                  ? "/rent"
                  : "/buy"
              }
              className="details-back-link"
            >
              <ArrowLeft size={17} />
              Back to properties
            </Link>

            <div className="details-top-actions">
              <button
                type="button"
                className="details-action-btn"
                onClick={() => {
                  if (
                    navigator.share
                  ) {
                    navigator.share({
                      title:
                        property.title,
                      text:
                        `Check out this property: ${property.title}`,
                      url:
                        window.location.href,
                    });
                  } else {
                    navigator.clipboard?.writeText(
                      window.location.href
                    );

                    alert(
                      "Property link copied."
                    );
                  }
                }}
              >
                <Share2 size={17} />
                Share
              </button>

              <button
                type="button"
                className="details-action-btn"
                onClick={() =>
                  alert(
                    "Favourite feature will be connected to the backend later."
                  )
                }
              >
                <Heart size={17} />
                Save
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY HERO */}

      <section className="property-details-hero">
        <div className="container">
          <div className="property-details-gallery">
            <div className="property-main-image">
              <img
                src={property.image}
                alt={`${property.title} in ${property.location}`}
              />

              <div className="property-image-gradient" />

              <div className="property-details-badges">
                <span className="demo-badge">
                  {property.status ||
                    "DEMO LISTING"}
                </span>

                <span className="listing-status-badge">
                  {isRent
                    ? "For Rent"
                    : "For Sale"}
                </span>
              </div>

              <div className="property-image-type">
                {property.type}
              </div>
            </div>

            <div className="property-gallery-side">
              <div className="gallery-placeholder">
                <Building2 size={25} />

                <span>
                  Additional photos
                  can be added later.
                </span>
              </div>

              <div className="gallery-placeholder small">
                <Maximize size={20} />

                <span>
                  Property media
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DETAILS */}

      <section className="property-details-content">
        <div className="container">
          <div className="property-details-layout">
            <div className="property-details-main">
              <div className="details-heading-block">
                <div className="details-heading-eyebrow">
                  <span className="section-eyebrow-dot" />

                  {property.type} in{" "}
                  {property.city}
                </div>

                <h1>
                  {property.title}
                </h1>

                <div className="details-location">
                  <MapPin size={17} />

                  <span>
                    {property.location}
                  </span>
                </div>
              </div>

              <div className="details-price-block">
                <div>
                  <span>
                    {isRent
                      ? "Monthly Rent"
                      : "Expected Price"}
                  </span>

                  <strong>
                    {property.priceLabel}
                  </strong>
                </div>

                <div className="details-price-note">
                  <ShieldCheck size={17} />

                  <span>
                    Review required before
                    verification
                  </span>
                </div>
              </div>

              {/* FEATURES */}

              <div className="details-features">
                {property.bedrooms && (
                  <div className="detail-feature">
                    <div className="detail-feature-icon">
                      <BedDouble
                        size={19}
                      />
                    </div>

                    <div>
                      <span>
                        Bedrooms
                      </span>

                      <strong>
                        {property.bedrooms}
                      </strong>
                    </div>
                  </div>
                )}

                {property.bathrooms && (
                  <div className="detail-feature">
                    <div className="detail-feature-icon">
                      <Bath size={19} />
                    </div>

                    <div>
                      <span>
                        Bathrooms
                      </span>

                      <strong>
                        {property.bathrooms}
                      </strong>
                    </div>
                  </div>
                )}

                <div className="detail-feature">
                  <div className="detail-feature-icon">
                    <Maximize
                      size={19}
                    />
                  </div>

                  <div>
                    <span>
                      Area
                    </span>

                    <strong>
                      {property.area}
                    </strong>
                  </div>
                </div>

                <div className="detail-feature">
                  <div className="detail-feature-icon">
                    <Building2
                      size={19}
                    />
                  </div>

                  <div>
                    <span>
                      Property Type
                    </span>

                    <strong>
                      {property.type}
                    </strong>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="details-section">
                <div className="details-section-heading">
                  <span>
                    ABOUT THIS PROPERTY
                  </span>

                  <h2>
                    Property description
                  </h2>
                </div>

                <p className="property-description">
                  {property.description ||
                    "Property description will be available after the owner provides complete listing information."}
                </p>
              </div>

              {/* LOCATION */}

              <div className="details-section">
                <div className="details-section-heading">
                  <span>
                    LOCATION
                  </span>

                  <h2>
                    Property location
                  </h2>
                </div>

                <div className="details-location-card">
                  <div className="details-location-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <strong>
                      {property.location}
                    </strong>

                    <p>
                      {property.city},{" "}
                      Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* VERIFICATION */}

              <div className="details-verification-card">
                <div className="details-verification-icon">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <span>
                    LISTING REVIEW
                  </span>

                  <h3>
                    Verification should
                    happen before trust badges.
                  </h3>

                  <p>
                    This listing is currently
                    marked as a demo listing.
                    A production version should
                    verify the owner and property
                    details through a secure
                    backend/admin review process
                    before showing a verified
                    status.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}

            <aside className="property-details-sidebar">
              <div className="contact-owner-card">
                <div className="contact-owner-heading">
                  <div>
                    <span>
                      INTERESTED?
                    </span>

                    <h2>
                      Contact the owner
                    </h2>
                  </div>

                  <div className="owner-avatar">
                    <UserIcon />
                  </div>
                </div>

                <p>
                  Contact details should be
                  shown only according to the
                  platform's privacy and
                  verification rules.
                </p>

                <div className="owner-contact-actions">
                  <a
                    href="tel:+919999999999"
                    className="owner-call-btn"
                  >
                    <Phone size={17} />
                    Call Owner
                  </a>

                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="owner-whatsapp-btn"
                  >
                    <MessageCircle
                      size={17}
                    />
                    WhatsApp
                  </a>
                </div>

                <div className="owner-contact-note">
                  <ShieldCheck
                    size={15}
                  />

                  <span>
                    Demo contact details —
                    replace with your real
                    production contact/backend
                    data.
                  </span>
                </div>
              </div>

              <div className="safety-card">
                <ShieldCheck size={20} />

                <div>
                  <strong>
                    Stay safe
                  </strong>

                  <p>
                    Never transfer money before
                    independently checking the
                    property, ownership documents
                    and agreement terms.
                  </p>
                </div>
              </div>

              <Link
                to="/sell"
                className="sidebar-list-property"
              >
                <div>
                  <span>
                    OWN A PROPERTY?
                  </span>

                  <strong>
                    List it on Chhatarpur Rent
                  </strong>
                </div>

                <ArrowUpRight
                  size={19}
                />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED PROPERTIES */}

      {relatedProperties.length > 0 && (
        <section className="related-properties-section">
          <div className="container">
            <div className="related-heading">
              <div>
                <span className="section-eyebrow">
                  <span className="section-eyebrow-dot" />
                  YOU MAY ALSO LIKE
                </span>

                <h2>
                  More properties
                </h2>
              </div>

              <Link
                to={
                  isRent
                    ? "/rent"
                    : "/buy"
                }
                className="section-link"
              >
                View all
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="related-grid">
              {relatedProperties.map(
                (item) => (
                  <Link
                    key={item.id}
                    to={`/property/${item.id}`}
                    className="related-property-card"
                  >
                    <div className="related-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />

                      <span>
                        {item.status ||
                          "DEMO LISTING"}
                      </span>
                    </div>

                    <div className="related-content">
                      <small>
                        {item.type}
                      </small>

                      <h3>
                        {item.title}
                      </h3>

                      <div>
                        <MapPin size={14} />

                        {item.location}
                      </div>

                      <strong>
                        {item.priceLabel}
                      </strong>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function UserIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M5.5 20C6.1 16.3 8.2 14.4 12 14.4C15.8 14.4 17.9 16.3 18.5 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default PropertyDetails;