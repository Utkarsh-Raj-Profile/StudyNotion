# StudyNotion 🚀
### A Fully Functional EdTech Platform Built with the MERN Stack

StudyNotion is a production-ready full-stack EdTech platform inspired by modern learning management systems.  
It provides a seamless experience for students to explore and purchase courses, while instructors can create and manage educational content through a powerful dashboard.

Built with scalability, performance, and real-world deployment practices in mind.

---

# 🌐 Live Demo

## Frontend
https://studynotiontech.vercel.app

---

# ✨ Features

## 👨‍🎓 Student Features
- User Authentication & Authorization
- Email OTP Verification
- Browse Course Catalog
- Course Purchase Flow
- Add to Cart Functionality
- Student Dashboard
- Watch Course Videos
- Track Course Progress
- Rate & Review Courses
- Profile Management

---

## 👨‍🏫 Instructor Features
- Instructor Dashboard
- Create Courses
- Upload Course Thumbnails
- Add Sections & Subsections
- Upload Video Lectures
- Edit/Delete Courses
- View Student Enrollments

---

## 🔐 Authentication & Security
- JWT Authentication
- Protected Routes
- OTP Verification via Brevo API
- Password Encryption using bcrypt
- Role-Based Access Control
- Secure Environment Variables

---

## 💳 Payment Integration
- Razorpay Payment Gateway Integration
- Secure Payment Verification
- Course Enrollment After Successful Payment

---

## ☁️ Cloud & Deployment
- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB Atlas Database
- Cloudinary Media Storage
- Brevo Email API Integration

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Razorpay SDK
- Cloudinary SDK
- Brevo Email API

---

# 📂 Project Structure

```bash
StudyNotion/
│
├── src/                  # Frontend Source
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── slices/
│   └── assets/
│
├── server/               # Backend Source
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── config/
│
└── README.md
