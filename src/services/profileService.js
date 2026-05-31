import { ID, Permission, Query, Role } from "appwrite";
import { account, databases } from "../lib/appwrite";

const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID;
const collectionId = process.env.REACT_APP_APPWRITE_PROFILES_COLLECTION_ID;

export const isDatabaseConfigured = () =>
  Boolean(databaseId && collectionId && collectionId.trim());

export const getProfileDocument = async (userId) => {
  if (!isDatabaseConfigured()) return null;

  const { documents } = await databases.listDocuments(databaseId, collectionId, [
    Query.equal("userId", userId),
    Query.limit(1),
  ]);
  return documents[0] || null;
};

export const createProfileDocument = async ({
  userId,
  email,
  firstName = "",
  lastName = "",
  phone = "",
  bio = "",
}) => {
  if (!isDatabaseConfigured()) return null;

  return databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    { userId, email, firstName, lastName, phone, bio },
    [
      Permission.read(Role.user(userId)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ]
  );
};

export const updateProfileDocument = async (documentId, data) => {
  if (!isDatabaseConfigured()) {
    throw new Error(
      "Profiles database is not set up. Add APPWRITE_API_KEY to .env, run npm run setup:appwrite, then restart."
    );
  }

  return databases.updateDocument(databaseId, collectionId, documentId, data);
};

export const saveProfilePrefs = async ({ firstName, lastName, phone, bio }) => {
  const current = await account.get();
  await account.updatePrefs({
    firstName: firstName ?? current.prefs?.firstName ?? "",
    lastName: lastName ?? current.prefs?.lastName ?? "",
    phone: phone ?? current.prefs?.phone ?? "",
    bio: bio ?? current.prefs?.bio ?? "",
  });
};

export const mergeAccountAndProfile = (appwriteUser, profileDoc) => {
  const prefs = appwriteUser.prefs || {};
  return {
    id: appwriteUser.$id,
    profileDocumentId: profileDoc?.$id || null,
    email: appwriteUser.email,
    name: appwriteUser.name || "",
    firstName: profileDoc?.firstName ?? prefs.firstName ?? "",
    lastName: profileDoc?.lastName ?? prefs.lastName ?? "",
    phone: profileDoc?.phone ?? prefs.phone ?? "",
    bio: profileDoc?.bio ?? prefs.bio ?? "",
  };
};

export const loadFullUser = async () => {
  const appwriteUser = await account.get();
  let profileDoc = null;

  if (isDatabaseConfigured()) {
    try {
      profileDoc = await getProfileDocument(appwriteUser.$id);
    } catch {
      // Permissions or collection not ready yet
    }
  }

  return mergeAccountAndProfile(appwriteUser, profileDoc);
};
