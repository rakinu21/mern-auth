import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
      <div className='header'>
          <h1>auth</h1>

          <div className="links">
              <ul>
                 <Link to={'/users'}><li>Users</li></Link> 
                  <Link to={'/profile'}><li>Profile</li></Link> 
                  <Link to ={'/login'}><li>login</li></Link> 
              </ul>
          </div>
    </div>
  )
}

export default Header