import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CategoryImg1 from '/icons/category_img1.svg';
import CategoryImg2 from '/icons/category_img2.svg';
import CategoryImg3 from '/icons/category_img3.svg';
import CategoryImg4 from '/icons/category_img4.svg';
import MainCategories from './MainCategories';
import Review from '/Review.svg';
import MainBanner from './MainBanner';
import BigCard from '../../components/BigCard';
import MainInstagramImg from './MainInstagramImg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main.css';

const MainBannerStyle = styled.article`
  background-color: #eee;
  position: relative;

  .slick-slider {
    height: 72rem;
  }

  .slick-arrow {
    top: 94%;
    bottom: auto;
    z-index: 99;
    width: 1.4rem;
    height: 1.4rem;
    border-top: solid 2px #656565;
    border-right: solid 2px #656565;
  }

  .slick-prev {
    left: calc(50% - 4rem);
    transform: rotate(-135deg);
  }

  .slick-next {
    right: calc(50% - 4rem);
    transform: rotate(45deg);
  }

  .slick-arrow::before {
    display: none;
  }
`;

const CategoriesStyle = styled.section`
  padding: 10rem;

  .categories_title {
    text-align: center;
  }

  .categories_title h3 {
    font-size: 10rem;
    color: #59a47e;
  }

  .categories_title p {
    font-size: 2.6rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  .categories {
    display: flex;
    justify-content: center;
    gap: 6rem;
    margin-top: 6rem;
  }

  .categories li {
    width: 30rem;
    text-align: center;
  }

  .categories .box_arrow_btn {
    margin-top: 2rem;
  }
`;

const PostStyle = styled.section`
  padding-right: 0 !important;

  .main_title {
    position: relative;
    padding-right: 10rem;
    align-items: flex-end;
  }

  .main_title_text {
    padding-bottom: 1rem;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    right: auto;
    left: -4rem;
  }

  .slick-next::before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-left: solid 2px #575757;
    border-bottom: solid 2px #575757;
    transform: rotate(45deg);
  }

  .slick-slide > div {
    margin-right: 3rem;
  }
`;

const RecipeStyle = styled.section`
  .recipe {
    display: flex;
    box-shadow: 0px 0px 3rem rgb(242 242 242);
    border-radius: 2rem;
    overflow: hidden;
  }

  .recipe > div {
    width: 50%;
  }

  .recipe .img_box {
    background-color: #ddd;
  }

  .recipe .content_box {
    background-color: #fff;
    border-left: 0;
    padding: 6rem 6rem 0;
    position: relative;
    min-height: 46rem;
  }

  .recipe .user_info {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }

  .recipe .user_info p {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .recipe .content h5 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 2.6rem 0;
  }

  .recipe .content p {
    font-size: 1.8rem;
    line-height: 1.6;
  }
`;

const RecipeGoStyle = styled(Link)`
  display: inline-block;
  width: 6.8rem;
  height: 6.8rem;
  background-color: #f9cadb;
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    width: 2.8rem;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &::after {
    transform: translate(-50%, -50%);
  }
`;

const InstagramStyle = styled.section`
  border-top: 0;

  & .instagram_list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  & .instagram_list li {
    overflow: hidden;
  }

  & .instagram_list li img {
    width: 100%;
    transition: transform 0.2s;
  }

  & .instagram_list li img:hover {
    transform: scale(1.1);
  }
`;

const RoofAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`;

const InfiniteRoofStyle = styled.div`
  overflow: hidden;

  * {
    white-space: nowrap;
    transform: translateX(100%);
    animation: ${RoofAnimation} 30s linear infinite;
  }
