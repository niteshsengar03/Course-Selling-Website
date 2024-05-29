# Course Selling Website

This is a server-side application for a course selling website. The application is built with Node.js and Express.js, and it uses MongoDB for data storage.

## Project Structure

The project is structured into two main parts: the `admin` part and the `user` part, each with its own router.

### Admin

The `admin` part of the application is responsible for administrative tasks. The related code is located in the `routes/admin.js` file.

### User

The `user` part of the application is responsible for user-related tasks. The related code is located in the `routes/user.js` file.

The main entry point of the application is `index.js`, which sets up the Express.js application and includes the routers for the `admin` and `user` parts of the application.

## Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `node index.js` to start the server.

## Dependencies

This project uses the following dependencies:

- Express.js: A web application framework for Node.js.
- Body-parser: Middleware to handle JSON requests.
- Mongoose: A MongoDB object modeling tool.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.