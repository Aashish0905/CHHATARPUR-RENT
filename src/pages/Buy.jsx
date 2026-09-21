import { useMemo, useState } from "react";

import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  Building2,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight,
} from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";

import PropertyCard from "../components/PropertyCard.jsx";

import {
  properties,
  propertyTypes,
  locations,
} from "../data/properties.js";

function Buy() {
  const [searchParams] = useSearchParams();

  const initialType =
    searchParams.get("type") || "All Properties";

  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] =
    useState(initialType);

  const [selectedLocation, setSelectedLocation] =
    useState("All Chhatarpur");

  const [sortBy, setSortBy] =
    useState("default");

  const [showFilters, setShowFilters] =
    useState(false);

  const saleProperties = useMemo(() => {
    return properties.filter(
      (property) =>
        property.listingType === "sale"
    );
  }, []);

  const filteredProperties = useMemo(() => {
    let result = saleProperties.filter(
      (property) => {
        const searchText =
          search.trim().toLowerCase();

        const searchMatch =
          !searchText ||
          property.title
            .toLowerCase()
            .includes(searchText) ||
          property.location
            .toLowerCase()
            .includes(searchText) ||
          property.type
            .toLowerCase()
            .includes(searchText);

        const typeMatch =
          selectedType === "All Properties" ||
          property.type === selectedType;

        const locationMatch =
          selectedLocation === "All Chhatarpur" ||
          property.location
            .toLowerCase()
            .startsWith(
              selectedLocation.toLowerCase()
            );

        return (
          searchMatch &&
          typeMatch &&
          locationMatch
        );
      }
    );

    if (sortBy === "low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [
    saleProperties,
    search,
    selectedType,
    selectedLocation,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedType("All Properties");
    setSelectedLocation("All Chhatarpur");
    setSortBy("default");
  };

  return (
    <main className="listing-page">
      {/* PAGE HERO */}

      <section className="listing-page-hero">
        <div className="container">
          <div className="listing-page-heading">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              PROPERTIES FOR SALE
            </span>

            <h1>
              Find a property
              <br />
              <span>to call your own.</span>
            </h1>

            <p>
              Browse houses, flats, villas, plots
              and commercial properties available
              for sale in Chhatarpur.
            </p>
          </div>

          {/* SEARCH */}

          <div className="listing-search-box">
            <div className="listing-search-icon">
              <Search size={19} />
            </div>

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search property, area or property type..."
              aria-label="Search properties"
            />

            <button
              type="button"
              className="filter-toggle-btn"
              onClick={() =>
                setShowFilters(
                  (current) => !current
                )
              }
            >
              <SlidersHorizontal size={18} />

              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* LISTING CONTENT */}

      <section className="listing-content-section">
        <div className="container">
          <div className="listing-layout">
            {/* FILTER SIDEBAR */}

            <aside
              className={`filter-sidebar ${
                showFilters
                  ? "filter-sidebar-open"
                  : ""
              }`}
            >
              <div className="filter-sidebar-header">
                <div>
                  <span>
                    FILTER PROPERTIES
                  </span>

                  <h2>Refine your search</h2>
                </div>

                <button
                  type="button"
                  className="filter-close-btn"
                  onClick={() =>
                    setShowFilters(false)
                  }
                  aria-label="Close filters"
                >
                  <X size={19} />
                </button>
              </div>

              {/* PROPERTY TYPE */}

              <div className="filter-group">
                <label>
                  Property Type
                </label>

                <select
                  value={selectedType}
                  onChange={(event) =>
                    setSelectedType(
                      event.target.value
                    )
                  }
                >
                  {propertyTypes.map(
                    (type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* LOCATION */}

              <div className="filter-group">
                <label>
                  Location
                </label>

                <div className="filter-select-wrap">
                  <MapPin size={16} />

                  <select
                    value={selectedLocation}
                    onChange={(event) =>
                      setSelectedLocation(
                        event.target.value
                      )
                    }
                  >
                    {locations.map(
                      (location) => (
                        <option
                          key={location}
                          value={location}
                        >
                          {location}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {/* SORT */}

              <div className="filter-group">
                <label>
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(
                      event.target.value
                    )
                  }
                >
                  <option value="default">
                    Recommended
                  </option>

                  <option value="low">
                    Price: Low to High
                  </option>

                  <option value="high">
                    Price: High to Low
                  </option>
                </select>
              </div>

              {/* RESET */}

              <button
                type="button"
                className="reset-filter-btn"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </aside>

            {/* MAIN RESULTS */}

            <div className="listing-results">
              <div className="listing-results-header">
                <div>
                  <span className="results-eyebrow">
                    CHHATARPUR
                  </span>

                  <h2>
                    Properties for sale
                  </h2>
                </div>

                <div className="results-count">
                  <strong>
                    {filteredProperties.length}
                  </strong>

                  <span>
                    properties found
                  </span>
                </div>
              </div>

              {/* ACTIVE FILTERS */}

              {(selectedType !==
                "All Properties" ||
                selectedLocation !==
                  "All Chhatarpur" ||
                search) && (
                <div className="active-filters">
                  {search && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearch("")
                      }
                    >
                      Search: {search}
                      <X size={13} />
                    </button>
                  )}

                  {selectedType !==
                    "All Properties" && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedType(
                          "All Properties"
                        )
                      }
                    >
                      {selectedType}
                      <X size={13} />
                    </button>
                  )}

                  {selectedLocation !==
                    "All Chhatarpur" && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedLocation(
                          "All Chhatarpur"
                        )
                      }
                    >
                      {selectedLocation}
                      <X size={13} />
                    </button>
                  )}

                  <button
                    type="button"
                    className="clear-all-btn"
                    onClick={resetFilters}
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* PROPERTY GRID */}

              {filteredProperties.length > 0 ? (
                <div className="property-grid listing-property-grid">
                  {filteredProperties.map(
                    (property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="listing-empty-state">
                  <div className="listing-empty-icon">
                    <Building2 size={30} />
                  </div>

                  <h3>
                    No properties found
                  </h3>

                  <p>
                    Try changing your search,
                    location or property type.
                  </p>

                  <button
                    type="button"
                    className="primary-btn"
                    onClick={resetFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* INFO CARD */}

              <div className="listing-info-card">
                <div className="listing-info-icon">
                  <ShieldIcon />
                </div>

                <div>
                  <strong>
                    Review before verification
                  </strong>

                  <p>
                    These listings are currently
                    demo examples. A real listing
                    should be published only after
                    the owner and property details
                    have gone through the actual
                    review process.
                  </p>
                </div>

                <Link to="/sell">
                  Post Property
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.5 16.2 19.3 12 21C7.8 19.3 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Buy;