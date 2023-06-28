import Image from "./Image";
let Header = () => {
  return (
    <header>
      <div id="banner">
        <div className="content">
          <h3 className="name">SABARINATHAN.A</h3>
          <p className="design">
            Full Stack <span className="green">M</span>
            <span className="gray">E</span>
            <span className="blue">R</span>
            <span className="Lgreen">N</span> developer
          </p>
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
    </header>
  );
};

export default Header;
