import React, { useEffect, useState } from "react";
import AuthAlert from "../components/auth/AuthAlert";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { useAuth } from "../context/AuthContext";
import { getAuthErrorMessage } from "../services/authService";

const Profile = () => {
  const { user, updateProfile } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        bio: user.bio || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (form.newPassword && form.newPassword !== form.confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        bio: form.bio,
      };

      if (form.newPassword) {
        payload.currentPassword = form.currentPassword;
        payload.newPassword = form.newPassword;
      }

      const data = await updateProfile(payload);
      setMessage(data.message);
      setForm((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    } catch (err) {
      setError(
        err.field
          ? getAuthErrorMessage(err)
          : getAuthErrorMessage(err, "Could not update profile.")
      );
    } finally {
      setSubmitting(false);
    }
  };

  const displayName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.name || "Member";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ebe3]">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:py-14">
        <div className="mb-10">
          <p className="font-ysabeau text-xs uppercase tracking-[0.25em] text-treasure">
            Member profile
          </p>
          <h1 className="mt-2 font-playfair text-4xl font-bold italic text-navy lg:text-5xl">
            Your account
          </h1>
          <p className="mt-2 max-w-lg text-sm text-ink/60">
            Manage your personal details and security settings for Treasure Yacht.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Member card */}
          <div className="h-fit rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(0,33,77,0.1)]">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy to-treasure font-playfair text-4xl font-bold text-white shadow-lg">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <h2 className="mt-4 text-center font-playfair text-xl font-semibold italic text-navy">
              {displayName}
            </h2>
            <p className="mt-1 truncate text-center text-sm text-ink/50">{user?.email}</p>
            <div className="mt-6 rounded-xl bg-navy/5 px-4 py-3 text-center">
              <p className="font-ysabeau text-[10px] uppercase tracking-[0.2em] text-ink/40">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-treasure">Active member</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,33,77,0.1)]">
            <AuthAlert type="success" message={message} />
            <AuthAlert message={error} />

            <form onSubmit={handleSubmit} className="space-y-8">
              <section>
                <h3 className="font-playfair text-lg font-semibold italic text-navy">
                  Personal details
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <AuthInput
                    label="First name"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <AuthInput
                    label="Last name"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <AuthInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <AuthInput
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <div>
                    <label
                      htmlFor="bio"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={form.bio}
                      onChange={handleChange}
                      placeholder="Share your yachting interests, home port, or favorite destinations..."
                      className="w-full rounded-xl border border-ink/10 bg-[#faf9f7] px-4 py-3 text-ink outline-none transition focus:border-treasure focus:bg-white focus:ring-2 focus:ring-treasure/15"
                    />
                  </div>
                </div>
              </section>

              <hr className="border-ink/8" />

              <section>
                <h3 className="font-playfair text-lg font-semibold italic text-navy">
                  Security
                </h3>
                <p className="mt-1 text-sm text-ink/50">
                  Leave password fields blank to keep your current password.
                </p>
                <div className="mt-4 space-y-4">
                  <AuthInput
                    label="Current password"
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    autoComplete="current-password"
                    value={form.currentPassword}
                    onChange={handleChange}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <AuthInput
                      label="New password"
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      autoComplete="new-password"
                      value={form.newPassword}
                      onChange={handleChange}
                    />
                    <AuthInput
                      label="Confirm new password"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      type="password"
                      autoComplete="new-password"
                      value={form.confirmNewPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </section>

              <AuthButton disabled={submitting} className="max-w-xs">
                {submitting ? "Saving..." : "Save changes"}
              </AuthButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
