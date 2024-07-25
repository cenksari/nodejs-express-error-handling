# Nodejs express custom error handling

This project showcases a Node.js and Express application that incorporates a custom error handling mechanism. The application is designed to handle errors in a structured way, providing a more informative and user-friendly experience for the client. The custom error handling system includes error types such as NotFoundError, BadRequestError, and AuthenticationError, each with a specific message that can be thrown and caught within the application. This approach enables the application to respond to errors in a more meaningful way, enhancing the overall user experience and facilitating easier debugging and error resolution.

## Support this project

You are free to download, change and use it anywhere. I will regularly update this template with new resources and pages I found on the web. Don't hesitate to participate by sending a PR! Maybe your first on Github :)

If you like this resource, please follow me on GitHub. Thank you!

## Installation

1. Clone the project:

   ```bash
   git clone https://github.com/cenksari/nodejs-express-error-handling.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-express-error-handling
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

## Usage

Once the application is started, navigate to [http://localhost:3000](http://localhost:3000) in your browser or use an API client like [Postman](https://www.postman.com/) to test API routes.

## Custom Error Handling

This project utilizes a custom error handling mechanism in Express. In case of any error, a custom error object is created and an appropriate error response is sent to the client.

Example code snippets:

```javascript
throw new NotFoundError('Requested resource not found.');
```

```javascript
throw new BadRequestError('Please enter your e-mail address.');
```

```javascript
throw new AuthenticationError('User unauthorized.');
```

### Async errors

```javascript
return next(new AuthenticationError('User unauthorized.'));
```

## Contributing

If you would like to contribute, please create a new branch and submit a pull request with your changes. Review may be needed before acceptance.
