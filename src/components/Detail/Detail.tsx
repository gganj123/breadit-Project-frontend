import { useLocation, useNavigate } from 'react-router-dom';
import ButtonDefault from '../atoms/buttons/ButtonDefault';
import {
  DetailTopStyled,
  UserStyled,
  DetailContentStyled,
} from './Detail.styles';
import ToggleLikeButton from '../atoms/buttons/ToggleLiketButton';
import Comments from '../CommentList/CommentList';
import NoProfile from '/no_profile.svg';
import { sliceDate } from '../../utils';

type DetailProps = {
  data: {
    _id: string;
    user_id: string;
    nickname: string;
    profile: string;
    createdAt: string;
    title: string;
    content: string;
    like_count: number;
    beLike: boolean;
    images: string[]; // 이미지 데이터 추가
  };
  deleteEvent: (id: string) => void;
  editCategory: string;
};

const DetailContent = ({ data, deleteEvent, editCategory }: DetailProps) => {
  const {
    _id,
    nickname,
    profile,
    createdAt,
    title,
    content,
    like_count,
    beLike,
    images, // 이미지 데이터
    user_id,
  } = data;

  const navigate = useNavigate();

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

  const location = useLocation();

  const locationRoute = location.pathname.split('/')[1];

  const goToEditPage = () => {
    const dataToSend = {
      id: _id,
      user_id: user_id,
      nickname: nickname,
      profile: profile,
      createdAt: createdAt,
      title: title,
      content: content,
      images: images,
    };
    navigate(`/${locationRoute}/edit`, {
      state: { data: dataToSend, editCategory },
    }); // 수정 페이지로 이동하면서 데이터 전달
  };

  return (
    <>
      <DetailTopStyled>
        <UserStyled>
          <div className="user_img">
            <img src={NoProfile} />
          </div>
          <div className="user_info">
            <h3 className="detail_title">{title}</h3>
            <p>
              <span className="username">{nickname}</span>
              <span className="date">{sliceDate(createdAt)}</span>
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
          <ButtonDefault text={'수정'} clickevent={goToEditPage} />
        </div>
      </DetailTopStyled>
      <DetailContentStyled dangerouslySetInnerHTML={tagContent()} />
      <ToggleLikeButton
        postId={_id}
        likeCount={like_count}
        likeState={beLike}
      />
      <Comments postId={_id} />
    </>
  );
};

export default DetailContent;
