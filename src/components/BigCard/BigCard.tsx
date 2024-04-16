import { Link } from 'react-router-dom';
import ToggleLikeButton from '../atoms/buttons/ToggleLiketButton';
import Noimg from '/no_img.svg';
import { BigCardStyled, ContentBoxStyled } from './BigCard.styles';

export type BigCardProps = {
  data: {
    _id: string;
    nickname: string;
    title: string;
    content: string;
    like_count: number;
    thumbnail: string;
  };
  userInfo?: boolean;
  admin?: boolean;
  handleCheckboxChange?: (id: string, checked: boolean) => void;
  isChecked?: boolean;
  go: string;
};

const BigCardList = ({
  data,
  userInfo,
  admin,
  handleCheckboxChange,
  isChecked,
  go,
}: BigCardProps) => {
  const { _id, nickname, title, content, like_count, thumbnail } = data;

  const noImgContent = () => {
    const imgFilter = content.replace(/<img.*?>/g, '');

    const HTML = { __html: imgFilter };
    return HTML;
  };

  return (
    <BigCardStyled>
      {admin && handleCheckboxChange && (
        <input
          type="checkbox"
          value={_id}
          onChange={(e) => handleCheckboxChange(_id, e.target.checked)}
          className="checkbox"
          checked={isChecked}
        />
      )}
      {userInfo && (
        <div className="user_info">
          <span
            style={{
              display: 'inline-block',
              width: 40,
              height: 40,
              backgroundColor: '#ddd',
              borderRadius: '50%',
            }}
          />
          <p>{nickname}</p>
        </div>
      )}
      <div className="img_box">
        <Link
          to={
            go == 'magazine'
              ? `/magazines/${_id}`
              : go == 'nearby'
                ? `/community/nearby/${_id}`
                : `/community/recipe/${_id}`
          }
        >
          <img src={thumbnail} alt={'매거진 이미지'} />
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
          eventBlock={false}
        />
      </ContentBoxStyled>
    </BigCardStyled>
  );
};

export default BigCardList;
