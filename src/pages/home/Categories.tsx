import { Link } from "react-router-dom";
import CategoriesTitle from "/Categories_title.svg";
import CategoryImg1 from "/category_img1.svg";
import CategoryImg2 from "/category_img2.svg";
import CategoryImg3 from "/category_img3.svg";
import CategoryImg4 from "/category_img4.svg";

export default function Categories() {
  return (
    <section className="container noise_bg categories_cont">
      <div className="categories_title">
        <h3>
          <img src={CategoriesTitle} />
        </h3>
        <h4 className="main_title_text">하늘 아래 같은 빵은 없다 🍞</h4>
      </div>
      <ul className="categories">
        <li>
          <Link to="/">
            <img src={CategoryImg1} />
            <div className="flex_default box_arrow_btn">
              케이크
              <span></span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={CategoryImg2} />
            <div className="flex_default box_arrow_btn">
              빵<span></span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={CategoryImg3} />
            <div className="flex_default box_arrow_btn">
              구움과자
              <span></span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={CategoryImg4} />
            <div className="flex_default box_arrow_btn">
              샌드위치
              <span></span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
