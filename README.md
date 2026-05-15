# Deepak Enterprises — MERN Stack

Separate **frontend** (React) and **backend** (Express + MongoDB Atlas) folders.

```
shiv-enterprises-website/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Express + Mongoose
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
└── package.json       # Run both together
```

---

## Quick Start

### 1. Install dependencies

```bash
npm run install:all
```

Or separately:

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 2. Configure MongoDB Atlas

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:

```env
MONGODB_URI=mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/shiv-enterprises?retryWrites=true&w=majority
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Seed database (first time)

```bash
npm run seed
```

### 4. Run both apps

From project root:

```bash
npm run dev:all
```

| App | URL |
|-----|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000/api |

---

## Run separately

**Frontend only:**
```bash
cd frontend
npm run dev
```

**Backend only:**
```bash
cd backend
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/products` | All products |
| GET | `/api/blog` | All blog posts |

---

## Production

**Frontend:** `cd frontend && npm run build` → deploy `frontend/dist`

**Backend:** deploy `backend/` folder, set `MONGODB_URI` and `CLIENT_URL`

**Frontend env for production:**
```env
VITE_API_URL=https://your-api-domain.com/api
```

---

## License

Private — Deepak Enterprises © 2025
