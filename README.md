# Nodejs express custom error handling

This project is a Node.js and Express application developed with a special error handling mechanism.

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
