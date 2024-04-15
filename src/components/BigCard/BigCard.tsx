import { useLocation, Link } from 'react-router-dom';
import ToggleLikeButton from '../atoms/buttons/ToggleLiketButton';
import Noimg from '/no_img.svg';
import { BigCardStyled, ContentBoxStyled } from './BigCard.styles';

export type BigCardProps = {
  data: { _id: string; title: string; content: string; like_count: number };
};

const BigCardList = ({ data }: BigCardProps) => {
  const location = useLocation();

  const { _id, title, content, like_count } = data;

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
        <ToggleLikeButton
          likeCount={like_count ? like_count : 0}
          likeState={false}
        />
      </ContentBoxStyled>
    </BigCardStyled>
  );
};

export default BigCardList;
