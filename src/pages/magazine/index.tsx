import { Link } from 'react-router-dom';
import BigCardList from '../../components/BigCardList';

import "./magazine_main.css"

const Magazine: React.FC = () => {
  return (
    <div className="main_cont magazine">
      <div className="main_title flex_default">
        <h3 className="main_title_text">
          놓치면 아쉬울, 새로운 베이커리 소식 🍰
        </h3>
        <Link to="/" className="btn_default">
          Post +
        </Link>
      </div>
      <ul className="magazine_card_list">
        <BigCardList />
      </ul>
    </div>
  );
};

export default Magazine;
