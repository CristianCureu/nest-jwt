# NestJS Application

A NestJS-based backend application that handles various functionalities such as user authentication, data fetching, and CRUD operations. This application is connected to a PostgreSQL database using Prisma for data management and serves as the backend for your application.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

Follow these steps to set up the application locally.

### Prerequisites

- Node.js (version 16.x or later)
- PostgreSQL
- Prisma ORM

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo/nest-app.git
   cd nest-app
Install dependencies

Use npm or yarn to install the necessary dependencies.

bash
Copy code
npm install
or

bash
Copy code
yarn install
Set up environment variables

Create a .env file in the root of the project and add the following environment variables:

env
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
JWT_SECRET=your-jwt-secret-key
Database setup

Run the following command to generate the database schema and migrate it:

bash
Copy code
npx prisma migrate dev
This will generate the database tables and apply any migrations.

Environment Variables
Make sure you have the following environment variables set up:

Variable	Description
DATABASE_URL	The connection string for your PostgreSQL database.
JWT_SECRET	Secret key used for JWT authentication.
Database Setup
This project uses Prisma ORM to manage the database. To set up the database:

Make sure PostgreSQL is installed and running.

Configure your .env file with your database credentials.

Run the following command to generate the Prisma client:

bash
Copy code
npx prisma generate
To migrate the database and apply changes to the schema:

bash
Copy code
npx prisma migrate dev
Running the Application
Once everything is set up, you can start the server.

Start the development server:
bash
Copy code
npm run start:dev
or

bash
Copy code
yarn start:dev
This will start the application in development mode, and you should see something like:

csharp
Copy code
[Nest] 1234  - 2024/11/13 08:00:00 AM   "Nest application successfully started"
Your application should now be running at http://localhost:3000.

Running the Application in Production:
bash
Copy code
npm run start:prod
This will build the application and run it in production mode.

API Endpoints
Auth Endpoints
POST /auth/login: User login endpoint.
POST /auth/register: User registration endpoint.
Invoice Endpoints
GET /invoices: Get a list of invoices (pagination supported).

Query parameters:

page: The page number for pagination (default: 1).
limit: The number of items per page (default: 10).
GET /invoices/total: Get the total amount of invoices grouped by due date.

GET /invoices/:id: Get a specific invoice by its ID.

Example Request
bash
Copy code
GET http://localhost:3000/invoices?page=1&limit=10
Authentication
The application uses JWT (JSON Web Token) for authentication. To access protected routes, you need to include a valid JWT token in the Authorization header.

Example:

bash
Copy code
Authorization: Bearer <your-jwt-token>