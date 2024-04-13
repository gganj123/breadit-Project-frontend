import { useState } from 'react';
import styled from 'styled-components';
import ButtonDeafult from './atoms/buttons/ButtonDefault';
import { useEditCommentApi } from '../hooks/useCommentApi';

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

  .comment textarea {
    max-width: 80rem;
  }

  .comment_content {
    max-width: 60rem;
    line-height: 1.4;
    word-break: keep-all;
  }
`;

type CommentProps = {
  data: {
    _id: string;
    nickname: string;
    profile: string;
    user_id: string;
    post_id: string;
    content: string;
    can_post: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
  deleteEvent: (id: string) => void;
};

const Comment = ({ data, deleteEvent }: CommentProps) => {
  const { _id, nickname, profile, content, createdAt } = data;
  const [isEdit, setIsEdit] = useState(false);
  const [commentText, setCommentText] = useState(content);
  const { mutate } = useEditCommentApi();

  function handleDeleteEventClick(deleteId: string) {
    // handleEvent, handleSubjectEvent
    if (confirm('삭제하시겠습니까?')) {
      deleteEvent(deleteId);
    }
  }

  function saveEditComment() {
    mutate({ targetId: _id, editData: commentText });
    setIsEdit(!isEdit);
  }

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
          <span className="date">{createdAt}</span>
        </div>
      </div>
      <div className="comment">
        {isEdit ? (
          <>
            <textarea
              value={commentText}
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
            />
            <div className="buttons">
              <ButtonDeafult text={'저장'} clickevent={saveEditComment} />
              <ButtonDeafult
                text={'취소'}
                backgroundcolor={'#d9d9d9'}
                color={'#575757'}
                clickevent={() => {
                  setIsEdit(!isEdit);
                  setCommentText(content);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <p className="comment_content">{commentText}</p>
            <div className="buttons">
              <ButtonDeafult
                text={'수정'}
                backgroundcolor={'#d9d9d9'}
                color={'#575757'}
                clickevent={() => {
                  setIsEdit(!isEdit);
                }}
              />
              <ButtonDeafult
                text={'삭제'}
                clickevent={() => handleDeleteEventClick(_id)}
              />
            </div>
          </>
        )}
      </div>
    </CommentItemStyle>
  );
};

export default Comment;
