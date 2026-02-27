# Backend Setup Guide

## 📁 Folder Structure
```
backend/
├── config/
│   └── config.env          ← Fill in your credentials here
├── database/
│   └── connection.js       ← MongoDB connection
├── middlewares/
│   └── error.js            ← Global error handler
├── routes/
│   ├── userRouter.js
│   ├── timelineRouter.js
│   ├── messageRouter.js
│   ├── skillRouter.js
│   ├── softwareApplicationRouter.js
│   └── projectRouter.js
├── tmp/                    ← Temp folder for file uploads
├── app.js
├── server.js
└── package.json
```

---

## ⚙️ Setup Steps

### 1. Fill in your config.env
Open `config/config.env` and replace all placeholder values:
- `MONGO_URI` → Your MongoDB connection string
- `CLOUDINARY_*` → From your Cloudinary dashboard
- `SMTP_*` → Your Gmail credentials (use App Password)
- `PORTFOLIO_URL` / `DASHBOARD_URL` → Your server IP

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
# Production
npm start

# With PM2 (recommended for Ubuntu server)
pm2 start server.js --name "backend"
pm2 save
```

---

## ✅ Fixes Applied
| Issue | Fix |
|-------|-----|
| Cloudinary config before dotenv | Moved dotenv.config() to top of server.js |
| dotenv loaded twice | Removed dotenv from app.js |
| `/tmp/` permission issues | Changed to `./tmp/` (local folder) |
| Missing database/connection.js | Created with proper mongoose connect |
| Missing middlewares/error.js | Created with full error handling |

---

## 🔌 MongoDB Connection String Format
```
mongodb://USERNAME:PASSWORD@localhost:27017/DATABASE_NAME
```
Example:
```
mongodb://appuser:AppPassword456@localhost:27017/myappdb
```
