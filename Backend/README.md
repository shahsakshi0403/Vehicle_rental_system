# Vehicle Rental System - Backend

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing vehicle rentals. The backend provides authentication, vehicle management, and booking functionalities.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- Express Validator
- dotenv
- CORS

---

## 📂 Project Structure

```
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── uploads/
├── utils/
└── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Running the Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server runs at

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

### Vehicles

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/vehicles | Get All Vehicles |
| GET | /api/vehicles/:id | Get Vehicle |
| POST | /api/vehicles | Add Vehicle |
| PUT | /api/vehicles/:id | Update Vehicle |
| DELETE | /api/vehicles/:id | Delete Vehicle |

---

### Bookings

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/bookings | Create Booking |
| GET | /api/bookings/my | My Bookings |
| DELETE | /api/bookings/:id | Cancel Booking |

---

## 🔑 Authentication

Protected APIs require JWT Token.

```
Authorization: Bearer <token>
```

---

## 📷 Image Upload

Vehicle images can be uploaded using Multer.

---

## 📄 License

This project is developed for educational purposes.