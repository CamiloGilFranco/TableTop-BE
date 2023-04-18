# TableTop E-commerce App Backend

This is the backend for the TableTop e-commerce application, built using TypeScript and Express. It is designed to provide APIs for the React frontend application, allowing users to order food and make reservations at their favorite restaurants.

## Features

- User authentication and authorization
- CRUD operations for users, restaurants, orders, and reservations
- JSON Web Token (JWT) for securing API endpoints
- Password hashing using bcrypt

## Getting Started

To set up the backend, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root folder and configure the required environment variables, such as database connection string, port, and secret key for JWT.
4. Run `npm run dev` to start the development server.

## Dependencies

The backend of this project is built using the following main dependencies:

- TypeScript (v5.0.3)
- Express (v4.18.2)
- Prisma (v4.12.0)
- PostgreSQL
- JSON Web Tokens (JWT) (v9.0.0)
- bcrypt (v5.1.0)
- cors (v2.8.5)
- morgan (v1.10.0)

## Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with hot-reloading
- `npm run build`: Compiles the TypeScript files into JavaScript
- `npm start`: Starts the production server using the compiled JavaScript files
- `npm run prisma:seed`: Seeds the database with sample data

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
