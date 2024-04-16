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
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { useAuth } from '../login/AuthContext';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const handleNavigation = (path: string) => () => navigate(path);

  const [data, setData] = useState<Data>({});
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState<RestData[]>([]);
  const [recipeData, setRecipeData] = useState<RestData[]>([]);
  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  const fetchData = async (id: string) => {
    try {
      const response = await axios.get(`${apiUrl}/kakao-maps/${id}`, {
        withCredentials: true,
      });
      setData((prevData) => ({
        ...prevData,
        [id]: response.data,
      }));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchBreadData = async (id: string) => {
    try {
      const postResponse = await axios.get(
        `http://localhost:5000/api/posts/${id}`
      );

      setPostData((prevData) => [...prevData, postResponse.data]);
      console.log(postResponse.data);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  const fetchRecipeData = async (id: string) => {
    try {
      const recipeResponse = await axios.get(
        `http://localhost:5000/api/recipes/${id}`
      );
      setRecipeData((prevData) => [...prevData, recipeResponse.data]);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const ids = ['509294248', '1236155226', '857475692', '1644427819']; // 여기에 여러 개의 아이디 추가
    const breadids = [
      '661a22cb985691ea2dffae50',
      '661a22cb985691ea2dffae52',
      '661a22cb985691ea2dffae54',
      '661a22cc985691ea2dffae56',
    ];
    const recipeids = [
      '6614f874525737b2e8e1a0e0',
      '661656b9423f3780521a9e80',
      '661656f7423f3780521a9e86',
      '6616571c423f3780521a9e92',
    ];
    ids.forEach((id) => fetchData(id));
    breadids.slice(0, 4).forEach((id) => fetchBreadData(id));
    recipeids.forEach((id) => fetchRecipeData(id));
  }, []);

  return (
    <>
      <ContextWrap>
        <h2 className="oleo-script-bold community_title">Mypage</h2>
        <PageLayout>
          <ProfileContainer>
            {/*화면 좌측 프로필 */}
            <ProfileImageUpload
              src={user?.profile || '/default-profile.jpg'}
              showEditIcon={false}
            />
            <UserProfile
              onEditProfile={handleNavigation('/mypage/check-password')}
            />
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
                      <BallTriangle color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                  {!isLoading &&
                    Object.keys(data)
                      .slice(0, 4)
                      .map((id) => {
                        const basicInfo = data[id]?.basicInfo;
                        return basicInfo && basicInfo.mainphotourl ? (
                          <MyPageList
                            key={id}
                            to={`https://place.map.kakao.com/${id}`}
                            images={basicInfo.mainphotourl}
                            titles={basicInfo.placenamefull}
                            sub={basicInfo.address.region.newaddrfullname}
                            rest={`#${basicInfo.category.catename}`}
                          />
                        ) : (
                          <p key={id}>No data available</p>
                        );
                      })}
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
                      <BallTriangle color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                  {!isLoading &&
                    postData.slice(0, 4).map((post) => (
                      <MyPageList
                        key={post._id}
                        to="/community/nearby"
                        images={post.images[0]} // 이미지 배열 중 첫 번째 이미지를 사용하도록 설정
                        titles={post.title}
                        sub={post.content}
                        rest={post.bread_id}
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
                  {/* 데이터가 로딩 중이면 로딩 바를 표시 */}
                  {isLoading && (
                    <LoaderWrapper>
                      <BallTriangle color="#FFCB46" />
                    </LoaderWrapper>
                  )}
                  {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
                  {!isLoading &&
                    recipeData.slice(0, 4).map((recipe) => (
                      <MyPageList
                        key={recipe._id}
                        to="/community/nearby"
                        images={recipe.images[0]} // 이미지 배열 중 첫 번째 이미지를 사용하도록 설정
                        titles={recipe.title}
                        sub={recipe.content}
                        rest={recipe.bread_id}
                      />
                    ))}
                </ListWrapper>
              </MypageList>
            </ContentTitle>
          </MainContent>
        </PageLayout>
      </ContextWrap>
    </>
  );
}
