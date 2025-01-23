import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`connected to the mongoDB || ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}