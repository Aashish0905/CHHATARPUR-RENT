import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  MessageCircle,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

const dashboardProperties = [
  {
    id: 1,
    title: "Modern 2 BHK House",
    location: "Civil Lines, Chhatarpur",
    type: "House",
    listingType: "Rent",
    price: "₹12,000 / month",
    status: "Under Review",
    statusType: "review",
    views: 128,
    enquiries: 6,
  },
  {
    id: 2,
    title: "Premium 3 BHK Family Home",
    location:
      "Maharana Pratap Nagar, Chhatarpur",
    type: "House",
    listingType: "Sale",
    price: "₹52 Lakh",
    status: "Published",
    statusType: "published",
    views: 342,
    enquiries: 14,
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Sagar Road, Chhatarpur",
    type: "Plot",
    listingType: "Sale",
    price: "₹18 Lakh",
    status: "Action Required",
    statusType: "action",
    views: 74,
    enquiries: 2,
  },
];

function SellerDashboard() {
  return (
    <main className="dashboard-page">
      {/* HEADER */}

      <section className="dashboard-header">
        <div className="container">
          <div className="dashboard-header-inner">
            <div className="dashboard-heading">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                SELLER DASHBOARD
              </span>

              <h1>
                Manage your
                <br />
                <span>property listings.</span>
              </h1>

              <p>
                Track your listings, review status,
                views and enquiries from one place.
              </p>
            </div>

            <Link
              to="/sell"
              className="dashboard-post-btn"
            >
              <Plus size={18} />
              Post Property
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-stats-grid">
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-top">
                <div className="dashboard-stat-icon">
                  <Building2 size={20} />
                </div>

                <span className="dashboard-stat-label">
                  Total Listings
                </span>
              </div>

              <strong>3</strong>

              <span className="dashboard-stat-foot">
                Properties submitted
              </span>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-top">
                <div className="dashboard-stat-icon">
                  <Eye size={20} />
                </div>

                <span className="dashboard-stat-label">
                  Total Views
                </span>
              </div>

              <strong>544</strong>

              <span className="dashboard-stat-foot">
                Across your listings
              </span>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-top">
                <div className="dashboard-stat-icon">
                  <MessageCircle size={20} />
                </div>

                <span className="dashboard-stat-label">
                  Enquiries
                </span>
              </div>

              <strong>22</strong>

              <span className="dashboard-stat-foot">
                Interested users
              </span>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-top">
                <div className="dashboard-stat-icon">
                  <TrendingUp size={20} />
                </div>

                <span className="dashboard-stat-label">
                  Active Listings
                </span>
              </div>

              <strong>1</strong>

              <span className="dashboard-stat-foot">
                Currently published
              </span>
            </div>
          </div>

          {/* MAIN GRID */}

          <div className="dashboard-main-grid">
            {/* LISTINGS */}

            <section className="dashboard-listings-card">
              <div className="dashboard-section-heading">
                <div>
                  <span>
                    YOUR PROPERTIES
                  </span>

                  <h2>
                    Property listings
                  </h2>
                </div>

                <Link
                  to="/sell"
                  className="dashboard-add-link"
                >
                  <Plus size={16} />
                  Add property
                </Link>
              </div>

              <div className="dashboard-listing-list">
                {dashboardProperties.map(
                  (property) => (
                    <article
                      className="dashboard-property-item"
                      key={property.id}
                    >
                      <div className="dashboard-property-image">
                        <Building2 size={24} />
                      </div>

                      <div className="dashboard-property-info">
                        <div className="dashboard-property-title-row">
                          <div>
                            <span>
                              {property.type} ·{" "}
                              {property.listingType}
                            </span>

                            <h3>
                              {property.title}
                            </h3>
                          </div>

                          <button
                            type="button"
                            className="dashboard-more-btn"
                            aria-label={`More options for ${property.title}`}
                            onClick={() =>
                              alert(
                                "Property actions will be connected to the backend later."
                              )
                            }
                          >
                            <MoreHorizontal
                              size={18}
                            />
                          </button>
                        </div>

                        <div className="dashboard-property-location">
                          <span>
                            {property.location}
                          </span>

                          <strong>
                            {property.price}
                          </strong>
                        </div>

                        <div className="dashboard-property-bottom">
                          <div
                            className={`dashboard-status ${property.statusType}`}
                          >
                            {property.statusType ===
                            "published" ? (
                              <CheckCircle2
                                size={14}
                              />
                            ) : property.statusType ===
                              "review" ? (
                              <Clock3
                                size={14}
                              />
                            ) : (
                              <FileText
                                size={14}
                              />
                            )}

                            {property.status}
                          </div>

                          <div className="dashboard-property-metrics">
                            <span>
                              <Eye size={14} />
                              {property.views}
                            </span>

                            <span>
                              <MessageCircle
                                size={14}
                              />
                              {property.enquiries}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/property/${property.id}`}
                        className="dashboard-view-btn"
                        aria-label={`View ${property.title}`}
                      >
                        <ArrowUpRight
                          size={18}
                        />
                      </Link>
                    </article>
                  )
                )}
              </div>
            </section>

            {/* RIGHT SIDEBAR */}

            <aside className="dashboard-sidebar">
              {/* VERIFICATION */}

              <div className="dashboard-verification-card">
                <div className="dashboard-verification-icon">
                  <ShieldCheck size={22} />
                </div>

                <span>
                  LISTING REVIEW
                </span>

                <h2>
                  Keep your property
                  information accurate.
                </h2>

                <p>
                  A production marketplace should
                  review owner and property
                  information before showing a
                  verified status.
                </p>

                <div className="dashboard-review-steps">
                  <div>
                    <CheckCircle2
                      size={16}
                    />

                    <span>
                      Property details
                    </span>
                  </div>

                  <div>
                    <CheckCircle2
                      size={16}
                    />

                    <span>
                      Owner information
                    </span>
                  </div>

                  <div>
                    <Clock3 size={16} />

                    <span>
                      Admin review
                    </span>
                  </div>
                </div>
              </div>

              {/* PERFORMANCE */}

              <div className="dashboard-performance-card">
                <div className="dashboard-section-heading compact">
                  <div>
                    <span>
                      PERFORMANCE
                    </span>

                    <h2>
                      Listing activity
                    </h2>
                  </div>

                  <BarChart3 size={19} />
                </div>

                <div className="activity-chart">
                  <div className="chart-bars">
                    <span style={{ height: "38%" }} />
                    <span style={{ height: "54%" }} />
                    <span style={{ height: "44%" }} />
                    <span style={{ height: "68%" }} />
                    <span style={{ height: "61%" }} />
                    <span style={{ height: "82%" }} />
                    <span style={{ height: "74%" }} />
                  </div>

                  <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="activity-summary">
                  <div>
                    <span>
                      Weekly Views
                    </span>

                    <strong>
                      544
                    </strong>
                  </div>

                  <div>
                    <span>
                      Enquiries
                    </span>

                    <strong>
                      22
                    </strong>
                  </div>
                </div>
              </div>

              {/* DEMO NOTICE */}

              <div className="dashboard-demo-notice">
                <ShieldCheck size={17} />

                <p>
                  <strong>
                    Frontend Demo
                  </strong>{" "}
                  — dashboard numbers and listing
                  statuses are sample data. Real
                  seller data will come from the
                  backend.
                </p>
              </div>
            </aside>
          </div>

          {/* ENQUIRIES */}

          <section className="dashboard-enquiries-card">
            <div className="dashboard-section-heading">
              <div>
                <span>
                  RECENT ENQUIRIES
                </span>

                <h2>
                  People interested in your properties
                </h2>
              </div>

              <button
                type="button"
                className="dashboard-add-link"
                onClick={() =>
                  alert(
                    "Enquiry management will be connected to the backend later."
                  )
                }
              >
                View all
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="dashboard-enquiry-grid">
              <div className="dashboard-enquiry-item">
                <div className="enquiry-avatar">
                  A
                </div>

                <div>
                  <strong>
                    Property enquiry
                  </strong>

                  <span>
                    Interested in your 3 BHK home
                  </span>
                </div>

                <small>
                  Today
                </small>
              </div>

              <div className="dashboard-enquiry-item">
                <div className="enquiry-avatar">
                  R
                </div>

                <div>
                  <strong>
                    Rental enquiry
                  </strong>

                  <span>
                    Asked about monthly rent
                  </span>
                </div>

                <small>
                  Yesterday
                </small>
              </div>

              <div className="dashboard-enquiry-item">
                <div className="enquiry-avatar">
                  S
                </div>

                <div>
                  <strong>
                    Plot enquiry
                  </strong>

                  <span>
                    Requested more details
                  </span>
                </div>

                <small>
                  2 days ago
                </small>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default SellerDashboard;