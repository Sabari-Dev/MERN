import User from "./User";
import { users } from "./data";

let Users = () => {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          userName={user.username}
          email={user.email}
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipCode={user.address.zipcode}
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
          phone={user.phone}
          webSite={user.website}
          companyName={user.company.name}
          companyCatchPhase={user.company.catchPhrase}
          companyBs={user.company.bs}
        />
      ))}
    </>
  );
};
export default Users;
