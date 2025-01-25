import React, { useEffect } from 'react';
import { useGetAllUserMutation } from '../features/app/usersApiSlice';
import './styles/users.scss';

const Users = () => {
    const [getAllUser, { data, isLoading, error }] = useGetAllUserMutation();

    useEffect(() => {
        // Fetch all users when the component loads
        const fetchUsers = async () => {
            try {
                await getAllUser(); // Call the API to fetch all users
            } catch (err) {
                console.error('Failed to fetch users:', err);
            }
        };

        fetchUsers();
    }, [getAllUser]);

    return (
        <div className="users">
            <h1>User List</h1>

            {isLoading && <p>Loading...</p>}
            {error && <p className="error">Failed to load users. Please try again later.</p>}
            
            {/* Display user data */}
            {data?.users && (
                <div className="users-column">
                    {data.users.map((user, index) => (
                        <div key={index} className="user">
                            <span className="name">{user.name}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
