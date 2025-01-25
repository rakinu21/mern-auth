import { useSelector } from "react-redux";
import "./styles/usersInfo.scss";
import { useNavigate, Link } from "react-router-dom";

const UsersInfo = () => {

  const userInfo = useSelector((state) => state.auth.userInfo); // Get user info from Redux


  return (
    <div className="usersInfo">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-info">
          <span className="label">Name:</span>
          <span className="value">{userInfo.user.name}</span>
        </div>
        <div className="profile-info">
          <span className="label">Email:</span>
          <span className="value">{userInfo.user.email}</span>
        </div>
        <Link to={`/updateRrofile/${userInfo.user._id}`}>
          <button className="edit-btn">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UsersInfo;
