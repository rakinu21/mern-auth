import { Link } from "react-router-dom";
import './styles/register.scss'

const Register = () => {

    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            console.log('success to submit')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='register'>
          
    <h1>Register</h1>

    <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="passwrod" placeholder="confirm password" />

          <button type="submit">Register</button>    
          </form>
        <p>have already account ? <Link to={'/login'}><span>login</span></Link></p>
</div>
  )
}

export default Register