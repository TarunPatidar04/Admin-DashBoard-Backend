import express from 'express';
import { getRegister, home, postRegister,  } from '../controllers/auth.controller.js';
const router = express.Router();

router.route('/').get(home);


router.route('/getregister').get(getRegister);
router.route('/postregister').post(postRegister);


export default router;