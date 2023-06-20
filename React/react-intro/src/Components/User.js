import UserDetails from "./UserDetails";

let User = (props) => {
  let {
    id,
    name,
    userName,
    email,
    street,
    suite,
    city,
    zipCode,
    lat,
    lng,
    phone,
    webSite,
    companyName,
    companyCatchPhase,
    companyBs,
  } = props;
  return (
    <div className="user" key={id}>
      <p>Name:{name}</p>
      <p>User name:{userName}</p>
      <p>Email:{email}</p>
      <p>
        address:
        <br />
        street:{street},<br />
        suite:{suite},<br />
        city:{city},<br />
        zip-code:{zipCode},<br />
        geo:
        <br />
        lat:{lat},lng:{lng}.
      </p>
      <UserDetails
        phone={phone}
        webSite={webSite}
        companyName={companyName}
        companyCatchPhase={companyCatchPhase}
        companyBs={companyBs}
      />
      <hr />
    </div>
  );
};

export default User;
