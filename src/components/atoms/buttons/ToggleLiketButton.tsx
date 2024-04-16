import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from '/heart_icon.svg';
import likeIconActive from '/heart_icon_active.svg';
import {
  usePostMagazineLikeToggleApi,
  usePostPostLikeToggleApi,
  usePostRecipeLikeToggleApi,
} from '../../../hooks/useLikeApi';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

type LikeProps = {
  likeCount: number;
  postId?: string | '';
  likeState: boolean;
};

const ToggleLikeButton = ({ likeCount, postId, likeState }: LikeProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate: magazineLikeMutate } = usePostMagazineLikeToggleApi();
  const { mutate: postLikeMutate } = usePostPostLikeToggleApi();
  const { mutate: recipeLikeMutate } = usePostRecipeLikeToggleApi();

  const userId = localStorage.getItem('id');

  const heartToggle = () => {
    if (userId && postId) {
      if (location.pathname.includes('magazines')) {
        magazineLikeMutate({ userId, postId });
      } else if (location.pathname.includes('nearby')) {
        postLikeMutate({ userId, postId });
      } else if (location.pathname.includes('recipe')) {
        recipeLikeMutate({ userId, postId });
      }
    }
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
