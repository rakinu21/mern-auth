import express from 'express';
import { testuser } from '../controllers/UserController.js';

const routerUser = express.Router();

routerUser.get('/', testuser)

export default routerUser