import { User } from "../model/userShema.js";
import bcryptjs from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js";

export const register= async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(401).json({ message: 'all input is required' });
        //check if user is already exist;
        const userAlradyExist = await User.findOne({ email });
        if (userAlradyExist) return res.status(401).json({ message: 'user already exist' });

        //hashing password
        const passwordHashing = bcryptjs.hashSync(password, 10);

        const user = new User({ name: name, email: email, password: passwordHashing });

        user.save();

        res.status(201).json({
            message: 'user register is successfully',
            success: true,
            user :user
        })
    } catch (error) {
        res.status({message: `Error : ${error.message}`})
    }
}


export const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(401).json({ message: 'all input is required' });
        const isUser = await User.findOne({ email });
        if (!isUser) return res.status(401).json({ message: 'user is not exist' });
        //checking the password
        const isPasswordValid = bcryptjs.compareSync(password, isUser.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'invalid credentials' });

        const token = generateToken(isUser._id);

        const { password: passwordHashing, ...rest } = isUser._doc
        
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1 * 24 * 60 *60 * 1000
        })

        res.status(201).json({
            message: 'user login',
            success: true,
            user: rest,
            token: token
        })
    } catch (error) {
        res.status({message: `Error : ${error.message}`})
    }
}


export const logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(201).json({message:'user logout'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get user profile


export const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');
        if (!user) return res.status(401).json({ message: 'user is not found' });

        res.status(200).json({
            message: 'user fetched successfully',
            success: true,
            user: user
        })
    } catch (error) {
        res.status({message: `Error : ${error.message}`})
    }
}


//update user


export const updateProfile = async (req, res) => {
    
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = bcryptjs.hashSync(password, 10);

        const updatedUser = await user.save()
        
        res.status(200).json({
            message: 'user successfully updated',
            success: true,
            user: updatedUser
        })
    } catch (error) {
        res.status({message: `Error : ${error.message}`})
    }
}



