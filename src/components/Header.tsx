import { Link } from 'react-router-dom';
import Logo from '/Logo.svg';

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            Magazine
          </Link>
        </li>
        <li>
          <Link to="/">Map</Link>
        </li>
        <li>
          <h1>
            <Link to="/">
              <img src={Logo} className="logo" alt="Breadit logo" />
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/login">Login / Join</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
