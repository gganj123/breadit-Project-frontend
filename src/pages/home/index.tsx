import { Link } from "react-router-dom";

import Logo from "/Logo.svg";

export default function Home() {
  return (
    <div>
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
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to="/login">게시글 {index}</Link>
          </div>
        ))}
      </div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
}
