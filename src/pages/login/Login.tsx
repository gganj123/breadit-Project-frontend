
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.svg';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { GoogleLogin } from 'react-google-login';

// kakao KEY, URI, URL
const KAKAO_KEY = '';
const REDIRECT_URI = ``;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_KEY = '';

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

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // Google 로그인 성공 처리
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
    // Google 로그인 실패 처리
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
        <GoogleLogin
          clientId={GOOGLE_KEY}
          buttonText="구글 로그인"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  );
};

export default Login;
