/**
 * One-time setup: creates the "profiles" collection in your Appwrite database.
 *
 * Prerequisites:
 * 1. Appwrite Console → API Keys → create key with Databases read/write
 * 2. Add APPWRITE_API_KEY to .env (see .env.example)
 *
 * Run: npm run setup:appwrite
 */

require("dotenv").config();
const { Client, Databases, ID, Permission, Role } = require("node-appwrite");
const fs = require("fs");
const path = require("path");

const endpoint = process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const projectId = process.env.APPWRITE_PROJECT_ID || process.env.REACT_APP_APPWRITE_PROJECT;
const apiKey = process.env.APPWRITE_API_KEY;
const databaseId =
  process.env.APPWRITE_DATABASE_ID || process.env.REACT_APP_APPWRITE_DATABASE_ID;

const COLLECTION_NAME = "profiles";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForAttribute(databases, collectionId, key) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const collection = await databases.getCollection(databaseId, collectionId);
    const attr = collection.attributes.find((a) => a.key === key);
    if (attr?.status === "available") return;
    await sleep(1500);
  }
  throw new Error(`Timed out waiting for attribute "${key}"`);
}

async function main() {
  if (!projectId || !databaseId) {
    console.error("Missing APPWRITE_PROJECT_ID or APPWRITE_DATABASE_ID in .env");
    process.exit(1);
  }
  if (!apiKey) {
    console.error(
      "Missing APPWRITE_API_KEY. Create an API key in Appwrite Console and add it to .env"
    );
    process.exit(1);
  }

  const client = new Client().setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
  const databases = new Databases(client);

  console.log("Creating collection:", COLLECTION_NAME);

  const collection = await databases.createCollection(
    databaseId,
    ID.unique(),
    COLLECTION_NAME,
    [
      Permission.create(Role.users()),
      Permission.read(Role.users()),
      Permission.update(Role.users()),
    ],
    true
  );

  const collectionId = collection.$id;
  console.log("Collection ID:", collectionId);

  await databases.createStringAttribute(databaseId, collectionId, "userId", 36, true);
  await databases.createEmailAttribute(databaseId, collectionId, "email", true);
  await databases.createStringAttribute(databaseId, collectionId, "firstName", 128, false);
  await databases.createStringAttribute(databaseId, collectionId, "lastName", 128, false);
  await databases.createStringAttribute(databaseId, collectionId, "phone", 32, false);
  await databases.createStringAttribute(databaseId, collectionId, "bio", 2000, false);

  for (const key of ["userId", "email", "firstName", "lastName", "phone", "bio"]) {
    console.log("Waiting for attribute:", key);
    await waitForAttribute(databases, collectionId, key);
  }

  await databases.createIndex(
    databaseId,
    collectionId,
    "userId_unique",
    "unique",
    ["userId"]
  );

  console.log("Done. Add this to your .env:\n");
  console.log(`REACT_APP_APPWRITE_PROFILES_COLLECTION_ID=${collectionId}`);

  const envPath = path.join(__dirname, "..", ".env");
  if (fs.existsSync(envPath)) {
    let content = fs.readFileSync(envPath, "utf8");
    const line = `REACT_APP_APPWRITE_PROFILES_COLLECTION_ID=${collectionId}`;
    if (content.includes("REACT_APP_APPWRITE_PROFILES_COLLECTION_ID=")) {
      content = content.replace(
        /REACT_APP_APPWRITE_PROFILES_COLLECTION_ID=.*/g,
        line
      );
    } else {
      content = `${content.trim()}\n${line}\n`;
    }
    fs.writeFileSync(envPath, content);
    console.log("\nUpdated .env with the collection ID.");
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
