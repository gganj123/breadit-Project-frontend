import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/buttons/Button';
import StepIndicator from './StepIndicator';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

const PageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;
const Message = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const SubMessage = styled.div`
  text-align: center;
  font-size: 12px;
  color: #5c5c5c;
  margin: 30px;
`;

const Icon = styled.div`
  text-align: center;
  margin: 40px;
`;
const SignUpCompletePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageContainer>
        <Title>회원 가입 완료</Title>
        <StepIndicator currentStep={3} />
        <Icon>
          <IoCheckmarkCircleSharp size={80} color="#5FD08D" />
        </Icon>
        <Message>식빵님,</Message>
        <Message>회원가입을 축하합니다.</Message>
        <SubMessage>로그인 후 다양한 서비스를 이용해보세요.</SubMessage>
        <ButtonsContainer>
          <Button
            type="button"
            text="홈으로"
            backColor="#575757"
            textColor="#FFFFFF"
            width="220px"
            height="60px"
            onClick={() => navigate('/')}
          />
          <Button
            type="button"
            text="로그인"
            backColor="#575757"
            textColor="#FFFFFF"
            width="220px"
            height="60px"
            onClick={() => navigate('/login')}
          />
        </ButtonsContainer>
        <Button
          type="button"
          text="마이페이지"
          backColor="#575757"
          textColor="#FFFFFF"
          width="220px"
          height="60px"
          onClick={() => navigate('/mypage')}
        />
      </PageContainer>
    </>
  );
};

export default SignUpCompletePage;
