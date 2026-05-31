import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthAlert from "../../components/auth/AuthAlert";
import AuthButton from "../../components/auth/AuthButton";
import { useAuth } from "../../context/AuthContext";
import { getAuthErrorMessage } from "../../services/authService";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (form.password !== form.confirmPassword) {
      setFieldErrors({ confirmPassword: "Passwords do not match." });
      return;
    }

    setSubmitting(true);

    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      navigate("/profile", { replace: true });
    } catch (err) {
      setMessage(getAuthErrorMessage(err, "Could not create account. Please try again."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Join the club"
      subtitle="Create your member account to unlock profiles, events, and yacht experiences."
      footer={
        <p>
          Already a member?{" "}
          <Link to="/sign-in" className="font-semibold text-treasure no-underline hover:underline">
            Sign in
          </Link>
        </p>
      }
    >
      <AuthAlert message={message} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <AuthInput
            label="First name"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={fieldErrors.firstName}
          />
          <AuthInput
            label="Last name"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            error={fieldErrors.lastName}
          />
        </div>
        <AuthInput
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          error={fieldErrors.email}
        />
        <AuthInput
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          value={form.password}
          onChange={handleChange}
          error={fieldErrors.password}
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
          error={fieldErrors.confirmPassword}
        />

        <AuthButton disabled={submitting} className="mt-2">
          {submitting ? "Creating account..." : "Create account"}
        </AuthButton>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
