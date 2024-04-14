import { useState } from 'react';
import ButtonDeafult from '../atoms/buttons/ButtonDefault';
import { useEditCommentApi } from '../../hooks/useCommentApi';
import { CommentItemStyled } from './Comment.styles';

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
    <CommentItemStyled>
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
    </CommentItemStyled>
  );
};

export default Comment;
