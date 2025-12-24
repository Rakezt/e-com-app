# 🛹 Skateboard E-Commerce Platform
<img width="900" height="440" alt="image" src="https://github.com/user-attachments/assets/9f35bc1a-48b1-49be-9c53-da598c8a18e3" />


A modern skateboard e-commerce web application built with **React** and a **Node.js backend**, focusing on responsive UI, clean architecture, and scalable backend design.

The application provides a complete shopping experience including product browsing, filtering, cart management, authentication, and order flow, with production-ready infrastructure and performance optimizations.

---

## 🌐 Deployment

- **Frontend**: Netlify  
- **Backend API**: Render  
- **Database**: MongoDB  
- **Caching Layer**: Redis  
- **Media Storage**: Cloudinary  

---

## 🧩 Application Overview

The project is split into two independent layers:

- **Frontend** → Handles UI, UX, routing, and client-side state
- **Backend** → Provides REST APIs, authentication, cart management, and caching

Each layer can be deployed and scaled independently.

---

## ✨ Features

### Navigation & Layout
- Responsive navigation for desktop and mobile
- Mobile hamburger menu with full-screen drawer
- Desktop layout remains minimal and uncluttered
- Smooth CSS-based animations

---

### Product Catalog
- Product listing with grid and list views
- Product detail pages with images, pricing, and stock info
- Images served via Cloudinary CDN
- Responsive product layout using CSS Grid

---

### Filtering & Sorting
- Search by product name
- Filter by category, brand, color, and price range
- Sorting by price and name
- Filter logic handled via Context API
- Mobile-friendly collapsible filters

---

### Cart System
- Guest cart stored in local storage
- Authenticated user cart persisted in MongoDB
- Automatic cart synchronization on login
- Cart cleared on logout
- Cart quantity and pricing calculated in real time

---

### Authentication
- Custom authentication using JWT
- Secure login and signup APIs
- Protected routes using auth middleware
- Token-based session management

---

### Backend Performance & Security
- RESTful APIs built with Express
- MongoDB schema design using Mongoose
- Redis used for caching frequently accessed endpoints
- Rate limiting added to protect APIs
- Environment-based configuration

---

### Media Management
- Product images uploaded to Cloudinary
- Only image URLs stored in MongoDB
- Faster delivery using Cloudinary CDN
- Reduces backend storage and bandwidth usage

---

## 🧱 Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit
- Context API
- Styled-Components
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- JWT Authentication
- Rate Limiting Middleware

### Infrastructure
- Netlify (Frontend hosting)
- Render (Backend hosting)
- MongoDB Atlas
- Redis
- Cloudinary

---

## 🛠 Architecture Highlights

- Clear separation of frontend and backend
- Stateless backend APIs
- Redis used to improve response times
- CDN-based image delivery
- Scalable deployment setup

---

## 🔧 Environment Configuration

Backend requires the following environment variables:

