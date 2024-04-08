import { Link } from 'react-router-dom';
import SearchIcon from '/search-icon.svg';
import PostIcon from '/post-icon.svg';
import RightArrow from '/right-arrow.svg';
import './community.css';
import SelectBox from '../../components/atoms/selectbox/Selectbox';
import CategoryList from '../../components/CategoryList';

export default function CommunityPage() {
  //가짜데이터
  const OPTIONS = [
    { value: 'bakery', name: '베이커리 소개' },
    { value: 'recipe', name: '레시피 소개' },
  ];
  //가짜데이터
  const IMAGE = [
    {
      usersrc: 'https://avatars.githubusercontent.com/u/56255240?v=4',
      src: '../list_img.svg',
      title: '솔티 밥 갔다왔어요~',
      username: '휘낭시에보면 환장하는 빵돌이',
      hashtags: ['# 부제를 적거나 ', '# 뭔가를 적겠...'],
      likes: 20,
    },
    {
      usersrc: 'https://avatars.githubusercontent.com/u/107537424?v=4',
      src: '../list_img.svg',
      title: '솔티2 밥 갔다왔어요~',
      username: '휘낭시에안보면 환장하는 빵돌이',
      hashtags: ['#요리', '#레시피'],
      likes: 20,
    },
    {
      usersrc: 'https://avatars.githubusercontent.com/u/56255240?v=4',
      src: '../list_img.svg',
      title: '솔티 밥 갔다왔어요~',
      username: '휘낭시에보면 환장하는 빵돌이',
      hashtags: ['# 부제를 적거나 ', '# 뭔가를 적겠...'],
      likes: 20,
    },
    {
      usersrc: 'https://avatars.githubusercontent.com/u/107537424?v=4',
      src: '../list_img.svg',
      title: '솔티2 밥 갔다왔어요~',
      username: '휘낭시에안보면 환장하는 빵돌이',
      hashtags: ['#요리', '#레시피'],
      likes: 20,
    },
    // 추가 이미지 데이터를 원한다면 여기에 계속해서 객체를 추가합니다.
  ];

  return (
    <>
      <div className="community_container">
        <div className="community">
          <h2 className="oleo-script-bold community_title">Community</h2>
          <div className="head_content box_wrapper">
            <div className="community_search box_wrapper">
              <div>
                <SelectBox options={OPTIONS}></SelectBox>
              </div>
              <input type="text" placeholder="검색어를 입력하세요." />
              <img src={SearchIcon} className="icon" alt="search icon" />
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
              <Link to="/community/nearby">
                More <img src={RightArrow} className="icon" alt="arrow icon" />
              </Link>
            </div>
            <div className="community_list_content">
              <CategoryList to="/community/nearby" images={IMAGE} />
            </div>
          </div>
          <div className="community_list">
            <div className="community_list_title box_wrapper">
              <h3>나만의 레시피를 공유해요</h3>
              <Link to="/community/nearby">
                More <img src={RightArrow} className="icon" alt="arrow icon" />
              </Link>
            </div>
            <div className="community_list_content">
              <CategoryList to="/community/nearby" images={IMAGE} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
