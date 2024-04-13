import { useLocation, Link } from 'react-router-dom';
import ToggleLikeButton from '../atoms/buttons/ToggleLiketButton.tsx';
import Noimg from '/no_img.svg';
import { BigCardStyled, ContentBoxStyled } from './BigCard.styles.ts';

type BigCardProps = {
  data: { _id: string; title: string; content: string };
};

const BigCardList = ({ data }: BigCardProps) => {
  const location = useLocation();

  const { _id, title, content } = data;

  function thumbnail() {
    const img = content.match(/<img.*?>/g)?.[0];
    const thumbnailImg = img ? img : `<img src=${Noimg} />`;
    return { __html: thumbnailImg };
  }

  function noImgContent() {
    const imgFilter = content.replace(/<img.*?>/g, '');

    const HTML = { __html: imgFilter };
    return HTML;
  }

  return (
    <BigCardStyled>
      {location.pathname.includes('admin') && (
        <input type="checkbox" value={_id} className="checkbox" />
      )}
      <div className="img_box">
        <Link
          to={
            location.pathname.includes('magazine')
              ? `/magazines/${_id}`
              : `/community/nearby/${_id}`
          }
        >
          <div dangerouslySetInnerHTML={thumbnail()} />
        </Link>
      </div>
      <ContentBoxStyled>
        <h5>
          <Link
            to={
              location.pathname.includes('magazine')
                ? `/magazines/${_id}`
                : `/community/nearby/${_id}`
            }
          >
            {title}
          </Link>
        </h5>
        <div className="text" dangerouslySetInnerHTML={noImgContent()} />
        <ToggleLikeButton like={0} />
      </ContentBoxStyled>
    </BigCardStyled>
  );
};

export default BigCardList;
