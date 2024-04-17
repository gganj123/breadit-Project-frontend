import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '/Logo.svg';
import Button from '../../components/atoms/buttons/Button';
import { Input } from '../../components/atoms/input/Input';
import axios from 'axios';

const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

const LogoImage = styled.img`
  width: 250px;
  height: 70px;
  margin-bottom: 50px;
`;
const PageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;
const MessageContainer = styled.div`
  margin-bottom: 40px;
`;
const Message = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #575757;
  margin-bottom: 10px;
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #e44444;
  margin-bottom: 5px;
`;
export default function CheckPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };
  const handleNavigation = () => {
    navigate('/mypage');
  };
  const userId = localStorage.getItem('id');
  const handleSubmit = async () => {
    if (!password.trim()) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/users/${userId}/verify-password`,
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 토큰 추가
          },
        }
      );

      if (response.data.success) {
        setErrorMessage('');
        alert('비밀번호가 확인되었습니다.');
        navigate('/mypage/check-password/edit');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message); // 서버 에러 메시지 설정
      } else {
        setErrorMessage('비밀번호 확인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <>
      <PageContainer>
        <Link to="/">
          <LogoImage src={Logo} className="logo" alt="Vite logo" />
        </Link>
        <MessageContainer>
          <Message>회원 정보를 수정하기 위해</Message>
          <Message>비밀번호를 다시 한번 확인합니다.</Message>
        </MessageContainer>
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          width="420px"
          onChange={handlePasswordChange}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <ButtonContainer>
          <Button
            type="submit"
            text="확인"
            backcolor="#FFCB46"
            textcolor="#000000"
            width="420px"
            onClick={handleSubmit}
          />
          <Button
            type="button"
            text="취소"
            backcolor="#fdfaf7"
            textcolor="#000000"
            width="420px"
            onClick={handleNavigation}
          />
        </ButtonContainer>
      </PageContainer>
    </>
  );
}
