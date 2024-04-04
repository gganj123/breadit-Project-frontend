import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '/Logo.svg';
import { Input } from '../../components/atoms/input/Input';
import Button from '../../components/atoms/buttons/Button';
import { BsChatFill } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 70px;
  margin-bottom: 50px;
`;
const SignUpTitle = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #616161;
  margin: 10px 20px 20px;
`;
const SocialLoginTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 20px;
`;
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
      <Container>
        <Link to="/">
          <LogoImage src={Logo} className="logo" alt="Vite logo" />
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
          <Button
            type="submit"
            text="로그인"
            backColor="#FFCB46"
            textColor="#000000"
            onClick={() => handleLogin()}
          />
        </form>
        <Link to="/signup">
          <SignUpTitle>회원가입</SignUpTitle>
        </Link>
        <SocialLoginTitle>SNS 계정으로 로그인</SocialLoginTitle>
        <Button
          type="button"
          text="카카오 로그인"
          backColor="#FEE500"
          textColor="#000000"
          onClick={() => kakaohandleLogin()}
          icon={<BsChatFill />}
        />
        <Button
          type="button"
          text="네이버 로그인"
          backColor="#03C75A"
          textColor="#FFFFFF"
          onClick={() => naverhandleLogin()}
          icon={<SiNaver />}
        />
        <Button
          type="button"
          text="구글 로그인"
          backColor="#F2F2F2"
          textColor="#000000"
          onClick={() => googlehandleLogin()}
          icon={<FcGoogle />}
        />
      </Container>
    </>
  );
};

export default Login;
