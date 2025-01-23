import { Link } from "react-router-dom";
import './styles/register.scss'

const Register = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
    
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
          
    <h1>Edit Profile</h1>

    <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={user.name}/>
        <input type="email" placeholder="email" value={user.email}/>
        <input type="password" placeholder="password" />
        <input type="passwrod" placeholder="confirm password" />

          <button type="submit">edit</button>    
          </form>
</div>
  )
}

export default Register