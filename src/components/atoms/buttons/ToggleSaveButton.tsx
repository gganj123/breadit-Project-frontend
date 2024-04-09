import { useState } from 'react';
import styled from 'styled-components';
import saveIcon from '/save_icon.svg';
import saveIconActive from '/save_icon_active.svg';

const LikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  font-size: 2rem;
  color: #aeaeae;
`;

const ToggleSaveButton = () => {
  const [isSave, useIsSave] = useState<boolean>(false);

  function saveToggle() {
    useIsSave(!isSave);
  }

  return (
    <LikeButton onClick={saveToggle}>
      <img src={isSave ? saveIconActive : saveIcon} />
    </LikeButton>
  );
};

export default ToggleSaveButton;
