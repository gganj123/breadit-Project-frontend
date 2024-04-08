/**
 * 마이페이지 - 회원 정보 수정 페이지
 */
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/buttons/Button';
import { SignUpInput } from '../../components/atoms/input/SignUpInput';
import ProfileImageUpload from './ProfileImageUpload';

const DEFAULT_IMAGE =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  height: 648px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  align-self: flex-start;
  width: 100%;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 70px;
`;
const Email = styled.div`
  font-size: 16px;
  text-align: center;
  color: #777777;
  margin-bottom: 50px;
`;
export default function Edit() {
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);

  const handleImageChange = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };
  const handleRemoveImage = () => {
    setProfileImage(DEFAULT_IMAGE);
  };
  return (
    <>
      <PageContainer>
        <Title>회원정보 입력</Title>
        <FormContainer>
          <ProfileImageUpload
            src={profileImage}
            onImageUpload={handleImageChange}
            onRemoveImage={handleRemoveImage}
          />
          <Email>breadit@naver.com</Email>
          <Form>
            <SignUpInput
              type="password"
              label="비밀번호"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <SignUpInput
              type="text"
              label="닉네임"
              name="nickname"
              value={nickname}
              width="100%"
              onChange={(e) => setNickname(e.target.value)}
            />
          </Form>
          <Button
            type="submit"
            text="입력 완료"
            backColor="#575757"
            textColor="#FFFFFF"
            height="70px"
          />
        </FormContainer>
      </PageContainer>
    </>
  );
}
