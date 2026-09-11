# 🍽️ NexaDine — Restaurant Management & Food Ordering System

NexaDine is a full-stack restaurant management and food ordering application built with **React.js**, **Spring Boot**, **MySQL**, **JWT Authentication**, and **Razorpay**.

The application provides separate experiences for customers and administrators, allowing customers to browse food, manage their cart, place orders, make online payments, track orders, view payment history, and reserve tables. Administrators can manage orders, customers, reservations, food items, and sales information from a dedicated dashboard.

---

## ✨ Key Features

### 👤 Customer Features

- Customer registration and login
- JWT-based authentication
- Browse restaurant food menu
- View food details
- Add food items to cart
- Increase/decrease cart quantities
- Remove items from cart
- Multiple-item cart support
- Cart persistence using browser local storage
- Place food orders
- Cash on Delivery support
- Razorpay online payment integration
- View order history
- Track order status
- View payment history
- Create table reservations
- View reservation information
- Cancel reservations
- Customer dashboard

### 👨‍💼 Admin Features

- Secure admin login
- Admin dashboard
- Live order overview
- Revenue overview
- Customer overview
- Reservation overview
- Order management
- Update order status
- Food menu CRUD operations
- Customer management
- Reservation management
- Sales and payment reports
- Admin-only authorization for protected resources

### 💳 Payment Integration

NexaDine integrates **Razorpay** for online payments.

- Razorpay Checkout integration
- Test Mode support
- Payment verification flow
- Paid/Pending payment status
- Payment information associated with orders
- Admin payment and sales reporting

> Razorpay Test Mode should be used during development. Never commit live API secrets to GitHub.

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      Customer        │
                    │       / Admin        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      React.js        │
                    │      Frontend        │
                    │    Vite + Axios      │
                    └──────────┬───────────┘
                               │
                         REST API / HTTP
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Spring Boot      │
                    │       Backend        │
                    │      REST APIs       │
                    └──────────┬───────────┘
                               │
               ┌───────────────┼───────────────┐
               │               │               │
               ▼               ▼               ▼
        ┌────────────┐  ┌────────────┐  ┌────────────┐
        │   MySQL    │  │    JWT     │  │  Razorpay  │
        │  Database  │  │    Auth    │  │  Payments  │
        └────────────┘  └────────────┘  └────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React.js | User interface |
| Vite | Frontend development/build tool |
| JavaScript | Application logic |
| Axios | HTTP/API communication |
| React Router | Client-side routing |
| React Icons | UI icons |
| CSS | Styling |
| Local Storage | Cart/session-related browser storage |

## Backend

| Technology | Purpose |
|---|---|
| Java | Backend programming language |
| Spring Boot | Backend framework |
| Spring Security | Authentication & authorization |
| JWT | Stateless authentication |
| Spring Data JPA | Database interaction |
| Hibernate | ORM |
| Maven | Dependency/build management |

## Database

- MySQL 8

## Payment

- Razorpay Test Mode

---

# 📁 Project Structure

```text
restaurant-fullstack/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── nexadine/
│   │       │           ├── config/
│   │       │           ├── controller/
│   │       │           ├── dto/
│   │       │           ├── entity/
│   │       │           ├── repository/
│   │       │           ├── security/
│   │       │           └── service/
│   │       └── resources/
│   │           └── application.properties
│   ├── .env
│   ├── .gitignore
│   ├── pom.xml
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── ...
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── ...
│
└── README.md
```

> `.env` files are local configuration files and should not be committed to the repository.

---

# 🔐 Authentication & Authorization

NexaDine uses **JWT (JSON Web Token)** authentication.

### Authentication Flow

```text
User
  │
  ▼
Login / Register
  │
  ▼
Spring Boot Authentication API
  │
  ▼
Credentials Verified
  │
  ▼
JWT Token Generated
  │
  ▼
Frontend Stores Token
  │
  ▼
Axios Request Interceptor
  │
  ▼
Authorization: Bearer <token>
  │
  ▼
Protected Backend API
```

### Roles

The application supports role-based access control including:

- `CUSTOMER`
- `ADMIN`
- `WAITER`

Administrative endpoints are protected so regular customers cannot access admin-only resources.

---

# 🗄️ Database Configuration

NexaDine uses MySQL.

Create the database before starting the backend:

```sql
CREATE DATABASE restaurant;
```

The backend uses JPA/Hibernate to create and update required tables.

