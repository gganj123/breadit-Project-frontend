/**
 * 회원 프로필 사진 업로드 컴포넌트 ( 동그라미 + 펜 아이콘 )
 */
import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';

type ProfileImageUploadProps = {
  src: string;
  onImageUpload?: (imageSrc: string) => void;
  onRemoveImage?: () => void;
  showEditIcon?: boolean;
};

const ProfileImageContainer = styled.div<{ src: string }>`
  margin: 40px auto;
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: url(${(props) => props.src}) center / cover no-repeat;
`;

const OptionsOverlay = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 5px;
  flex-direction: column;
`;

const IconContainer = styled.div`
  color: #fff;
  position: absolute;
  bottom: 5px;
  right: 3px;
  background: #575757;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const EditIcon = styled(FaPen)`
  font-size: 13px;
`;
const HiddenFileInput = styled.input`
  display: none;
`;

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  src,
  onImageUpload,
  onRemoveImage,
  showEditIcon = true,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 프로필 이미지 컨테이너의 onClick 이벤트가 발생하지 않도록 방지
    setShowOptions((prev) => !prev);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        onImageUpload?.(result);
        setShowOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    onRemoveImage?.();
    setShowOptions(false);
  };
  return (
    <ProfileImageContainer src={src}>
      {showEditIcon && (
        <IconContainer onClick={handleEditClick}>
          <EditIcon />
        </IconContainer>
      )}

      <OptionsOverlay show={showOptions}>
        <button onClick={() => fileInputRef.current?.click()}>
          프로필 업로드
        </button>
        <button onClick={handleRemoveImage}>프로필 삭제</button>
      </OptionsOverlay>

      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
      />
    </ProfileImageContainer>
  );
};

export default ProfileImageUpload;
