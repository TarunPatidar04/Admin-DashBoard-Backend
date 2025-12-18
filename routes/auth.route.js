import express from 'express';
import { getRegister, home, login, postRegister,  } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { registerSchema } from '../validators/auth.validate.js';
const router = express.Router();

router.route('/').get(home);


router.route('/getregister').get(getRegister);
router.route('/postregister').post(validate(registerSchema),postRegister);
router.route('/login').post(login);


export default router;