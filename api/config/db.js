import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`connected to the mongoDB || ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}