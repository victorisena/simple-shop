# Simple Shop Project

The "Simple Shop" project is a Node.js application that implements a basic e-commerce shop using the Sequelize ORM (Object-Relational Mapping) for database management. This project aims to provide a starting point for building an online shop with basic CRUD (Create, Read, Update, Delete) functionalities for products, as well as features for managing a user's cart and creating orders.

## Overview

The "Simple Shop" project allows users to view, add, edit, and delete products in an online shop. Users can also add products to their cart, remove products from the cart, and create orders for the selected products. The project utilizes Node.js as the backend runtime environment, Sequelize as the ORM for interacting with the database, and EJS (Embedded JavaScript) as the templating engine for rendering views.

## Features

- Product listing: Users can view a list of available products in the shop.
- Product details: Users can click on a product to view its detailed information.
- Add to cart: Users can add products to their cart for future purchase.
- Remove from cart: Users can remove products from their cart.
- Create order: Users can create an order for the products in their cart.
- Order history: Users can view their order history and track the status of their orders.

## Architecture

The "Simple Shop" application follows a modular architecture, separating concerns into different components for better organization and maintainability. The architecture consists of the following components:

- Models: The models represent the data entities and business logic of the application. Each model corresponds to a database table and defines the structure and relationships between entities. In this project, the models are implemented using Sequelize, allowing easy management of database operations.
- Routes: The routes handle incoming HTTP requests and map them to the appropriate controllers. They define the API endpoints and specify the actions to be performed when a request is received. In this project, the routes are responsible for CRUD operations on the products, cart management, and order creation.
- Controllers: The controllers contain the logic for handling specific requests from the routes. They receive the incoming data, interact with the models, perform necessary operations, and return appropriate responses. In this project, the controllers handle the CRUD operations for the products, cart management, and order creation.
- Views (Frontend): The views represent the user interface through which users interact with the application. They display the shop's pages, product listings, product details, cart contents, order creation form, and order history. In this project, the views are implemented using EJS, allowing dynamic rendering of data in HTML templates.

## Getting Started

To use this repository and run the "Simple Shop" application, you need to follow these steps:

1. Clone the repository: `git clone https://github.com/victorisena/simple-shop.git`
2. Install Node.js: Download and install Node.js from the official website.
3. Install project dependencies: Open a terminal, navigate to the project directory, and run `npm install` to install the required dependencies.
4. Create a database: Set up a database with the name "node-complete" using your preferred method. You can create a containerized database using Docker or set up a MySQL database locally. Ensure that the database is accessible and running.
5. Update database configuration: Open the `util/database.js` file in a text editor and update the connection details according to your database setup. Update the `username`, `password`, and `host` fields as necessary.
6. Run database migrations: In the terminal, run `npx sequelize-cli db:migrate` to execute the database migrations and create the required tables.
7. Start the application: Run npm start in the terminal to start the Node.js server.
8. Access the application: Open your web browser and visit http://localhost:3000 to access the "Simple Shop" application.

Please note that if you're using a different database other than MySQL, you'll need to install the appropriate Sequelize dialect for your database. Refer to the Sequelize documentation for instructions on installing the necessary dialect.

Additionally, ensure that you have the required database credentials (username and password) to establish a connection with your database server. Modify the `util/database.js` file accordingly with the correct credentials.

It's important to keep your database connection details secure and avoid committing them to version control systems. Consider using environment variables or a separate configuration file to manage sensitive information securely.

If you encounter any issues or have further questions, please feel free to reach out for assistance.

## Contact

If you have any questions or need assistance with the "Simple Shop" project, please feel free to reach out:

- Email: victorigorsena@gmail.com
- LinkedIn: [linkedin.com/in/victor-igor-sena](https://www.linkedin.com/in/victor-igor-sena/)
- Twitter: [@victorisena](https://twitter.com/victorisena)

I am happy to help and provide support regarding any issues or inquiries you may have while working with the "Simple Shop" project.

Please note that this project is intended as a starting point and can be customized and expanded according to your specific requirements. Feel free to modify the code and add additional features to suit your needs.

Thank you for using the "Simple Shop" project! Happy coding!