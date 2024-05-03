import { Request, Response, NextFunction } from 'express';

import { NotFoundError } from '../errors/NotFoundError';
import { BadRequestError } from '../errors/BadRequestError';
import { AuthenticationError } from '../errors/AuthenticationError';

/**
 * Sign in function that handles user authentication.
 *
 * @param {Request} req - The request object containing user data.
 * @param {Response} res - The response object used to send the response.
 * @throws {BadRequestError} If the email or password is missing or empty.
 * @return {Response} The response object with the sign-in result.
 */
const signIn = (req: Request, res: Response): Response => {
  const { email, password } = req.body;

  if (!email || email === '') {
    throw new BadRequestError('Please enter your e-mail address.');
  } else if (!password || password === '') {
    throw new BadRequestError('Please enter your password.');
  } else if (password !== '1234') {
    throw new AuthenticationError('Wrong password.');
  }

  const val = {
    data: req.body,
    title: 'Signed in successfully.',
  };

  return res.send(val);
};

/**
 * Sign up function that handles user registration.
 *
 * @param {Request} req - The request object containing user data.
 * @param {Response} res - The response object used to send the response.
 * @throws {BadRequestError} If the email, name, or lastname is missing or empty.
 * @return {Response} The response object with the sign-up result.
 */
const signUp = (req: Request, res: Response): Response => {
  const { email, name, lastname } = req.body;

  if (!email || email === '') {
    throw new BadRequestError('Please enter your e-mail address.');
  } else if (!name || name === '') {
    throw new BadRequestError('Please enter your name.');
  } else if (!lastname || lastname === '') {
    throw new BadRequestError('Please enter your last name.');
  }

  const val = {
    data: req.body,
    title: 'Signed up successfully.',
  };

  return res.send(val);
};

/**
 * Asynchronously resets the password based on the provided email.
 *
 * @param {Request} req - The request object containing user data.
 * @param {Response} res - The response object used to send the response.
 * @param {NextFunction} next - The next middleware function in the application's request-response cycle.
 * @return {Promise<Response | void>} The response or void promise after resetting the password.
 */
const reset = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email } = req.body;

  if (!email || email === '') {
    return next(new BadRequestError('Please enter your e-mail address.'));
  }

  const val = {
    data: req.body,
    title: 'Password reset successfully.',
  };

  return res.send(val);
};

/**
 * Throws a NotFoundError with the message 'Not found!'.
 *
 * @return {Response} The response object.
 */
const notFound = (): Response => {
  throw new NotFoundError('Not found!');
};

export { signIn, signUp, reset, notFound };
