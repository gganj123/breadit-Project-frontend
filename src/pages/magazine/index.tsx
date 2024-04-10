import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import BigCardList from '../../components/BigCard';
import MagazineBanner from './MagazineBanner';
import LinkDefault from '../../components/atoms/links/LinkDefault';
import { useMagazinesApi } from '../../hooks/useMagazineApi';

import './magazine_main.css';

type MagazineParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
  // 다른 필드들도 필요에 따라 추가
};

const Magazine = () => {
  const { getMagazineListQuery } = useMagazinesApi();
  const [magazineList, setMagazineList] = useState<MagazineParameters>([]);

  useEffect(() => {
    console.log(getMagazineListQuery.data);
    if (getMagazineListQuery.data) {
      setMagazineList(getMagazineListQuery.data);
    }
  }, [getMagazineListQuery.data]);

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
