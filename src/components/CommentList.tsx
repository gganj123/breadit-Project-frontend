import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonDeafult from './atoms/buttons/ButtonDefault';
import Comment from './Comment';

const CommentsContStyle = styled.section`
  .comment_input {
    margin-top: 3rem;
  }

  .my_info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    height: 13rem;
    font-size: 1.6rem;
    padding: 1.6rem;
    border: solid 1px #ddd;
  }

  .buttons {
    margin-top: 2rem;
    justify-content: flex-end;
  }

  .comment_list {
    margin-top: 2rem;
    border-top: solid 1px #ddd;
  }
`;

const Comments = () => {
  const dummyData = [
    {
      nickname: '미친쿵야',
      date: '2024-04-09',
      content:
        '안녕하세요. 제가 여기 가봤는데 진짜 사장님 짱 친절하시고 카페 분위기도 넘 좋았어요! 다들 한 번 꼭 가보십쇼!',
    },
    {
      nickname: '반계쿵야',
      date: '2024-04-08',
      content: '난 반띵이지롱',
    },
  ];

  return (
    <CommentsContStyle>
      <div className="comment_input">
        <div className="my_info">
          <div
            className="img_box"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#eee',
            }}
          ></div>
          <span>
            <Link to="/login">로그인이 필요합니다.</Link>
          </span>
        </div>
        <textarea name="" placeholder="댓글을 입력하세요"></textarea>
        <div className="buttons">
          <ButtonDeafult
            text={'취소'}
            backgroundcolor={'#d9d9d9'}
            color={'#575757'}
          />
          <ButtonDeafult text={'등록'} />
        </div>
      </div>
      <div className="comment_list">
        {dummyData.map((data, index) => {
          return <Comment key={index} data={data} />;
        })}
      </div>
    </CommentsContStyle>
  );
};

export default Comments;
