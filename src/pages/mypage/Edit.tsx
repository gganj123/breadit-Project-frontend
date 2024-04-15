/**
 * 마이페이지 - 회원 정보 수정 페이지
 */
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/buttons/Button';
import { SignUpInput } from '../../components/atoms/input/SignUpInput';
import ProfileImageUpload from './ProfileImageUpload';
import { useAuth } from '../login/AuthContext';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
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
  padding: 40px;
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
  margin-top: 50px;
  margin-bottom: 50px;
`;
export default function Edit() {
  const { user, updateUserInfo } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || '',
    nickname: user?.nickname || '',
    formData: user?.profile || '',
    id: user?._id || '', // 여기서 _id 추가
  });

  const handleRemoveImage = () => {
    const defaultImage =
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    setFormData((prevData) => ({ ...prevData, profile: defaultImage }));
  };

  // 이미지 업로드 핸들러
  const handleImageChange = (imageUrl: string) => {
    console.log('Received image URL:', imageUrl);
    setFormData({ ...formData, profile: imageUrl });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUserInfo({
        ...user,
        id: formData?.id,
        nickname: formData?.nickname,
        email: formData?.email,
        profile: formData?.formData,
      });
      console.log(formData?.id);
      console.log(formData?.nickname);
      console.log(formData?.email);
      console.log(formData?.formData);
      alert('수정 완료했습니다.');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

  return (
    <PageContainer>
      <Title>회원정보 수정</Title>
      <FormContainer>
        <ProfileImageUpload
          src={formData.formData}
          onImageUpload={handleImageChange}
          onRemoveImage={handleRemoveImage}
        />
        <Email>{formData.email}</Email>
        <Form onSubmit={handleSubmit}>
          {/*<SignUpInput
            type="password"
            label="비밀번호"
            name="password"
            value={formData.password || ''}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />*/}

          <SignUpInput
            type="text"
            label="닉네임"
            name="nickname"
            value={formData.nickname}
            onChange={(e) =>
              setFormData({ ...formData, nickname: e.target.value })
            }
          />

          <Button
            type="submit"
            text="수정 완료"
            backcolor="#575757"
            textcolor="#FFFFFF"
            height="60px"
            width="100%"
          />
        </Form>
      </FormContainer>
    </PageContainer>
  );
}
