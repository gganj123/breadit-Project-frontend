import styled from 'styled-components';
import ButtonDeafult from './atoms/buttons/ButtonDefault';

const CommentItemStyle = styled.div`
  padding: 2.4rem 0;
  border-bottom: solid 1px #ddd;

  .user_info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.4rem;
  }

  .user_name {
    display: flex;
  }

  .user_name .nickname {
    font-size: 1.6rem;
  }

  .user_name .date {
    color: #888;
    padding-left: 1.4rem;
    margin-left: 1.4rem;
    border-left: solid 1px #b6b6b6;
  }

  .comment {
    display: flex;
    justify-content: space-between;
  }

  .comment_content {
    max-width: 60rem;
    line-height: 1.4;
    word-break: keep-all;
  }
`;

type CommentProps = {
  data: {
    nickname: string;
    date: string;
    content: string;
  };
};

const Comment = ({ data }: CommentProps) => {
  const { nickname, date, content } = data;

  return (
    <CommentItemStyle>
      <div className="user_info">
        <div
          className="img_box"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#eee',
          }}
        ></div>
        <div className="user_name">
          <p className="nickname">{nickname}</p>
          <span className="date">{date}</span>
        </div>
      </div>
      <div className="comment">
        <p className="comment_content">{content}</p>
        <ButtonDeafult text={'삭제'} />
      </div>
    </CommentItemStyle>
  );
};

export default Comment;
