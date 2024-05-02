export class BadRequestError extends Error {
  statusCode = 400;

  constructor(public message: string) {
    super();

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
