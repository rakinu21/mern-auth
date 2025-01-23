import express from 'express';
import { getUserProfile, login, logout, register, updateProfile } from '../controllers/useController.js';
import { protect } from '../middlewares/authMiddleware.js';

const authRouter = express.Router();

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.get('/profile/:id',getUserProfile)
authRouter.put('/updateProfile/:id', protect, updateProfile)

export default authRouter