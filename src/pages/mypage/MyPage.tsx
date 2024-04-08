/**
 * 마이페이지 - 메인
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import ProfileImageUpload from './ProfileImageUpload';
const DEFAULT_IMAGE =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7.4rem;
`;

const ProfileContainer = styled.aside`
  width: 30%;
  padding: 6rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 6rem;
`;

const ContentTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export default function MyPage() {
  const handleLogOut = () => {};

  const handleDeleteAccount = () => {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);
  const navigate = useNavigate();
  const handleNavigation = (path: string) => () => navigate(path);
  return (
    <PageLayout>
      <ProfileContainer>
        <ProfileImageUpload src={profileImage} showEditIcon={false} />
        <UserProfile
          email="breadit@naver.com"
          nickname="식빵맨"
          onEditProfile={handleNavigation('/mypage/check-password')}
          onLogout={handleLogOut}
          onDeleteAccount={handleDeleteAccount}
        />
      </ProfileContainer>

      <MainContent>
        <ContentTitle>Main Content </ContentTitle>
      </MainContent>
    </PageLayout>
  );
}
