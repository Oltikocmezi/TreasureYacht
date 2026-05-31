import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthAlert from "../../components/auth/AuthAlert";
import AuthButton from "../../components/auth/AuthButton";
import { useAuth } from "../../context/AuthContext";
import { getAuthErrorMessage } from "../../services/authService";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from || "/profile";

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(location.state?.resetSuccess || "");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess("");
    setSubmitting(true);

    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setMessage(getAuthErrorMessage(err, "Could not sign in. Please try again."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your member profile and exclusive content."
      footer={
        <p>
          New to Treasure Yacht?{" "}
          <Link to="/sign-up" className="font-semibold text-treasure no-underline hover:underline">
            Create an account
          </Link>
        </p>
      }
    >
      <AuthAlert type="success" message={success} />
      <AuthAlert message={message} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <AuthInput
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={form.password}
          onChange={handleChange}
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-xs font-semibold uppercase tracking-wider text-treasure no-underline hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <AuthButton disabled={submitting}>
          {submitting ? "Signing in..." : "Sign in"}
        </AuthButton>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
