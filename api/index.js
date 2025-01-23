import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/api/auth',authRouter)

app.listen(process.env.PORT || 4000, () => {
    connectDb()
    console.log('server running')
})