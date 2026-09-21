import { useState } from "react";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const updateField = (
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanPhone =
      formData.phone.replace(
        /\D/g,
        ""
      );

    if (!formData.name.trim()) {
      setError(
        "Please enter your full name."
      );

      return;
    }

    if (!formData.email.trim()) {
      setError(
        "Please enter your email address."
      );

      return;
    }

    if (cleanPhone.length !== 10) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );

      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );

      return;
    }

    /*
      FRONTEND DEMO ONLY.

      No real account is created here.
      Production signup should use a secure
      backend, password hashing, email/mobile
      verification and server-side validation.
    */

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-layout signup-layout">
            {/* LEFT SIDE */}

            <div className="auth-intro">
              <div className="auth-brand-mark">
                <Building2 size={25} />
              </div>

              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                JOIN CHHATARPUR RENT
              </span>

              <h1>
                Build your
                <br />
                <span>property profile.</span>
              </h1>

              <p>
                Create your account to list
                properties, manage enquiries and
                access your seller dashboard.
              </p>

              <div className="auth-benefits">
                <div className="auth-benefit">
                  <div className="auth-benefit-icon">
                    <CheckCircle2
                      size={18}
                    />
                  </div>

                  <div>
                    <strong>
                      List your property
                    </strong>

                    <span>
                      Submit houses, flats,
                      plots and commercial spaces.
                    </span>
                  </div>
                </div>

                <div className="auth-benefit">
                  <div className="auth-benefit-icon">
                    <ShieldCheck
                      size={18}
                    />
                  </div>

                  <div>
                    <strong>
                      Review-focused marketplace
                    </strong>

                    <span>
                      Listings can go through an
                      admin review process.
                    </span>
                  </div>
                </div>

                <div className="auth-benefit">
                  <div className="auth-benefit-icon">
                    <Phone size={18} />
                  </div>

                  <div>
                    <strong>
                      Manage enquiries
                    </strong>

                    <span>
                      Keep property enquiries
                      organised in one place.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIGNUP CARD */}

            <div className="auth-card signup-card">
              <div className="auth-card-header">
                <div className="auth-mobile-logo">
                  <Building2 size={20} />
                </div>

                <span>
                  CREATE ACCOUNT
                </span>

                <h2>
                  Get started
                </h2>

                <p>
                  Create your Chhatarpur Rent
                  account in a few steps.
                </p>
              </div>

              <form
                className="auth-form"
                onSubmit={handleSubmit}
              >
                <div className="auth-field">
                  <label htmlFor="signupName">
                    Full Name
                  </label>

                  <div className="auth-input-wrap">
                    <User size={17} />

                    <input
                      id="signupName"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label htmlFor="signupEmail">
                    Email Address
                  </label>

                  <div className="auth-input-wrap">
                    <Mail size={17} />

                    <input
                      id="signupEmail"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
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

                <div className="auth-field">
                  <label htmlFor="signupPhone">
                    Mobile Number
                  </label>

                  <div className="auth-input-wrap">
                    <Phone size={17} />

                    <input
                      id="signupPhone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength="10"
                      value={formData.phone}
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

                <div className="auth-field">
                  <label htmlFor="signupPassword">
                    Password
                  </label>

                  <div className="auth-input-wrap">
                    <LockKeyhole
                      size={17}
                    />

                    <input
                      id="signupPassword"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="new-password"
                      value={
                        formData.password
                      }
                      onChange={(event) =>
                        updateField(
                          "password",
                          event.target.value
                        )
                      }
                      placeholder="Minimum 6 characters"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(
                          (current) =>
                            !current
                        )
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="auth-field">
                  <label htmlFor="confirmPassword">
                    Confirm Password
                  </label>

                  <div className="auth-input-wrap">
                    <LockKeyhole
                      size={17}
                    />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="new-password"
                      value={
                        formData.confirmPassword
                      }
                      onChange={(event) =>
                        updateField(
                          "confirmPassword",
                          event.target.value
                        )
                      }
                      placeholder="Re-enter your password"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(
                          (current) =>
                            !current
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="auth-submit-btn"
                >
                  Create Account

                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="auth-demo-note">
                <ShieldCheck size={16} />

                <span>
                  Frontend demo: account creation,
                  OTP and authentication will be
                  connected to the secure backend
                  later.
                </span>
              </div>

              <div className="auth-divider">
                <span />
                <small>
                  ALREADY HAVE AN ACCOUNT?
                </small>
                <span />
              </div>

              <Link
                to="/login"
                className="auth-create-account"
              >
                Login to your account
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/"
                className="auth-home-link"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;