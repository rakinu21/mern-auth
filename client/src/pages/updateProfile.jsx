import { Link, useNavigate } from "react-router-dom";
import './styles/register.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useUpdateUserProfileMutation } from "../features/app/usersApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../features/app/authSlice";

const EditProfile = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  const dispatch = useDispatch()

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.user.email);
      setName(userInfo.user.name);
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    try {
      const res = await updateProfile({
        id: userInfo.user._id, // Pass the ID dynamically
        name,
        email,
        password,
      }).unwrap(); // Unwrap the response to handle errors correctly

      toast.success(res.message || 'User successfully updated');
      dispatch(setCredentials({user: res.user}))
      navigate('/profile');
    } catch (error) {
      toast.error(error?.data?.message || error.message || 'An error occurred');
      console.error(error);
    }
  };

  return (
    <div className="register">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Edit'}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
