import express from 'express'
import dotenv from 'dotenv'
import connectMongoDB from './config/connectDB.js'
import router from './routes/authController.js'
dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/api',router)

app.listen(process.env.PORT || 3000, () => {
    connectMongoDB()
    console.log(`server running on port ${process.env.PORT}`)
})