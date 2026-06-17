# Full-Stack Todo Application

A modern, full-stack Todo management application built with **React** on the frontend and **Spring Boot** on the backend. This project showcases clean code practices, RESTful API design, JWT-based security authentication, and database integration using Spring Data JPA.

## Architecture & Features

- **Frontend**: Single Page Application (SPA) built using React. Features secure route guards, custom authentication context, and components styled using Bootstrap.
- **Backend**: REST API built using Spring Boot 4 and Java 25.
- **Authentication**: JWT (JSON Web Token) based stateless authentication.
- **Database**: Spring Data JPA with a MySQL database.

---

## Folder Structure

```text
├── frontend/             # React SPA application
├── backend/              # Spring Boot REST API
└── README.md             # Project documentation
```

---

## Setup & Running the Project

### Prerequisites
- **Java**: Version 17 or higher (Java 25 recommended)
- **Node.js**: Long-Term Support (LTS) version

### 1. Running the Backend REST API
Navigate into the `backend/` directory and run using Maven:
```bash
cd backend
mvn spring-boot:run
```
The backend API server will start on port `8080`.

### 2. Running the Frontend React Client
Navigate into the `frontend/` directory, install dependencies, and start the development server:
```bash
cd frontend
npm install
npm start
```
The React development server will start on port `3000`.

---

## Authentication Credentials (Default)
When prompted by the login page, you can access the dashboard using the following credentials:
- **Username**: `in28minutes`
- **Password**: `dummy`
