import { User } from "../models/UserShema.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/Error.js";
export const Register = async (req, res ,next) => {
     
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) return res.status(401).json({ message: ' all input is required' });
        
        const UserAlreadyExist = await User.findOne({ email });
        if (UserAlreadyExist) return res.status(401).json({ message: 'user already exist' });

        const hashPassword = await bcryptjs.hash(password, 10);

        const user = new User({ username: username, email: email, password: hashPassword });

        user.save();

        res.status(201).json({
            message: ' user created is successfully',
            success: true,
            user
        })
        
    } catch (error) {
        // res.status(401).json({message: error.message})
        next(errorHandler(500 , error.message))
    }
}
export const Login = async (req, res) => {
  console.log(req.body)
}

