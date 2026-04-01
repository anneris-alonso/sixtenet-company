# TheBus - Local Startup Documentation (Windows)

This project is a monorepo that manages the API server (`backend`) and the Landing Page (`frontend`) separately. Below you will find the exact commands you need to run in your console (PowerShell) to start the project in your local environment using PostgreSQL.

## Prerequisites
1. Have **PostgreSQL** installed and running on port `5432`.
2. Your default credentials configured are `postgres` (user) and `postgres` (password).
3. Make sure you are in the project's root folder (`e:\TheBus`) when running these commands.

---

## 1. Install Dependencies

If this is your first time cloning the project or you just pulled an update, install the dependencies using `pnpm`:

```powershell
pnpm install
```

---

## 2. Initialize the Database (Migrations)

If there are any database schema changes (new tables or columns in Drizzle), you need to sync them with PostgreSQL:

```powershell
$env:DATABASE_URL="postgres://postgres:postgres@localhost:5432/postgres"; pnpm --filter @workspace/db run push
```

---

## 3. Start the Backend (API Server)

The main server handles the API and connects to the database. It will run on port **4000**. **Note:** Make sure to open a new terminal tab to leave this command running in the background:

```powershell
$env:DATABASE_URL="postgres://postgres:postgres@localhost:5432/postgres"; $env:PORT=4000; $env:NODE_ENV="development"; pnpm --filter @workspace/api-server run dev
```

*To check that it is working, you can go to: [http://localhost:4000/api/healthz](http://localhost:4000/api/healthz)*

---

## 4. Start the Frontend (Landing Page)

The main page was built with Vite and will run on port **3030**. **Note:** Open another terminal tab to run this command:

```powershell
$env:PORT=3030; $env:BASE_PATH="/"; pnpm --filter @workspace/landing run dev
```

*To view the website, visit: [http://localhost:3030/](http://localhost:3030/)*

---

## Quick Commands (Cheat Sheet)

If you just want to quickly copy and paste, here is the summary:

**Terminal 1 (Backend):**
`$env:DATABASE_URL="postgres://postgres:postgres@localhost:5432/postgres"; $env:PORT=4000; $env:NODE_ENV="development"; pnpm --filter @workspace/api-server run dev`

**Terminal 2 (Frontend):**
`$env:PORT=3030; $env:BASE_PATH="/"; pnpm --filter @workspace/landing run dev`
