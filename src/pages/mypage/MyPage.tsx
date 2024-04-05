import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '/Logo.svg';
import Button from '../../components/atoms/buttons/Button';
import { Input } from '../../components/atoms/input/Input';

const PageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
const MessageContainer = styled.div`
  margin-bottom: 40px;
`;
const LogoImage = styled.img`
  width: 250px;
  height: 70px;
  margin-bottom: 50px;
`;

const Message = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #575757;
  margin-bottom: 10px;
`;
export default function MyPage() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
        <ButtonContainer>
          <Button
            type="submit"
            text="확인"
            backColor="#FFCB46"
            textColor="#000000"
            width="420px"
          />
        </ButtonContainer>
      </PageContainer>
    </>
  );
}