`;

const Home = () => {
  const [magazineBanner, setMagazineBanner] = useState([]);
  const [postList, setPostList] = useState([]);
  const [recipeData, setRecipeData] = useState({
    nickname: '',
    profile: '',
    title: '',
    content: '',
    images: [''],
    createdAt: '',
  });

  let apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  const getMagazinesAPI = async () => {
    try {
      const response = await axios.get(`${apiUrl}/magazines`);
      setMagazineBanner(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMagazinesAPI();
  }, []);

  const getPostsAPI = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      setPostList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostsAPI();
  }, []);

  const getRecipesAPI = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/recipes/6614f874525737b2e8e1a0e0`
      );
      setRecipeData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipesAPI();
  }, []);

  const categories = [
    { go: '/map', src: CategoryImg1, categoryName: '케이크' },
    { go: '/map', src: CategoryImg2, categoryName: '빵' },
    { go: '/map', src: CategoryImg3, categoryName: '구움과자' },
    { go: '/map', src: CategoryImg4, categoryName: '샌드위치' },
  ];

  let dummyImgList = [
    { src: './instagram1.svg' },
    { src: './instagram2.svg' },
    { src: './instagram3.svg' },
    { src: './instagram4.svg' },
    { src: './instagram1.svg' },
    { src: './instagram2.svg' },
    { src: './instagram3.svg' },
    { src: './instagram4.svg' },
    { src: './instagram1.svg' },
    { src: './instagram2.svg' },
  ];

  const bannerSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
  };

  const postSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    swipeToSlide: false,
  };

  function sliceDate(date: string) {
    const sliceDate = date.slice(0, 10);
    return sliceDate;
  }

  return (
    <>
      <MainBannerStyle>
        <Slider {...bannerSettings}>
          {magazineBanner.map((banner, index) => (
            <MainBanner data={banner} key={index} />
          ))}
        </Slider>
      </MainBannerStyle>
      <CategoriesStyle>
        <div className="categories_title">
          <h3 className="font_oleo">Categories</h3>
          <p>하늘 아래 같은 빵은 없다 🍞</p>
        </div>
        <ul className="categories">
          {categories.map((category, index) => {
            return (
              <MainCategories // 카테고리
                go={category.go}
                src={category.src}
                categoryName={category.categoryName}
                key={index}
              />
            );
          })}
        </ul>
      </CategoriesStyle>
      <InfiniteRoofStyle className="categories_roof">
        <p>
          Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;toast&nbsp;&nbsp;&nbsp;bread&nbsp;&nbsp;&nbsp;
          pundcake&nbsp;&nbsp;&nbsp;♦︎&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;
          toast&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;toast&nbsp;&nbsp;&nbsp;
          bread&nbsp;&nbsp;&nbsp;pundcake&nbsp;&nbsp;&nbsp;♦︎&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;
          toast&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;toast&nbsp;&nbsp;&nbsp;bread&nbsp;&nbsp;&nbsp;
          pundcake&nbsp;&nbsp;&nbsp;♦︎&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;
          toast&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;toast&nbsp;&nbsp;&nbsp;
          bread&nbsp;&nbsp;&nbsp;pundcake&nbsp;&nbsp;&nbsp;♦︎&nbsp;&nbsp;&nbsp;Sandwich&nbsp;&nbsp;&nbsp;cupcake&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;financier&nbsp;&nbsp;&nbsp;macaron&nbsp;&nbsp;&nbsp;scone&nbsp;&nbsp;&nbsp;♥︎&nbsp;&nbsp;&nbsp;cookie&nbsp;&nbsp;&nbsp;
          toast
        </p>
      </InfiniteRoofStyle>
      <PostStyle className="main_cont">
        <div className="main_title flex_default">
          <h3 className="main_title_text">최근 추가된 빵집 추천! 🍰</h3>
          <img src={Review} className="review_right" />
        </div>
        <Slider {...postSettings}>
          {postList.map((post, index) => {
            return <BigCard data={post} key={index} />; // 커뮤니티 - 베이커리 소개
          })}
        </Slider>
      </PostStyle>
      <RecipeStyle className="main_cont">
        <div className="main_title flex_default">
          <h3 className="font_oleo eng_title">Recipe</h3>
          <p className="main_title_text">🍳 빵잘알들의 레시피</p>
        </div>
        <article className="recipe">
          <div className="img_box"></div>
          <div className="content_box">
            <div className="content">
              <div className="user_info">
                <span
                  style={{
                    display: 'inline-block',
                    width: 70,
                    height: 70,
                    backgroundColor: '#ddd',
                    borderRadius: '50%',
                  }}
                ></span>
                <p>
                  <span className="nickname">{recipeData.nickname}</span>
                  <span className="date">
                    {sliceDate(recipeData.createdAt)}
                  </span>
                </p>
              </div>
              <h5>{recipeData.title}</h5>
              <p>{recipeData.content}</p>
              <RecipeGoStyle to="/community/nearby" className="go_recipe" />
            </div>
          </div>
        </article>
      </RecipeStyle>
      <InfiniteRoofStyle className="info_roof">
        <span className="font_oleo">we loves bread, we are breadit!</span>
        <span className="font_oleo">we loves bread, we are breadit!</span>
        <span className="font_oleo">we loves bread, we are breadit!</span>
        <span className="font_oleo">we loves bread, we are breadit!</span>
      </InfiniteRoofStyle>
      <InstagramStyle className="main_cont">
        <div className="main_title flex_default">
          <h3 className="font_oleo eng_title">Instagram</h3>
          <p className="main_title_text">
            <Link to="/">🥐 브레딧 인스타그램 구경하기</Link>
          </p>
        </div>
        <ul className="instagram_list">
          {dummyImgList.map((img, index) => {
            return <MainInstagramImg src={img.src} key={index} />;
          })}
        </ul>
      </InstagramStyle>
    </>
  );
};

export default Home;
