import { Link } from 'react-router-dom';
import Figma from '/icons/figma_icon.svg';
import Gitlab from '/icons/gitlab_icon.svg';
import Notion from '/icons/notion_icon.svg';

const Footer = () => {
  function preparingAlert() {
    alert('준비중 입니다.');
  }

  return (
    <footer className="main_cont">
      <div className="footer_info">
        <h3 className="font_oleo footer_logo">Breadit</h3>
        <h5>Team 03</h5>
        <p>김도현, 김연서, 김은지, 라수빈, 정영준, 한지은 </p>
        <p>Elice, Software track 08</p>
        <p>서울 성동구 아차산로17길 48 성수낙낙 2층 엘리스랩 성수점</p>
        <p>copyright.2024 Elice Lab All rights reserved.</p>
      </div>
      <ul className="flex_default footer_icon">
        <li onClick={preparingAlert}>
          <Link to="/">
            <img src={Figma} />
          </Link>
        </li>
        <li onClick={preparingAlert}>
          <Link to="/">
            <img src={Gitlab} />
          </Link>
        </li>
        <li onClick={preparingAlert}>
          <Link to="/">
            <img src={Notion} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
