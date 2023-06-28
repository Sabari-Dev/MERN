import React from "react";
import { useState, useEffect } from "react";
import UserDetails from "./UserDetails";

const Users = () => {
  const [users, setUSers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUSers(data));
  }, []);
  console.log(users);
  return (
    <div className="Users">
      <h1>User Component</h1>
      {users.map(({ id, name, username, email, ...otherprops }) => (
        <div className={`user-${id}`} key={id}>
          <p>Name:{name}</p>
          <p>UserName:{username}</p>
          <p>Email:{email}</p>
          <UserDetails id={id} otherprops={otherprops} users={users} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;
