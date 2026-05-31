# Authentication (Appwrite — TreasureYacht project)

## Your project IDs

| Setting | Value |
|---------|--------|
| Project ID | `6a1c0b5700343ba62215` |
| Database ID | `6a1c0bde001e1bd3d172` |
| Collection | `profiles` (created by setup script) |

## Step 1 — Appwrite Console (one time)

1. **Platforms** → Add **Web** → hostnames: `localhost`, `localhost:3000`
2. **Auth** → enable **Email/Password**
3. **Auth** → allow URL: `http://localhost:3000/reset-password`
4. **API Keys** → Create key with scopes:
   - `databases.write`
   - `databases.read`
5. Copy the key into `.env` as `APPWRITE_API_KEY=...`

## Step 2 — Create the `profiles` table (collection)

**Required if sign-up shows “database is not configured”.**

1. Appwrite Console → **API Keys** → Create key → enable **Databases** (read + write).
2. Paste the key in `.env`:
   ```env
   APPWRITE_API_KEY=your_key_here
   ```
3. From the project root:

```bash
npm install
npm run setup:appwrite
```

4. **Stop and restart** `npm start` (React only reads `.env` on startup).

This creates a **`profiles`** collection with:

| Field | Type | Notes |
|-------|------|--------|
| userId | string | Links to Appwrite Auth user |
| email | email | |
| firstName | string | |
| lastName | string | |
| phone | string | |
| bio | string | Up to 2000 chars |

The script writes `REACT_APP_APPWRITE_PROFILES_COLLECTION_ID` into `.env` automatically.

## Step 3 — Run the app

```bash
npm start
```

Open **http://localhost:3000/sign-up** and create an account.

Restart `npm start` after any `.env` change.

## How it works

- **Sign up / sign in** → Appwrite Auth
- **Profile data** → `profiles` collection in your database (one row per member)

## Auth routes (frontend)

| Route | Purpose |
|-------|---------|
| `/sign-up` | Register |
| `/sign-in` | Login |
| `/forgot-password` | Reset email |
| `/reset-password?userId=...&secret=...` | New password |
| `/profile` | Edit profile |

## Troubleshooting

| Error | Fix |
|-------|-----|
| Invalid Origin | Add Web platform hostnames in Console |
| Collection not configured | Run `npm run setup:appwrite` |
| 401 on database | Check collection permissions; sign in again |
| User already exists | Use sign-in or another email |
