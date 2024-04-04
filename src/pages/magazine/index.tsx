import { Link } from 'react-router-dom';
import BigCardList from '../../components/BigCardList';
import MagazineBanner from './MagazineBanner'

import './magazine_main.css';

const Magazine: React.FC = () => {
  
  return (
    <>
      <MagazineBanner />
      <section className="main_cont magazine">
        <div className="main_title flex_default">
          <h3 className="main_title_text">
            놓치면 아쉬울, 새로운 베이커리 소식 🍰
          </h3>
          <Link to="/" className="btn_default">
            Post +
          </Link>
        </div>

        <BigCardList useSlider={false} />
      </section>
    </>
  );
};

export default Magazine;
