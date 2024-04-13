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
};

const ToggleLikeButton = ({ like, postId }: likeProps) => {
  const [isHeart, setIsHeart] = useState(false);
  const [isLike, setIsLike] = useState<number>(like);

  const { mutate: magazineMutate } = useMagazineLikeStateApi();

  useEffect(() => {
    if (postId) {
      magazineMutate({
        targetId: postId,
        userId: '609c788df383f331a4a627c3',
      });
    }
  }, [postId]);

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
