import { CustomError } from "./CustomError";

export class AuthenticationError extends CustomError {
  StatusCode = 401;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }

  serialize(): { message: string; } {
    return { message: this.message };
  }
}
