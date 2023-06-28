import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const { userID } = useParams();
  console.log(userID);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div>
      <p>
        address:
        <br />
        city:{user.address.city}
      </p>
    </div>
  );
};

export default SingleUser;
