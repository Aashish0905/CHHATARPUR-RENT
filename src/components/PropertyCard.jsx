import { useState } from "react";

import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in this property: ${property.title} - ${property.location}`
  );

  const isRent = property.listingType === "rent";

  return (
    <article className="property-card">
      {/* PROPERTY IMAGE */}

      <div className="property-image-wrap">
        {!imageLoaded && (
          <div className="property-image-placeholder">
            <ImageIcon size={28} />
          </div>
        )}

        <img
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          className={`property-image ${
            imageLoaded ? "loaded" : ""
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        <div className="property-image-overlay" />

        {/* BADGES */}

        <div className="property-card-badges">
          <span className="demo-badge">
            {property.status || "DEMO LISTING"}
          </span>

          <span className="listing-status-badge">
            {isRent ? "For Rent" : "For Sale"}
          </span>
        </div>

        {/* FAVOURITE */}

        <button
          type="button"
          className={`favorite-btn ${
            liked ? "liked" : ""
          }`}
          onClick={() =>
            setLiked((current) => !current)
          }
          aria-label={
            liked
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={liked}
        >
          <Heart
            size={18}
            strokeWidth={2}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* PROPERTY TYPE */}

        <div className="property-type-pill">
          {property.type}
        </div>
      </div>

      {/* PROPERTY CONTENT */}

      <div className="property-card-content">
        {/* TYPE + AREA */}

        <div className="property-card-top">
          <span className="property-type">
            {property.type}
          </span>

          <span className="property-area">
            {property.area}
          </span>
        </div>

        {/* TITLE */}

        <Link
          to={`/property/${property.id}`}
          className="property-title"
        >
          {property.title}
        </Link>

        {/* LOCATION */}

        <div className="property-location">
          <MapPin size={15} />

          <span>
            {property.location}
          </span>
        </div>

        {/* FEATURES */}

        <div className="property-features">
          {property.bedrooms && (
            <span>
              <BedDouble size={15} />
              {property.bedrooms} Beds
            </span>
          )}

          {property.bathrooms && (
            <span>
              <Bath size={15} />
              {property.bathrooms} Bath
            </span>
          )}

          <span>
            <Maximize size={14} />
            {property.area}
          </span>
        </div>

        {/* PRICE */}

        <div className="property-card-bottom">
          <div className="property-price">
            <small>
              {isRent
                ? "Monthly Rent"
                : "Expected Price"}
            </small>

            <strong>
              {property.priceLabel}
            </strong>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="property-arrow"
            aria-label={`View ${property.title}`}
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* TRUST NOTE */}

        <div className="property-trust-note">
          <ShieldCheck size={14} />

          <span>
            Listing review required
          </span>
        </div>

        {/* CONTACT BUTTONS */}

        <div className="property-actions">
          <a
            href="tel:+919074755317"
            className="property-call-btn"
            aria-label={`Call about ${property.title}`}
          >
            <Phone size={15} />

            <span>
              Call
            </span>
          </a>

          <a
            href={`https://wa.me/919074755317?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="property-whatsapp-btn"
            aria-label={`WhatsApp about ${property.title}`}
          >
            <MessageCircle size={15} />

            <span>
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;