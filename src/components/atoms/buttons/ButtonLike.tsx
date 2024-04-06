import { useState } from 'react';
import styled from 'styled-components';
import likeIcon from '/like-icon.svg';
import likeIconActive from '/like-icon-active.svg';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

const ButtonLike: React.FC<{ like: number }> = ({ like }) => {
  const [isHeart, useIsHeart] = useState<boolean>(false);
  const [isLike, useIsLike] = useState<number>(like);

  function heartToggle() {
    useIsHeart(!isHeart);
    useIsLike(isHeart ? isLike - 1 : isLike + 1);
  }
  return (
    <LikeButton onClick={heartToggle}>
      <img src={isHeart ? likeIconActive : likeIcon} />
      {isLike}
    </LikeButton>
  );
};

export default ButtonLike;
