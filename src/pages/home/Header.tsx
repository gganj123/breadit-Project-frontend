import { Link } from "react-router-dom";
import Logo from "/Logo.svg";
import "./common.css";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/login" className="isActive">
            Magazine
          </Link>
        </li>
        <li>
          <Link to="/signup">Map</Link>
        </li>
        <li>
          <h1>
            <Link to="/">
              <img src={Logo} className="logo" alt="Breadit logo" />
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/signup">Community</Link>
        </li>
        <li>
          <Link to="/login">Login / Join</Link>
        </li>
      </ul>
    </header>
  );
}
