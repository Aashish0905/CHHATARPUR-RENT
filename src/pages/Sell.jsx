import { useMemo, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  MapPin,
  Phone,
  ShieldCheck,
  Upload,
  User,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

const propertyTypeOptions = [
  "House",
  "Flat",
  "Villa",
  "Plot",
  "Commercial",
];

const listingTypeOptions = [
  {
    value: "sale",
    label: "Sell Property",
  },
  {
    value: "rent",
    label: "Rent Property",
  },
];

const stepLabels = [
  "Property",
  "Location",
  "Owner",
  "Documents",
  "Review",
];

function Sell() {
  const [step, setStep] = useState(1);

  const [submitted, setSubmitted] =
    useState(false);

  const [otpVerified, setOtpVerified] =
    useState(false);

  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    listingType: "sale",
    propertyType: "House",
    title: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    address: "",
    locality: "",
    city: "Chhatarpur",
    ownerName: "",
    phone: "",
    email: "",
    ownership: "Owner",
  });

  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);

  const progress = useMemo(
    () => (step / stepLabels.length) * 100,
    [step]
  );

  const updateField = (
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleImages = (event) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const remainingSlots =
      6 - images.length;

    const filesToAdd =
      selectedFiles.slice(
        0,
        remainingSlots
      );

    const formattedFiles =
      filesToAdd.map((file) => ({
        id: `${file.name}-${file.lastModified}`,
        file,
        preview: URL.createObjectURL(file),
      }));

    setImages((current) => [
      ...current,
      ...formattedFiles,
    ]);

    event.target.value = "";
  };

  const removeImage = (id) => {
    setImages((current) => {
      const item = current.find(
        (image) => image.id === id
      );

      if (item?.preview) {
        URL.revokeObjectURL(
          item.preview
        );
      }

      return current.filter(
        (image) => image.id !== id
      );
    });
  };

  const handleDocuments = (event) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const formattedFiles =
      selectedFiles.map((file) => ({
        id: `${file.name}-${file.lastModified}`,
        file,
      }));

    setDocuments((current) => [
      ...current,
      ...formattedFiles,
    ]);

    event.target.value = "";
  };

  const removeDocument = (id) => {
    setDocuments((current) =>
      current.filter(
        (document) =>
          document.id !== id
      )
    );
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      if (
        !formData.title.trim() ||
        !formData.price ||
        !formData.area
      ) {
        alert(
          "Please enter property title, price and area."
        );

        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.address.trim() ||
        !formData.locality.trim()
      ) {
        alert(
          "Please enter property address and locality."
        );

        return false;
      }
    }

    if (step === 3) {
      const cleanPhone =
        formData.phone.replace(
          /\D/g,
          ""
        );

      if (
        !formData.ownerName.trim() ||
        cleanPhone.length !== 10
      ) {
        alert(
          "Please enter owner name and a valid 10-digit mobile number."
        );

        return false;
      }
    }

    if (step === 4) {
      if (!otpVerified) {
        alert(
          "Please complete the demo mobile OTP step first."
        );

        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      return;
    }

    setStep((current) =>
      Math.min(
        current + 1,
        stepLabels.length
      )
    );
  };

  const previousStep = () => {
    setStep((current) =>
      Math.max(current - 1, 1)
    );
  };

  const handleOtp = () => {
    const cleanOtp =
      otp.replace(/\D/g, "");

    if (cleanOtp.length !== 6) {
      alert(
        "Please enter a 6-digit OTP."
      );

      return;
    }

    // FRONTEND DEMO ONLY.
    // Any 6-digit OTP is accepted.
    setOtpVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateCurrentStep()) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="sell-page">
        <section className="sell-success-section">
          <div className="container">
            <div className="sell-success-card">
              <div className="sell-success-icon">
                <CheckCircle2
                  size={42}
                />
              </div>

              <span className="section-eyebrow">
                SUBMISSION RECEIVED
              </span>

              <h1>
                Your property is ready
                for review.
              </h1>

              <p>
                Your property information has
                been submitted in this frontend
                demo. In the production version,
                an admin/backend review process
                will be required before the
                listing is published.
              </p>

              <div className="submission-status">
                <div>
                  <span>
                    Submission Status
                  </span>

                  <strong>
                    Under Review
                  </strong>
                </div>

                <ShieldCheck
                  size={22}
                />
              </div>

              <div className="demo-notice">
                <strong>
                  Frontend Demo
                </strong>

                <span>
                  No real KYC, OTP or document
                  verification has been performed.
                </span>
              </div>

              <div className="sell-success-actions">
                <Link
                  to="/"
                  className="secondary-btn"
                >
                  Back to Home
                </Link>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={() =>
                    window.location.reload()
                  }
                >
                  Post Another Property
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="sell-page">
      {/* PAGE HEADER */}

      <section className="sell-header">
        <div className="container">
          <div className="sell-header-content">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              LIST YOUR PROPERTY
            </span>

            <h1>
              Put your property
              <br />
              <span>in front of the right people.</span>
            </h1>

            <p>
              Submit your property details and
              contact information. Listings can
              be published after the actual review
              and verification process.
            </p>
          </div>

          {/* PROGRESS */}

          <div className="sell-progress">
            <div className="sell-progress-top">
              <span>
                Step {step} of{" "}
                {stepLabels.length}
              </span>

              <span>
                {stepLabels[step - 1]}
              </span>
            </div>

            <div className="sell-progress-bar">
              <span
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="sell-step-labels">
              {stepLabels.map(
                (label, index) => {
                  const stepNumber =
                    index + 1;

                  const isActive =
                    stepNumber === step;

                  const isCompleted =
                    stepNumber < step;

                  return (
                    <div
                      key={label}
                      className={`sell-step-label ${
                        isActive
                          ? "active"
                          : ""
                      } ${
                        isCompleted
                          ? "completed"
                          : ""
                      }`}
                    >
                      <span>
                        {isCompleted ? (
                          <CheckCircle2
                            size={14}
                          />
                        ) : (
                          stepNumber
                        )}
                      </span>

                      <small>
                        {label}
                      </small>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="sell-form-section">
        <div className="container">
          <form
            className="sell-form-card"
            onSubmit={handleSubmit}
          >
            {/* STEP 1 */}

            {step === 1 && (
              <div className="sell-form-step">
                <div className="sell-form-heading">
                  <div className="sell-form-icon">
                    <Building2
                      size={22}
                    />
                  </div>

                  <div>
                    <span>
                      STEP 01
                    </span>

                    <h2>
                      Tell us about your property
                    </h2>

                    <p>
                      Add the basic information
                      buyers or tenants need.
                    </p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field full">
                    <label>
                      Listing Type
                    </label>

                    <div className="listing-type-options">
                      {listingTypeOptions.map(
                        (option) => (
                          <button
                            key={option.value}
                            type="button"
                            className={
                              formData.listingType ===
                              option.value
                                ? "selected"
                                : ""
                            }
                            onClick={() =>
                              updateField(
                                "listingType",
                                option.value
                              )
                            }
                          >
                            {option.label}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="propertyType">
                      Property Type
                    </label>

                    <select
                      id="propertyType"
                      value={
                        formData.propertyType
                      }
                      onChange={(event) =>
                        updateField(
                          "propertyType",
                          event.target.value
                        )
                      }
                    >
                      {propertyTypeOptions.map(
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

                  <div className="form-field">
                    <label htmlFor="propertyTitle">
                      Property Title
                    </label>

                    <input
                      id="propertyTitle"
                      type="text"
                      value={formData.title}
                      onChange={(event) =>
                        updateField(
                          "title",
                          event.target.value
                        )
                      }
                      placeholder="e.g. Modern 3 BHK Family Home"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="price">
                      {formData.listingType ===
                      "rent"
                        ? "Monthly Rent"
                        : "Expected Price"}
                    </label>

                    <input
                      id="price"
                      type="number"
                      min="0"
                      value={formData.price}
                      onChange={(event) =>
                        updateField(
                          "price",
                          event.target.value
                        )
                      }
                      placeholder="₹ Enter amount"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="area">
                      Area
                    </label>

                    <input
                      id="area"
                      type="text"
                      value={formData.area}
                      onChange={(event) =>
                        updateField(
                          "area",
                          event.target.value
                        )
                      }
                      placeholder="e.g. 1500 sq.ft."
                    />
                  </div>

                  {(formData.propertyType ===
                    "House" ||
                    formData.propertyType ===
                      "Flat" ||
                    formData.propertyType ===
                      "Villa") && (
                    <>
                      <div className="form-field">
                        <label htmlFor="bedrooms">
                          Bedrooms
                        </label>

                        <input
                          id="bedrooms"
                          type="number"
                          min="0"
                          value={
                            formData.bedrooms
                          }
                          onChange={(event) =>
                            updateField(
                              "bedrooms",
                              event.target.value
                            )
                          }
                          placeholder="e.g. 3"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="bathrooms">
                          Bathrooms
                        </label>

                        <input
                          id="bathrooms"
                          type="number"
                          min="0"
                          value={
                            formData.bathrooms
                          }
                          onChange={(event) =>
                            updateField(
                              "bathrooms",
                              event.target.value
                            )
                          }
                          placeholder="e.g. 2"
                        />
                      </div>
                    </>
                  )}

                  <div className="form-field full">
                    <label htmlFor="description">
                      Property Description
                    </label>

                    <textarea
                      id="description"
                      rows="5"
                      value={
                        formData.description
                      }
                      onChange={(event) =>
                        updateField(
                          "description",
                          event.target.value
                        )
                      }
                      placeholder="Describe the property, amenities, nearby landmarks and other useful details..."
                    />
                  </div>
                </div>

                {/* IMAGE UPLOAD */}

                <div className="upload-section">
                  <div className="upload-heading">
                    <div>
                      <strong>
                        Property Photos
                      </strong>

                      <span>
                        Add up to 6 clear photos.
                      </span>
                    </div>

                    <ImageIcon
                      size={20}
                    />
                  </div>

                  <div className="image-upload-grid">
                    {images.map(
                      (image) => (
                        <div
                          className="uploaded-image"
                          key={image.id}
                        >
                          <img
                            src={image.preview}
                            alt="Property preview"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              removeImage(
                                image.id
                              )
                            }
                            aria-label="Remove image"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      )
                    )}

                    {images.length < 6 && (
                      <label className="image-upload-box">
                        <Upload
                          size={23}
                        />

                        <span>
                          Add Photo
                        </span>

                        <small>
                          {images.length}/6
                        </small>

                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={
                            handleImages
                          }
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div className="sell-form-step">
                <div className="sell-form-heading">
                  <div className="sell-form-icon">
                    <MapPin
                      size={22}
                    />
                  </div>

                  <div>
                    <span>
                      STEP 02
                    </span>

                    <h2>
                      Where is the property?
                    </h2>

                    <p>
                      Add the location details
                      buyers and tenants can use.
                    </p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field full">
                    <label htmlFor="address">
                      Property Address
                    </label>

                    <textarea
                      id="address"
                      rows="3"
                      value={
                        formData.address
                      }
                      onChange={(event) =>
                        updateField(
                          "address",
                          event.target.value
                        )
                      }
                      placeholder="House number, street, landmark..."
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="locality">
                      Locality / Area
                    </label>

                    <input
                      id="locality"
                      type="text"
                      value={
                        formData.locality
                      }
                      onChange={(event) =>
                        updateField(
                          "locality",
                          event.target.value
                        )
                      }
                      placeholder="e.g. Civil Lines"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="city">
                      City
                    </label>

                    <input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(event) =>
                        updateField(
                          "city",
                          event.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <div className="location-notice">
                  <MapPin size={18} />

                  <div>
                    <strong>
                      Location privacy
                    </strong>

                    <p>
                      Do not enter sensitive
                      personal information in the
                      property address. Exact
                      location handling can be
                      controlled in the production
                      backend.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <div className="sell-form-step">
                <div className="sell-form-heading">
                  <div className="sell-form-icon">
                    <User size={22} />
                  </div>

                  <div>
                    <span>
                      STEP 03
                    </span>

                    <h2>
                      Owner information
                    </h2>

                    <p>
                      Add contact details so
                      interested users can reach you.
                    </p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="ownerName">
                      Owner Name
                    </label>

                    <input
                      id="ownerName"
                      type="text"
                      value={
                        formData.ownerName
                      }
                      onChange={(event) =>
                        updateField(
                          "ownerName",
                          event.target.value
                        )
                      }
                      placeholder="Full name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="ownership">
                      Listing By
                    </label>

                    <select
                      id="ownership"
                      value={
                        formData.ownership
                      }
                      onChange={(event) =>
                        updateField(
                          "ownership",
                          event.target.value
                        )
                      }
                    >
                      <option value="Owner">
                        Owner
                      </option>

                      <option value="Agent">
                        Agent / Broker
                      </option>

                      <option value="Family">
                        Family Member
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">
                      Mobile Number
                    </label>

                    <div className="input-with-icon">
                      <Phone
                        size={17}
                      />

                      <input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength="10"
                        value={
                          formData.phone
                        }
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">
                      Email
                      <span>
                        Optional
                      </span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={
                        formData.email
                      }
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="owner-trust-card">
                  <ShieldCheck
                    size={21}
                  />

                  <div>
                    <strong>
                      Mobile review step
                    </strong>

                    <p>
                      Continue to the demo OTP
                      step. Production OTP must
                      be handled securely by a
                      backend/SMS provider.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}

            {step === 4 && (
              <div className="sell-form-step">
                <div className="sell-form-heading">
                  <div className="sell-form-icon">
                    <FileText
                      size={22}
                    />
                  </div>

                  <div>
                    <span>
                      STEP 04
                    </span>

                    <h2>
                      Documents & review step
                    </h2>

                    <p>
                      Add supporting documents
                      for the future admin review
                      process.
                    </p>
                  </div>
                </div>

                {/* DEMO OTP */}

                <div className="otp-card">
                  <div className="otp-card-icon">
                    <Phone size={21} />
                  </div>

                  <div className="otp-card-content">
                    <strong>
                      Mobile OTP
                    </strong>

                    <p>
                      Demo mode: enter any
                      6-digit OTP to continue.
                    </p>

                    <div className="otp-input-row">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength="6"
                        value={otp}
                        onChange={(event) =>
                          setOtp(
                            event.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                        placeholder="6-digit OTP"
                      />

                      <button
                        type="button"
                        onClick={
                          handleOtp
                        }
                        disabled={
                          otpVerified
                        }
                      >
                        {otpVerified
                          ? "Completed"
                          : "Continue"}
                      </button>
                    </div>

                    {otpVerified && (
                      <div className="otp-success">
                        <CheckCircle2
                          size={16}
                        />

                        Owner mobile OTP step
                        completed (demo)
                      </div>
                    )}
                  </div>
                </div>

                {/* DOCUMENT UPLOAD */}

                <div className="document-upload-section">
                  <div className="upload-heading">
                    <div>
                      <strong>
                        Supporting Documents
                      </strong>

                      <span>
                        Upload only documents
                        required for the actual
                        review process.
                      </span>
                    </div>

                    <FileText
                      size={20}
                    />
                  </div>

                  <label className="document-upload-box">
                    <Upload
                      size={24}
                    />

                    <strong>
                      Upload Documents
                    </strong>

                    <span>
                      PDF, JPG or PNG
                    </span>

                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      onChange={
                        handleDocuments
                      }
                    />
                  </label>

                  {documents.length > 0 && (
                    <div className="document-list">
                      {documents.map(
                        (document) => (
                          <div
                            className="document-item"
                            key={document.id}
                          >
                            <FileText
                              size={18}
                            />

                            <span>
                              {
                                document.file
                                  .name
                              }
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                removeDocument(
                                  document.id
                                )
                              }
                              aria-label="Remove document"
                            >
                              <X
                                size={16}
                              />
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="kyc-warning">
                  <ShieldCheck
                    size={20}
                  />

                  <div>
                    <strong>
                      Privacy & KYC
                    </strong>

                    <p>
                      This frontend does not
                      perform real KYC. Never
                      enter or expose an Aadhaar
                      number here. Production KYC
                      should use an authorized
                      verification provider and
                      secure backend.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 */}

            {step === 5 && (
              <div className="sell-form-step">
                <div className="sell-form-heading">
                  <div className="sell-form-icon">
                    <CheckCircle2
                      size={22}
                    />
                  </div>

                  <div>
                    <span>
                      STEP 05
                    </span>

                    <h2>
                      Review your submission
                    </h2>

                    <p>
                      Check the information before
                      sending it for review.
                    </p>
                  </div>
                </div>

                <div className="review-grid">
                  <div className="review-card">
                    <span>
                      Listing
                    </span>

                    <strong>
                      {formData.listingType ===
                      "rent"
                        ? "For Rent"
                        : "For Sale"}
                    </strong>

                    <p>
                      {formData.propertyType}
                    </p>
                  </div>

                  <div className="review-card">
                    <span>
                      Property
                    </span>

                    <strong>
                      {formData.title ||
                        "Not provided"}
                    </strong>

                    <p>
                      {formData.area ||
                        "Area not provided"}
                    </p>
                  </div>

                  <div className="review-card">
                    <span>
                      Price
                    </span>

                    <strong>
                      {formData.price
                        ? `₹${Number(
                            formData.price
                          ).toLocaleString(
                            "en-IN"
                          )}`
                        : "Not provided"}
                    </strong>

                    <p>
                      {formData.listingType ===
                      "rent"
                        ? "Monthly rent"
                        : "Expected price"}
                    </p>
                  </div>

                  <div className="review-card">
                    <span>
                      Location
                    </span>

                    <strong>
                      {formData.locality ||
                        "Not provided"}
                    </strong>

                    <p>
                      {formData.city}
                    </p>
                  </div>

                  <div className="review-card">
                    <span>
                      Owner
                    </span>

                    <strong>
                      {formData.ownerName ||
                        "Not provided"}
                    </strong>

                    <p>
                      {formData.phone ||
                        "Mobile not provided"}
                    </p>
                  </div>

                  <div className="review-card">
                    <span>
                      Photos
                    </span>

                    <strong>
                      {images.length}
                    </strong>

                    <p>
                      Property images added
                    </p>
                  </div>
                </div>

                <div className="submission-checklist">
                  <div>
                    <CheckCircle2
                      size={18}
                    />

                    <span>
                      Property details completed
                    </span>
                  </div>

                  <div>
                    <CheckCircle2
                      size={18}
                    />

                    <span>
                      Location details completed
                    </span>
                  </div>

                  <div>
                    <CheckCircle2
                      size={18}
                    />

                    <span>
                      Owner mobile OTP demo completed
                    </span>
                  </div>

                  <div>
                    <CheckCircle2
                      size={18}
                    />

                    <span>
                      Ready for review
                    </span>
                  </div>
                </div>

                <div className="final-review-notice">
                  <ShieldCheck
                    size={21}
                  />

                  <div>
                    <strong>
                      Before you submit
                    </strong>

                    <p>
                      By submitting, you are
                      sending this information for
                      review. The current frontend
                      demo does not create a real
                      marketplace listing or perform
                      real verification.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* FORM NAVIGATION */}

            <div className="sell-form-navigation">
              {step > 1 ? (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={previousStep}
                >
                  <ArrowLeft
                    size={17}
                  />

                  Back
                </button>
              ) : (
                <Link
                  to="/"
                  className="secondary-btn"
                >
                  <ArrowLeft
                    size={17}
                  />

                  Cancel
                </Link>
              )}

              {step <
              stepLabels.length ? (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={nextStep}
                >
                  Continue

                  <ArrowRight
                    size={17}
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  className="primary-btn"
                >
                  Submit for Review

                  <CheckCircle2
                    size={17}
                  />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Sell;