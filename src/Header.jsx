import logo from "./assets/react.svg";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />

        <div className="botoes">
          <button className="headerButton">Home</button>
          <button className="headerButton">Sobre</button>
          <button className="headerButton">Serviços</button>
          <button className="headerButton">Contato</button>
        </div>
        <div className="invisibleBox"></div>
      </header>
    </>
  );
}

export default Header;
