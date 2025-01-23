import { Link } from "react-router-dom";

import './styles/login.scss'

const Login = () => {


    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            console.log('success to submit')
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <div className='login'>
          
          <h1>Login</h1>

          <form action="">
              <input type="text" placeholder="name"/>
              <input type="email" placeholder="email" />

              <button type="submit">Register</button>    
          </form>
      
          <p> no already account ? <Link to={'/register'}><span>Register</span></Link></p>
    </div>
  )
}

export default Login