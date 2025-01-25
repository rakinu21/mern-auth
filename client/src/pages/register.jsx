import { Link , useNavigate} from "react-router-dom";
import './styles/register.scss'
import { setCredentials } from "../features/app/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState} from "react";
import { useRegisterMutation } from "../features/app/usersApiSlice";



const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isloading}] = useRegisterMutation()






    
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!name || !email || !password) return toast.error('all input is required')
      if (password !== confirmPassword) return toast.error('password not match')
      try {
      

        const res = await register({ name, email, password })

        navigate('/login');
        toast.success('register user is successfully')
        } catch (error) {
        toast.error(error.data.message || error.message)
        console.log(error)
        }
    }
  return (
    <div className='register'>
          
    <h1>Register</h1>

    <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="confirm password"  value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>

        <button type="submit" disabled={isloading}>
        {isloading ? 'Loading...' : 'Register'}
        </button>    
          </form>
        <p>have already account ? <Link to={'/login'}><span>login</span></Link></p>
</div>
  )
}

export default Register