import { Link } from 'react-router-dom';
import Logo from '/Logo.svg';

export default function CommunityPage() {
  return (
    <>
      <header>
        <div>
          <Link to="/login" className="isActive">
            Magazine
          </Link>
          <Link to="/signup">Map</Link>
          <Link to="/mypage">
            <img src={Logo} className="logo" alt="Vite logo" />
          </Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/mypage">마이페이지</Link>
        </div>
      </header>
      <div className="container">
        <div>
          <h2 className="oleo-script-bold">Community</h2>
        </div>
      </div>
    </>
  );
}