The current development configuration uses:

```properties
spring.jpa.hibernate.ddl-auto=update
```

This is suitable for development. Production deployments should use a controlled database migration strategy.

---

# 🔑 Environment Variables

Sensitive configuration is externalized using environment variables.

For local development, the backend imports a local `.env` file.

### Backend `.env`

Create:

```text
backend/.env
```

Example:

```env
DB_URL=jdbc:mysql://localhost:3306/restaurant
DB_USERNAME=root
DB_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=86400000

RAZORPAY_KEY_ID=your_razorpay_test_key_id
RAZORPAY_KEY_SECRET=your_razorpay_test_key_secret
```

The backend references these values through `application.properties`:

```properties
spring.config.import=optional:file:.env[.properties]

spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

jwt.secret=${JWT_SECRET}
jwt.expiration=${JWT_EXPIRATION}

razorpay.key.id=${RAZORPAY_KEY_ID}
razorpay.key.secret=${RAZORPAY_KEY_SECRET}
```

### Frontend `.env`

Create:

```text
frontend/.env
```

Example:

```env
VITE_API_URL=http://localhost:8080/api
```

The frontend uses:

```javascript
import.meta.env.VITE_API_URL
```

for the backend API base URL.

### ⚠️ Security

Never commit `.env` files to GitHub.

Never commit:

- Database passwords
- JWT secrets
- Razorpay secret keys
- Production credentials
- Private API keys

---

# ⚙️ Prerequisites

Install the following before running NexaDine:

- Java 17+
- Maven 3+
- MySQL 8+
- Node.js
- npm
- Git

---

# 🚀 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Chandrashekar1404/restaurant-fullstack.git
cd restaurant-fullstack
```

---

## 2. Configure MySQL

Start MySQL and create the database:

```sql
CREATE DATABASE restaurant;
```

Make sure your MySQL credentials match the values configured in:

```text
backend/.env
```

---

## 3. Configure Backend Environment

Create:

```text
backend/.env
```

Add:

```env
DB_URL=jdbc:mysql://localhost:3306/restaurant
DB_USERNAME=root
DB_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=86400000

RAZORPAY_KEY_ID=your_razorpay_test_key_id
RAZORPAY_KEY_SECRET=your_razorpay_test_secret
```

---

## 4. Start the Backend

Open a terminal:

```bash
cd backend
mvn spring-boot:run
```

Backend:

```text
http://localhost:8080
```

---

## 5. Configure Frontend Environment

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:8080/api
```

---

## 6. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## 7. Start the Frontend

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# ▶️ Running the Complete Application

Use two terminals.

### Terminal 1 — Backend

```bash
cd backend
mvn spring-boot:run
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 👤 Application Workflow

## Customer Workflow

```text
Register
   ↓
Login
   ↓
Browse Menu
   ↓
View Food
   ↓
Add Food to Cart
   ↓
Manage Cart
   ↓
Checkout
   ↓
Choose Payment Method
   ↓
Place Order
   ↓
Track Order
   ↓
View Payment History
```

## Admin Workflow

```text
Admin Login
    ↓
Admin Dashboard
    ├── Orders
    ├── Food Menu
    ├── Customers
    ├── Reservations
    └── Analytics / Reports
```

---

# 🍔 Food Menu Management

Administrators can manage food items using CRUD operations:

```text
CREATE
  ↓
Add Food Item

READ
  ↓
View Food Items

UPDATE
  ↓
Edit Food Item

DELETE
  ↓
Delete Food Item
```

Food information includes:

- Food name
- Price
- Category
- Availability

---

# 📦 Order Management

The order workflow connects the customer, backend, payment system, and admin dashboard.

```text
Customer
   │
   ▼
Cart
   │
   ▼
Checkout
   │
   ├──────────────► Cash on Delivery
   │
   └──────────────► Razorpay
                         │
                         ▼
                    Payment Success
                         │
                         ▼
                    Order Created
                         │
                         ▼
                  Admin Order Panel
                         │
                         ▼
                  Order Status Update
                         │
                         ▼
                  Customer Dashboard
