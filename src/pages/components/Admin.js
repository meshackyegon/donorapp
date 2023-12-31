import React, { useState, useEffect } from 'react';
import { getUserList, deleteUser } from '../../services/api/admin';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user list on component mount
    const fetchUserList = async () => {
      const userList = await getUserList();
      setUsers(userList);
    };

    fetchUserList();
  }, []);

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    // Update user list after deletion
    const updatedUserList = users.filter((user) => user.id !== userId);
    setUsers(updatedUserList);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
