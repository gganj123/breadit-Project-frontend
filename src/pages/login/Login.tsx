import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.svg';
import { Input } from '../../components/atoms/input/Input';
import Button from '../../components/atoms/buttons/Button';
const RedirectUri = `${import.meta.env.VITE_REDIRECT_URI}`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${RedirectUri}&response_type=code`;
const naverURL = `https:nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&state=false&redirect_uri=${RedirectUri}`;
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${RedirectUri}&response_type=code&scope=email profile`;

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
  const naverhandleLogin = () => {
    window.location.href = naverURL;
  };
  const googlehandleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <>
      <div>
        <Link to="/">
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
        <Button
          type="button"
          text="네이버 로그인"
          color="#03c75a"
          onClick={() => naverhandleLogin()}
        />
        <Button
          type="button"
          text="구글 로그인"
          color="#03c75a"
          onClick={() => googlehandleLogin()}
        />
      </div>
    </>
  );
};

export default Login;
