
import React, { useState } from "react";
const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ]);

  function handleEdit(id, key, value) {
    setUsers(users.map(user => 
      user.id === id ? { ...user, [key]: value } : user
    ));
  }

  return (
    <div>
      <h3>User List</h3>
      <ul>
      {users.map(user => (
  <li key={user.id}>
    <span>Name: {user.name}, Age: {user.age}</span>
    <button onClick={() => {
      const newName = prompt("Enter new name:", user.name);
      if (newName) handleEdit(user.id, "name", newName);
    }}>
      Edit Name
               </button>
  
            <button onClick={() => {
              const newAge = prompt("Enter new age:", user.age);
              if (newAge) handleEdit(user.id, "age", parseInt(newAge));
            }}>Edit Age</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

