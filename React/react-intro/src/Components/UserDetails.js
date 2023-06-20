let UserDetails = (props) => {
  let { Phone, WebSite, CompanyName, companyCatchPhase, companyBs } = props;
  return (
    <>
      {" "}
      <p>Phone:{Phone}</p>
      <p>WebSite:{WebSite}</p>
      <p>
        Company:
        <br />
        Name:{CompanyName},<br />
        catchPhrase:{companyCatchPhase},<br />
        bs:{companyBs}
      </p>
    </>
  );
};
export default UserDetails;
