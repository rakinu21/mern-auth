import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import path from 'path'


const __dirname = path.resolve();


const app = express();


app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req ,res) => {
    res.sendFile(path.join(__dirname, 'client' , 'dist', 'index.html'))
})

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
    console.log('server running', process.env.PORT)
})

