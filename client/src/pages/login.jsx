import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import './styles/login.scss'
import { useSelector, useDispatch } from "react-redux";
import { useState , useEffect} from "react";
import { useLoginMutation } from "../features/app/usersApiSlice";
import { setCredentials } from "../features/app/authSlice";



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isloading }] = useLoginMutation();

    const  userInfo  = useSelector((state) => state.auth.userInfo);

    useEffect(() => {
      if(userInfo){
        navigate('/profile')
    }
  },[navigate , userInfo])

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/profile')
            toast.success('user login success')
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || error.message)
        }
    }

  return (
      <div className='login'>
          
          <h1>Login</h1>

          <form  onSubmit={handleSubmit}>
              <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" disabled={isloading}>
        {isloading ? 'Loading...' : 'Login'}
        </button>    
          </form>
      
          <p> no already account ? <Link to={'/register'}><span>Register</span></Link></p>
    </div>
  )
}

export default Login