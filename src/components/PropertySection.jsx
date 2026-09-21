import {
  ArrowUpRight,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";

import PropertyCard from "./PropertyCard.jsx";

function PropertySection({
  id,
  eyebrow,
  title,
  description,
  properties = [],
  linkText = "Explore properties",
  linkTo = "/buy",
  buttonText,
  buttonLink,
  variant = "",
}) {
  const finalLinkText =
    buttonText || linkText;

  const finalLinkTo =
    buttonLink || linkTo;

  return (
    <section
      id={id}
      className={`property-section ${variant}`}
    >
      <div className="container">
        {/* SECTION HEADING */}

        <div className="section-heading-row">
          <div className="section-heading">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />

              {eyebrow}
            </div>

            <h2>
              {title}
            </h2>

            {description && (
              <p>
                {description}
              </p>
            )}
          </div>

          <Link
            to={finalLinkTo}
            className="section-link"
          >
            <span>
              {finalLinkText}
            </span>

            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* PROPERTY GRID */}

        {properties.length > 0 ? (
          <div className="property-grid">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */

          <div className="empty-state">
            <div className="empty-state-icon">
              <Building2 size={28} />
            </div>

            <h3>
              No properties available yet
            </h3>

            <p>
              New listings will appear here
              after they are submitted and
              reviewed.
            </p>

            <Link
              to="/sell"
              className="primary-btn"
            >
              Post a Property

              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default PropertySection;