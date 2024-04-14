import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from '/heart_icon.svg';
import likeIconActive from '/heart_icon_active.svg';
import { usePostMagazineLikeToggleApi } from '../../../hooks/useLikeApi';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

type likeProps = {
  likeCount: number;
  location?: string | '';
  postId?: string | '';
  likeState: boolean;
};

const ToggleLikeButton = ({
  likeCount,
  location,
  postId,
  likeState,
}: likeProps) => {
  const navigate = useNavigate();
  const { mutate } = usePostMagazineLikeToggleApi();

  const userId = localStorage.getItem('id');

  const heartToggle = () => {
    userId && postId && mutate({ userId, postId });
  };

  const nonMember = () => {
    alert('로그인 후 이용해주세요');
    navigate('/login');
  };

  return (
    <LikeButton onClick={userId ? heartToggle : nonMember}>
      <img src={likeState ? likeIconActive : likeIcon} />
      {likeCount}
    </LikeButton>
  );
};

export default ToggleLikeButton;
