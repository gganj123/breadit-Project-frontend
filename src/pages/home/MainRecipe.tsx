import { Link } from "react-router-dom";

export default function MainRecipe() {
  return (
    <section className="container recipe_cont">
      <div className="main_title flex_default">
        <h3 className="font_oleo eng_title">Recipe</h3>
        <p className="main_title_text">🍳 빵잘알들의 레시피</p>
      </div>
      <div className="recipe">
        <div className="img_box"></div>
        <div className="content_box">
          <div className="content">
            <div className="user_info">
              <span
                style={{
                  display: "inline-block",
                  width: 70,
                  height: 70,
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                }}
              ></span>
              <p className="nickname">귀여운게 제일 좋아</p>
            </div>
            <h5>( 제목 ) 온세상 강쥐 쿠키를 구워봤어요~~!</h5>
            <p>
              강아지 쿠키 만드는 방법 공유드립니다!! 우선 밀가루와 뭐쩌구가
              <br />
              필요합니다. 그리고 최고의 손재주를 가지면 되는데요!
              <br />
              <br />
              ** 재료 공유 ( 정확하게 계량해주세요. )
              <br />
              금손 100g ...
            </p>
            <Link to="/" className="go_recipe" />
          </div>
        </div>
      </div>
    </section>
  );
}
