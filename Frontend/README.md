# Vehicle Rental System - Frontend

A responsive vehicle rental web application built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Ant Design**.

---

## 🚀 Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Redux Toolkit
- Axios
- Ant Design
- Tailwind CSS
- React Hook Form

---

## 📂 Folder Structure

```
src/
│
├── api/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── redux/
├── routes/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

Clone Repository

```bash
git clone <repository-url>
```

Navigate to Project

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

Application runs at

```
http://localhost:5173
```

---

## ✨ Features

- User Authentication
- JWT Authorization
- Vehicle Listing
- Vehicle Search & Filter
- Book Vehicle
- View My Bookings
- Cancel Booking
- Dashboard Statistics
- Responsive UI
- 404 Not Found Page

---

## 📋 Pages

- Login
- Register
- Dashboard
- Vehicles
- My Bookings
- 404 Not Found

---

## 🔗 API Integration

The frontend communicates with the backend using Axios.

Configured inside

```
src/api/axios.ts
```

Example

```ts
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## 📦 Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Start Development Server |
| npm run build | Production Build |
| npm run preview | Preview Production Build |

---

## 📄 License

This project is developed for educational purposes.