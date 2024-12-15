import mongoose from "mongoose";

const connectMongoDB = async () => {
    
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to the monggoDB || ' + con.connection.host)
    } catch (error) {
        console.log(`error to connect MongoDB ${error.message}`)
    }
}

export default connectMongoDB