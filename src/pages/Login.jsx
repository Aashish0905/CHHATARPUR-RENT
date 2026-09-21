import { useState } from "react";

import {
  ArrowRight,
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email.trim()) {
      setError(
        "Please enter your email address."
      );

      return;
    }

    if (!formData.password) {
      setError(
        "Please enter your password."
      );

      return;
    }

    /*
      FRONTEND DEMO ONLY.

      No real authentication is performed here.
      Production login should use a secure backend,
      hashed passwords, sessions/JWT and proper
      server-side validation.
    */

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-layout">
            {/* LEFT SIDE */}

            <div className="auth-intro">
              <div className="auth-brand-mark">
                <Building2 size={25} />
              </div>

              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                CHHATARPUR RENT
              </span>

              <h1>
                Welcome
                <br />
                <span>back.</span>
              </h1>

              <p>
                Login to manage your property
                listings, enquiries and seller
                dashboard.
              </p>

              <div className="auth-trust-list">
                <div className="auth-trust-item">
                  <div>
                    <ShieldCheck
                      size={18}
                    />
                  </div>

                  <span>
                    Secure account experience
                  </span>
                </div>

                <div className="auth-trust-item">
                  <div>
                    <Building2 size={18} />
                  </div>

                  <span>
                    Manage your property listings
                  </span>
                </div>

                <div className="auth-trust-item">
                  <div>
                    <ArrowRight
                      size={18}
                    />
                  </div>

                  <span>
                    Connect with property enquiries
                  </span>
                </div>
              </div>
            </div>

            {/* LOGIN CARD */}

            <div className="auth-card">
              <div className="auth-card-header">
                <div className="auth-mobile-logo">
                  <Building2 size={20} />
                </div>

                <span>
                  ACCOUNT LOGIN
                </span>

                <h2>
                  Login to your account
                </h2>

                <p>
                  Enter your details to continue.
                </p>
              </div>

              <form
                className="auth-form"
                onSubmit={handleSubmit}
              >
                <div className="auth-field">
                  <label htmlFor="loginEmail">
                    Email Address
                  </label>

                  <div className="auth-input-wrap">
                    <Mail size={17} />

                    <input
                      id="loginEmail"
                      type="email"
                      autoComplete="email"
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

                <div className="auth-field">
                  <div className="auth-label-row">
                    <label htmlFor="loginPassword">
                      Password
                    </label>

                    <button
                      type="button"
                      className="forgot-password-btn"
                      onClick={() =>
                        alert(
                          "Password reset will be connected to the backend later."
                        )
                      }
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="auth-input-wrap">
                    <LockKeyhole
                      size={17}
                    />

                    <input
                      id="loginPassword"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="current-password"
                      value={
                        formData.password
                      }
                      onChange={(event) =>
                        updateField(
                          "password",
                          event.target.value
                        )
                      }
                      placeholder="Enter your password"
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

                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="auth-submit-btn"
                >
                  Login

                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="auth-demo-note">
                <ShieldCheck size={16} />

                <span>
                  Frontend demo: authentication
                  will be connected to the secure
                  backend later.
                </span>
              </div>

              <div className="auth-divider">
                <span />
                <small>
                  NEW TO CHHATARPUR RENT?
                </small>
                <span />
              </div>

              <Link
                to="/signup"
                className="auth-create-account"
              >
                Create an account
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

export default Login;