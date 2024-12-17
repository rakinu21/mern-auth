import express from 'express'
import dotenv from 'dotenv'
import connectMongoDB from './config/connectDB.js'
import router from './routes/authRoutes.js'
import routerUser from './routes/UserRoutes.js'
dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.use(express.json())
app.use('/api',router)
app.use('api/user' , routerUser)
app.listen(process.env.PORT || 3000, () => {
    connectMongoDB()
    console.log(`server running on port ${process.env.PORT}`)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: true,
        message,
        statusCode
    })
})