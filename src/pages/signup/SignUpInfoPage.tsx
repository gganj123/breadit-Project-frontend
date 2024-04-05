import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import Button from '../../components/atoms/buttons/Button';
import StepIndicator from './StepIndicator';
import { SignUpInput } from '../../components/atoms/input/SignUpInput';

const PageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;
const FormContainer = styled.div`
  background-color: white;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ValidationMessage = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #e44444;
  margin-bottom: 5px;
`;

const SignUpInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [nickname, setNickname] = useState('');
  // 모든 필드가 채워져 있는지 확인
  const isFormFilled =
    email && verificationCode && password && passwordConfirm && nickname;

  // 회원가입 버튼이 활성화되어야 하는지 여부
  const isSignUpEnabled = emailValid && passwordsMatch && isFormFilled;
  const checkEmailValidity = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(checkEmailValidity(newEmail));
  };

  const sendVerificationCode = () => {
    console.log('Sending verification code');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (emailValid && passwordsMatch) {
      navigate('/signup/info/complete');
    }
  };

  return (
    <PageContainer>
      <Title>회원 정보 입력</Title>
      <StepIndicator currentStep={2} />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <SignUpInput
              type="email"
              label="이메일"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />

            <Button
              type="button"
              text="이메일 인증"
              backColor="#575757"
              textColor="#FFFFFF"
              width="110px"
              height="46px"
              onClick={sendVerificationCode}
            />
          </InputGroup>
          {!emailValid && (
            <ValidationMessage>유효한 이메일을 입력하세요.</ValidationMessage>
          )}
          <InputGroup>
            <SignUpInput
              type="text"
              label="인증번호"
              name="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />

            <Button
              type="button"
              text="확인"
              backColor="#575757"
              textColor="#FFFFFF"
              width="110px"
              height="46px"
              onClick={sendVerificationCode}
            />
          </InputGroup>
          <SignUpInput
            type="password"
            label="비밀번호"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordsMatch(e.target.value === passwordConfirm);
            }}
            icon={
              password ? (
                <IoCheckmarkCircleSharp size={24} color="#5FD08D" />
              ) : null
            }
          />
          <SignUpInput
            type="password"
            label="비밀번호 확인"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              setPasswordsMatch(e.target.value === password);
            }}
            icon={
              passwordsMatch && password && passwordConfirm ? (
                <IoCheckmarkCircleSharp size={24} color="#5FD08D" />
              ) : null
            }
          />
          {!passwordsMatch && (
            <ValidationMessage>비밀번호가 일치하지 않습니다.</ValidationMessage>
          )}
          <SignUpInput
            type="text"
            label="닉네임"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button
            type="submit"
            text="회원가입"
            backColor="#575757"
            textColor="#FFFFFF"
            width="100%"
            height="55px"
            disabled={!isSignUpEnabled}
          />
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUpInfoPage;
