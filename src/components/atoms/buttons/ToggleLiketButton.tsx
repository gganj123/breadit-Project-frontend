import { useState } from 'react';
import styled from 'styled-components';
import likeIcon from '/heart_icon.svg';
import likeIconActive from '/heart_icon_active.svg';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

const ToggleLikeButton = ({ like }: { like: number }) => {
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<number>(like);

  function heartToggle() {
    setIsHeart(!isHeart);
    setIsLike(isHeart ? isLike - 1 : isLike + 1);
  }
  return (
    <LikeButton onClick={heartToggle}>
      <img src={isHeart ? likeIconActive : likeIcon} />
      {isLike}
    </LikeButton>
  );
};

export default ToggleLikeButton;
