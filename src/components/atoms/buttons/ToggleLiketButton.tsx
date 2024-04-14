import { useEffect, useState } from 'react';
import styled from 'styled-components';
import likeIcon from '/heart_icon.svg';
import likeIconActive from '/heart_icon_active.svg';
import { useMagazineLikeStateApi } from '../../../hooks/useLikeApi';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

type likeProps = {
  like: number;
  // location?: string | '';
  postId?: string | '';
  likeState: boolean;
};

const ToggleLikeButton = ({ like, postId, likeState }: likeProps) => {
  const [isHeart, setIsHeart] = useState(likeState);
  const [likeCountToggle, setLikeCountToggle] = useState(like);

  function heartToggle() {
    setIsHeart(!isHeart);
    setLikeCountToggle(isHeart ? likeCountToggle - 1 : likeCountToggle + 1);
  }

  return (
    <LikeButton onClick={heartToggle}>
      <img src={isHeart ? likeIconActive : likeIcon} />
      {likeCountToggle}
    </LikeButton>
  );
};

export default ToggleLikeButton;
