/**
 * 회원 프로필 사진 업로드 컴포넌트 ( 동그라미 + 펜 아이콘 )
 * 프로필 사진 업로드, 삭제 기능
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
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: url(${(props) => props.src}) center / cover no-repeat;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const OptionsOverlay = styled.div`
  display: none;
  position: absolute;
  bottom: -45px;
  right: -130px;
  border-radius: 4px;
  border: 1px solid #575757;
  padding: 5px;
  flex-direction: column;
  background: #fff;
`;

const OptionButton = styled.button`
  font-size: 14px;
  color: #575757;
  background: #fff;
  padding: 2px 2px;
  cursor: pointer;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    background-color: #f2f2f2;
  }
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
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <ProfileImageWrapper>
      <ProfileImageContainer src={src}>
        {showEditIcon && (
          <IconContainer onClick={handleEditClick}>
            <EditIcon />
          </IconContainer>
        )}

        <HiddenFileInput
          ref={fileInputRef}
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
        />
      </ProfileImageContainer>
      <OptionsOverlay style={{ display: showOptions ? 'flex' : 'none' }}>
        <OptionButton onClick={() => fileInputRef.current?.click()}>
          Upload a photo ...
        </OptionButton>
        <OptionButton onClick={handleRemoveImage}>Remove photo</OptionButton>
      </OptionsOverlay>
    </ProfileImageWrapper>
  );
};

export default ProfileImageUpload;
