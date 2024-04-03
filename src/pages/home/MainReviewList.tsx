import { Link } from "react-router-dom";

const MainReviewList = () => {
  const reviews = [
    { title: "솔티밥", content: "에레레레ㅔ에레레" },
    { title: "솔티밥", content: "아이스크림 냠냠" },
    { title: "솔티밥", content: "도넛 냠냠" },
    { title: "솔티밥", content: "에레레레ㅔ에레레" },
    { title: "솔티밥", content: "아이스크림 냠냠" },
    { title: "솔티밥", content: "도넛 냠냠" },
  ];
  return (
    <ul className="review">
      {reviews.map((review, index) => {
        return (
          <li key={index}>
            <div className="img_box">
              <Link to="/"></Link>
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
    </ul>
  );
};

export default MainReviewList;
