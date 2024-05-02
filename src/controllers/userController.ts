import { Request, Response } from 'express';

import { NotFoundError } from '../errors/NotFoundError';
import { BadRequestError } from '../errors/BadRequestError';
import { AuthenticationError } from '../errors/AuthenticationError';

const signIn = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || email === '') {
    throw new BadRequestError('Please enter your e-mail address.');
  } else if (!password || password === '') {
    throw new BadRequestError('Please enter your password.');
  }

  const val = {
    data: req.body,
    title: 'Signed in successfully.',
  };

  return res.send(val);
};

const signUp = (req: Request, res: Response) => {
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

const reset = (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email || email === '') {
    throw new BadRequestError('Please enter your e-mail address.');
  }

  const val = {
    data: req.body,
    title: 'Password Reset successfully.',
  };

  return res.send(val);
};

export { signIn, signUp, reset };
