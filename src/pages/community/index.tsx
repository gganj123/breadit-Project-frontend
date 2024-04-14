import { Link } from 'react-router-dom';
import SearchIcon from '/search-icon.svg';
import PostIcon from '/post-icon.svg';
import RightArrow from '/right-arrow.svg';
import './community.css';
import SelectBox from '../../components/atoms/selectbox/Selectbox';
import CategoryList from '../../components/CategoryList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetPostListApi } from '../../hooks/usePostApi';

export default function CommunityPage() {
  const [postData, setPostData] = useState<any[]>([]);
  const [recipeData, setRecipeData] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [likeCounts, setLikeCounts] = useState<number[]>([]);

  const getPostListQuery = useGetPostListApi();

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const postResponse = await axios.get('http://localhost:5000/api/posts/');
      const recipeResponse = await axios.get(
        'http://localhost:5000/api/recipes/'
      );
      setPostData(postResponse.data);
      setRecipeData(recipeResponse.data);

      const postLikeCounts = postResponse.data.map(
        (post: any) => post.like_count
      );
      const recipeLikeCounts = recipeResponse.data.map(
        (recipe: any) => recipe.like_count
      );
      const allLikeCounts = [...postLikeCounts, ...recipeLikeCounts];
      setLikeCounts(allLikeCounts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, []);

  const OPTIONS = [
    { value: 'bakery', name: '베이커리 소개' },
    { value: 'recipe', name: '레시피 소개' },
  ];

  // 카테고리 선택 핸들러
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  // 데이터 필터링
  const filteredData = [...postData, ...recipeData].filter((item) => {
    // 검색어와 관련된 필터링 조건을 여기에 추가할 수 있습니다.
    if (searchQuery === '') {
      return true; // 검색어가 비어있으면 모든 데이터를 반환합니다.
    }

    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredIdArray = filteredData.map((post) => post._id);
  const postIdArray = postData.map((post) => post._id);
  const recipeIdArray = recipeData.map((post) => post._id);

  return (
    <>
      <div className="community_container">
        <div className="community">
          <h2 className="oleo-script-bold community_title">Community</h2>
          <div className="head_content box_wrapper">
            <div className="community_search box_wrapper">
              <div>
                <SelectBox
                  options={OPTIONS}
                  value={selectedCategory}
                  className=""
                  onChange={handleCategoryChange}
                />
              </div>
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                onChange={handleSearchInputChange}
                value={searchQuery}
              />
              <img src={SearchIcon} className="icon" alt="search icon" />
            </div>
            <div className="community_post_btn">
              <Link to="/community/edit">
                <img src={PostIcon} className="icon" alt="search icon" />
              </Link>
            </div>
          </div>
          {searchQuery && filteredData.length > 0 && (
            <div className="community_list">
              <div className="community_list_title box_wrapper">
                <h3>검색 결과</h3>
              </div>
              <div className="community_list_content">
                <CategoryList
                  to="/community/nearby"
                  images={filteredData.slice(0, 4).map((post) => post.images)}
                  titles={filteredData.slice(0, 4).map((post) => post.title)}
                  nickname={filteredData
                    .slice(0, 4)
                    .map((post) => post.nickname)}
                  likes={likeCounts.slice(0, 4)}
                  usersrc={['#빵집', '#빵집', '#빵집', '#빵집']}
                  postIdArray={filteredIdArray.slice(0, 4)}
                />
              </div>
            </div>
          )}

          {searchQuery && filteredData.length === 0 && (
            <div className="community_list">
              <div className="community_list_title box_wrapper">
                <h3>검색 결과</h3>
              </div>
              <div className="community_list_content">
                <p className="no_data">검색하신 결과가 없습니다🍞</p>
              </div>
            </div>
          )}

          {!searchQuery && (
            <>
              <div className="community_list">
                <div className="community_list_title box_wrapper">
                  <h3>우리 동네 베이커리를 소개합니다!</h3>
                  <Link to="/community/nearby">
                    More{' '}
                    <img src={RightArrow} className="icon" alt="arrow icon" />
                  </Link>
                </div>
                <div className="community_list_content">
                  <CategoryList
                    to="/community/nearby"
                    images={postData.slice(0, 4).map((post) => post.images)}
                    titles={postData.slice(0, 4).map((post) => post.title)}
                    nickname={postData.slice(0, 4).map((post) => post.nickname)}
                    likes={likeCounts.slice(0, 4)}
                    usersrc={['#빵집', '#빵집', '#빵집', '#빵집']}
                    postIdArray={postIdArray.slice(0, 4)}
                  />
                </div>
              </div>
              <div className="community_list">
                <div className="community_list_title box_wrapper">
                  <h3>나만의 레시피를 공유해요</h3>
                  <Link to="/community/recipe">
                    More{' '}
                    <img src={RightArrow} className="icon" alt="arrow icon" />
                  </Link>
                </div>
                <div className="community_list_content">
                  <CategoryList
                    to="/community/recipe"
                    images={recipeData.slice(0, 4).map((post) => post.images)}
                    titles={recipeData.slice(0, 4).map((post) => post.title)}
                    nickname={recipeData
                      .slice(0, 4)
                      .map((post) => post.nickname)}
                    likes={likeCounts.slice(0, 4)}
                    usersrc={['#빵집', '#빵집', '#빵집', '#빵집']}
                    postIdArray={recipeIdArray.slice(0, 4)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
