import { useSelector , useDispatch } from 'react-redux';
import './header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/app/authSlice';
import { useLogoutMutation} from '../features/app/usersApiSlice';
import { toast } from 'react-toastify';


const Header = () => {

  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login')
      toast.success('logout successfully')
    } catch (error) {
      console.log(error)
      toast.error('error to logout')
    }
  }


  const userInfo = useSelector((state) => state.auth.userInfo);
  
  return (
      <div className='header'>
          <h1>auth</h1>

          <div className="links">
        <ul>
          {userInfo ?
            (<>
              <Link to={'/users'}><li>Users</li></Link> 
                <Link to={'/profile'}><li>Profile</li></Link> 
              <Link onClick={handleLogout}><li>logout</li></Link>
            </>) :
                  
            (<> 
              <Link to={'/users'}><li>Users</li></Link>
              <Link to={'/login'}><li>login</li></Link>
            </>)
          }
          
                 
              </ul>
          </div>
    </div>
  )
}

export default Header