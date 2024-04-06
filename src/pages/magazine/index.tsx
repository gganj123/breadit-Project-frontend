import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import BigCardList from '../../components/BigCard';
import MagazineBanner from './MagazineBanner';
import LinkDefault from '../../components/atoms/links/LinkDefault';

import './magazine_main.css';

const Magazine: React.FC = () => {
  const [magazineList, setMagazineList] = useState([]);
  let url = 'http://localhost:5000/api';
  useEffect(() => {
    axios
      .get(`${url}/magazines/`)
      .then((response) => {
        setMagazineList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode[]) => (
      <div>
        <ul style={{ margin: '0px' }} className="magazine_dots">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => {
      return (
        <span className="customPaging">
          <span className="currentPage">{i + 1}</span> /
          <span className="totalPage"> {magazineList.length}</span>
        </span>
      );
    },
  };

  return (
    <>
      <article className="magazine_banner">
        <Slider {...settings}>
          {magazineList.map((banner, index) => {
            return <MagazineBanner data={banner} key={index} />;
          })}
        </Slider>
      </article>
      <section className="main_cont magazine">
        <div className="main_title flex_default">
          <h3 className="main_title_text">
            놓치면 아쉬울, 새로운 베이커리 소식 🍰
          </h3>
          <LinkDefault text={'Post +'} go={'/'} />
        </div>

        <div className="magazine_card_list">
          {magazineList.map((magazine, index) => {
            return <BigCardList data={magazine} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Magazine;
