import express from 'express';

import { signIn, signUp, reset } from '../controllers/userController';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/reset', reset);

export default router;
