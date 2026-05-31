import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthAlert from "../../components/auth/AuthAlert";
import AuthButton from "../../components/auth/AuthButton";
import { completePasswordRecovery, getAuthErrorMessage } from "../../services/authService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") || "";
  const secret = searchParams.get("secret") || "";

  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const linkValid = Boolean(userId && secret);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!linkValid) {
      setError("Invalid reset link. Request a new one.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const data = await completePasswordRecovery({
        userId,
        secret,
        password: form.password,
      });
      navigate("/sign-in", {
        replace: true,
        state: { resetSuccess: data.message },
      });
    } catch (err) {
      setError(getAuthErrorMessage(err, "Could not reset password."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="New password"
      subtitle="Choose a strong password for your Treasure Yacht account."
      footer={
        !linkValid ? (
          <Link to="/forgot-password" className="font-semibold text-treasure no-underline hover:underline">
            Request a new reset link
          </Link>
        ) : null
      }
    >
      <AuthAlert message={error} />

      {linkValid && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="New password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={form.password}
            onChange={handleChange}
          />
          <AuthInput
            label="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <AuthButton disabled={submitting}>
            {submitting ? "Updating..." : "Update password"}
          </AuthButton>
        </form>
      )}
    </AuthLayout>
  );
};

export default ResetPassword;
