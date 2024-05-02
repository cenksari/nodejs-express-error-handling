export class AuthenticationError extends Error {
  statusCode = 401;

  constructor(public message: string) {
    super();

    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}
