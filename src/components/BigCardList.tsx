import { Link } from 'react-router-dom';

const BigCardList: React.FC = () => {
  const reviews = [
    { src: './review_img1.svg', title: '솔티밥', content: '에레레레ㅔ에레레' },
    { src: './review_img2.svg', title: '솔티밥', content: '아이스크림 냠냠' },
    { src: './review_img1.svg', title: '솔티밥', content: '도넛 냠냠' },
    { src: './review_img2.svg', title: '솔티밥', content: '에레레레ㅔ에레레' },
    { src: './review_img1.svg', title: '솔티밥', content: '아이스크림 냠냠' },
    { src: './review_img2.svg', title: '솔티밥', content: '도넛 냠냠' },
  ];
  return (
    <>
      {reviews.map((review, index) => {
        return (
          <li className="big_card" key={index}>
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
          </li>
        );
      })}
    </>
  );
};

export default BigCardList;
