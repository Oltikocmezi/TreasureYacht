import { Client, Account, Databases } from "appwrite";

const endpoint = process.env.REACT_APP_APPWRITE_ENDPOINT;
const projectId = process.env.REACT_APP_APPWRITE_PROJECT;

if (!endpoint || !projectId) {
  console.warn(
    "Appwrite is not configured. Copy .env.example to .env and set REACT_APP_APPWRITE_* variables."
  );
}

const client = new Client();

if (endpoint && projectId) {
  client.setEndpoint(endpoint).setProject(projectId);
}

export const account = new Account(client);
export const databases = new Databases(client);
export { client };
