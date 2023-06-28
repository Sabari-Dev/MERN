import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ id, otherprops, users }) => {
  console.log(otherprops);
  const {
    website,
    phone,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    company: { name, catchPhrase, bs },
  } = otherprops;
  return (
    <div>
      <h2>UserDetails Component</h2>
      <p>WebSite:{website}</p>
      <p>Phone:{phone}</p>
      <p>zipcode:{zipcode}</p>
      <Link to={`/users/${id}`}>More details...</Link>
    </div>
  );
};

export default UserDetails;
