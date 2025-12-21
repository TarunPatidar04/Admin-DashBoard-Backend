import express from 'express';
import { getRegister, home, login, postRegister, user,  } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema } from '../validators/auth.validate.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.route('/').get(home);


router.route('/getregister').get(getRegister);
router.route('/postregister').post(validate(registerSchema),postRegister);
router.route('/login').post(validate(loginSchema),login);
router.route('/user').get(authMiddleware,user);


export default router;