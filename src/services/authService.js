import { ID } from "appwrite";
import { account } from "../lib/appwrite";
import {
  createProfileDocument,
  getProfileDocument,
  isDatabaseConfigured,
  loadFullUser,
  mergeAccountAndProfile,
  saveProfilePrefs,
  updateProfileDocument,
} from "./profileService";

export const mapAppwriteUser = mergeAccountAndProfile;

export const getAuthErrorMessage = (error, fallback = "Something went wrong. Please try again.") => {
  return error?.message || fallback;
};

export const getCurrentUser = async () => loadFullUser();

export const register = async ({ email, password, firstName, lastName }) => {
  const name = [firstName, lastName].filter(Boolean).join(" ").trim() || email.split("@")[0];

  const created = await account.create(ID.unique(), email, password, name);
  await account.createEmailPasswordSession(email, password);

  const profileFields = {
    firstName: firstName || "",
    lastName: lastName || "",
    phone: "",
    bio: "",
  };

  if (isDatabaseConfigured()) {
    await createProfileDocument({
      userId: created.$id,
      email,
      ...profileFields,
    });
  } else {
    await account.updatePrefs(profileFields);
  }

  const user = await loadFullUser();
  return {
    message: "Account created successfully.",
    user,
  };
};

export const login = async ({ email, password }) => {
  await account.createEmailPasswordSession(email, password);
  const user = await loadFullUser();
  return {
    message: "Signed in successfully.",
    user,
  };
};

export const logout = async () => {
  await account.deleteSession("current");
};

export const requestPasswordRecovery = async (email) => {
  const resetUrl = `${window.location.origin}/reset-password`;
  await account.createRecovery(email, resetUrl);
  return {
    message:
      "If an account exists for that email, you will receive password reset instructions shortly.",
  };
};

export const completePasswordRecovery = async ({ userId, secret, password }) => {
  await account.updateRecovery(userId, secret, password);
  return { message: "Password updated successfully. You can sign in now." };
};

export const updateProfile = async ({
  firstName,
  lastName,
  email,
  phone,
  bio,
  currentPassword,
  newPassword,
}) => {
  const current = await account.get();
  const name = [firstName, lastName].filter(Boolean).join(" ").trim();

  if (name && name !== current.name) {
    await account.updateName(name);
  }

  if (email && email !== current.email) {
    if (!currentPassword) {
      const err = new Error("Current password is required to change your email.");
      err.field = "currentPassword";
      throw err;
    }
    await account.updateEmail(email, currentPassword);
  }

  if (newPassword) {
    if (!currentPassword) {
      const err = new Error("Current password is required to set a new password.");
      err.field = "currentPassword";
      throw err;
    }
    await account.updatePassword(newPassword, currentPassword);
  }

  const profileData = {
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    phone: phone ?? "",
    bio: bio ?? "",
    email: email || current.email,
  };

  let profileDoc = null;

  if (isDatabaseConfigured()) {
    profileDoc = await getProfileDocument(current.$id);
    if (profileDoc) {
      profileDoc = await updateProfileDocument(profileDoc.$id, profileData);
    } else {
      profileDoc = await createProfileDocument({
        userId: current.$id,
        ...profileData,
      });
    }
  } else {
    await saveProfilePrefs(profileData);
  }

  const refreshed = await account.get();
  return {
    message: "Profile updated successfully.",
    user: mergeAccountAndProfile(refreshed, profileDoc),
  };
};
