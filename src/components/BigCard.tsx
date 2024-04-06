import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import ToggleLikeButton from './atoms/buttons/ToggleLikeButton';
import ReviewImg from '/review_img2.svg';

const BigCard = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 2rem;
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

const BigCardList: React.FC<BigCardProps> = ({ data }) => {
  const location = useLocation();

  const { _id, title, content } = data;

  function contentHTML() {
    let HTML = { __html: content };

    return HTML;
  }

  return (
    <BigCard>
      <div className="img_box">
        <Link
          to={
            location.pathname.includes('magazine')
              ? `/magazine/${_id}`
              : `/community/nearby/${_id}`
          }
        >
          <img src={ReviewImg} />
        </Link>
      </div>
      <ContentBox>
        <h5>
          <Link
            to={
              location.pathname.includes('magazine')
                ? `/magazine/${_id}`
                : `/community/nearby/${_id}`
            }
          >
            {title}
          </Link>
        </h5>
        <div className="text" dangerouslySetInnerHTML={contentHTML()} />
        <ToggleLikeButton like={0} />
      </ContentBox>
    </BigCard>
  );
};

export default BigCardList;
