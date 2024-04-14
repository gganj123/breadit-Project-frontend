import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonDeafult from './atoms/buttons/ButtonDefault';
import Comment from './Comment';
import {
  useCommentByPostIdApi,
  useDeleteCommentByIdApi,
  useCreateCommentApi,
} from '../hooks/useCommentApi';

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

const Comments = ({ postId }: { postId: string }) => {
  const { data: commentList } = useCommentByPostIdApi(postId || '');
  const { mutate: deleteMutate } = useDeleteCommentByIdApi();
  const { mutate: createMutate } = useCreateCommentApi();

  const [commentTextArea, setCommentTextArea] = useState('');

  function resetComment() {
    setCommentTextArea(''); // 취소버튼 textArea 초기화
  }

  const deleteCommentId = (id: string) => {
    deleteMutate(id);
  };

  function createComment() {
    const commentData = {
      nickname: '히히sdsfsdf힛',
      profile: 'https://example.com/profile',
      user_id: '661197252555dd267724ea61',
      post_id: postId,
      content: commentTextArea,
    };

    createMutate(commentData);
  }

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
        <textarea
          name="comment"
          placeholder="댓글을 입력하세요"
          onChange={(e) => setCommentTextArea(e.target.value)}
          value={commentTextArea}
        />

        <div className="buttons">
          <ButtonDeafult
            text={'취소'}
            backgroundcolor={'#d9d9d9'}
            color={'#575757'}
            clickevent={resetComment}
          />
          <ButtonDeafult text={'등록'} clickevent={createComment} />
        </div>
      </div>
      <div className="comment_list">
        {commentList &&
          commentList.map((comment) => {
            return (
              <Comment
                key={comment._id}
                data={comment}
                deleteEvent={deleteCommentId}
              />
            );
          })}
      </div>
    </CommentsContStyle>
  );
};

export default Comments;
