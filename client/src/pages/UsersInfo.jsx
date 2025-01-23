import './styles/usersInfo.scss';
import { useNavigate ,Link} from 'react-router-dom';

const UsersInfo = () => {
  // Simulating user data (replace with actual user data from state or context)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/updateProfile'); // Navigate to the profile edit page
  };

  return (
    <div className="usersInfo">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-info">
          <span className="label">Name:</span>
          <span className="value">{user.name}</span>
        </div>
        <div className="profile-info">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
              </div>
     <Link to={'/updateRrofile/:id'}>
          <button className="edit-btn">
            Edit Profile
         </button>
      </Link>
       
      </div>
    </div>
  );
};

export default UsersInfo;
