import { Link } from "react-router-dom";
import BannerCircle1 from "/banner_circle1.svg";
import BannerCircle2 from "/banner_circle2.svg";

export default function MainBanner() {
  return (
    <article className="main_banner">
      <div className="img_box"></div>
      <div className="content_box">
        <div className="content">
          <span className="font_oleo">Hot Brand</span>
          <h3>MZ를 꼬시는 발칙한 디저트?</h3>
          <p className="point">이것이 바로 MZ ? 🧠</p>
          <p className="text">
            효창공원 인근에 위치한 ‘ 브레드읍읍 (@bread.oooo) ’ 은<br />
            기발한 아이디어를 선보이는 공간입니다. 영화 평론가 이동진 스타일의
            <br />
            빨간 안경을 쓴 콘치즈 곰자를 포함해...
          </p>
          <Link to="/" className="btn_default">
            Magazine +
          </Link>
          <img src={BannerCircle1} className="circle_right" />
        </div>
        <img src={BannerCircle2} className="circle_center" />
      </div>
    </article>
  );
}
