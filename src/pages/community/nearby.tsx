import './community.css';
import CategoryList from '../../components/CategoryList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGetPostListApi } from '../../hooks/usePostApi';
import Pagination from '../../components/Pagination';

// 이미지 경로
const SearchIcon = '/search-icon.svg';
const PostIcon = '/post-icon.svg';

type PostParameters = {
  _id: string;
  user_id: string;
  nickname: string;
  profile: string;
  title: string;
  content: string;
  images: string[]; // 이미지 경로 배열 등의 형태로 가정합니다.
  bread_id: string;
  createdAt: string;
  updatedAt: string;
  like_count: number;
  // 다른 필드들도 필요에 따라 추가
};

export default function NearByPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [initialData, setInitialData] = useState([]); // 처음에 모든 데이터를 저장하는 상태
  const [postList, setPostList] = useState<PostParameters[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const getPostListQuery = useGetPostListApi();

  useEffect(() => {
    if (getPostListQuery.data) {
      setPostList(getPostListQuery.data as PostParameters[]);
    }
  }, [getPostListQuery.data]);

  // 데이터를 가져오는 함수
  const fetchData = async (query = '') => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/posts?q=${query}`
      );
      setInitialData(response.data); // 처음에 받아온 모든 데이터 저장

      //검색어가 있을 때는 검색된 데이터만 보여주고, 없을 때는 모든 데이터를 보여줌
      const filteredData = query
        ? response.data.filter(
            (post: PostParameters) =>
              post.title.includes(query) ||
              post.content.includes(query) ||
              post.nickname.includes(query)
          )
        : response.data;
      setPostList(filteredData); // 검색 결과 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 검색 수행 함수
  const performSearch = () => {
    fetchData(searchTerm); // 검색어를 인자로 넘겨 fetchData 함수 호출
    setCurrentPage(1);
  };

  // 엔터 키가 눌렸을 때 검색 수행
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, []);

  // 검색어 입력 시 상태 업데이트 함수
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    // 검색어가 변경될 때마다 검색을 수행하고, 검색어가 비어있으면 처음 받아온 모든 데이터를 보여줌
    if (event.target.value === '') {
      setPostList(initialData);
    }
  };

  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = postList.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <CategoryList
        to="/community/nearby"
        images={currentItems.map((post) => post.images)}
        titles={currentItems.map((post) => post.title)}
        nickname={currentItems.map((post) => post.nickname)}
        likes={currentItems.map((post) => post.like_count)}
        usersrc={currentItems.map((post) => post.profile)}
        postIdArray={currentItems.map((post) => post._id)}
      />
    );
  };

  // 페이지 변경 이벤트 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="community_container">
      <div className="community">
        <h2 className="oleo-script-bold community_title">Community</h2>
        <p className="community_subtitle">우리 동네 베이커리를 소개합니다!</p>
        <div className="head_content box_wrapper">
          <div className="community_search box_wrapper">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress} // 엔터 키 눌렀을 때 검색 수행
            />
            {/* 검색 아이콘을 img 태그로 변경하여 클릭 이벤트 추가 */}
            <img
              src={SearchIcon}
              className="icon"
              alt="search icon"
              onClick={performSearch} // 검색 아이콘 클릭 시 검색 수행
              style={{ cursor: 'pointer' }} // 커서 스타일을 포인터로 변경
            />
          </div>
          <div className="community_post_btn">
            <Link to="/community/edit">
              <img src={PostIcon} className="icon" alt="search icon" />
            </Link>
          </div>
        </div>
        <div className="community_list">
          <div className="community_list_title box_wrapper">
            <h3>우리 동네 베이커리를 소개합니다!</h3>
          </div>
          <div className="community_list_content">{getCurrentItems()}</div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(postList.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
