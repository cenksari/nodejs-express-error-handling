import express from 'express';

import { reset, signIn, signUp } from '../controllers/userController';

const router = express.Router();

router.post('/reset', reset);
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;