```

---

# 📅 Reservation Management

Customers can reserve restaurant tables by providing:

- Reservation date
- Reservation time
- Number of guests

Administrators can view reservation information from the admin interface.

---

# 💳 Razorpay Testing

For local development, use Razorpay **Test Mode** credentials.

Configure them in:

```text
backend/.env
```

Example:

```env
RAZORPAY_KEY_ID=your_test_key_id
RAZORPAY_KEY_SECRET=your_test_secret
```

Use Razorpay's official testing documentation for test payment credentials.

> Test Mode is intended for simulated transactions and should not be used as a substitute for production payment configuration.

---

# 📊 Admin Dashboard

The admin dashboard provides an overview of restaurant activity including:

- Total orders
- Total revenue
- Reservations
- Customers
- Recent orders
- Recent reservations
- Customer information
- Restaurant overview

The dashboard periodically refreshes information from the backend.

---

# 🧪 Functional Testing

The major customer and administrator workflows have been functionally tested.

### Customer

- [x] Home page
- [x] Explore menu
- [x] View food
- [x] Add to cart
- [x] Update cart quantity
- [x] Remove cart items
- [x] Multiple cart items
- [x] Cart total
- [x] Cart persistence
- [x] Customer registration
- [x] Customer login
- [x] Customer dashboard
- [x] Customer orders
- [x] Payment history
- [x] Reservation
- [x] Razorpay test payment

### Admin

- [x] Admin login
- [x] Admin dashboard
- [x] Order listing
- [x] Order status update
- [x] Reservation listing
- [x] Food item creation
- [x] Food item editing
- [x] Food item deletion
- [x] Customer listing
- [x] Reports / sales information
- [x] Razorpay payment reflected in order/report information

---

# 🛡️ Security Considerations

NexaDine uses:

- JWT authentication
- Spring Security
- Role-based authorization
- Protected customer/admin routes
- Bearer token authorization
- Environment-based secret configuration
- CORS configuration

### Production Recommendations

Before deploying:

1. Use strong unique database credentials.
2. Generate a strong random JWT secret.
3. Keep Razorpay production credentials in secure environment configuration.
4. Enable HTTPS.
5. Disable unnecessary debug logging.
6. Never commit `.env` files.
7. Review CORS configuration.
8. Use secure secret management.
9. Use database migrations for production.
10. Validate and sanitize user-controlled input.

---

# 🔌 API Overview

The backend exposes REST APIs for major application modules.

Examples include:

```text
/api/auth/**
/api/orders/**
/api/reservations/**
/api/users/**
/api/payment/**
```

Authentication endpoints provide login/registration functionality, while protected resources require a valid JWT.

---

# 🌐 Frontend Routing

The application contains separate customer and administrator areas.

```text
/
├── Login
├── Signup
├── Menu
├── Cart
│
├── Customer Dashboard
│   ├── My Orders
│   ├── Payment History
│   └── Reservations
│
└── Admin Dashboard
    ├── Orders
    ├── Food Menu
    ├── Customers
    ├── Reservations
    └── Analytics / Reports
```

Protected routes prevent unauthorized users from accessing restricted application areas.

---

# 📌 Development Configuration

| Component | URL / Configuration |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:8080` |
| API Base URL | `http://localhost:8080/api` |
| Database | `restaurant` |
| Database Engine | MySQL 8 |

---

# 🚧 Future Enhancements

Possible future improvements:

- Real-time order notifications
- WebSocket-based order tracking
- Advanced sales analytics
- Inventory management
- Table availability visualization
- Coupon and discount management
- Food image upload and management
- Email notifications
- SMS notifications
- Customer reviews and ratings
- Restaurant staff management
- Docker support
- Automated testing
- CI/CD pipeline
- Cloud database integration
- Production deployment

---

# 🤝 Contributing

Contributions are welcome.

Create a feature branch:

```bash
git checkout -b feature/your-feature
```

After making and testing your changes:

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

Then create a pull request.

---

# 📄 License

This project is intended for educational and development purposes.

Add an appropriate open-source license if the project is intended for public redistribution.

---

# 👨‍💻 Author

## Chandra Shekar

**NexaDine — Restaurant Management & Food Ordering System**

A full-stack project combining:

```text
React.js
     +
Spring Boot
     +
Spring Security
     +
JWT Authentication
     +
MySQL
     +
Razorpay
     =
NexaDine
```

---

## ⭐ Project Highlights

NexaDine demonstrates a complete full-stack application workflow covering:

**Authentication → Food Browsing → Cart → Checkout → Payments → Orders → Reservations → Customer Dashboard → Admin Management → Sales Reporting**

⭐ If you find this project useful, consider giving the repository a star!
