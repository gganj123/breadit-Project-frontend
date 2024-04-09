import ButtonDefault from './atoms/buttons/ButtonDefault';
import styled from 'styled-components';
import ToggleLikeButton from './atoms/buttons/ToggleLiketButton';
import Comments from './CommentList';

const DetailTopStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  .user_info {
    gap: 2rem;
  }

  .user_img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background: #eee;
  }

  .user_info p {
    font-size: 1.8rem;
  }

  .date {
    display: inline-block;
    padding-left: 1.4rem;
    margin-left: 1.4rem;
    color: #888;
    border-left: solid 1px #b6b6b6;
  }
`;

const DetailContentStyle = styled.div`
  margin-top: 3rem;
  min-height: 24vh;
  font-size: 1.8rem;
  line-height: 1.6;
`;

type DetailProps = {
  data: {
    nickname: string;
    profile: string;
    createdAt: string;
    title: string;
    content: string;
  };
};

const DetailContent = ({ data }: DetailProps) => {
  const { nickname, profile, createdAt, title, content } = data;

  const splitDate = createdAt.slice(0, 10);

  function tagContent() {
    const HTML = { __html: content };
    return HTML;
  }

  return (
    <>
      <DetailTopStyle>
        <UserStyle>
          <div className="user_img">
            <img src={profile} />
          </div>
          <div className="user_info">
            <h3 className="detail_title">{title}</h3>
            <p>
              <span className="username">{nickname}</span>
              <span className="date">{splitDate}</span>
            </p>
          </div>
        </UserStyle>
        <ButtonDefault text={'Edit'} />
      </DetailTopStyle>
      <DetailContentStyle dangerouslySetInnerHTML={tagContent()} />
      <ToggleLikeButton like={0} />
      <Comments />
    </>
  );
};

export default DetailContent;
