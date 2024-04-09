import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import ToggleLikeButton from './atoms/buttons/ToggleLiketButton';
import Noimg from '/no_img.svg';

const BigCard = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 2rem;
  max-width: 53.6rem;
  position: relative;

  .checkbox {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

const ContentBox = styled.div`
  padding: 3rem;
  background-color: #fff;

  h5 {
    font-size: 2.2rem;
    margin-bottom: 1.4rem;
  }

  .text {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1.5;
    word-break: keep-all;
  }

  .text * {
    line-height: 1.5;
  }
`;

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
    <BigCard>
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
      <ContentBox>
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
      </ContentBox>
    </BigCard>
  );
};

export default BigCardList;
