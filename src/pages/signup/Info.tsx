/**
 * 회원가입 입력 페이지 ( 두번째 )
 */
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
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
  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });
  const [validation, setValidation] = useState({
    emailValid: true,
    passwordsMatch: true,
  });

  const { verificationCode, password, passwordConfirm } = formData;
  const { emailValid, passwordsMatch } = validation;
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const isFormFilled = Object.values(formData).every((value) => value);
  const isSignUpEnabled = emailValid && passwordsMatch && isFormFilled;

  // 이메일 유효성 검사
  const validateEmail = async (email: string) => {
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
      return false;
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
      return false;
    }

    if (/\s/.test(password)) {
      setPasswordError('비밀번호에 공백을 포함할 수 없습니다.');
      return false;
    }
    setPasswordError('');
    return true;
  };
  const validateNickname = (nickname: string) => {
    if (!nickname) {
      setNicknameError('닉네임을 입력해주세요.');
      return false;
    }
    if (/\s/.test(nickname)) {
      setNicknameError('닉네임에 공백을 포함할 수 없습니다.');
      return false;
    }
    setNicknameError('');
    return true;
  };

  // Input 값 관리 / 유효성 에러 메세지
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'email') {
      await validateEmail(value);
    }
    if (name === 'password') {
      validatePassword(value);
    }
    if (name === 'passwordConfirm') {
      setValidation((prevValidation) => ({
        ...prevValidation,
        passwordsMatch: value === formData.password,
      }));
    }
    if (name === 'nickname') {
      validateNickname(value);
    }
  };

  // 회원가입 입력 값 제출
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!passwordsMatch) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (
      !validatePassword(formData.password) ||
      !validateNickname(formData.nickname)
    ) {
      return;
    }

    try {
      // 회원가입 요청
      const response = await axios.post(`${apiUrl}/users`, {
        email: formData.email,
        password: formData.password,
        nickname: formData.nickname,
      });

      console.log('회원가입 성공:', response.data);
      handleSignUpSuccess(formData.nickname);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        '회원가입 중 오류가 발생했습니다.';
      if (axiosError.response?.status === 409) {
        setEmailError(errorMessage);
      } else {
        console.error(errorMessage);
      }
    }
  };
  // 회원가입 최종 완료
  const handleSignUpSuccess = (nickname: string) => {
    navigate('/signup/info/complete', { state: { nickname } });
  };
  // 구현해야 함
  function checkEmail() {
    console.log('이메일 인증 확인');
  }
  // 구현해야 함
  function checkVerificationCode() {
    console.log('인증번호 확인');
  }

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
              value={formData.email}
              onChange={handleInputChange}
            />

            <Button
              type="button"
              text="이메일 인증"
              backcolor="#575757"
              textcolor="#FFFFFF"
              width="110px"
              height="46px"
              onClick={checkEmail}
            />
          </InputGroup>
          {emailError && <ValidationMessage>{emailError}</ValidationMessage>}
          <InputGroup>
            <SignUpInput
              type="text"
              label="인증번호"
              name="verificationCode"
              value={verificationCode}
              onChange={handleInputChange}
            />

            <Button
              type="button"
              text="확인"
              backcolor="#575757"
              textcolor="#FFFFFF"
              width="110px"
              height="46px"
              onClick={checkVerificationCode}
            />
          </InputGroup>
          <SignUpInput
            type="password"
            label="비밀번호"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            icon={
              password ? (
                <IoCheckmarkCircleSharp size={24} color="#5FD08D" />
              ) : null
            }
          />
          {passwordError && (
            <ValidationMessage>{passwordError}</ValidationMessage>
          )}
          <SignUpInput
            type="password"
            label="비밀번호 확인"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
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
            value={formData.nickname}
            onChange={handleInputChange}
          />
          {nicknameError && (
            <ValidationMessage>{nicknameError}</ValidationMessage>
          )}
          <Button
            type="submit"
            text="회원가입"
            backcolor={isSignUpEnabled ? '#575757' : '#B7B7B7'}
            textcolor="#FFFFFF"
            width="100%"
            height="60px"
            disabled={!isSignUpEnabled}
          />
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUpInfoPage;
