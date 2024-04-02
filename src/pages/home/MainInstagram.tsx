import { Link } from "react-router-dom";

export default function MainInstagram() {
  return (
    <section className="container instagram_cont">
      <div className="main_title flex_default">
        <h3 className="font_oleo eng_title">Instagram</h3>
        <p className="main_title_text">
          <Link to="/">🥐 브레딧 인스타그램 구경하기</Link>
        </p>
      </div>
      <ul className="instagram_list">
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
        <li className="img_box">
          <Link to="/">
            <img src="" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
