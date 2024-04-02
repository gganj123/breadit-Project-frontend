import { Link } from "react-router-dom";
import Review from "/Review.svg";

export default function MainReview() {
  return (
    <section className="container review_cont">
      <div className="main_title flex_default">
        <h3 className="main_title_text">최근 추가된 빵집 리뷰 🍰</h3>
        <img src={Review} className="review_right" />
      </div>
      <ul className="review">
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
        <li>
          <div className="img_box">
            <Link to="/"></Link>
          </div>
          <div className="content_box">
            <h5>
              <Link to="/">솔티밥</Link>
            </h5>
            <p>에레레레ㅔ에레레</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
