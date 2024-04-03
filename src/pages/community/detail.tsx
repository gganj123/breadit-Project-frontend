import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '/Logo.svg';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParams 훅을 사용하여 id 매개변수를 가져옴

  // id에 따라 상세 정보를 가져오는 로직을 구현하시면 됩니다.

  return (
    <>
      <header>
        <div>
          <Link to="/login" className="isActive">
            Magazine
          </Link>
          <Link to="/signup">Map</Link>
          <Link to="/mypage">
            <img src={Logo} className="logo" alt="Breadit logo" />
          </Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/mypage">마이페이지</Link>
        </div>
      </header>
      <p>Detail for item with id: {id}</p>
    </>
  );
};

export default DetailPage;
