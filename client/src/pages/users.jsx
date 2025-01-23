
import './styles/users.scss';
const Users = () => {

    const users = [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' },
        { name: 'Charlie', email: 'charlie@example.com' },
        { name: 'Diana', email: 'diana@example.com' },
        { name: 'Eve', email: 'eve@example.com' },
      ];
  return (
    <div className="users">
    <h1>User List</h1>

    {/* Column Layout */}
    <div className="users-column">
      {users.map((user, index) => (
        <div key={index} className="user">
          <span className="name">{user.name}</span>
          <span className="email">{user.email}</span>
        </div>
      ))}
          </div>
    </div>
  )
}

export default Users

