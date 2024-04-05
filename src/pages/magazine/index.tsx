import Slider from 'react-slick';
import BigCardList from '../../components/BigCard';
import MagazineBanner from './MagazineBanner';
import LinkDefault from '../../components/atoms/links/LinkDefault';

import './magazine_main.css';

const Magazine: React.FC = () => {
  const magazineBanner = [
    {
      src: './magazine_banner.svg',
      title: '멋대로 만드는 케이크',
      content:
        '늘 즉흥적으로. 파격적이면서도 자유로운 무무대배이크의 철학입니다. 홀케이크 제작뿐만 아니라 카페까지 함께 운영하는 브랜드인 이 곳은 환상적인 궁전 케이크부터 ...',
    },
    {
      src: './magazine_banner.svg',
      title: '멋대로 만드는 케이크',
      content:
        '늘 즉흥적으로. 파격적이면서도 자유로운 무무대배이크의 철학입니다. 홀케이크 제작뿐만 아니라 카페까지 함께 운영하는 브랜드인 이 곳은 환상적인 궁전 케이크부터 ...',
    },
    {
      src: './magazine_banner.svg',
      title: '멋대로 만드는 케이크',
      content:
        '늘 즉흥적으로. 파격적이면서도 자유로운 무무대배이크의 철학입니다. 홀케이크 제작뿐만 아니라 카페까지 함께 운영하는 브랜드인 이 곳은 환상적인 궁전 케이크부터 ...',
    },
  ];

  const posts = [
    { src: './review_img1.svg', title: '솔티밥', content: '에레레레ㅔ에레레' },
    { src: './review_img2.svg', title: '솔티밥', content: '아이스크림 냠냠' },
    { src: './review_img1.svg', title: '솔티밥', content: '도넛 냠냠' },
    { src: './review_img2.svg', title: '솔티밥', content: '에레레레ㅔ에레레' },
    { src: './review_img1.svg', title: '솔티밥', content: '아이스크림 냠냠' },
    { src: './review_img2.svg', title: '솔티밥', content: '도넛 냠냠' },
  ];

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
          <span className="currentPage">{i + 1}</span>/
          <span className="totalPage">{magazineBanner.length}</span>
        </span>
      );
    },
  };

  return (
    <>
      <article className="magazine_banner">
        <Slider {...settings}>
          {magazineBanner.map((banner) => {
            return (
              <MagazineBanner
                src={banner.src}
                title={banner.title}
                content={banner.content}
              />
            );
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
          {posts.map((post) => {
            return (
              <BigCardList
                src={post.src}
                title={post.title}
                content={post.content}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Magazine;
