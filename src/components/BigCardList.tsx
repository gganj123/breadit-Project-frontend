import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const BigCardList: React.FC<{ useSlider: Boolean }> = ({ useSlider }) => {
  const reviews = [
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
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true
  };
  
  if (useSlider) {
    return (
      <Slider {...settings} className="big_card_list">
        {reviews.map((review, index) => (
          <div className="big_card" key={index}>
            <div className="img_box">
              <Link to="/">
                <img src={review.src} />
              </Link>
            </div>
            <div className="content_box">
              <h5>
                <Link to="/">{review.title}</Link>
              </h5>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    );
  } else {
    return (
      <div className="magazine_card_list">
        {reviews.map((review, index) => {
          return (
            <div className="big_card" key={index}>
              <div className="img_box">
                <Link to="/">
                  <img src={review.src} />
                </Link>
              </div>
              <div className="content_box">
                <h5>
                  <Link to="/">{review.title}</Link>
                </h5>
                <p>{review.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default BigCardList;
