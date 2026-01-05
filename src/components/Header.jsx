import logo from "../assets/logo-soab.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* <img src={logo} alt="SOAB" className="logo" /> */}
      <span className="tagline">Simple, como tiene que ser.</span>
    </header>
  );
}
