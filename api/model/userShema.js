import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
     email: {
        type: String,
         required: true,
        unique:true
        
    },
    password: {
        type: String,
        required: true,
        unique:true
    }
},
    {
    timestamps: true
}
)

export const User = mongoose.model('User', userShema)
