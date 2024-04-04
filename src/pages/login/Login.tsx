import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.svg';
import { Input } from '../../components/atoms/input/Input';
import Button from '../../components/atoms/buttons/Button';

// kakao KEY, URI, URL
const KAKAO_KEY = '337cc9b1db3858ebe4a985229168765b';
const REDIRECT_URI = `http://127.0.0.1:5173`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = () => {};

  const kakaohandleLogin = () => {
    window.location.href = kakaoURL;
  };

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

      <div>
        <Link to="/mypage">
          <img src={Logo} className="logo" alt="Vite logo" />
        </Link>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" text="로그인" color="#f0c14b" />
        </form>
        <div>회원가입</div>
        <div>소셜 로그인</div>
        <Button
          type="button"
          text="카카오 로그인"
          color="#f7e600"
          onClick={() => kakaohandleLogin()}
        />
        <Button type="button" text="네이버 로그인" color="#03c75a" />
      </div>
    </>
  );
};

export default Login;
