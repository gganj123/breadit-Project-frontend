import Slider from 'react-slick';
import MagazineCircle from '/magazine_circle.svg';

const MagazineBanner = () => {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode[]) => (
      <div>
        <ul style={{ margin: '0px' }} className="magazine_dots"> {dots} </ul>
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
    <article className="magazine_banner">
      <Slider {...settings}>
        {magazineBanner.map((banner, index) => {
          return (
            <div className="banner_item" key={index}>
              <img src={banner.src} className="banner_img" />
              <div className="content_box">
                <span className="font_oleo">Hot brand</span>
                <h3>{banner.title}</h3>
                <p>{banner.content}</p>
              </div>
              <img src={MagazineCircle} className="magazine_circle" />
            </div>
          );
        })}
      </Slider>
    </article>
  );
};

export default MagazineBanner;
