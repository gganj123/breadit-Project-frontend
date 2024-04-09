/**
 * 마이페이지 - 메인
 */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import ProfileImageUpload from './ProfileImageUpload';
import { useProfileImage } from './ProfileImageContext';
import MyPageList from '../../components/MypageList';
import RightArrow from '/right-arrow.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

const MypageList = styled.div`
  width: 100%;
`;

const MypageListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  h3 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 28px;
    margin: 0;
    padding-bottom: 20px;
  }
  a {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #222;
    cursor: pointer;
    align-self: center;
  }
`;

export default function MyPage() {
  const handleLogOut = () => {};
  const { profileImage } = useProfileImage();
  const handleDeleteAccount = () => {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const handleNavigation = (path: string) => () => navigate(path);

  const [data, setData] = useState([]);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://place.map.kakao.com/m/main/v/509294248'
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <ContentTitle>
          <MypageList>
            <MypageListTitle>
              <h3>빵집보관함</h3>
              <Link to="/community">
                More <img src={RightArrow} className="icon" alt="arrow icon" />
              </Link>
            </MypageListTitle>
            <div>
              {data.map((item, index) => (
                <MyPageList
                  key={index}
                  to="/community/nearby"
                  images="test.png"
                  titles="솔티밥"
                  sub="용산구"
                  rest="#아이스크림"
                />
              ))}
            </div>
          </MypageList>
        </ContentTitle>
      </MainContent>
    </PageLayout>
  );
}
