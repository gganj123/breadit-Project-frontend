import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CategoryImg1 from '/category_img1.svg';
import CategoryImg2 from '/category_img2.svg';
import CategoryImg3 from '/category_img3.svg';
import CategoryImg4 from '/category_img4.svg';
import MainCategories from './MainCategories';
import Review from '/Review.svg';
import MainBanner from './MainBanner';
import BigCard from '../../components/BigCard';
import MainInstagramImg from './MainInstagramImg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main.css';

export default function Home() {
  const [magazineBanner, setMagazineBanner] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/magazines/')
      .then((response) => {
        setMagazineBanner(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const categories = [
    { go: '/map', src: CategoryImg1, categoryName: '케이크' },
    { go: '/map', src: CategoryImg2, categoryName: '빵' },
    { go: '/map', src: CategoryImg3, categoryName: '구움과자' },
    { go: '/map', src: CategoryImg4, categoryName: '샌드위치' },
  ];

  const reviews = [
    {
      go: '',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '에레레레ㅔ에레레',
      like: 1,
    },
    {
      go: '',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '아이스크림 냠냠',
      like: 1,
    },
    {
      go: '',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '도넛 냠냠',
      like: 1,
    },
    {
      go: '',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '에레레레ㅔ에레레',
      like: 1,
    },
    {
      go: '',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '아이스크림 냠냠',
      like: 1,
    },
    {
      go: '',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '도넛 냠냠',
      like: 1,
    },
  ];

  let imgList = [
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviewSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    swipeToSlide: false,
  };

  return (
    <>
      <article className="main_banner">
        <Slider {...bannerSettings}>
          {magazineBanner.map((banner, index) => (
            <MainBanner data={banner} key={index} />
          ))}
        </Slider>
      </article>
      <section className="main_cont categories_cont">
        <div className="categories_title">
          <h3 className="font_oleo">Categories</h3>
          <p>하늘 아래 같은 빵은 없다 🍞</p>
        </div>
        <ul className="categories">
          {categories.map((category, index) => {
            return (
              <MainCategories
                go={category.go}
                src={category.src}
                categoryName={category.categoryName}
                key={index}
              />
            );
          })}
        </ul>
      </section>
      <div className="infinite_roof categories_roof">
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
      </div>
      <section className="main_cont review_cont">
        <div className="main_title flex_default">
          <h3 className="main_title_text">최근 추가된 빵집 리뷰 🍰</h3>
          <img src={Review} className="review_right" />
        </div>

        <Slider {...reviewSettings}>
          {reviews.map((review, index) => {
            return <BigCard data={review} key={index} />;
          })}
        </Slider>
      </section>
      <section className="noise_bg">
        <section className="main_cont recipe_cont">
          <div className="main_title flex_default">
            <h3 className="font_oleo eng_title">Recipe</h3>
            <p className="main_title_text">🍳 빵잘알들의 레시피</p>
          </div>
          <div className="recipe">
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
                  <p className="nickname">귀여운게 제일 좋아</p>
                </div>
                <h5>온세상 강쥐 쿠키를 구워봤어요~~!</h5>
                <p>
                  강아지 쿠키 만드는 방법 공유드립니다!! 우선 밀가루와 뭐쩌구가
                  <br />
                  필요합니다. 그리고 최고의 손재주를 가지면 되는데요!
                  <br />
                  <br />
                  ** 재료 공유 ( 정확하게 계량해주세요. )
                  <br />
                  금손 100g ...
                </p>
                <Link to="/community/nearby" className="go_recipe" />
              </div>
            </div>
          </div>
        </section>
        <div className="infinite_roof info_roof">
          <span className="font_oleo">we loves bread, we are breadit!</span>
          <span className="font_oleo">we loves bread, we are breadit!</span>
          <span className="font_oleo">we loves bread, we are breadit!</span>
          <span className="font_oleo">we loves bread, we are breadit!</span>
        </div>
        <section className="main_cont instagram_cont">
          <div className="main_title flex_default">
            <h3 className="font_oleo eng_title">Instagram</h3>
            <p className="main_title_text">
              <Link to="/">🥐 브레딧 인스타그램 구경하기</Link>
            </p>
          </div>
          <ul className="instagram_list">
            {imgList.map((img, index) => {
              return <MainInstagramImg src={img.src} key={index} />;
            })}
          </ul>
        </section>
      </section>
    </>
  );
}
