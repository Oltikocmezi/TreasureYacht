import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthAlert from "../../components/auth/AuthAlert";
import AuthButton from "../../components/auth/AuthButton";
import { getAuthErrorMessage, requestPasswordRecovery } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      const data = await requestPasswordRecovery(email);
      setMessage(data.message);
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter your email and we'll send you a secure link to choose a new password."
      footer={
        <Link to="/sign-in" className="font-semibold text-treasure no-underline hover:underline">
          ← Back to sign in
        </Link>
      }
    >
      <AuthAlert type="success" message={message} />
      <AuthAlert message={error} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthButton disabled={submitting}>
          {submitting ? "Sending..." : "Send reset link"}
        </AuthButton>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
