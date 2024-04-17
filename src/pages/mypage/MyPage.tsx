/**
 * 마이페이지 - 메인
 */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import ProfileImageUpload from './ProfileImageUpload';
import MyPageList from '../../components/MypageList';
import RightArrow from '/right-arrow.svg';
import { useEffect, useState } from 'react';
import { useAuth } from '../login/AuthContext';
import { useGetPostByUserId } from '../../hooks/usePostApi';
import { useGetRecipeByUserIdApi } from '../../hooks/useRecipeApi';
import { TailSpin } from 'react-loader-spinner';
import BigCard, { BigCardProps } from '../../components/BigCard/BigCard';

const ContextWrap = styled.div`
  width: 100%;
  padding: 0 100px 100px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileContainer = styled.aside`
  width: 30%;
  padding: 6rem 5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  width: 70%;
  flex-grow: 1;
  padding: 6rem 0;
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

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ListWrapper = styled.ul`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 40px;
  li {
    width: 24%;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 0px 3rem rgb(242 242 242);

    & + li {
      margin-left: 1%;
    }
    .list_img_wrapper {
      width: 100%;
      height: 21rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .subcategory {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 101px;

      p {
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .category_item {
        color: #aeaeae;
      }
    }
  }
`;

type BasicInfo = {
  basicInfo: {
    mainphotourl: string;
    placenamefull: string;
    address: {
      region: {
        newaddrfullname: string;
      };
    };
    category: {
      catename: string;
    };
  };
};

type Data = {
  [key: string]: BasicInfo | undefined;
};

type RestData = {
  _id: string;
  images: string[];
  title: string;
  content: string;
  bread_id: string;
};

export default function MyPage() {
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    // user 상태가 변경될 때마다 확인
    console.log('현재 user 상태:', user);
  }, [user]);

  const handleNavigation = () => {
    if (user && user.social_login_provider) {
      console.log('소셜 로그인으로 인증된 사용자입니다.');
      navigate('/mypage/check-password/edit');
    } else if (user) {
      console.log('일반 로그인 사용자입니다.');
      navigate('/mypage/check-password');
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const { data: postUserList } = useGetPostByUserId('661fe5507c1401551d18932e');

  const { data: recipeUserList } = useGetRecipeByUserIdApi(
    '661fe5507c1401551d18932e'
  );

  // useEffect(() => {
  //   postRefetch();
  //   recipeRefetch();
  //   setIsLoading(false);
  // }, []);

  return (
    <>
      <ContextWrap>
        <h2 className="oleo-script-bold community_title">Mypage</h2>
        <PageLayout>
          <ProfileContainer>
            {/*화면 좌측 프로필 */}
            <ProfileImageUpload
              src={
                user?.profile ||
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              }
              showEditIcon={false}
            />
            <UserProfile onEditProfile={handleNavigation} />
          </ProfileContainer>
          <MainContent>
            <ContentTitle>
              <MypageList>
                <MypageListTitle>
                  <h3>빵집보관함</h3>
                  <Link to="/mypage/breadbox">
                    More{' '}
                    <img src={RightArrow} className="icon" alt="arrow icon" />
                  </Link>
                </MypageListTitle>
                <ListWrapper>
                  {/* 데이터가 로딩 중이면 로딩 바를 표시 */}
                  {isLoading && (
                    <LoaderWrapper>
                      <TailSpin color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                </ListWrapper>
              </MypageList>

              <MypageList>
                <MypageListTitle>
                  <h3>우리 동네 베이커리를 소개합니다!</h3>
                  <Link to="/mypage/bakery-introduction">
                    More{' '}
                    <img src={RightArrow} className="icon" alt="arrow icon" />
                  </Link>
                </MypageListTitle>
                <ListWrapper>
                  {/* 데이터가 로딩 중이면 로딩 바를 표시 */}
                  {isLoading && (
                    <LoaderWrapper>
                      <TailSpin color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                  {postUserList &&
                    postUserList.data.map((post: BigCardProps['data']) => (
                      <BigCard
                        key={post._id}
                        data={post}
                        go={'/community/nearby'}
                      />
                    ))}
                </ListWrapper>
              </MypageList>

              <MypageList>
                <MypageListTitle>
                  <h3>나만의 레시피를 공유해요</h3>
                  <Link to="/mypage/recipe-introduction">
                    More{' '}
                    <img src={RightArrow} className="icon" alt="arrow icon" />
                  </Link>
                </MypageListTitle>
                <ListWrapper>
                  {isLoading && (
                    <LoaderWrapper>
                      <TailSpin color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                  {isLoading &&
                    recipeUserList &&
                    recipeUserList.data.map((recipe: BigCardProps['data']) => {
                      <BigCard data={recipe} go={'/community/recipe'} />;
                    })}
                </ListWrapper>
              </MypageList>
            </ContentTitle>
          </MainContent>
        </PageLayout>
      </ContextWrap>
    </>
  );
}
