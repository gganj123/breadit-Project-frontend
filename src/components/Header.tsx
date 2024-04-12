import { Link } from 'react-router-dom';
import { useAuth } from '../pages/login/AuthContext'; // AuthContext의 경로에 맞게 수정하세요.
import Logo from '/Logo.svg';

const Header = () => {
  const { user, logout } = useAuth(); // useAuth 훅으로 로그인 상태와 로그아웃 함수 가져오기

  return (
    <header className="flex_default header">
      <nav className="main_nav">
        <ul>
          <li>
            <Link to="/magazines">매거진</Link>
          </li>
          <li>
            <Link to="/map">지도</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
      </nav>
      <h1 id="logo">
        <Link to="/">
          <img src={Logo} className="logo" alt="Breadit logo" />
        </Link>
      </h1>
      <ul className="user_ul">
        {user ? (
          <>
            <li>{user.name || 'No Nickname'}</li>
            <li>
              <button onClick={logout}>로그아웃</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
