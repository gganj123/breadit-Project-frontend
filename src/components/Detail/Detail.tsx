import { useLocation, useNavigate } from 'react-router-dom';
import ButtonDefault from '../atoms/buttons/ButtonDefault';
import {
  DetailTopStyled,
  UserStyled,
  DetailContentStyled,
} from './Detail.styles';
import ToggleLikeButton from '../atoms/buttons/ToggleLiketButton';
import Comments from '../CommentList/CommentList';

type DetailProps = {
  data: {
    _id: string;
    nickname: string;
    profile: string;
    createdAt: string;
    title: string;
    content: string;
    like_count: number;
    beLike: boolean;
  };
  deleteEvent: (id: string) => void;
};

const DetailContent = ({ data, deleteEvent }: DetailProps) => {
  const {
    _id,
    nickname,
    profile,
    createdAt,
    title,
    content,
    like_count,
    beLike,
  } = data;
  const navigate = useNavigate();
  const location = useLocation();

  const locationArray = location.pathname.split('/');
  const locationName = locationArray[1];
  const postId = locationArray[locationArray.length - 1];

  const clickDeleteEvent = (id: string) => {
    if (confirm('삭제하시겠습니까?')) {
      deleteEvent(id);
      navigate(-1);
    }
  };

  const tagContent = () => {
    const HTML = { __html: content };
    return HTML;
  };

  return (
    <>
      <DetailTopStyled>
        <UserStyled>
          <div className="user_img">
            <img src={profile} />
          </div>
          <div className="user_info">
            <h3 className="detail_title">{title}</h3>
            <p>
              <span className="username">{nickname}</span>
              <span className="date">{createdAt}</span>
            </p>
          </div>
        </UserStyled>
        <div className="buttons">
          <ButtonDefault
            text={'삭제'}
            backgroundcolor={'#d9d9d9'}
            color={'#575757'}
            clickevent={() => clickDeleteEvent(_id)}
          />
          <ButtonDefault text={'수정'} />
        </div>
      </DetailTopStyled>
      <DetailContentStyled dangerouslySetInnerHTML={tagContent()} />
      <ToggleLikeButton
        location={locationName}
        postId={postId}
        likeCount={like_count}
        likeState={beLike}
      />
      <Comments postId={_id} />
    </>
  );
};

export default DetailContent;
