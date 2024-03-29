import { useState, useEffect } from "react";
import UserDetails1 from "./UserDetails1";
const Users1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Users Component</h2>

      {users.map(({ id, name, username, email, ...otherProps }) => (
        <div key={id}>
          <h2>Name : {name}</h2>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <UserDetails1 otherProps={otherProps} id={id} users={users} />
        </div>
      ))}
    </div>
  );
};

export default Users1;
