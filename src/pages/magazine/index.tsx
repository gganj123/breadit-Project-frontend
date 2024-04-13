import { useEffect } from 'react';
import Slider from 'react-slick';
import BigCardList from '../../components/BigCard';
import MagazineBanner from './MagazineBanner';
import LinkDefault from '../../components/atoms/links/LinkDefault';
import { useGetMagazineListApi } from '../../hooks/useMagazineApi';

import './magazine_main.css';

const Magazine = () => {
  const getMagazineListQuery = useGetMagazineListApi();

  useEffect(() => {
    getMagazineListQuery.refetch();
  }, [getMagazineListQuery.data]);

  const magazineList = getMagazineListQuery.data || [];

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
          {magazineList
            .filter((banner, index) => index <= 3)
            .map((banner, index) => {
              return <MagazineBanner data={banner} key={index} />;
            })}
        </Slider>
      </article>
      <section className="main_cont magazine">
        <div className="main_title flex_default">
          <h3 className="main_title_text">
            놓치면 아쉬울, 새로운 베이커리 소식 🍰
          </h3>
          <LinkDefault text={'Post +'} go={'/magazines/edit'} />
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
