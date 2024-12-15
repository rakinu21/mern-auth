
import express from 'express'
import { Login , Register } from '../controllers/authController.js';
const router = express.Router();

router.get('/login' , Login)
router.get('/register', Register)

export default router