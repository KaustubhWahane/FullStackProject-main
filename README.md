# FullStack Food App

A comprehensive full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to browse food items, manage orders, and contact the service.

## 🚀 Features

*   **Responsive Frontend:** Built with React and Vite for fast performance.
*   **Modern Styling:** Utilizes Tailwind CSS and Bootstrap for a clean, responsive UI.
*   **Animations:** Smooth transitions and animations using Framer Motion and Animate.css.
*   **Backend API:** robust REST API built with Node.js and Express.
*   **Database:** MongoDB integration via Mongoose for data persistence.
*   **Navigation:** Client-side routing with React Router.

## 🛠️ Tech Stack

### Frontend
*   **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Bootstrap](https://getbootstrap.com/), [React Bootstrap](https://react-bootstrap.github.io/)
*   **HTTP Client:** [Axios](https://axios-http.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/), [Animate.css](https://animate.style/)
*   **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

### Backend
*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/)
*   **Database:** [MongoDB](https://www.mongodb.com/)
*   **ODM:** [Mongoose](https://mongoosejs.com/)
*   **CORS:** [cors](https://www.npmjs.com/package/cors)

## 📂 Project Structure

```
├── backend/            # Server-side logic
│   ├── model/          # Mongoose models (User, Order, Contact)
│   ├── routes/         # API routes
│   └── server.js       # Entry point for backend
│
└── frontend/           # Client-side application
    ├── public/         # Static assets
    └── src/
        ├── assets/     # Images and media
        ├── components/ # React components
        └── App.jsx     # Main application component
```

## ⚙️ Installation & Setup

Prerequisites: Ensure you have **Node.js** and **npm** installed on your machine.

### 1. Clone the repository
```bash
git clone <repository-url>
cd FullStackProject-main
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

## 🏃‍♂️ Running the Application

You need to run both the backend server and the frontend development server concurrently.

### Start the Backend
From the `backend` directory:
```bash
node server.js
```
*The server will start on `http://localhost:5000`*

### Start the Frontend
From the `frontend` directory:
```bash
npm run dev
```
*The frontend will start on the port provided by Vite (usually `http://localhost:5173`)*

## 📡 API Endpoints

The backend exposes the following routes (based on `server.js`):

*   `/` - Contact Routes & User Routes
*   `/api` - Order Routes

## 📝 Notes
*   **Database Connection:** The backend is currently configured to connect to a MongoDB instance. Ensure your IP is whitelisted if using a cloud cluster, or configure a local instance.
*   **Environment Variables:** For production, sensitive information like database URIs should be moved to a `.env` file.

---
Created by Abhishek
